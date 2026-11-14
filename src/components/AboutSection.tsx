import React from 'react';
import { Compass, MapPin, Target, Telescope, User } from 'lucide-react';

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
  return (
    <section
      id="about"
      className="bg-[#F8FAFC] text-[#080F1C] py-20 sm:py-28 border-b border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
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
                <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Originating in Sri Lanka · Built for Global Scale</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 flex items-start gap-5"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-center text-[#2563EB] shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#2563EB] mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-base sm:text-lg font-medium text-[#080F1C] leading-relaxed">
                      {pillar.statement}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
