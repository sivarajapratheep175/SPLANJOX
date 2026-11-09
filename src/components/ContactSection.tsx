import React, { useState } from 'react';
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
  Twitter, 
  MessageSquare,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Product Development',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const officialEmail = 'sivarajapratheep175@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(officialEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Build mailto URI as direct communication pipeline
    const mailtoSubject = encodeURIComponent(`[SPLANJOX ${formData.category}] ${formData.subject || 'Website Inquiry'}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.category}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${officialEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#070b14] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-xs font-semibold text-sky-400 uppercase tracking-widest mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Montserrat']">
            Initiate a Conversation
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Have a problem that demands intelligent software, a venture partnership, or an innovation initiative? Let's engineer the future together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Founder Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Founder Card from Mockups */}
            <div className="rounded-3xl bg-[#0b1220] border border-blue-500/30 p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

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
                    Founder & CEO, SPLANJOX
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Directly accessible to founders, enterprise executives, and prospective partners looking for high-impact software solutions, AI innovations, or strategic collaboration.
              </p>

              {/* Contact info rows */}
              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center gap-3 text-slate-300 truncate">
                    <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                    <span className="truncate">{officialEmail}</span>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0 ml-2"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Sri Lanka (Global Service Delivery)</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
                  <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>www.splanjox.com</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mr-2">
                  Network:
                </span>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer"
                  title="X (Twitter)"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Commit Card */}
            <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 flex items-start gap-4">
              <Sparkles className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white mb-1 font-['Montserrat']">
                  Rapid Initial Response
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every inquiry receives an engineering-led triage within 24 business hours. No spam, no automated runaround.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0b1220] border border-slate-800 p-8 sm:p-10 shadow-2xl relative">
              <h3 className="text-2xl font-bold text-white font-['Montserrat'] mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-8">
                Fill in your details below and click Send Message to connect with SPLANJOX.
              </p>

              {submitted ? (
                <div className="rounded-2xl bg-blue-950/60 border border-blue-500/40 p-8 text-center space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 mx-auto rounded-full bg-blue-600/20 border border-blue-500 flex items-center justify-center text-sky-400">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-['Montserrat']">
                    Thank You for Reaching Out
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your email client has been prepared with your inquiry details addressed to <strong className="text-white">{officialEmail}</strong>. We look forward to connecting with you.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        category: 'Product Development',
                        subject: '',
                        message: '',
                      });
                    }}
                    className="mt-4 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sivaraja Pratheep"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Inquiry Category */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-sm text-white outline-none transition-colors cursor-pointer"
                    >
                      <option value="Product Development">Product Development (Proprietary Apps & Platforms)</option>
                      <option value="Software Services">Software Services (Custom Enterprise & Cloud)</option>
                      <option value="Research & Innovation">Research & Innovation (AI & Emerging Tech)</option>
                      <option value="Partnership / Investment">Partnership & Business Inquiries</option>
                      <option value="General Question">General Discussion</option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Brief topic or project outline"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Message / Problem Statement *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe what challenge you are facing or what technology you are looking to build..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-sm text-white placeholder-slate-500 outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 shadow-xl shadow-blue-600/25 transition-all cursor-pointer"
                  >
                    <span>Send Message to SPLANJOX</span>
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
