import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Code2, 
  Layers, 
  Lightbulb, 
  CheckCircle2, 
  Milestone,
  Target
} from 'lucide-react';

interface IntroductionSectionProps {
  onStartProject: () => void;
}

export const IntroductionSection: React.FC<IntroductionSectionProps> = ({ onStartProject }) => {
  const threeStages = [
    {
      period: 'TODAY',
      label: 'Stage 01',
      title: 'Startup Software Solutions',
      summary: 'Helping startups, entrepreneurs, and local businesses build practical digital solutions and MVPs.',
      accent: 'border-blue-500/40 text-blue-400 bg-blue-950/20',
      status: 'Active Business Focus',
    },
    {
      period: 'NEXT',
      label: 'Stage 02',
      title: 'Expanding Capabilities & Reusable Systems',
      summary: 'Broadening engineering toolkits, recurring revenue frameworks, and modular software architectures.',
      accent: 'border-sky-500/40 text-sky-400 bg-sky-950/20',
      status: 'Near-Term Evolution',
    },
    {
      period: 'FUTURE',
      label: 'Stage 03',
      title: 'Proprietary Products & Global Growth',
      summary: 'Creating intelligent software products, technology research, and scaling internationally.',
      accent: 'border-indigo-500/40 text-indigo-400 bg-indigo-950/20',
      status: 'Long-Term Vision',
    },
  ];

  return (
    <section className="relative py-24 bg-[#0a0f1d] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-xs font-semibold text-sky-400 uppercase tracking-widest">
              <Target className="w-3.5 h-3.5" />
              <span>Startup Tech Partnership</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Montserrat'] leading-tight">
              Your Technology Partner for Startup Growth.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Starting a business or building a new product requires more than an idea.
              You need the right technology, development strategy, and dependable technical support.
              SPLANJOX helps founders move seamlessly from concept to working digital solutions.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-300">
                  <strong className="text-white">Lean Development:</strong> We prioritize what drives early traction over bloated feature lists.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-300">
                  <strong className="text-white">Transparent Communication:</strong> No technical jargon walls. Direct access to your lead engineer.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-300">
                  <strong className="text-white">Predictable Budgets:</strong> Structured milestones with clear deliverable acceptance.
                </span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onStartProject}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/20 transition-all cursor-pointer"
              >
                <span>Discuss Your Startup Idea</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: 3 Stages Roadmap Card */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-[#0b1220] border border-blue-500/30 p-7 sm:p-9 shadow-2xl relative">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-lg font-bold text-white font-['Montserrat']">
                    The SPLANJOX Journey
                  </h3>
                  <p className="text-xs text-slate-400">
                    A transparent 3-stage business evolution roadmap
                  </p>
                </div>
                <Milestone className="w-5 h-5 text-sky-400" />
              </div>

              <div className="space-y-4">
                {threeStages.map((stage, idx) => (
                  <div
                    key={stage.period}
                    className={`p-4 rounded-2xl border transition-all ${
                      idx === 0
                        ? 'bg-blue-950/40 border-blue-500/50 shadow-inner'
                        : 'bg-slate-900/60 border-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
                        {stage.period} — {stage.label}
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                        idx === 0
                          ? 'bg-blue-600/20 border-blue-500/50 text-blue-300'
                          : 'bg-slate-800 border-slate-700 text-slate-400'
                      }`}>
                        {stage.status}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white font-['Montserrat'] mb-1">
                      {stage.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {stage.summary}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Initial Market: Sri Lanka</span>
                <span>•</span>
                <span>Future Market: International</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
