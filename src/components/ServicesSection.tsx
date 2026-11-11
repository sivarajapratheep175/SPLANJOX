import React, { useState } from 'react';
import { 
  Rocket, 
  Globe, 
  Smartphone, 
  Server, 
  Wrench, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  X,
  Clock,
  Layers
} from 'lucide-react';
import { servicesData, ServiceItem } from '../data/servicesData';

interface ServicesSectionProps {
  onSelectServiceForInquiry: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForInquiry,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'startup-mvp':
        return Rocket;
      case 'website-web-app':
        return Globe;
      case 'mobile-app':
        return Smartphone;
      case 'backend-api':
        return Server;
      case 'maintenance-support':
        return Wrench;
      default:
        return Rocket;
    }
  };

  return (
    <section id="services" className="relative py-28 bg-[#070b14] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-xs font-semibold text-sky-400 uppercase tracking-widest mb-4">
            <span>Engineering Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Montserrat']">
            Our Core Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Practical, end-to-end software development services tailored for founders, early-stage startups, and growing enterprises.
          </p>
        </div>

        {/* 5 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => {
            const Icon = getServiceIcon(service.id);
            return (
              <div
                key={service.id}
                className={`relative rounded-3xl bg-[#0b1220] border border-slate-800 p-8 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-950/40 ${
                  idx === 0 ? 'lg:col-span-1 border-blue-500/30' : ''
                }`}
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md">
                      Service {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-white mb-2 font-['Montserrat']">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-sky-300/90 font-medium mb-4 leading-snug">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* What We Deliver List (Preview) */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                      What We Deliver:
                    </span>
                    {service.deliverables.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-5 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>View All Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onSelectServiceForInquiry(service.title)}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-blue-600 text-slate-200 hover:text-white transition-all cursor-pointer"
                  >
                    Start Project
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900 to-slate-900 border border-blue-500/20 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-sky-400" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white font-['Montserrat']">
                Need a Custom Architectural Hybrid?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                We frequently combine web, mobile, and custom API layers into single unified startup launches.
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelectServiceForInquiry('Custom Tech Solution')}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors cursor-pointer shadow-md"
          >
            Custom Architecture Scope
          </button>
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-3xl bg-[#0b1220] border border-blue-500/40 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-sky-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                  {selectedService.number}
                </span>
                <h3 className="text-base font-bold text-white font-['Montserrat']">
                  {selectedService.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div>
                <p className="text-sm text-sky-300 font-semibold mb-2">
                  {selectedService.tagline}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedService.description}
                </p>
              </div>

              {/* Scope & Deliverables */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-3">
                  Comprehensive Deliverables:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Phases */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-3">
                  Execution Phases:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.stages.map((stage, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                      <span className="block text-xs font-bold text-white font-['Montserrat'] mb-1">
                        Phase {i + 1}: {stage.phase}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {stage.details}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal for & Typical Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                <div>
                  <span className="text-slate-400 block mb-1 font-mono uppercase">Ideal For:</span>
                  <span className="text-white font-medium">{selectedService.idealFor}</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-1 font-mono uppercase">Typical Timeline:</span>
                  <span className="text-sky-300 font-semibold">{selectedService.typicalTimeline}</span>
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  Delivered Using Modern Stacks:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedService.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800 text-sky-300 border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/90 flex items-center justify-between">
              <button
                onClick={() => setSelectedService(null)}
                className="text-xs text-slate-400 hover:text-white cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onSelectServiceForInquiry(title);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md cursor-pointer"
              >
                <span>Request {selectedService.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
