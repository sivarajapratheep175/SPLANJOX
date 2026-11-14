import React, { useEffect, useRef } from 'react';
import { FileText, ShieldCheck, X } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalProps> = ({ type, onClose }) => {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!type) return;

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      previousFocusRef.current?.focus();
    };
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
        ref={dialogRef}
        className="w-full max-w-2xl max-h-[85vh] flex flex-col rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 px-5 sm:px-6 py-5 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-center text-[#2563EB] shrink-0">
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
                Updated November 2026 · Website &amp; Client Inquiries
              </p>
            </div>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="w-11 h-11 rounded-lg flex items-center justify-center text-slate-500 hover:text-[#080F1C] hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close legal dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto px-5 sm:px-6 py-6 space-y-5 text-sm text-[#64748B] leading-relaxed">
          {type === 'privacy' ? (
            <>
              <div>
                <h4 className="text-sm font-bold text-[#080F1C] mb-1.5">
                  1. Information Collected via the Inquiry Form
                </h4>
                <p>
                  When you submit a project inquiry on splanjox.vercel.app, we
                  collect only the fields you enter: your full name, email
                  address, selected project type, and project description.
                  Submissions are transmitted over HTTPS solely so SPLANJOX can
                  review and reply to your inquiry.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#080F1C] mb-1.5">
                  2. Cookies &amp; Analytics
                </h4>
                <p>
                  This website does not place advertising cookies or sell
                  visitor data to third-party brokers. Basic server request
                  metadata (such as IP-based rate limiting) is used strictly to
                  prevent automated spam submissions.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#080F1C] mb-1.5">
                  3. Project Confidentiality
                </h4>
                <p>
                  Startup concepts, technical specifications, and product
                  requirements shared with SPLANJOX are treated confidentially
                  and are never published without prior written consent.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#080F1C] mb-1.5">
                  4. Data Deletion Requests
                </h4>
                <p>
                  You may request access to or deletion of any inquiry data at
                  any time by emailing{' '}
                  <a
                    href="mailto:sivarajapratheep175@gmail.com"
                    className="text-[#2563EB] font-medium hover:underline break-all"
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
                  1. Current Services &amp; Project Scope
                </h4>
                <p>
                  SPLANJOX currently provides startup MVP development, custom
                  web and mobile application development, backend and API
                  engineering, deployment support, and practical AI automation.
                  Specific deliverables, timelines, and pricing are defined in a
                  written Scope of Work agreed upon prior to kickoff.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#080F1C] mb-1.5">
                  2. Client Intellectual Property Ownership
                </h4>
                <p>
                  Upon completion of agreed milestones and payment settlement,
                  ownership of custom project source code and deliverables
                  transfers to the client unless explicitly stated otherwise in
                  the signed Scope of Work.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#080F1C] mb-1.5">
                  3. Website Information &amp; Future Roadmap
                </h4>
                <p>
                  Sections describing long-term innovation areas (such as AI
                  research, EdTech, FinTech, and smart devices) represent
                  future areas of exploration rather than currently active
                  commercial divisions.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#080F1C] mb-1.5">
                  4. Contact
                </h4>
                <p>
                  Questions regarding these terms or active client engagements
                  can be sent directly to{' '}
                  <a
                    href="mailto:sivarajapratheep175@gmail.com"
                    className="text-[#2563EB] font-medium hover:underline break-all"
                  >
                    sivarajapratheep175@gmail.com
                  </a>
                  .
                </p>
              </div>
            </>
          )}
        </div>

        <div className="px-5 sm:px-6 py-4 border-t border-slate-200 bg-[#F8FAFC] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="min-h-[44px] px-5 py-2.5 rounded-lg bg-[#080F1C] hover:bg-slate-800 text-white text-sm font-semibold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
