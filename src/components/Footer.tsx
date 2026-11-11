import React from 'react';
import { ArrowUp, Palette, Mail, MapPin, Linkedin, Github, ShieldCheck, FileText } from 'lucide-react';

interface FooterProps {
  onOpenBrandKit: () => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBrandKit,
  onOpenPrivacy,
  onOpenTerms,
}) => {
  const scrollToTop = () => {
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'auto'
      : 'smooth';
    window.scrollTo({ top: 0, behavior });
  };

  return (
    <footer className="bg-[#050811] border-t border-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info & Tagline */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0b1220] border border-blue-500/40 p-1.5 flex items-center justify-center">
                <img
                  src="/assets/aistudio/SVG-preview_7aa9f648.png"
                  alt="SPLANJOX Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-white font-['Montserrat'] tracking-wider">
                  SPLANJOX
                </span>
                <span className="text-[10px] tracking-widest text-sky-400 font-semibold uppercase">
                  From Ideas to Digital Reality
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              SPLANJOX helps startups and entrepreneurs transform their ideas into practical digital solutions through software development and technology services.
            </p>

            <div className="pt-2 text-xs space-y-1.5 text-slate-400">
              <div className="flex items-center gap-2">
                <span className="text-slate-500 font-mono uppercase">Positioning:</span>
                <span className="text-slate-300">Startup Technology Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-500 font-mono uppercase">Founder:</span>
                <span className="text-slate-300">Sivaraja Pratheep</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-slate-300">Sri Lanka (Initial) &bull; Global Operations</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-sky-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#who-we-help" className="hover:text-sky-400 transition-colors">
                  Who We Help
                </a>
              </li>
              <li>
                <a href="#how-we-work" className="hover:text-sky-400 transition-colors">
                  How We Work
                </a>
              </li>
              <li>
                <a href="#our-work" className="hover:text-sky-400 transition-colors">
                  Our Work & Portfolio
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-sky-400 transition-colors">
                  About SPLANJOX
                </a>
              </li>
              <li>
                <a href="#future-vision" className="hover:text-sky-400 transition-colors">
                  Future Vision
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sky-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links & Direct Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Startup MVP Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Website & Web App Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Backend & REST API Systems
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Maintenance & Technical Support
                </a>
              </li>
            </ul>

            {/* Active Social Channels & Brand Kit */}
            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer"
                  title="Founder LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer"
                  title="SPLANJOX GitHub"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={onOpenBrandKit}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 border border-slate-800 text-sky-400 hover:text-white hover:border-slate-700 transition-all cursor-pointer"
                >
                  <Palette className="w-3.5 h-3.5" />
                  <span>Brand Assets</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-4">
            <p>© {new Date().getFullYear()} SPLANJOX. All rights reserved.</p>
            <span>•</span>
            <button
              onClick={onOpenPrivacy}
              className="text-slate-400 hover:text-sky-400 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={onOpenTerms}
              className="text-slate-400 hover:text-sky-400 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>

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
