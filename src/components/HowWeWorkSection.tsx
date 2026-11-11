import React, { useState } from 'react';
import { 
  GitBranch, 
  MessageSquare, 
  FileText, 
  Target, 
  Calculator, 
  ShieldCheck, 
  Palette, 
  Code2, 
  CheckCircle2, 
  Rocket, 
  Wrench,
  ArrowRight,
  Gift
} from 'lucide-react';
import { howWeWorkData, ProcessStep } from '../data/howWeWorkData';

interface HowWeWorkSectionProps {
  onStartProject: () => void;
}

export const HowWeWorkSection: React.FC<HowWeWorkSectionProps> = ({ onStartProject }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare':
        return MessageSquare;
      case 'FileText':
        return FileText;
      case 'Target':
        return Target;
      case 'Calculator':
        return Calculator;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Palette':
        return Palette;
      case 'Code2':
        return Code2;
      case 'CheckCircle2':
        return CheckCircle2;
      case 'Rocket':
        return Rocket;
      case 'Wrench':
        return Wrench;
      default:
        return CheckCircle2;
    }
  };

  const selectedStepData = howWeWorkData.find((s) => s.step === activeStep) || howWeWorkData[0];
  const StepIcon = getStepIcon(selectedStepData.iconName);

  return (
    <section id="how-we-work" className="relative py-28 bg-[#070b14] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-xs font-semibold text-sky-400 uppercase tracking-widest mb-4">
            <GitBranch className="w-3.5 h-3.5" />
            <span>Structured Development Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Montserrat']">
            From Idea to Launch.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A transparent 10-step development process designed to eliminate uncertainty, ensure budget predictability, and deliver software on schedule.
          </p>
        </div>

        {/* Step Selector Pills (Horizontal Scrollable on mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {howWeWorkData.map((step) => {
            const isSelected = activeStep === step.step;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(step.step)}
                className={`shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-sky-400'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                <span className="font-mono text-[11px] opacity-75">
                  {step.step < 10 ? `0${step.step}` : step.step}
                </span>
                <span>{step.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Step Spotlight Card */}
        <div className="rounded-3xl bg-[#0b1220] border border-blue-500/30 p-8 sm:p-10 shadow-2xl relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-wider font-semibold">
                <span>Phase {selectedStepData.step} of 10</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Montserrat']">
                {selectedStepData.title}
              </h3>
              <p className="text-sm font-semibold text-sky-300">
                {selectedStepData.tagline}
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedStepData.description}
              </p>

              {/* What Client Receives Highlight Box */}
              <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-500/30 mt-6">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-300 font-bold mb-1.5">
                  <Gift className="w-4 h-4 text-sky-400" />
                  <span>What You Receive at This Stage:</span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-white leading-relaxed">
                  {selectedStepData.clientReceives}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center items-center p-8 rounded-2xl bg-slate-900 border border-slate-800 text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-400 flex items-center justify-center text-white mb-4 shadow-xl shadow-blue-500/20">
                <StepIcon className="w-10 h-10" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Workflow Checkpoint 0{selectedStepData.step}
              </span>
              <p className="text-xs text-slate-300 max-w-xs mb-6">
                Clear sign-off criteria before proceeding to the next sprint.
              </p>
              <div className="flex items-center gap-2">
                <button
                  disabled={activeStep === 1}
                  onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-xs text-slate-300 cursor-pointer disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <button
                  disabled={activeStep === 10}
                  onClick={() => setActiveStep(Math.min(10, activeStep + 1))}
                  className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-xs text-white cursor-pointer disabled:cursor-not-allowed"
                >
                  Next Phase
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 10-Step Timeline Compact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {howWeWorkData.map((step) => {
            const Icon = getStepIcon(step.iconName);
            const isCurrent = activeStep === step.step;
            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(step.step)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                  isCurrent
                    ? 'bg-slate-800 border-sky-400 shadow-md'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-sky-400">
                    0{step.step}
                  </span>
                  <Icon className="w-4 h-4 text-slate-400" />
                </div>
                <h4 className="text-xs font-bold text-white font-['Montserrat'] mb-1 truncate">
                  {step.title}
                </h4>
                <p className="text-[11px] text-slate-400 line-clamp-2 leading-snug">
                  {step.tagline}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
