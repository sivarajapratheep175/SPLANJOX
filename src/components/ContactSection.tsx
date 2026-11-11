import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  User, 
  Globe, 
  Linkedin, 
  Github, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  Calculator
} from 'lucide-react';

interface ContactSectionProps {
  initialProjectType?: string;
  initialTimeline?: string;
  initialBudget?: string;
  initialDescription?: string;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenEstimator: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialProjectType,
  initialTimeline,
  initialBudget,
  initialDescription,
  onOpenPrivacy,
  onOpenTerms,
  onOpenEstimator,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    projectType: 'Startup MVP',
    projectDescription: '',
    estimatedBudget: '',
    expectedTimeline: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Sync external estimator data if passed
  useEffect(() => {
    if (initialProjectType || initialDescription || initialBudget || initialTimeline) {
      setFormData((prev) => ({
        ...prev,
        projectType: initialProjectType || prev.projectType,
        expectedTimeline: initialTimeline || prev.expectedTimeline,
        estimatedBudget: initialBudget || prev.estimatedBudget,
        projectDescription: initialDescription || prev.projectDescription,
      }));
    }
  }, [initialProjectType, initialTimeline, initialBudget, initialDescription]);

  const officialEmail = 'sivarajapratheep175@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(officialEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.projectDescription) return;

    // Build mailto URI as direct communication fallback
    const mailtoSubject = encodeURIComponent(
      `[SPLANJOX Project Inquiry] ${formData.projectType} — ${formData.companyName || formData.fullName}`
    );
    const mailtoBody = encodeURIComponent(
      `Full Name: ${formData.fullName}\nEmail: ${formData.email}\nCompany / Startup: ${formData.companyName || 'Not specified'}\nProject Type: ${formData.projectType}\nExpected Timeline: ${formData.expectedTimeline || 'Not specified'}\nEstimated Budget: ${formData.estimatedBudget || 'Not specified'}\n\nProject Description:\n${formData.projectDescription}`
    );
    window.location.href = `mailto:${officialEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#070b14] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 08: Final CTA Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-xs font-semibold text-sky-400 uppercase tracking-widest mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Founder Channel</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Montserrat']">
            Have an Idea? Let's Build It.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Tell us about your startup concept, software requirements, or business challenge. We’ll review your inquiry and schedule an initial discovery call.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Founder Access & Credibility */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-[#0b1220] border border-blue-500/30 p-8 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/40 p-2 flex items-center justify-center">
                  <img
                    src="/assets/aistudio/SVG-preview_7aa9f648.png"
                    alt="SPLANJOX"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-['Montserrat']">
                    Sivaraja Pratheep
                  </h3>
                  <p className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                    Founder — SPLANJOX
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Every inquiry is personally reviewed by our founder. You speak directly with the engineer who will lead your architecture and sprint delivery.
              </p>

              {/* Direct Communication Channels */}
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center gap-3 text-slate-300 truncate">
                    <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                    <span className="truncate">{officialEmail}</span>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0 ml-2"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Sri Lanka (Initial Hub) • International Service Delivery</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
                  <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>www.splanjox.com</span>
                </div>
              </div>

              {/* Active Social Channels (Only genuine active links per blueprint) */}
              <div className="mt-6 pt-6 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 uppercase">
                  Active Channels:
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer"
                    title="Founder LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer"
                    title="SPLANJOX GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Estimator Trigger Box */}
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 flex items-start justify-between gap-4">
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white font-['Montserrat']">
                  Unsure of timelines or budgets?
                </h4>
                <p className="text-xs text-slate-400">
                  Use our interactive cost & timeline calculator to model your scope.
                </p>
              </div>
              <button
                onClick={onOpenEstimator}
                className="shrink-0 p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-sky-400 hover:text-white transition-colors cursor-pointer"
                title="Open Estimator"
              >
                <Calculator className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Column: Complete Blueprint Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0b1220] border border-slate-800 p-8 sm:p-10 shadow-2xl relative">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white font-['Montserrat'] mb-1">
                  Let's Build Something Meaningful.
                </h3>
                <p className="text-xs text-slate-400">
                  Complete the inquiry form below. We typically respond within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="rounded-2xl bg-blue-950/60 border border-blue-500/40 p-8 text-center space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 mx-auto rounded-full bg-blue-600/20 border border-blue-500 flex items-center justify-center text-sky-400">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-['Montserrat']">
                    Inquiry Received Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Your project details have been captured and a direct message pipeline has been prepared for <strong className="text-white">{officialEmail}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        companyName: '',
                        projectType: 'Startup MVP',
                        projectDescription: '',
                        estimatedBudget: '',
                        expectedTimeline: '',
                      });
                    }}
                    className="mt-4 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Sivaraja Pratheep"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@startup.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Company / Startup Name */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Company / Startup Name
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Acme Tech or Stealth Idea"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                      />
                    </div>

                    {/* Project Type Dropdown per Blueprint */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Project Type *
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-sm text-white outline-none transition-colors cursor-pointer"
                      >
                        <option value="Startup MVP">Startup MVP</option>
                        <option value="Website Development">Website Development</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="Backend / API">Backend / API</option>
                        <option value="Maintenance">Maintenance</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Estimated Budget (Optional) */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Estimated Budget <span className="text-slate-500 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        value={formData.estimatedBudget}
                        onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                        placeholder="e.g. $1,500 – $3,000 USD or LKR"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                      />
                    </div>

                    {/* Expected Timeline (Optional) */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Expected Timeline <span className="text-slate-500 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        value={formData.expectedTimeline}
                        onChange={(e) => setFormData({ ...formData, expectedTimeline: e.target.value })}
                        placeholder="e.g. 4 to 8 weeks / Q3 Launch"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Project Description *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.projectDescription}
                      onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                      placeholder="Describe what you want to build, who your users are, and any specific technical requirements..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-sm text-white placeholder-slate-500 outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Privacy & Data Handling Reassurance */}
                  <div className="flex items-start gap-2 text-[11px] text-slate-400 pt-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      We respect your privacy and intellectual property. All shared concepts are protected under strict confidentiality. Review our{' '}
                      <button
                        type="button"
                        onClick={onOpenPrivacy}
                        className="text-sky-400 underline hover:text-sky-300 cursor-pointer"
                      >
                        Privacy Policy
                      </button>{' '}
                      and{' '}
                      <button
                        type="button"
                        onClick={onOpenTerms}
                        className="text-sky-400 underline hover:text-sky-300 cursor-pointer"
                      >
                        Terms of Service
                      </button>.
                    </span>
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 transition-all cursor-pointer mt-2"
                  >
                    <span>Submit Project Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
