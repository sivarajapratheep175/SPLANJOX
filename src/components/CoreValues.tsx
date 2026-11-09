import React, { useState } from 'react';
import { 
  HelpCircle, 
  Lightbulb, 
  Award, 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const CoreValues: React.FC = () => {
  const [activeValue, setActiveValue] = useState<number | null>(null);

  const values = [
    {
      id: 1,
      title: 'Problem First',
      tagline: 'Understand the problem before building.',
      icon: HelpCircle,
      accentColor: 'text-sky-400',
      badge: 'Doctrine 01',
      description:
        'We never write code for the mere sake of technology. Before architecting a system, we deeply interrogate the root problem, understand the user friction, and validate whether software is the right cure.',
      implementation: 'Rigorous requirement validation, root-cause inquiry, and lean solution prototyping.',
    },
    {
      id: 2,
      title: 'Innovation',
      tagline: 'Explore better solutions.',
      icon: Lightbulb,
      accentColor: 'text-amber-400',
      badge: 'Doctrine 02',
      description:
        'Continuous pursuit of higher efficiency, smarter algorithmic paradigms, and breakthrough methodologies. We refuse conventional complacency and actively pioneer what comes next.',
      implementation: 'Dedicated R&D cycles, AI model experimentation, and cross-discipline synthesis.',
    },
    {
      id: 3,
      title: 'Quality',
      tagline: 'Build reliable products.',
      icon: Award,
      accentColor: 'text-blue-400',
      badge: 'Doctrine 03',
      description:
        'A product is only as valuable as its reliability. We enforce stringent code reviews, comprehensive automated testing, resilient distributed architecture, and zero-compromise design standards.',
      implementation: 'Maintainable TypeScript architecture, rigorous CI/CD verification, and defensive engineering.',
    },
    {
      id: 4,
      title: 'Integrity',
      tagline: 'Earn customer trust.',
      icon: ShieldCheck,
      accentColor: 'text-emerald-400',
      badge: 'Doctrine 04',
      description:
        'Trust is our foundational currency. We operate with radical transparency, honest delivery timelines, ethical data handling, and authentic partnership ethics with every client and user.',
      implementation: 'Transparent development roadmaps, data privacy by design, and accountable ownership.',
    },
    {
      id: 5,
      title: 'Accessibility',
      tagline: 'Make technology useful to everyone.',
      icon: Users,
      accentColor: 'text-purple-400',
      badge: 'Doctrine 05',
      description:
        'Technology must not be an exclusive luxury. We craft systems that run seamlessly on accessible hardware, intuitive interfaces for diverse skill levels, and solutions that empower everyday communities.',
      implementation: 'Mobile-first responsiveness, inclusive UI/UX accessibility standards, and low-latency performance.',
    },
    {
      id: 6,
      title: 'Impact',
      tagline: 'Measure success through real-world value.',
      icon: TrendingUp,
      accentColor: 'text-cyan-400',
      badge: 'Doctrine 06',
      description:
        'Vanity metrics do not define success. We evaluate our software by the tangible time saved, businesses elevated, problems dismantled, and positive changes delivered to society.',
      implementation: 'KPI-driven outcomes, real-world utility benchmarks, and sustainable value compounding.',
    },
  ];

  return (
    <section id="values" className="relative py-28 bg-[#070b14] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-xs font-semibold text-sky-400 uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Guiding Principles</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Montserrat']">
            Our 6 Core Values
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            The non-negotiable principles that drive our engineering culture, client relationships, and technological creations.
          </p>
        </div>

        {/* 6 Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((val, idx) => {
            const Icon = val.icon;
            const isHovered = activeValue === idx;
            return (
              <div
                key={val.id}
                onMouseEnter={() => setActiveValue(idx)}
                onMouseLeave={() => setActiveValue(null)}
                className={`relative rounded-3xl bg-[#0b1220] border transition-all duration-300 p-8 flex flex-col justify-between ${
                  isHovered
                    ? 'border-sky-400 shadow-xl shadow-blue-500/15 -translate-y-1'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Badge & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">
                      {val.badge}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                      <Icon className={`w-6 h-6 ${val.accentColor}`} />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-bold text-white mb-2 font-['Montserrat']">
                    {val.title}
                  </h3>
                  <p className="text-sm font-semibold text-sky-400 mb-4 leading-snug">
                    {val.tagline}
                  </p>

                  {/* Detailed Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {val.description}
                  </p>
                </div>

                {/* Practical Implementation footer */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="flex items-start gap-2 text-xs text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-300">In Practice: </strong>
                      {val.implementation}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
