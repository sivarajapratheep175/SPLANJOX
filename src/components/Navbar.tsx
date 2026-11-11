import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Palette, Calculator, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBrandKit: () => void;
  onOpenEstimator: () => void;
  onStartProject: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBrandKit,
  onOpenEstimator,
  onStartProject,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Who We Help', href: '#who-we-help' },
    { name: 'How We Work', href: '#how-we-work' },
    { name: 'Our Work', href: '#our-work' },
    { name: 'About', href: '#about' },
    { name: 'Future Vision', href: '#future-vision' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070b14]/95 border-b border-slate-800 shadow-xl shadow-black/50 backdrop-blur-md'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identification */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-[#0b1220] border border-blue-500/30 flex items-center justify-center p-1.5 shadow-md shadow-blue-500/20 group-hover:border-sky-400 transition-colors">
              <img
                src="/assets/aistudio/SVG-preview_7aa9f648.png"
                alt="SPLANJOX Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-wider text-white font-['Montserrat'] flex items-center gap-1.5">
                SPLANJOX
              </span>
              <span className="text-[10px] tracking-widest text-sky-400 font-medium uppercase">
                From Ideas to Digital Reality
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (8 navigation items per Blueprint) */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-slate-300 hover:text-sky-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            <button
              onClick={onOpenEstimator}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900/80 border border-slate-700/80 hover:text-white hover:border-slate-500 transition-all cursor-pointer"
              title="Estimate timeline and cost"
            >
              <Calculator className="w-3.5 h-3.5 text-sky-400" />
              <span>Cost Calculator</span>
            </button>

            <button
              onClick={onOpenBrandKit}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              title="Brand Guidelines & Assets"
            >
              <Palette className="w-4 h-4 text-sky-400" />
            </button>

            {/* Header Primary CTA as specified in Phase 2 */}
            <button
              onClick={onStartProject}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 transition-all cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenEstimator}
              className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white cursor-pointer"
              title="Cost Calculator"
            >
              <Calculator className="w-4 h-4 text-sky-400" />
            </button>
            <button
              onClick={onStartProject}
              className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-bold shadow-md cursor-pointer"
            >
              Start
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white cursor-pointer ml-1"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070b14]/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-slate-900 hover:text-sky-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimator();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-700 cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-sky-400" />
              <span>Project Cost & Timeline Estimator</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBrandKit();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-900/60 border border-slate-800 cursor-pointer"
            >
              <Palette className="w-3.5 h-3.5 text-sky-400" />
              <span>Brand Guidelines & Assets</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartProject();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
