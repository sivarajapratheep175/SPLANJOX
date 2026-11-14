import React from 'react';
import {
  Brain,
  Cpu,
  FlaskConical,
  GraduationCap,
  Landmark,
} from 'lucide-react';

const FUTURE_AREAS = [
  {
    title: 'AI & Intelligent Systems',
    description:
      'Exploring applied machine intelligence and decision-support tools designed around real workflow bottlenecks.',
    icon: Brain,
  },
  {
    title: 'Research & Innovation',
    description:
      'Long-term technical R&D into developer tooling, modular software architectures, and emerging computing models.',
    icon: FlaskConical,
  },
  {
    title: 'Education Technology',
    description:
      'Future initiatives aimed at practical digital learning tools and accessible skill-building platforms.',
    icon: GraduationCap,
  },
  {
    title: 'Financial Technology',
    description:
      'Exploratory concepts around transparent digital commerce, SME financial tooling, and streamlined payments.',
    icon: Landmark,
  },
  {
    title: 'Smart Devices & Electronics',
    description:
      'Long-horizon hardware and embedded software exploration connecting physical systems with cloud platforms.',
    icon: Cpu,
  },
];

export const FutureVisionSection: React.FC = () => {
  return (
    <section
      id="future-innovation"
      className="bg-white text-[#080F1C] py-20 sm:py-28 border-b border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2563EB] mb-3">
              Future Innovation
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#080F1C]">
              Looking Beyond Today.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
              While SPLANJOX currently focuses on startup MVPs, custom web and
              mobile software, and backend engineering, our long-term roadmap
              explores new domains where practical technology can create lasting
              value.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-xs sm:text-sm text-[#64748B] max-w-sm">
            <span className="font-semibold text-[#080F1C]">
              Long-term roadmap:
            </span>{' '}
            These areas represent future exploration and research—not current
            operational departments.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FUTURE_AREAS.map((area) => {
            const Icon = area.icon;
            return (
              <article
                key={area.title}
                className="rounded-2xl border border-slate-200 bg-[#F8FAFC]/60 p-6 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#2563EB]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-medium text-[#64748B]">
                    Future Exploration
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#080F1C] pt-1">
                  {area.title}
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  {area.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
