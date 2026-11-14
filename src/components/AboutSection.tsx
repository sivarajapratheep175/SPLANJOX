import React, { useEffect, useRef, useState } from 'react';
import {
  Compass,
  MapPin,
  Pause,
  Play,
  Target,
  Telescope,
  User,
  Volume2,
  VolumeX,
} from 'lucide-react';

const PILLARS = [
  {
    title: 'Purpose',
    icon: Compass,
    statement:
      'Technology should solve meaningful problems and create opportunities.',
  },
  {
    title: 'Mission',
    icon: Target,
    statement:
      'To transform real-world challenges into practical and accessible software solutions.',
  },
  {
    title: 'Vision',
    icon: Telescope,
    statement:
      'To build a globally recognised technology company through impactful products and innovation.',
  },
];

export const AboutSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const videoEl = videoRef.current;
    const containerEl = containerRef.current;
    if (!videoEl || !containerEl) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            videoEl
              .play()
              .then(() => setIsPlaying(true))
              .catch(() => setIsPlaying(false));
          } else {
            videoEl.pause();
            setIsPlaying(false);
          }
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(containerEl);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    const videoEl = videoRef.current;
    if (!videoEl) return;
    if (videoEl.paused) {
      videoEl
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      videoEl.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const videoEl = videoRef.current;
    if (!videoEl) return;
    const nextMuted = !videoEl.muted;
    videoEl.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <section
      id="about"
      className="bg-[#F8FAFC] text-[#080F1C] py-20 sm:py-28 border-b border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2563EB] mb-3">
                About SPLANJOX
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#080F1C]">
                Building Technology With Purpose.
              </h2>
            </div>

            <p className="text-base text-[#64748B] leading-relaxed">
              SPLANJOX is an independent technology and software company
              originating from Sri Lanka with a long-term global perspective.
              Today, we focus on helping startups and entrepreneurs turn early
              ideas into dependable, well-engineered digital products.
            </p>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#080F1C] text-white flex items-center justify-center shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#080F1C]">
                    Sivaraja Pratheep
                  </h3>
                  <p className="text-sm font-medium text-[#2563EB]">
                    Founder &amp; CEO
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#64748B] leading-relaxed">
                Leading product architecture, engineering execution, and
                technical strategy at SPLANJOX—focused on building honest,
                problem-first software solutions from Sri Lanka for global
                utility.
              </p>

              <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-600">
                <MapPin className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                <span>Originating in Sri Lanka · Built for Global Scale</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7" ref={containerRef}>
            <figure className="rounded-2xl border border-slate-200 bg-white p-2.5 sm:p-3 shadow-sm">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-100">
                <video
                  ref={videoRef}
                  src="/assets/aistudio/gemini_generated_video_2029e522_ae7da353.mp4"
                  className="w-full h-full object-cover"
                  muted={isMuted}
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="SPLANJOX brand reveal video: Beyond Innovation. Building the Future."
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />

                <div className="absolute bottom-3 right-3 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label={isPlaying ? 'Pause brand video' : 'Play brand video'}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#080F1C]/80 hover:bg-[#080F1C] text-white backdrop-blur-sm transition-colors cursor-pointer"
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4" />
                    ) : (
                      <Play className="w-4 h-4" />
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={isMuted ? 'Unmute brand video' : 'Mute brand video'}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#080F1C]/80 hover:bg-[#080F1C] text-white backdrop-blur-sm transition-colors cursor-pointer"
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <figcaption className="px-2 pt-3 pb-1 flex flex-wrap items-center justify-between gap-2 text-xs text-[#64748B]">
                <span className="font-semibold text-[#080F1C]">
                  SPLANJOX Brand Film
                </span>
                <span>Beyond Innovation. Building the Future.</span>
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 space-y-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-center text-[#2563EB]">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#2563EB] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-base font-medium text-[#080F1C] leading-relaxed">
                    {pillar.statement}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
