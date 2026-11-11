import React, { useState } from 'react';
import { 
  X, 
  Calculator, 
  Clock, 
  DollarSign, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Info
} from 'lucide-react';

interface ProjectEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyToContact: (projectDetails: {
    projectType: string;
    timeline: string;
    budget: string;
    description: string;
  }) => void;
}

export const ProjectEstimatorModal: React.FC<ProjectEstimatorModalProps> = ({
  isOpen,
  onClose,
  onApplyToContact,
}) => {
  const [projectType, setProjectType] = useState<'mvp' | 'website' | 'webapp' | 'mobile' | 'backend'>('mvp');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'auth',
    'admin',
  ]);
  const [urgency, setUrgency] = useState<'standard' | 'accelerated'>('standard');

  if (!isOpen) return null;

  const typeConfig = {
    mvp: {
      name: 'Startup MVP',
      baseWeeks: 6,
      baseEstimateMin: 1200,
      baseEstimateMax: 2800,
      description: 'Functional version 1.0 designed for early market validation and user testing.',
    },
    website: {
      name: 'Website & Landing Page',
      baseWeeks: 3,
      baseEstimateMin: 450,
      baseEstimateMax: 1100,
      description: 'High-performance responsive site with SEO, brand aesthetics, and lead forms.',
    },
    webapp: {
      name: 'Custom Web Application',
      baseWeeks: 8,
      baseEstimateMin: 1800,
      baseEstimateMax: 4200,
      description: 'Complex multi-user SaaS portal, workflow automation, and custom dashboards.',
    },
    mobile: {
      name: 'Mobile Application',
      baseWeeks: 9,
      baseEstimateMin: 2000,
      baseEstimateMax: 4800,
      description: 'iOS & Android cross-platform application with offline storage and push alerts.',
    },
    backend: {
      name: 'Backend & REST API',
      baseWeeks: 4,
      baseEstimateMin: 800,
      baseEstimateMax: 2200,
      description: 'Scalable database schema, authentication, API endpoints, and cloud setup.',
    },
  };

  const featureOptions = [
    { id: 'auth', label: 'User Authentication & RBAC', weekDelta: 0.5, costDelta: 250 },
    { id: 'payments', label: 'Payment Gateway (PayHere / Stripe)', weekDelta: 0.5, costDelta: 300 },
    { id: 'admin', label: 'Admin Analytics & Management Portal', weekDelta: 1, costDelta: 400 },
    { id: 'api_sync', label: 'Third-party API & Webhook Integration', weekDelta: 0.5, costDelta: 250 },
    { id: 'offline', label: 'Offline Caching & Sync (Mobile/PWA)', weekDelta: 1, costDelta: 350 },
    { id: 'messaging', label: 'Real-time Chat or In-App Notifications', weekDelta: 1, costDelta: 400 },
  ];

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  // Calculate totals
  const currentConfig = typeConfig[projectType];
  const featureCost = selectedFeatures.reduce((acc, featId) => {
    const feat = featureOptions.find((f) => f.id === featId);
    return acc + (feat ? feat.costDelta : 0);
  }, 0);

  const featureWeeks = selectedFeatures.reduce((acc, featId) => {
    const feat = featureOptions.find((f) => f.id === featId);
    return acc + (feat ? feat.weekDelta : 0);
  }, 0);

  const totalWeeks = Math.ceil(
    (currentConfig.baseWeeks + featureWeeks) * (urgency === 'accelerated' ? 0.75 : 1)
  );

  const totalMin = Math.round((currentConfig.baseEstimateMin + featureCost) / 50) * 50;
  const totalMax = Math.round((currentConfig.baseEstimateMax + featureCost * 1.2) / 50) * 50;

  const handleApply = () => {
    const featureLabels = selectedFeatures
      .map((id) => featureOptions.find((f) => f.id === id)?.label)
      .filter(Boolean)
      .join(', ');

    onApplyToContact({
      projectType: currentConfig.name,
      timeline: `${totalWeeks} weeks (${urgency === 'accelerated' ? 'Accelerated sprint' : 'Standard pace'})`,
      budget: `$${totalMin} - $${totalMax} USD`,
      description: `Project Type: ${currentConfig.name}\nRequired Features: ${featureLabels || 'Standard core features'}\nEstimated Timeline: ~${totalWeeks} weeks\nEstimated Budget Band: $${totalMin} - $${totalMax} USD`,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col rounded-3xl bg-[#0b1220] border border-blue-500/40 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-sky-400">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-['Montserrat']">
                Interactive Project Estimator
              </h3>
              <p className="text-xs text-slate-400">
                Transparent timeline and scope planning for startups and founders
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close estimator"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Step 1: Project Type */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-3">
              1. Select Project Category
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {(Object.keys(typeConfig) as (keyof typeof typeConfig)[]).map((key) => {
                const isSelected = projectType === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setProjectType(key)}
                    className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600/20 border-sky-400 text-white shadow-md shadow-blue-500/10'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span className="block text-xs font-bold font-['Montserrat'] mb-1">
                      {typeConfig[key].name}
                    </span>
                    <span className="block text-[11px] text-slate-400 leading-snug">
                      ~{typeConfig[key].baseWeeks} wks base
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="mt-2 text-xs text-slate-400 italic">
              {currentConfig.description}
            </p>
          </div>

          {/* Step 2: Scope & Features */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-3">
              2. Select Required Capabilities
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {featureOptions.map((feat) => {
                const isChecked = selectedFeatures.includes(feat.id);
                return (
                  <div
                    key={feat.id}
                    onClick={() => toggleFeature(feat.id)}
                    className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      isChecked
                        ? 'bg-slate-800/90 border-blue-500/60 text-white'
                        : 'bg-slate-900/60 border-slate-800/80 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center text-[10px] ${
                          isChecked ? 'bg-blue-600 text-white' : 'border border-slate-600'
                        }`}
                      >
                        {isChecked && '✓'}
                      </div>
                      <span className="text-xs font-medium">{feat.label}</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">
                      +{feat.weekDelta}w
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 3: Pace / Urgency */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-2">
              3. Delivery Velocity
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setUrgency('standard')}
                className={`p-3 rounded-xl border text-xs font-medium text-left transition-all cursor-pointer ${
                  urgency === 'standard'
                    ? 'bg-slate-800 border-sky-400 text-white'
                    : 'bg-slate-900 border-slate-800 text-slate-400'
                }`}
              >
                <span className="block font-bold">Standard Agile Pace</span>
                <span className="text-[11px] text-slate-400">Balanced sprint cadence with weekly demos</span>
              </button>
              <button
                type="button"
                onClick={() => setUrgency('accelerated')}
                className={`p-3 rounded-xl border text-xs font-medium text-left transition-all cursor-pointer ${
                  urgency === 'accelerated'
                    ? 'bg-slate-800 border-sky-400 text-white'
                    : 'bg-slate-900 border-slate-800 text-slate-400'
                }`}
              >
                <span className="block font-bold">Accelerated Launch</span>
                <span className="text-[11px] text-slate-400">Compressed sprints for urgent go-to-market</span>
              </button>
            </div>
          </div>

          {/* Calculation Output Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-950/70 to-slate-900 border border-blue-500/30">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-wider font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>Estimated Projection</span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">
                Sri Lanka & Global Pricing
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                  <Clock className="w-3.5 h-3.5 text-sky-400" />
                  <span>Estimated Delivery Timeline:</span>
                </div>
                <div className="text-2xl font-black text-white font-['Montserrat']">
                  ~{totalWeeks} Weeks
                </div>
                <span className="text-[11px] text-slate-400 block mt-0.5">
                  From scope signoff to live production deployment
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                  <DollarSign className="w-3.5 h-3.5 text-blue-400" />
                  <span>Typical Budget Range:</span>
                </div>
                <div className="text-2xl font-black text-sky-300 font-['Montserrat']">
                  ${totalMin.toLocaleString()} – ${totalMax.toLocaleString()}
                  <span className="text-xs font-normal text-slate-400 ml-1">USD</span>
                </div>
                <span className="text-[11px] text-slate-400 block mt-0.5">
                  Milestone-based billing (or equivalent LKR for local startups)
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-start gap-2 text-[11px] text-slate-400 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
              <Info className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <span>
                Estimates are non-binding reference guides. Final proposals reflect exact technical specifications, integrations, and asset readiness.
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/90 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleApply}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
          >
            <span>Apply Estimate to Project Inquiry</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
