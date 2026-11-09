import React from 'react';
import { ArrowRight, ChevronDown, Sparkles, MapPin, Layers, Terminal } from 'lucide-react';
import { ThreeHeroScene } from './ThreeHeroScene';

interface HeroSectionProps {
  onOpenBrandKit: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBrandKit }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth';
      el.scrollIntoView({ behavior, block: 'start' });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between pt-24 pb-[220px] lg:pb-12 overflow-hidden bg-[#070b14]">
      {/* 3D WebGL Background / Stage */}
      <div className="absolute inset-0 z-0">
        <ThreeHeroScene onExploreClick={() => scrollToSection('what-we-do')} />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto pointer-events-none">
        <div className="max-w-3xl pt-8 pb-16">
          {/* Top Tag & Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/30 text-xs text-slate-200 mb-6 shadow-lg pointer-events-auto">
            <span className="flex h-2 w-2 rounded-full bg-blue-500" />
            <span className="font-semibold text-sky-400">SPLANJOX</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">Software • Innovation • Deep Tech</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] font-['Montserrat'] mb-6 drop-shadow-md">
            SPLANJOX
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-200 bg-clip-text text-transparent mt-2">
              Beyond Innovation. Building the Future.
            </span>
          </h1>

          {/* Narrative text from PDF & Brand Board */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal drop-shadow">
            We identify real-world challenges and transform them into practical, innovative,
            and accessible software solutions. Operating across product development,
            enterprise software services, and frontier research.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pointer-events-auto">
            <button
              onClick={() => scrollToSection('what-we-do')}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 transition-all cursor-pointer group"
            >
              <span>Explore What We Do</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 transition-all cursor-pointer shadow-lg"
            >
              <span>Contact Us</span>
            </a>

            <button
              onClick={onOpenBrandKit}
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-sm font-semibold text-sky-400 hover:text-sky-300 hover:bg-sky-950/30 transition-colors cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Brand Board</span>
            </button>
          </div>

          {/* Founder & Market Spec Footnotes */}
          <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-400 pointer-events-auto">
            <div className="flex items-center gap-2">
              <span className="text-slate-500 uppercase tracking-wider font-mono">Founder:</span>
              <span className="text-slate-200 font-medium">Sivaraja Pratheep</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-slate-200">Sri Lanka to Global Markets</span>
            </div>
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-sky-400" />
              <span className="text-slate-200">Problem-First Architecture</span>
            </div>
          </div>
        </div>
      </div>

      {/* Down Scroll Prompt */}
      <div className="relative z-10 flex justify-center pointer-events-auto sm:hidden lg:flex lg:justify-start lg:pl-4">
        <button
          onClick={() => scrollToSection('what-we-do')}
          className="p-2 rounded-full text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Scroll down to What We Do"
        >
          <ChevronDown className="w-5 h-5 animate-bounce text-sky-400" />
        </button>
      </div>
    </section>
  );
};
