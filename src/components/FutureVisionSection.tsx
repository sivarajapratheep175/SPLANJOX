import React from 'react';
import { 
  Sparkles, 
  Terminal, 
  BrainCircuit, 
  FlaskRound as Flask, 
  GraduationCap, 
  TrendingUp, 
  Cpu, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar
} from 'lucide-react';

interface FutureVisionSectionProps {
  onStartProject: () => void;
}

export const FutureVisionSection: React.FC<FutureVisionSectionProps> = ({ onStartProject }) => {
  const futureInitiatives = [
    {
      id: 'ai',
      name: 'SPLANJOX AI',
      category: 'Future R&D Initiative',
      icon: BrainCircuit,
      description: 'AI-powered autonomous workflows, predictive analytics, and intelligent domain agents.',
      status: 'Research & Prototyping Roadmap',
      color: 'from-sky-500 to-cyan-400',
    },
    {
      id: 'labs',
      name: 'SPLANJOX Labs',
      category: 'Future Exploratory Vector',
      icon: Flask,
      description: 'Applied computer science research, distributed algorithm benchmarks, and novel tech trials.',
      status: 'Long-Term Vision',
      color: 'from-blue-600 to-indigo-500',
    },
    {
      id: 'edu',
      name: 'SPLANJOX Education',
      category: 'Community Tech Initiative',
      icon: GraduationCap,
      description: 'Educational technology products and software engineering upskilling for students in Sri Lanka and globally.',
      status: 'Planned Community Venture',
      color: 'from-indigo-500 to-sky-400',
    },
    {
      id: 'fin',
      name: 'SPLANJOX Finance',
      category: 'FinTech Exploration',
      icon: TrendingUp,
      description: 'Digital ledger infrastructure, micro-accounting tools, and SME transaction automation.',
      status: 'Conceptualization Phase',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      id: 'elec',
      name: 'SPLANJOX Electronics',
      category: 'Hardware & IoT Research',
      icon: Cpu,
      description: 'Embedded microcontroller systems, sensor telemetries, and smart connected consumer devices.',
      status: 'Long-Term Horizon',
      color: 'from-blue-500 to-teal-400',
    },
  ];

  return (
    <section id="future-vision" className="relative py-28 bg-[#0a0f1d] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-xs font-semibold text-sky-400 uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Horizon & Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Montserrat']">
            Building Beyond Today.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Our journey begins with solving real-world technology challenges for startups.
            Over time, we aim to expand into intelligent software products, research, and emerging technologies.
          </p>
        </div>

        {/* Clear Separation: Current Business vs Future Initiatives */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* CURRENT BUSINESS SPOTLIGHT */}
          <div className="lg:col-span-5 rounded-3xl bg-[#0b1220] border-2 border-sky-400 p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-bl-xl font-bold">
              Active Business Focus
            </div>

            <div className="flex items-center gap-3 mb-4 mt-2">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-sky-400">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white font-['Montserrat']">
                  SPLANJOX Technologies
                </h3>
                <span className="text-xs font-semibold text-sky-400">
                  Current Core Commercial Operation
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              This is what SPLANJOX delivers today. We provide startups and entrepreneurs with high-reliability software services, MVP development, custom websites, mobile applications, and dedicated technical maintenance.
            </p>

            <div className="space-y-2.5 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2.5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Startup MVP Development & Prototyping</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Responsive Websites & Web Applications</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Android & iOS Cross-Platform Mobile Apps</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Backend Engineering, APIs & Cloud Systems</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Ongoing Maintenance & Technical Support</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <button
                onClick={onStartProject}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
              >
                <span>Engage SPLANJOX Technologies</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* FUTURE ROADMAP / INITIATIVES */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-white font-['Montserrat']">
                  Future Initiatives (Long-Term Roadmap)
                </h4>
                <p className="text-xs text-slate-400">
                  Transparent declaration: These represent future research and long-term product vision, not active standalone departments today.
                </p>
              </div>
              <Calendar className="w-5 h-5 text-sky-400 shrink-0" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {futureInitiatives.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className="p-5 rounded-2xl bg-[#0b1220] border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div
                          className={`w-9 h-9 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-sm`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-sky-400">
                          {item.status}
                        </span>
                      </div>
                      <h5 className="text-sm font-bold text-white font-['Montserrat'] mb-1">
                        {item.name}
                      </h5>
                      <p className="text-[11px] text-slate-400 leading-relaxed mb-3">
                        {item.description}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* The 3-Stage Goal Callout */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-950/30 via-slate-900 to-slate-900 border border-blue-500/20 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold">
              Strategic Trajectory
            </span>
            <p className="text-sm sm:text-base text-slate-200">
              <strong className="text-white">TODAY:</strong> Helping startups build digital solutions &bull;{' '}
              <strong className="text-white">NEXT:</strong> Expanding reusable solutions & recurring revenue &bull;{' '}
              <strong className="text-white">FUTURE:</strong> Proprietary global products.
            </p>
          </div>
          <button
            onClick={onStartProject}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-600 cursor-pointer"
          >
            Start With SPLANJOX Today
          </button>
        </div>
      </div>
    </section>
  );
};
