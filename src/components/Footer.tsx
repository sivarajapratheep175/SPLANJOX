import React from 'react';
import { ArrowUp, Palette, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenBrandKit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBrandKit }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050811] border-t border-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#0b1220] border border-blue-500/40 p-1.5 flex items-center justify-center">
                <img
                  src="/assets/aistudio/SVG-preview_7aa9f648.png"
                  alt="SPLANJOX"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-extrabold text-white font-['Montserrat'] tracking-wider">
                SPLANJOX
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Beyond Innovation. Building the Future. Pioneering product development,
              mission-critical software services, and deep-tech innovation.
            </p>

            <div className="pt-2 text-xs space-y-1.5 text-slate-400">
              <div className="flex items-center gap-2">
                <span className="text-slate-500 font-mono uppercase">Concept:</span>
                <span className="text-slate-300">Technology, Software & Innovation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-500 font-mono uppercase">Leadership:</span>
                <span className="text-slate-300">Sivaraja Pratheep, Founder & CEO</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-slate-300">Sri Lanka (Initial Hub) → Global Reach</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#what-we-do" className="hover:text-sky-400 transition-colors">
                  What We Do
                </a>
              </li>
              <li>
                <a href="#purpose-mission" className="hover:text-sky-400 transition-colors">
                  Purpose & Mission
                </a>
              </li>
              <li>
                <a href="#values" className="hover:text-sky-400 transition-colors">
                  Our 6 Core Values
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-sky-400 transition-colors">
                  Our Philosophy
                </a>
              </li>
              <li>
                <a href="#divisions" className="hover:text-sky-400 transition-colors">
                  SPLANJOX Group
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sky-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Group Divisions */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Ecosystem Divisions
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <span className="text-slate-400 hover:text-slate-200">SPLANJOX Tech</span>
              <span className="text-slate-400 hover:text-slate-200">SPLANJOX AI</span>
              <span className="text-slate-400 hover:text-slate-200">SPLANJOX Labs</span>
              <span className="text-slate-400 hover:text-slate-200">SPLANJOX Education</span>
              <span className="text-slate-400 hover:text-slate-200">SPLANJOX Finance</span>
              <span className="text-slate-400 hover:text-slate-200">SPLANJOX Electronics</span>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenBrandKit}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-800 text-sky-400 hover:text-sky-300 hover:border-slate-700 transition-all cursor-pointer"
              >
                <Palette className="w-3.5 h-3.5" />
                <span>View Brand Guidelines Board</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} SPLANJOX. All rights reserved. Beyond Innovation. Building the Future.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-sky-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
