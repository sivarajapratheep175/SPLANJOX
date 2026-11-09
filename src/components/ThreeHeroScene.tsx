import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { 
  Globe, 
  Cpu, 
  Layers, 
  RotateCw, 
  Eye, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  Maximize2
} from 'lucide-react';

export type SceneMode = 'earth' | 'core' | 'monolith';

interface ThreeHeroSceneProps {
  onExploreClick?: () => void;
}

export const ThreeHeroScene: React.FC<ThreeHeroSceneProps> = ({ onExploreClick }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeMode, setActiveMode] = useState<SceneMode>('earth');
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const [wireframeGlow, setWireframeGlow] = useState<boolean>(true);
  const [isDockCollapsed, setIsDockCollapsed] = useState<boolean>(false);
  const [cameraView, setCameraView] = useState<'front' | 'orbit' | 'top'>('front');

  // References to keep animation loop & controls isolated from React re-renders
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const modeGroupsRef = useRef<{
    earth: THREE.Group;
    core: THREE.Group;
    monolith: THREE.Group;
  } | null>(null);
  const activeModeRef = useRef<SceneMode>('earth');
  const isRotatingRef = useRef<boolean>(true);
  const wireframeGlowRef = useRef<boolean>(true);

  // Sync ref values for access in requestAnimationFrame
  useEffect(() => {
    activeModeRef.current = activeMode;
  }, [activeMode]);

  useEffect(() => {
    isRotatingRef.current = isRotating;
  }, [isRotating]);

  useEffect(() => {
    wireframeGlowRef.current = wireframeGlow;
    if (modeGroupsRef.current) {
      const { earth, core, monolith } = modeGroupsRef.current;
      earth.traverse((obj) => {
        if ((obj as THREE.Mesh).isMesh) {
          const mesh = obj as THREE.Mesh;
          if (mesh.name === 'wireframe') {
            mesh.visible = wireframeGlow;
          }
        }
      });
      core.traverse((obj) => {
        if ((obj as THREE.Mesh).isMesh) {
          const mesh = obj as THREE.Mesh;
          if (mesh.name === 'wireframe') {
            mesh.visible = wireframeGlow;
          }
        }
      });
      monolith.traverse((obj) => {
        if ((obj as THREE.Mesh).isMesh) {
          const mesh = obj as THREE.Mesh;
          if (mesh.name === 'wireframe') {
            mesh.visible = wireframeGlow;
          }
        }
      });
    }
  }, [wireframeGlow]);

  // Handle camera view presets
  const applyCameraView = (view: 'front' | 'orbit' | 'top') => {
    setCameraView(view);
    if (!cameraRef.current || !controlsRef.current) return;
    const camera = cameraRef.current;
    const controls = controlsRef.current;

    if (view === 'front') {
      camera.position.set(0, 0, 7.5);
    } else if (view === 'orbit') {
      camera.position.set(5.5, 3.8, 5.5);
    } else if (view === 'top') {
      camera.position.set(0, 7.8, 2.2);
    }
    controls.target.set(0, 0, 0);
    controls.update();
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect software WebGL to ensure smooth rendering
    const isSoftwareGl = (() => {
      try {
        const gl = document.createElement('canvas').getContext('webgl2');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return false;
      }
    })();

    // 1. Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(0x070b14, 0.045);

    // 2. Camera setup
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.2, 7.5);
    cameraRef.current = camera;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
      alpha: true,
    });
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // 4. OrbitControls with damping
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enablePan = false;
    controls.minDistance = 4.2;
    controls.maxDistance = 14;
    controls.maxPolarAngle = Math.PI * 0.85;
    controls.minPolarAngle = Math.PI * 0.15;
    controlsRef.current = controls;

    // 5. Procedural RoomEnvironment for PBR reflections
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    // 6. Lighting Rig: Warm key directional + Cool sky HemisphereLight
    const keyLight = new THREE.DirectionalLight(0x7dd3fc, 2.8);
    keyLight.position.set(5, 7, 6);
    keyLight.castShadow = !isSoftwareGl;
    keyLight.shadow.bias = -0.0005;
    keyLight.shadow.normalBias = 0.02;
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x2563eb, 3.2);
    rimLight.position.set(-6, -3, -5);
    scene.add(rimLight);

    const hemiLight = new THREE.HemisphereLight(0x38bdf8, 0x070b14, 1.4);
    scene.add(hemiLight);

    // 7. Procedural Canvas Textures (Zero external 404 dependencies)
    // Procedural Earth landmass & city lights texture
    const createProceduralEarthTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 512;
      const ctx = canvas.getContext('2d')!;

      // Deep ocean gradient
      const oceanGrad = ctx.createLinearGradient(0, 0, 0, 512);
      oceanGrad.addColorStop(0, '#040d21');
      oceanGrad.addColorStop(0.5, '#06163a');
      oceanGrad.addColorStop(1, '#040d21');
      ctx.fillStyle = oceanGrad;
      ctx.fillRect(0, 0, 1024, 512);

      // Subtle longitude & latitude cyber grid lines
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.15)';
      ctx.lineWidth = 1;
      for (let x = 0; x <= 1024; x += 64) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, 512);
        ctx.stroke();
      }
      for (let y = 0; y <= 512; y += 48) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(1024, y);
        ctx.stroke();
      }

      // Procedural continents representation
      ctx.fillStyle = '#0f2952';
      const drawContinentBlob = (cx: number, cy: number, rx: number, ry: number, count: number) => {
        ctx.beginPath();
        for (let i = 0; i < count; i++) {
          const angle = (i / count) * Math.PI * 2;
          const dist = 0.7 + 0.3 * Math.sin(angle * 3.5 + cx);
          const x = cx + Math.cos(angle) * rx * dist;
          const y = cy + Math.sin(angle) * ry * dist;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
      };

      // Eurasia & Africa
      drawContinentBlob(530, 210, 140, 90, 16);
      drawContinentBlob(500, 310, 80, 100, 14);
      // Americas
      drawContinentBlob(260, 200, 90, 80, 14);
      drawContinentBlob(320, 340, 60, 90, 12);
      // Asia East & Australia
      drawContinentBlob(730, 230, 100, 70, 15);
      drawContinentBlob(770, 370, 70, 50, 12);

      // Glowing urban clusters and Sri Lanka tech hub pinpoint
      ctx.fillStyle = '#38bdf8';
      for (let i = 0; i < 280; i++) {
        const x = 150 + Math.random() * 750;
        const y = 140 + Math.random() * 240;
        const size = Math.random() * 2.2 + 0.5;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Highlight Sri Lanka coords (~approx lon 80E, lat 7N)
      // On 1024x512: x = (80 + 180)/360 * 1024 ≈ 739, y = (90 - 7)/180 * 512 ≈ 236
      const slX = 735;
      const slY = 238;
      ctx.fillStyle = '#00D2FE';
      ctx.shadowColor = '#00D2FE';
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.arc(slX, slY, 4.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(slX, slY, 8.5, 0, Math.PI * 2);
      ctx.stroke();

      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      return texture;
    };

    // Procedural Monolith Cyber-circuit Texture
    const createProceduralMonolithTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext('2d')!;

      ctx.fillStyle = '#090d16';
      ctx.fillRect(0, 0, 512, 512);

      ctx.strokeStyle = '#2563eb';
      ctx.lineWidth = 2;
      for (let i = 0; i < 24; i++) {
        const y = i * 22;
        ctx.beginPath();
        ctx.moveTo(30, y);
        ctx.lineTo(160, y);
        ctx.lineTo(210, y + 15);
        ctx.lineTo(480, y + 15);
        ctx.stroke();
      }

      ctx.fillStyle = '#00d2fe';
      for (let i = 0; i < 30; i++) {
        const x = Math.random() * 450 + 30;
        const y = Math.random() * 480 + 15;
        ctx.fillRect(x, y, 4, 4);
      }

      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      return texture;
    };

    const earthTexture = createProceduralEarthTexture();
    const monolithTexture = createProceduralMonolithTexture();

    // 8. Composite 3-12 Part Procedural Models for all 3 modes
    const earthGroup = new THREE.Group();
    const coreGroup = new THREE.Group();
    const monolithGroup = new THREE.Group();

    // ----------------------------------------------------
    // MODEL 1: Global Innovation Sphere (Earth & Orbital Tech Grid)
    // ----------------------------------------------------
    // Part 1: Primary Planet Sphere
    const earthGeo = new THREE.SphereGeometry(2.0, 64, 64);
    const earthMat = new THREE.MeshStandardMaterial({
      map: earthTexture,
      roughness: 0.45,
      metalness: 0.25,
      bumpScale: 0.05,
    });
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    earthMesh.castShadow = true;
    earthMesh.receiveShadow = true;
    earthGroup.add(earthMesh);

    // Part 2: Atmosphere glow shell
    const atmoGeo = new THREE.SphereGeometry(2.14, 48, 48);
    const atmoMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.32,
      roughness: 0.1,
      metalness: 0.8,
      transmission: 0.6,
      ior: 1.2,
      depthWrite: false,
    });
    const atmoMesh = new THREE.Mesh(atmoGeo, atmoMat);
    earthGroup.add(atmoMesh);

    // Part 3: Equatorial Quantum Orbital Ring (Torus)
    const ring1Geo = new THREE.TorusGeometry(2.85, 0.035, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x00d2fe,
      roughness: 0.2,
      metalness: 0.9,
      emissive: 0x0055aa,
      emissiveIntensity: 0.6,
    });
    const ring1Mesh = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1Mesh.rotation.x = Math.PI * 0.45;
    ring1Mesh.rotation.y = Math.PI * 0.1;
    earthGroup.add(ring1Mesh);

    // Part 4: Tilted Secondary Orbital Ring
    const ring2Geo = new THREE.TorusGeometry(3.3, 0.02, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x2563eb,
      roughness: 0.25,
      metalness: 0.85,
      emissive: 0x1d4ed8,
      emissiveIntensity: 0.4,
    });
    const ring2Mesh = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2Mesh.rotation.x = -Math.PI * 0.3;
    ring2Mesh.rotation.z = Math.PI * 0.25;
    earthGroup.add(ring2Mesh);

    // Part 5: Wireframe Lattice Shell
    const wireGeo = new THREE.IcosahedronGeometry(2.32, 2);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    wireMesh.name = 'wireframe';
    earthGroup.add(wireMesh);

    // Part 6: Orbiting Tech Satellites / Nodes (InstancedMesh)
    const satCount = 28;
    const satGeo = new THREE.BoxGeometry(0.12, 0.12, 0.12);
    const satMat = new THREE.MeshStandardMaterial({
      color: 0x67e8f9,
      roughness: 0.2,
      metalness: 0.95,
      emissive: 0x0284c7,
      emissiveIntensity: 0.8,
    });
    const satInstanced = new THREE.InstancedMesh(satGeo, satMat, satCount);
    satInstanced.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    const dummy = new THREE.Object3D();
    const satOrbits: { radius: number; speed: number; angle: number; tilt: number }[] = [];

    for (let i = 0; i < satCount; i++) {
      const radius = 2.45 + Math.random() * 1.1;
      const speed = 0.4 + Math.random() * 0.6;
      const angle = Math.random() * Math.PI * 2;
      const tilt = (Math.random() - 0.5) * Math.PI * 0.8;
      satOrbits.push({ radius, speed, angle, tilt });

      dummy.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle) * Math.sin(tilt) * radius,
        Math.sin(angle) * Math.cos(tilt) * radius
      );
      dummy.scale.setScalar(0.7 + Math.random() * 0.6);
      dummy.updateMatrix();
      satInstanced.setMatrixAt(i, dummy.matrix);
    }
    satInstanced.computeBoundingSphere();
    earthGroup.add(satInstanced);

    // Contact ground shadow for Earth scene
    const shadowGeo = new THREE.PlaneGeometry(6, 6);
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 128;
    shadowCanvas.height = 128;
    const sCtx = shadowCanvas.getContext('2d')!;
    const sGrad = sCtx.createRadialGradient(64, 64, 0, 64, 64, 64);
    sGrad.addColorStop(0, 'rgba(0,0,0,0.55)');
    sGrad.addColorStop(0.5, 'rgba(2, 6, 23, 0.3)');
    sGrad.addColorStop(1, 'rgba(0,0,0,0)');
    sCtx.fillStyle = sGrad;
    sCtx.fillRect(0, 0, 128, 128);
    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -2.6;
    earthGroup.add(shadowMesh);

    scene.add(earthGroup);

    // ----------------------------------------------------
    // MODEL 2: Quantum Innovation Core (SPLANJOX Tech Engine)
    // ----------------------------------------------------
    // Part 1: Central beveled crystalline core
    const coreGeo = new THREE.OctahedronGeometry(1.4, 0);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x00d2fe,
      roughness: 0.15,
      metalness: 0.85,
      transmission: 0.45,
      ior: 1.5,
      thickness: 1.2,
      emissive: 0x0284c7,
      emissiveIntensity: 0.5,
    });
    const coreInner = new THREE.Mesh(coreGeo, coreMat);
    coreGroup.add(coreInner);

    // Part 2: Outer gimbal titanium cage ring
    const gimbal1Geo = new THREE.TorusGeometry(2.2, 0.06, 16, 64);
    const gimbal1Mat = new THREE.MeshStandardMaterial({
      color: 0x2563eb,
      metalness: 0.95,
      roughness: 0.2,
    });
    const gimbal1 = new THREE.Mesh(gimbal1Geo, gimbal1Mat);
    coreGroup.add(gimbal1);

    // Part 3: Inner gimbal ring
    const gimbal2Geo = new THREE.TorusGeometry(1.8, 0.05, 16, 64);
    const gimbal2Mat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.9,
      roughness: 0.25,
      emissive: 0x0284c7,
      emissiveIntensity: 0.3,
    });
    const gimbal2 = new THREE.Mesh(gimbal2Geo, gimbal2Mat);
    coreGroup.add(gimbal2);

    // Part 4: Floating data node brackets
    const bracketGeo = new THREE.CylinderGeometry(0.04, 0.04, 3.2, 16);
    const bracketMat = new THREE.MeshStandardMaterial({
      color: 0xc0c6d4,
      metalness: 0.8,
      roughness: 0.3,
    });
    for (let i = 0; i < 3; i++) {
      const bracket = new THREE.Mesh(bracketGeo, bracketMat);
      bracket.rotation.z = (i * Math.PI) / 3;
      coreGroup.add(bracket);
    }

    // Part 5: Surrounding energy lattice
    const coreWireGeo = new THREE.DodecahedronGeometry(2.5, 1);
    const coreWireMat = new THREE.MeshBasicMaterial({
      color: 0x00d2fe,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const coreWire = new THREE.Mesh(coreWireGeo, coreWireMat);
    coreWire.name = 'wireframe';
    coreGroup.add(coreWire);

    // Part 6: Contact shadow
    const coreShadow = shadowMesh.clone();
    coreShadow.position.y = -2.6;
    coreGroup.add(coreShadow);

    coreGroup.visible = false;
    scene.add(coreGroup);

    // ----------------------------------------------------
    // MODEL 3: The SPLANJOX Monolith (3D 'S' Futuristic Emblem)
    // ----------------------------------------------------
    // Construct 3D procedural 'S' monogram using Shape and ExtrudeGeometry
    const sShape = new THREE.Shape();
    // Smooth geometric lightning/S contour inspired by SPLANJOX brand logo
    sShape.moveTo(0.2, 1.6);
    sShape.quadraticCurveTo(1.4, 1.4, 1.4, 0.4);
    sShape.quadraticCurveTo(1.4, -0.2, 0.1, -0.4);
    sShape.lineTo(0.7, -0.4);
    sShape.quadraticCurveTo(1.5, -0.5, 1.5, -1.3);
    sShape.quadraticCurveTo(1.5, -2.1, -0.2, -2.1);
    sShape.quadraticCurveTo(-1.4, -2.1, -1.4, -1.1);
    sShape.quadraticCurveTo(-1.4, -0.3, 0.0, 0.1);
    sShape.lineTo(-0.6, 0.1);
    sShape.quadraticCurveTo(-1.4, 0.3, -1.4, 1.1);
    sShape.quadraticCurveTo(-1.4, 1.6, 0.2, 1.6);

    const extrudeSettings = {
      steps: 2,
      depth: 0.45,
      bevelEnabled: true,
      bevelThickness: 0.12,
      bevelSize: 0.08,
      bevelOffset: 0,
      bevelSegments: 4,
    };
    const sGeo = new THREE.ExtrudeGeometry(sShape, extrudeSettings);
    sGeo.center();

    const sMat = new THREE.MeshStandardMaterial({
      color: 0x2563eb,
      metalness: 0.85,
      roughness: 0.2,
      map: monolithTexture,
      bumpScale: 0.04,
      emissive: 0x0b1220,
      emissiveIntensity: 0.4,
    });
    const sMesh = new THREE.Mesh(sGeo, sMat);
    sMesh.scale.set(1.2, 1.2, 1.2);
    sMesh.castShadow = true;
    monolithGroup.add(sMesh);

    // Part 2: Cybernetic hexagonal pedestal
    const pedestalGeo = new THREE.CylinderGeometry(2.2, 2.6, 0.3, 6);
    const pedestalMat = new THREE.MeshStandardMaterial({
      color: 0x0b1220,
      roughness: 0.3,
      metalness: 0.9,
    });
    const pedestal = new THREE.Mesh(pedestalGeo, pedestalMat);
    pedestal.position.y = -2.1;
    monolithGroup.add(pedestal);

    // Part 3: Emitter energy ring
    const emitterRingGeo = new THREE.TorusGeometry(1.8, 0.04, 16, 64);
    const emitterRingMat = new THREE.MeshBasicMaterial({
      color: 0x00d2fe,
      transparent: true,
      opacity: 0.8,
    });
    const emitterRing = new THREE.Mesh(emitterRingGeo, emitterRingMat);
    emitterRing.rotation.x = Math.PI / 2;
    emitterRing.position.y = -1.9;
    monolithGroup.add(emitterRing);

    // Part 4: Floating halo ring
    const haloGeo = new THREE.TorusGeometry(2.4, 0.03, 16, 64);
    const haloMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0x0284c7,
      emissiveIntensity: 0.5,
    });
    const halo = new THREE.Mesh(haloGeo, haloMat);
    halo.rotation.x = Math.PI * 0.4;
    monolithGroup.add(halo);

    // Part 5: Contact shadow
    const monolithShadow = shadowMesh.clone();
    monolithShadow.position.y = -2.4;
    monolithGroup.add(monolithShadow);

    monolithGroup.visible = false;
    scene.add(monolithGroup);

    // ----------------------------------------------------
    // Starfield & Cosmic Network Particles
    // ----------------------------------------------------
    const starsCount = 450;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starsCount * 3);
    for (let i = 0; i < starsCount * 3; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 45;
      starPositions[i + 1] = (Math.random() - 0.5) * 45;
      starPositions[i + 2] = (Math.random() - 0.5) * 45;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0x93c5fd,
      size: 0.08,
      transparent: true,
      opacity: 0.65,
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    modeGroupsRef.current = {
      earth: earthGroup,
      core: coreGroup,
      monolith: monolithGroup,
    };

    // 9. Resize Handling
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // 10. Animation Loop with Software-GL guard
    let frameId = 0;
    const clock = new THREE.Clock();

    function afterDraw(cb: () => void) {
      const gl = renderer.getContext() as WebGL2RenderingContext;
      const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
      gl.flush();
      const poll = () => {
        const state = sync && gl.getSyncParameter(sync, gl.SYNC_STATUS);
        if (state === gl.UNSIGNALED) {
          frameId = window.setTimeout(poll, 5);
        } else {
          if (sync) gl.deleteSync(sync);
          frameId = window.setTimeout(cb, 70);
        }
      };
      frameId = window.setTimeout(poll, 5);
    }

    const scratchVec = new THREE.Vector3();
    const scratchDummy = new THREE.Object3D();

    function tick() {
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Controls update with smooth damping
      controls.update();

      // Active mode rotation & kinematics
      const currentMode = activeModeRef.current;
      const rotating = isRotatingRef.current;

      if (currentMode === 'earth') {
        if (rotating) {
          earthMesh.rotation.y += delta * 0.18;
          wireMesh.rotation.y -= delta * 0.06;
          atmoMesh.rotation.y += delta * 0.1;
        }
        ring1Mesh.rotation.z += delta * 0.12;
        ring2Mesh.rotation.z -= delta * 0.08;

        // Animate orbiting satellites
        for (let i = 0; i < satCount; i++) {
          const orbit = satOrbits[i];
          orbit.angle += delta * orbit.speed;
          scratchVec.set(
            Math.cos(orbit.angle) * orbit.radius,
            Math.sin(orbit.angle) * Math.sin(orbit.tilt) * orbit.radius,
            Math.sin(orbit.angle) * Math.cos(orbit.tilt) * orbit.radius
          );
          scratchDummy.position.copy(scratchVec);
          scratchDummy.rotation.y = orbit.angle;
          scratchDummy.scale.setScalar(0.7);
          scratchDummy.updateMatrix();
          satInstanced.setMatrixAt(i, scratchDummy.matrix);
        }
        satInstanced.instanceMatrix.needsUpdate = true;
      } else if (currentMode === 'core') {
        if (rotating) {
          coreInner.rotation.x += delta * 0.4;
          coreInner.rotation.y += delta * 0.6;
          gimbal1.rotation.y += delta * 0.3;
          gimbal1.rotation.z += delta * 0.2;
          gimbal2.rotation.x -= delta * 0.4;
          gimbal2.rotation.z += delta * 0.35;
          coreWire.rotation.y -= delta * 0.1;
        }
      } else if (currentMode === 'monolith') {
        if (rotating) {
          sMesh.rotation.y += delta * 0.35;
          emitterRing.rotation.z += delta * 0.5;
          halo.rotation.z -= delta * 0.25;
        }
        // Subtle floating bob
        sMesh.position.y = Math.sin(elapsedTime * 1.5) * 0.15;
      }

      // Starfield slow drift
      starField.rotation.y = elapsedTime * 0.015;

      // Render
      renderer.render(scene, camera);

      if (isSoftwareGl) {
        afterDraw(tick);
      } else {
        frameId = requestAnimationFrame(tick);
      }
    }

    tick();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      clearTimeout(frameId);
      controls.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Mode change handler
  const handleModeChange = (mode: SceneMode) => {
    setActiveMode(mode);
    if (!modeGroupsRef.current) return;
    const { earth, core, monolith } = modeGroupsRef.current;
    earth.visible = mode === 'earth';
    core.visible = mode === 'core';
    monolith.visible = mode === 'monolith';
  };

  return (
    <div className="relative w-full h-full min-h-[640px] lg:min-h-[760px] overflow-hidden select-none">
      {/* WebGL Canvas Container mounted in isolated ref */}
      <div 
        ref={mountRef} 
        className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing z-0"
      />

      {/* Atmospheric vignette gradients */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#070b14] via-transparent to-transparent opacity-80" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#070b14]/70 via-transparent to-[#070b14]/70" />

      {/* Top Floating Badge with Mode Info */}
      <div className="absolute top-24 right-6 z-10 hidden sm:block pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 text-xs font-medium text-slate-300">
          <span className="w-2 h-2 rounded-full bg-blue-500" />
          <span className="text-slate-400">Interactive 3D Engine:</span>
          <span className="text-sky-400 font-semibold uppercase tracking-wider">
            {activeMode === 'earth' && 'Global Innovation Grid'}
            {activeMode === 'core' && 'Quantum Architecture Core'}
            {activeMode === 'monolith' && 'SPLANJOX Monolith'}
          </span>
        </div>
      </div>

      {/* Collapsible Ergonomic Bottom Control Dock (<= 15% Viewport footprint) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-[94%] max-w-[840px] transition-transform duration-300 ease-out">
        {/* Toggle Collapse Pill */}
        <div className="flex justify-center mb-1.5">
          <button
            onClick={() => setIsDockCollapsed(!isDockCollapsed)}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-t-lg bg-slate-900/90 border-t border-x border-slate-700/80 text-[11px] font-semibold tracking-wider uppercase text-slate-300 hover:text-white transition-colors cursor-pointer"
            title={isDockCollapsed ? 'Expand 3D Controls' : 'Collapse 3D Controls'}
          >
            {isDockCollapsed ? (
              <>
                <ChevronUp className="w-3.5 h-3.5 text-sky-400" />
                <span>Show 3D Viewport Controls</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-3.5 h-3.5 text-sky-400" />
                <span>Hide Controls</span>
              </>
            )}
          </button>
        </div>

        {/* Control Dock Panel */}
        {!isDockCollapsed && (
          <div className="bg-[#0b1220]/95 border border-slate-700/80 rounded-2xl p-3 shadow-2xl shadow-blue-950/50">
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
              {/* Mode Switcher Tabs */}
              <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
                <button
                  onClick={() => handleModeChange('earth')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                    activeMode === 'earth'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Global Hub</span>
                </button>
                <button
                  onClick={() => handleModeChange('core')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                    activeMode === 'core'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Tech Core</span>
                </button>
                <button
                  onClick={() => handleModeChange('monolith')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                    activeMode === 'monolith'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Monolith</span>
                </button>
              </div>

              {/* Camera Angle Presets */}
              <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
                <span className="text-[11px] text-slate-500 px-2 font-mono uppercase">View:</span>
                <button
                  onClick={() => applyCameraView('front')}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors cursor-pointer ${
                    cameraView === 'front'
                      ? 'bg-slate-700 text-sky-300'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Front
                </button>
                <button
                  onClick={() => applyCameraView('orbit')}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors cursor-pointer ${
                    cameraView === 'orbit'
                      ? 'bg-slate-700 text-sky-300'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Orbit
                </button>
                <button
                  onClick={() => applyCameraView('top')}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors cursor-pointer ${
                    cameraView === 'top'
                      ? 'bg-slate-700 text-sky-300'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Zenith
                </button>
              </div>

              {/* Toggles: Auto-rotate & Wireframe Glow */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsRotating(!isRotating)}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-[11px] font-medium transition-all cursor-pointer ${
                    isRotating
                      ? 'bg-sky-500/10 border-sky-500/40 text-sky-300'
                      : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-300'
                  }`}
                  title="Toggle Auto-Rotation"
                >
                  <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'text-sky-400' : ''}`} />
                  <span className="hidden sm:inline">Rotate</span>
                </button>

                <button
                  onClick={() => setWireframeGlow(!wireframeGlow)}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-[11px] font-medium transition-all cursor-pointer ${
                    wireframeGlow
                      ? 'bg-blue-500/10 border-blue-500/40 text-blue-300'
                      : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-300'
                  }`}
                  title="Toggle Wireframe Shell"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Lattice</span>
                </button>

                {onExploreClick && (
                  <button
                    onClick={onExploreClick}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-medium shadow-md shadow-blue-500/20 cursor-pointer"
                  >
                    <span>Read Story</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
