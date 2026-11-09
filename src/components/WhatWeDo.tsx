import React, { useState } from 'react';
import { 
  Rocket, 
  Code2, 
  FlaskConical, 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  Server, 
  Smartphone, 
  ShieldCheck,
  BrainCircuit,
  Boxes
} from 'lucide-react';

export const WhatWeDo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      id: 'products',
      title: 'Product Development',
      tagline: 'Building proprietary, end-to-end digital solutions that solve real problems.',
      icon: Rocket,
      accent: 'from-blue-600 to-sky-500',
      description:
        'We conceptualize, engineer, and launch proprietary digital platforms designed for durability and real-world utility. Rather than building software for the sake of trends, we design products centered around solving genuine pain points for people and enterprises.',
      deliverables: [
        'Proprietary SaaS Platforms & Cloud Apps',
        'Intuitive Mobile Applications (iOS & Android)',
        'Data-Driven Web Systems & Portals',
        'Scalable Architecture & Continuous Deployment',
      ],
      methodology: 'Iterative Discovery → Rapid Prototyping → Robust Production Delivery',
      stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Cloud Native', 'Tailwind CSS'],
    },
    {
      id: 'services',
      title: 'Software Services',
      tagline: 'Enterprise-grade engineering, cloud infrastructure, and system modernization.',
      icon: Code2,
      accent: 'from-sky-500 to-cyan-400',
      description:
        'We partner with businesses to build high-performance custom software solutions, modernize legacy workflows, and integrate secure cloud architectures. Our software service model focuses on reliability, customer trust, and measurable ROI.',
      deliverables: [
        'Custom Enterprise Software Engineering',
        'API Architecture & Cloud Microservices',
        'Legacy Modernization & Code Refactoring',
        'Security Auditing & High-Availability Ops',
      ],
      methodology: 'Problem First Analysis → Clean Code Craftsmanship → Zero Downtime Deployments',
      stack: ['Distributed Systems', 'Docker/K8s', 'REST & GraphQL', 'SQL & NoSQL', 'CI/CD Pipelines'],
    },
    {
      id: 'research',
      title: 'Research & Innovation',
      tagline: 'Pioneering artificial intelligence, autonomous tech, and smart connected systems.',
      icon: FlaskConical,
      accent: 'from-blue-500 to-indigo-600',
      description:
        'Innovation is in our DNA. Through SPLANJOX Labs and SPLANJOX AI, we actively explore emerging technology vectors—from deep generative intelligence and machine learning to smart electronics and next-generation interactive systems.',
      deliverables: [
        'Artificial Intelligence & Predictive Agents',
        'Smart Connected Devices & IoT Prototyping',
        'Algorithmic Research & Optimization',
        'Emerging Framework & Future Tech Exploration',
      ],
      methodology: 'Hypothesis Formulation → Empirical Testing → Practical Solution Commercialization',
      stack: ['Machine Learning', 'Computer Vision', 'Embedded IoT', 'Neural Networks', 'Edge Compute'],
    },
  ];

  return (
    <section id="what-we-do" className="relative py-28 bg-[#070b14] border-t border-slate-800/80">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-xs font-semibold text-sky-400 uppercase tracking-widest mb-4">
            <span>Our Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Montserrat']">
            What We Do
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A three-pillar business model built around technical excellence, deep domain inquiry, and long-term value creation.
          </p>
        </div>

        {/* 3 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isSelected = activeTab === idx;
            return (
              <div
                key={pillar.id}
                onClick={() => setActiveTab(idx)}
                className={`relative group rounded-2xl p-8 cursor-pointer transition-all duration-300 ${
                  isSelected
                    ? 'bg-slate-900/95 border-2 border-sky-400 shadow-2xl shadow-blue-500/20 translate-y-[-4px]'
                    : 'bg-slate-900/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                }`}
              >
                {/* Icon & Index Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${pillar.accent} text-white shadow-lg`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">
                    Pillar 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 font-['Montserrat']">
                  {pillar.title}
                </h3>
                <p className="text-sm text-sky-300/90 font-medium mb-4 leading-snug">
                  {pillar.tagline}
                </p>
                <p className="text-sm text-slate-400 leading-relaxed line-clamp-3 mb-6">
                  {pillar.description}
                </p>

                {/* Key Deliverables Snapshot */}
                <div className="space-y-2 mb-6">
                  {pillar.deliverables.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-semibold">
                  <span className={isSelected ? 'text-sky-300' : 'text-slate-400'}>
                    {isSelected ? 'Currently Viewing' : 'Click to inspect stack'}
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'translate-x-1 text-sky-400' : 'text-slate-500'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Detail Card for Active Selection */}
        <div className="rounded-3xl bg-[#0b1220] border border-blue-500/30 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-widest mb-3">
                <Boxes className="w-4 h-4" />
                <span>Deep Dive Architecture & Execution</span>
              </div>
              <h4 className="text-2xl sm:text-3xl font-extrabold text-white font-['Montserrat'] mb-4">
                {pillars[activeTab].title}
              </h4>
              <p className="text-base text-slate-300 leading-relaxed mb-6">
                {pillars[activeTab].description}
              </p>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 mb-6">
                <span className="text-xs font-mono text-slate-400 block mb-1 uppercase tracking-wider">
                  Operational Methodology:
                </span>
                <span className="text-sm font-semibold text-white">
                  {pillars[activeTab].methodology}
                </span>
              </div>

              {/* Stack badges */}
              <div>
                <span className="text-xs font-mono text-slate-400 block mb-2 uppercase tracking-wider">
                  Technology Competencies:
                </span>
                <div className="flex flex-wrap gap-2">
                  {pillars[activeTab].stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800/90 text-sky-300 border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl p-6 border border-slate-800">
              <h5 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-4 font-mono">
                Key Deliverables & Outcomes:
              </h5>
              <div className="space-y-3">
                {pillars[activeTab].deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-200 font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 hover:text-sky-300 cursor-pointer"
                >
                  <span>Request discussion on {pillars[activeTab].title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
