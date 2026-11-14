import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Code2, Cpu, Layers, X } from 'lucide-react';

interface ServiceDetail {
  id: string;
  number: string;
  title: string;
  summary: string;
  projectType: string;
  icon: React.ComponentType<{ className?: string }>;
  capabilities: string[];
  deliverables: string[];
}

const SERVICES: ServiceDetail[] = [
  {
    id: 'product-development',
    number: '01',
    title: 'Product Development',
    summary:
      'Build launch-ready startup MVPs, modern web products, and mobile applications focused on solving real user problems.',
    projectType: 'Startup MVP',
    icon: Layers,
    capabilities: [
      'Startup MVP scoping & rapid functional builds',
      'Responsive web application development',
      'Cross-platform mobile app development',
      'Clean, usable product interfaces',
    ],
    deliverables: [
      'Product specification & architecture plan',
      'Production-ready source code with full client IP ownership',
      'Responsive UI tested across desktop and mobile viewports',
      'Initial cloud deployment & launch walkthrough',
    ],
  },
  {
    id: 'software-engineering',
    number: '02',
    title: 'Software Engineering',
    summary:
      'Design and engineer dependable backend services, REST APIs, database architectures, and ongoing technical support.',
    projectType: 'Backend & API',
    icon: Code2,
    capabilities: [
      'Backend systems & REST API development',
      'Structured relational database design',
      'Authentication, access control & security hardening',
      'Deployment pipelines & technical maintenance',
    ],
    deliverables: [
      'Modular, maintainable TypeScript or Node.js services',
      'Validated API endpoints & schema documentation',
      'Production deployment configuration & monitoring setup',
      'Post-launch technical support & bug-fix warranty',
    ],
  },
  {
    id: 'ai-automation',
    number: '03',
    title: 'AI & Automation',
    summary:
      'Integrate practical artificial intelligence and automated workflows where they measurably reduce manual work.',
    projectType: 'AI & Automation',
    icon: Cpu,
    capabilities: [
      'Workflow & operational process automation',
      'Document parsing & structured data extraction',
      'API-driven AI assistant & triage integrations',
      'Webhook & third-party system orchestration',
    ],
    deliverables: [
      'Pragmatic feasibility review before implementation',
      'Server-side API integration with proper key security',
      'Fallback handling & predictable validation rules',
      'Usage documentation & maintainability handoff',
    ],
  },
];

interface WhatWeDoSectionProps {
  onSelectService: (projectType: string, serviceTitle: string) => void;
}

export const WhatWeDoSection: React.FC<WhatWeDoSectionProps> = ({
  onSelectService,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!selectedService) return;

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedService(null);
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
  }, [selectedService]);

  return (
    <section
      id="what-we-do"
      className="bg-white text-[#080F1C] py-20 sm:py-28 border-b border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2563EB] mb-3">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#080F1C]">
            Technology That Moves Ideas Forward.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            Our current focus is helping startups and growing teams engineer
            practical, reliable software products from the ground up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-center text-[#2563EB]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-[#64748B] tabular-nums">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#080F1C] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-6">
                    {service.summary}
                  </p>

                  <ul className="space-y-2.5 border-t border-slate-100 pt-5 mb-8">
                    {service.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="text-sm text-slate-700 flex items-start gap-2.5"
                      >
                        <span className="text-[#2563EB] font-semibold leading-5">
                          —
                        </span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-2 min-h-[40px] text-sm font-semibold text-[#2563EB] hover:text-[#080F1C] rounded transition-colors cursor-pointer self-start py-1"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </article>
            );
          })}
        </div>
      </div>

      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#080F1C]/70 backdrop-blur-sm"
          onClick={() => setSelectedService(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >
          <div
            ref={dialogRef}
            className="w-full max-w-xl max-h-[85vh] flex flex-col rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 px-5 sm:px-6 py-5 border-b border-slate-200">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
                  Service {selectedService.number}
                </p>
                <h3
                  id="service-modal-title"
                  className="text-xl font-bold text-[#080F1C] mt-1"
                >
                  {selectedService.title}
                </h3>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setSelectedService(null)}
                className="w-11 h-11 rounded-lg flex items-center justify-center text-slate-500 hover:text-[#080F1C] hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close service details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto px-5 sm:px-6 py-6 space-y-6">
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                {selectedService.summary}
              </p>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#080F1C] mb-3">
                  Core Capabilities
                </h4>
                <ul className="space-y-2">
                  {selectedService.capabilities.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-slate-700 flex items-start gap-2.5"
                    >
                      <span className="text-[#2563EB] font-semibold">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#080F1C] mb-3">
                  What You Receive
                </h4>
                <ul className="space-y-2">
                  {selectedService.deliverables.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-slate-700 flex items-start gap-2.5"
                    >
                      <span className="text-[#2563EB] font-semibold">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="px-5 sm:px-6 py-4 border-t border-slate-200 bg-[#F8FAFC] flex flex-wrap items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="min-h-[44px] px-4 py-2.5 rounded-lg text-sm font-medium text-[#64748B] hover:text-[#080F1C] transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const chosen = selectedService;
                  setSelectedService(null);
                  onSelectService(chosen.projectType, chosen.title);
                }}
                className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-lg bg-[#2563EB] hover:bg-[#3B82F6] text-white text-sm font-semibold transition-colors cursor-pointer"
              >
                Discuss {selectedService.title}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
