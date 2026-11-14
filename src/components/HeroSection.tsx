import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onStartProject: () => void;
  onExploreWork: () => void;
}

const CORE_CAPABILITIES = [
  {
    step: '01',
    title: 'Startup MVP & Product Development',
    detail: 'From initial concept to launch-ready web and mobile products.',
  },
  {
    step: '02',
    title: 'Software & API Engineering',
    detail: 'Reliable backend systems, databases, and scalable architecture.',
  },
  {
    step: '03',
    title: 'Practical AI & Automation',
    detail: 'Focused integrations that streamline workflows and real operations.',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartProject,
  onExploreWork,
}) => {
  return (
    <section
      id="home"
      className="relative bg-[#080F1C] text-white border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <div className="lg:col-span-7 space-y-7">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-[#3B82F6]">
              Beyond Innovation. Building the Future.
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white leading-[1.08]">
              Turning Ideas Into Powerful Digital Solutions.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              We help startups transform ideas into practical software solutions
              through thoughtful design, modern engineering and reliable
              technology.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onStartProject}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#2563EB] hover:bg-[#3B82F6] text-white text-sm font-semibold transition-colors cursor-pointer"
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onExploreWork}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold transition-colors cursor-pointer"
              >
                Explore Our Work
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-4 pb-6 border-b border-white/10">
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-2.5 shrink-0">
                  <img
                    src="/assets/aistudio/SVG-preview_7aa9f648.png"
                    alt="SPLANJOX official emblem"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-lg font-bold tracking-wide text-white">
                    SPLANJOX
                  </div>
                  <div className="text-sm text-slate-400">
                    Startup Technology &amp; Software Solutions · Sri Lanka
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {CORE_CAPABILITIES.map((item) => (
                  <div
                    key={item.step}
                    className="flex items-start gap-4 p-3.5 rounded-xl border border-white/5 bg-white/[0.02]"
                  >
                    <span className="text-xs font-semibold text-[#3B82F6] pt-0.5 tabular-nums">
                      {item.step}
                    </span>
                    <div>
                      <h2 className="text-sm font-semibold text-white">
                        {item.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
