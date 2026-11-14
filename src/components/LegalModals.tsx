import React, { useEffect } from 'react';
import { FileText, ShieldCheck, X } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    if (!type) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#080F1C]/70 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div
        className="w-full max-w-2xl max-h-[85vh] flex flex-col rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 px-6 py-5 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-center text-[#2563EB]">
              {type === 'privacy' ? (
                <ShieldCheck className="w-5 h-5" />
              ) : (
                <FileText className="w-5 h-5" />
              )}
            </div>
            <div>
              <h3
                id="legal-modal-title"
                className="text-base font-bold text-[#080F1C]"
              >
                {type === 'privacy'
                  ? 'SPLANJOX Privacy Policy'
                  : 'SPLANJOX Terms of Service'}
              </h3>
              <p className="text-xs text-[#64748B]">
                Updated 2026 · Effective for website &amp; client inquiries
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-500 hover:text-[#080F1C] hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close legal dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto px-6 py-6 space-y-5 text-sm text-[#64748B] leading-relaxed">
          {type === 'privacy' ? (
            <>
              <div>
                <h4 className="text-sm font-bold text-[#080F1C] mb-1.5">
                  1. Information We Collect
                </h4>
                <p>
                  When you submit an inquiry through this website, we collect
                  your name, email address, selected project type, and project
                  description. We do not sell, rent, or distribute your inquiry
                  data to third-party brokers or advertisers.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#080F1C] mb-1.5">
                  2. Project Confidentiality
                </h4>
                <p>
                  All startup concepts, technical requirements, and business
                  context shared with SPLANJOX are treated as confidential and
                  used strictly to evaluate and respond to your inquiry.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#080F1C] mb-1.5">
                  3. Data Retention &amp; Deletion
                </h4>
                <p>
                  You may request deletion of your contact inquiry at any time by
                  emailing{' '}
                  <a
                    href="mailto:sivarajapratheep175@gmail.com"
                    className="text-[#2563EB] font-medium hover:underline"
                  >
                    sivarajapratheep175@gmail.com
                  </a>
                  .
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h4 className="text-sm font-bold text-[#080F1C] mb-1.5">
                  1. Scope of Engagements
                </h4>
                <p>
                  All software development, MVP engineering, and consulting
                  services are governed by a mutually agreed Scope of Work (SOW)
                  reviewed prior to project kickoff.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#080F1C] mb-1.5">
                  2. Intellectual Property Ownership
                </h4>
                <p>
                  Upon milestone completion and settlement, ownership of custom
                  deliverables, source code, and project assets transfers
                  directly to the client unless explicitly stated otherwise in
                  writing.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#080F1C] mb-1.5">
                  3. Communication &amp; Support
                </h4>
                <p>
                  For questions regarding active engagements or terms, contact
                  SPLANJOX directly at{' '}
                  <a
                    href="mailto:sivarajapratheep175@gmail.com"
                    className="text-[#2563EB] font-medium hover:underline"
                  >
                    sivarajapratheep175@gmail.com
                  </a>
                  .
                </p>
              </div>
            </>
          )}
        </div>

        <div className="px-6 py-4 border-t border-slate-200 bg-[#F8FAFC] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-[#080F1C] hover:bg-slate-800 text-white text-sm font-semibold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
