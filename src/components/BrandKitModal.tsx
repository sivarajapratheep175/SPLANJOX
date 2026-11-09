import React, { useState } from 'react';
import { X, Copy, Check, ExternalLink, Download, Palette, Sparkles, Layers } from 'lucide-react';

interface BrandKitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandKitModal: React.FC<BrandKitModalProps> = ({ isOpen, onClose }) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'board' | 'mockup' | 'colors'>('board');

  if (!isOpen) return null;

  const brandColors = [
    { name: 'Royal Blue', hex: '#2563EB', role: 'Primary Brand Color', textColor: 'text-white' },
    { name: 'Deep Navy', hex: '#0B1220', role: 'Primary Dark Background', textColor: 'text-white' },
    { name: 'Electric Cyan', hex: '#00D2FE', role: 'High-Tech Accent & Glow', textColor: 'text-slate-900' },
    { name: 'Silver', hex: '#C0C6D4', role: 'Secondary Accents & Borders', textColor: 'text-slate-900' },
    { name: 'Charcoal', hex: '#0A0A0A', role: 'Deep Contrast & Canvas', textColor: 'text-white' },
  ];

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-3xl bg-[#0b1220] border border-blue-500/40 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/40 p-1 flex items-center justify-center">
              <img
                src="/assets/aistudio/SVG-preview_7aa9f648.png"
                alt="SPLANJOX"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-['Montserrat']">
                SPLANJOX Brand Guidelines & Assets
              </h3>
              <p className="text-xs text-sky-400">
                Official Visual Identity & System Architecture
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Tab switchers */}
            <div className="hidden sm:flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
              <button
                onClick={() => setActiveTab('board')}
                className={`px-3 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                  activeTab === 'board' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Guidelines Board
              </button>
              <button
                onClick={() => setActiveTab('mockup')}
                className={`px-3 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                  activeTab === 'mockup' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Stationery & Showcase
              </button>
              <button
                onClick={() => setActiveTab('colors')}
                className={`px-3 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                  activeTab === 'colors' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Color System
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Active Tab View */}
          {activeTab === 'board' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold text-white font-['Montserrat']">
                    Futuristic Brand Guidelines Board
                  </h4>
                  <p className="text-xs text-slate-400">
                    Comprehensive overview including logo variations, color palette, app icons, typography, and brand principles.
                  </p>
                </div>
                <a
                  href="/assets/aistudio/Splanjox_Futuristic_Brand_Guidelines_Board_809c0db5.png"
                  target="_blank"
                  rel="noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Full Size</span>
                </a>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-800 bg-black/60 flex items-center justify-center p-2">
                <img
                  src="/assets/aistudio/Splanjox_Futuristic_Brand_Guidelines_Board_809c0db5.png"
                  alt="SPLANJOX Brand Guidelines Board"
                  className="w-full h-auto max-h-[60vh] object-contain rounded-xl"
                />
              </div>
            </div>
          )}

          {activeTab === 'mockup' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold text-white font-['Montserrat']">
                    Stationery, Merch & Brand Presence Showcase
                  </h4>
                  <p className="text-xs text-slate-400">
                    Executive business cards, corporate stationery, laptop wallpaper interface, and apparel.
                  </p>
                </div>
                <a
                  href="/assets/aistudio/1794233207296_30cf01ad.jpg"
                  target="_blank"
                  rel="noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Full Size</span>
                </a>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-800 bg-black/60 flex items-center justify-center p-2">
                <img
                  src="/assets/aistudio/1794233207296_30cf01ad.jpg"
                  alt="SPLANJOX Stationery & Merchandise Showcase"
                  className="w-full h-auto max-h-[60vh] object-contain rounded-xl"
                />
              </div>
            </div>
          )}

          {activeTab === 'colors' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-white font-['Montserrat']">
                  Official SPLANJOX Color Palette
                </h4>
                <p className="text-xs text-slate-400">
                  Click any swatch to copy the hexadecimal color code directly to your clipboard.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {brandColors.map((color) => (
                  <div
                    key={color.hex}
                    onClick={() => copyToClipboard(color.hex)}
                    className="group rounded-2xl bg-slate-900 border border-slate-800 p-4 hover:border-slate-700 cursor-pointer transition-all hover:scale-[1.02]"
                  >
                    <div
                      className="w-full h-24 rounded-xl mb-3 shadow-inner flex items-center justify-center relative overflow-hidden"
                      style={{ backgroundColor: color.hex }}
                    >
                      <span className={`text-xs font-bold font-mono px-2 py-1 rounded bg-black/40 backdrop-blur-xs ${color.textColor}`}>
                        {color.hex}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="block text-sm font-bold text-white font-['Montserrat']">
                          {color.name}
                        </span>
                        <span className="block text-[11px] text-slate-400">
                          {color.role}
                        </span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-slate-800 text-slate-300 group-hover:text-white">
                        {copiedHex === color.hex ? (
                          <Check className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Typography specs */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <span className="text-xs font-mono text-sky-400 uppercase tracking-wider block mb-1">
                    Primary Headline Typography
                  </span>
                  <h5 className="text-2xl font-black text-white font-['Montserrat'] mb-2">
                    Montserrat
                  </h5>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Used for all primary headings, titles, hero typography, and division marks. Conveys futuristic authority, geometric balance, and boldness.
                  </p>
                </div>
                <div>
                  <span className="text-xs font-mono text-sky-400 uppercase tracking-wider block mb-1">
                    Secondary Body Typography
                  </span>
                  <h5 className="text-2xl font-normal text-white font-['Inter'] mb-2">
                    Inter Sans
                  </h5>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Used for long-form narrative, technical specs, user interfaces, and navigation. Engineered for supreme readability across high-DPI screens.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/90 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>© SPLANJOX All Rights Reserved</span>
            <span>•</span>
            <span>Proprietary Brand Architecture</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold cursor-pointer"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
