import React from "react";
import { Quote, CheckCircle, ShieldAlert, Zap, Terminal } from "lucide-react";

export const PhilosophySection: React.FC = () => {
  return (
    <section
      id="philosophy"
      className="relative py-28 bg-[#0a0f1d] border-t border-slate-800 overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Pill */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-xs font-semibold text-sky-400 uppercase tracking-widest">
            <Quote className="w-3.5 h-3.5" />
            <span>The Foundational Creed</span>
          </div>
        </div>

        {/* Central Quote Showcase */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <blockquote className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-['Montserrat'] tracking-tight">
            “We don’t build software just because we can.{" "}
            <span>We build software because it solves a problem.</span>”
          </blockquote>

          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center font-bold text-sky-400 font-['Montserrat']">
              SP
            </div>
            <div className="text-left">
              <span className="block text-sm font-bold text-white">
                Sivaraja Pratheep
              </span>
              <span className="block text-xs text-sky-400 font-medium">
                Founder & CEO, SPLANJOX
              </span>
            </div>
          </div>
        </div>

        {/* The 3-Stage Problem-First Filter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-slate-800/80">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-sky-400 mb-4 font-mono font-bold text-sm">
              01
            </div>
            <h4 className="text-lg font-bold text-white mb-2 font-['Montserrat']">
              Ruthless Problem Validation
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Before a single repository is initialized, we investigate the root
              operational friction. If a solution does not remove authentic
              friction or provide measurable value, it is not worth building.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400 mb-4 font-mono font-bold text-sm">
              02
            </div>
            <h4 className="text-lg font-bold text-white mb-2 font-['Montserrat']">
              Pragmatic Engineering
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We eschew bloated frameworks and artificial complexity in favor of
              resilient, maintainable, and performant codebases designed to
              withstand production workloads effortlessly.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-cyan-400 mb-4 font-mono font-bold text-sm">
              03
            </div>
            <h4 className="text-lg font-bold text-white mb-2 font-['Montserrat']">
              Compounding Real-World Impact
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Software is an instrument of human enablement. Our metrics are not
              vanity lines of code, but uptime, efficiency gains, and empowering
              communities and organizations forward.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
