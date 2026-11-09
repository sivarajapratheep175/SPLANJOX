import React from 'react';
import { 
  Terminal, 
  BrainCircuit, 
  FlaskRound as Flask, 
  GraduationCap, 
  TrendingUp, 
  Cpu, 
  Network,
  ArrowUpRight
} from 'lucide-react';

export const GroupDivisions: React.FC = () => {
  const divisions = [
    {
      id: 'tech',
      name: 'SPLANJOX Technologies',
      domain: 'Software & IT Systems',
      icon: Terminal,
      description:
        'Custom enterprise software, modern cloud native platforms, and high-performance engineering architectures.',
      tags: ['Cloud Infrastructure', 'Web & Mobile', 'APIs & Services'],
      color: 'from-blue-600 to-sky-500',
    },
    {
      id: 'ai',
      name: 'SPLANJOX AI',
      domain: 'Artificial Intelligence',
      icon: BrainCircuit,
      description:
        'Next-generation machine intelligence, autonomous systems, data synthesis, and intelligent automation pipelines.',
      tags: ['Autonomous Agents', 'Computer Vision', 'Deep Learning'],
      color: 'from-sky-500 to-cyan-400',
    },
    {
      id: 'labs',
      name: 'SPLANJOX Labs',
      domain: 'Research & Innovation',
      icon: Flask,
      description:
        'Experimental frontier laboratory discovering tomorrow’s computational, algorithmic, and technological standards.',
      tags: ['Applied Research', 'Novel Algorithms', 'Exploratory Tech'],
      color: 'from-indigo-600 to-blue-500',
    },
    {
      id: 'edu',
      name: 'SPLANJOX Education',
      domain: 'E-Learning & Capability',
      icon: GraduationCap,
      description:
        'Digital learning ecosystems and technical talent acceleration platforms to empower next-gen tech pioneers in Sri Lanka and globally.',
      tags: ['EdTech Platforms', 'Tech Literacy', 'Skill Upskilling'],
      color: 'from-blue-500 to-teal-400',
    },
    {
      id: 'fin',
      name: 'SPLANJOX Finance',
      domain: 'FinTech Solutions',
      icon: TrendingUp,
      description:
        'Secure transactional infrastructure, financial automation, compliance software, and modern payment orchestration.',
      tags: ['Financial Workflows', 'Ledger Architecture', 'Micro-transactions'],
      color: 'from-cyan-500 to-blue-600',
    },
    {
      id: 'elec',
      name: 'SPLANJOX Electronics',
      domain: 'Smart Devices & Hardware',
      icon: Cpu,
      description:
        'Embedded hardware systems, sensor networks, smart consumer electronics, and IoT connected telemetry modules.',
      tags: ['Embedded Systems', 'IoT Hardware', 'Firmware Engineering'],
      color: 'from-sky-600 to-indigo-600',
    },
  ];

  return (
    <section id="divisions" className="relative py-28 bg-[#070b14] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-xs font-semibold text-sky-400 uppercase tracking-widest mb-4">
            <Network className="w-3.5 h-3.5" />
            <span>Organizational Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Montserrat']">
            SPLANJOX Group Structure
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A cohesive matrix of specialized technological divisions working in unison to build tomorrow’s infrastructure.
          </p>
        </div>

        {/* Divisions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {divisions.map((div) => {
            const Icon = div.icon;
            return (
              <div
                key={div.id}
                className="group relative rounded-2xl bg-[#0b1220] border border-slate-800 p-7 hover:border-slate-700 hover:bg-slate-900/70 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${div.color} flex items-center justify-center text-white shadow-md`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-sky-400 font-semibold bg-sky-950/60 px-2.5 py-1 rounded-md border border-sky-800/50">
                      {div.domain}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 font-['Montserrat'] group-hover:text-sky-300 transition-colors">
                    {div.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {div.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {div.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
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
