import React from 'react';
import { Target, Compass, Eye, HeartHandshake, Sparkles, Globe2 } from 'lucide-react';

export const PurposeMissionVision: React.FC = () => {
  const statements = [
    {
      id: 'purpose',
      title: 'Our Purpose',
      label: 'Why We Exist',
      icon: HeartHandshake,
      accent: 'border-blue-500/40 text-blue-400',
      gradient: 'from-blue-600/20 to-sky-600/10',
      quote:
        'We believe technology should solve meaningful problems, improve people\'s lives and create opportunities for businesses and communities.',
      keyTakeaways: [
        'Solving authentic human and organizational friction',
        'Creating sustainable economic and community opportunities',
        'Prioritizing long-term utility over short-term gimmicks',
      ],
    },
    {
      id: 'mission',
      title: 'Our Mission',
      label: 'What We Do Every Day',
      icon: Target,
      accent: 'border-sky-500/40 text-sky-400',
      gradient: 'from-sky-600/20 to-cyan-600/10',
      quote:
        'To identify real-world challenges and transform them into practical, innovative and accessible software solutions.',
      keyTakeaways: [
        'Rigorous problem formulation before writing code',
        'Engineering solutions that are accessible and intuitive',
        'Fusing innovation with production-grade stability',
      ],
    },
    {
      id: 'vision',
      title: 'Our Vision',
      label: 'Where We Are Going',
      icon: Eye,
      accent: 'border-indigo-500/40 text-indigo-400',
      gradient: 'from-indigo-600/20 to-blue-600/10',
      quote:
        'To build a globally recognized technology and innovation company that creates impactful products, empowers businesses and contributes to a better future.',
      keyTakeaways: [
        'Rooted in Sri Lanka with an expansive international footprint',
        'Multidisciplinary technology leadership across software, AI & hardware',
        'Lasting contribution to a smarter, more connected future',
      ],
    },
  ];

  return (
    <section id="purpose-mission" className="relative py-28 bg-[#0a0f1d] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-xs font-semibold text-sky-400 uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Strategic Direction</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Montserrat']">
            Purpose, Mission & Vision
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            The philosophical compass guiding every line of code, architectural decision, and venture we build at SPLANJOX.
          </p>
        </div>

        {/* 3 Pillars of Identity Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {statements.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="relative flex flex-col justify-between rounded-3xl bg-slate-900/80 border border-slate-800 p-8 hover:border-slate-700 transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-950/60"
              >
                {/* Header with Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
                      {item.label}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-sky-400 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white mb-6 font-['Montserrat']">
                    {item.title}
                  </h3>

                  {/* Core Statement Quote */}
                  <blockquote className="p-5 rounded-2xl bg-[#070b14] border-l-4 border-blue-500 text-slate-200 text-base sm:text-lg italic font-medium leading-relaxed mb-6 shadow-inner">
                    "{item.quote}"
                  </blockquote>
                </div>

                {/* Key Takeaways */}
                <div className="pt-6 border-t border-slate-800/80">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3 font-semibold">
                    Core Tenets:
                  </span>
                  <ul className="space-y-2.5">
                    {item.keyTakeaways.map((takeaway, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <Sparkles className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-1" />
                        <span className="leading-snug">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expansion Banner: Sri Lanka to Global */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-950/70 via-slate-900 to-slate-900 border border-blue-500/20 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0">
              <Globe2 className="w-6 h-6 text-sky-400" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white font-['Montserrat']">
                Global Ambition, Local Roots
              </h4>
              <p className="text-sm text-slate-300 mt-0.5">
                Primary market: Sri Lanka initially, systematically structured for rapid international expansion.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-600 transition-colors cursor-pointer"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
};
