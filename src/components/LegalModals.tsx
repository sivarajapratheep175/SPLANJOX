import React from 'react';
import { X, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-3xl bg-[#0b1220] border border-slate-700 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-sky-400">
              {type === 'privacy' ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-['Montserrat']">
                {type === 'privacy' ? 'SPLANJOX Privacy Policy' : 'SPLANJOX Terms of Service'}
              </h3>
              <p className="text-xs text-slate-400">
                Last updated: 2026 • Effective for all client engagements
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm text-slate-300 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <div>
                <h4 className="text-sm font-bold text-white font-['Montserrat'] mb-2">
                  1. Information We Collect
                </h4>
                <p>
                  When you submit an inquiry through our website, we collect your name, email address, company or startup name, and project specifications. We do not sell, rent, or lease your private inquiry information to third-party advertisers or brokers under any circumstance.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white font-['Montserrat'] mb-2">
                  2. Project Confidentiality & Non-Disclosure
                </h4>
                <p>
                  We treat all startup ideas, business models, and technical requirements shared with SPLANJOX as strictly confidential. Client project details, proprietary concepts, and source code are never published or shared publicly without prior written authorization.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white font-['Montserrat'] mb-2">
                  3. Data Security & Storage
                </h4>
                <p>
                  We implement industry-standard encryption protocols (HTTPS/TLS) across all communications and secure server storage. Access to project records is restricted strictly to assigned development personnel.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white font-['Montserrat'] mb-2">
                  4. Your Rights
                </h4>
                <p>
                  You may request the full deletion of your contact records or project inquiry data at any time by contacting our founder directly at{' '}
                  <span className="text-sky-400 font-mono">sivarajapratheep175@gmail.com</span>.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h4 className="text-sm font-bold text-white font-['Montserrat'] mb-2">
                  1. Engagement & Scope of Work
                </h4>
                <p>
                  All software services, web development, mobile application builds, and MVP projects are governed by an itemized Scope of Work (SOW) mutually reviewed and approved prior to commencement.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white font-['Montserrat'] mb-2">
                  2. 100% Client Intellectual Property (IP) Ownership
                </h4>
                <p>
                  Upon final milestone delivery and payment settlement, full ownership of all custom software code, databases, design assets, and credentials transfers entirely to the client. SPLANJOX retains no proprietary lock-in on custom client codebases.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white font-['Montserrat'] mb-2">
                  3. Milestone-Based Payments
                </h4>
                <p>
                  Projects typically operate on structured milestones (e.g., initial discovery & design, core sprint development, final testing & deployment). This protects both the founder and the engineering team by tying disbursements to tangible functional demos.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white font-['Montserrat'] mb-2">
                  4. Warranty & Technical Support
                </h4>
                <p>
                  Every completed project includes a standard post-launch bug-fix warranty period. Extended maintenance and feature enhancement packages are available on monthly agreements.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/90 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
