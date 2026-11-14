import React, { useEffect, useState } from 'react';
import {
  AlertCircle,
  Check,
  CheckCircle2,
  Copy,
  Globe,
  Loader2,
  Mail,
  MapPin,
  Send,
} from 'lucide-react';

const PROJECT_TYPES = [
  'Startup MVP',
  'Web Application',
  'Mobile Application',
  'Backend & API',
  'AI & Automation',
  'Technical Consultation',
  'Other',
] as const;

interface ContactSectionProps {
  prefillVersion: number;
  initialProjectType?: string;
  initialMessage?: string;
}

interface FieldErrors {
  fullName?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefillVersion,
  initialProjectType,
  initialMessage,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState<string>('Startup MVP');
  const [message, setMessage] = useState('');
  const [websiteHoneypot, setWebsiteHoneypot] = useState('');

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [serverFeedback, setServerFeedback] = useState('');
  const [deliveryMode, setDeliveryMode] = useState<'email' | 'stored' | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (prefillVersion === 0) return;
    if (initialProjectType && PROJECT_TYPES.includes(initialProjectType as (typeof PROJECT_TYPES)[number])) {
      setProjectType(initialProjectType);
    }
    if (initialMessage) {
      setMessage(initialMessage);
    }
    setStatus('idle');
    setServerFeedback('');
    setFieldErrors({});
  }, [prefillVersion, initialProjectType, initialMessage]);

  const validateClient = (): FieldErrors => {
    const errs: FieldErrors = {};
    if (fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name (at least 2 characters).';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!PROJECT_TYPES.includes(projectType as (typeof PROJECT_TYPES)[number])) {
      errs.projectType = 'Please choose a project type.';
    }
    if (message.trim().length < 10) {
      errs.message = 'Please share a bit more detail (at least 10 characters).';
    }
    return errs;
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('sivarajapratheep175@gmail.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerFeedback('');

    const clientErrors = validateClient();
    if (Object.keys(clientErrors).length > 0) {
      setFieldErrors(clientErrors);
      setStatus('error');
      setServerFeedback('Please review the highlighted fields before sending.');
      return;
    }

    setFieldErrors({});
    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: fullName.trim(),
          email: email.trim(),
          projectType,
          message: message.trim(),
          website: websiteHoneypot,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.ok) {
        if (data?.errors && typeof data.errors === 'object') {
          setFieldErrors(data.errors);
        }
        setStatus('error');
        setServerFeedback(
          data?.message ||
            'Unable to send your inquiry right now. Please email sivarajapratheep175@gmail.com directly.'
        );
        return;
      }

      setStatus('success');
      setDeliveryMode(data.deliveryMode === 'email' ? 'email' : 'stored');
      setServerFeedback(
        data.message || 'Thank you. Your inquiry has been received by SPLANJOX.'
      );
      setFullName('');
      setEmail('');
      setMessage('');
      setWebsiteHoneypot('');
    } catch {
      setStatus('error');
      setServerFeedback(
        'Network error while reaching the SPLANJOX server. Please try again or email sivarajapratheep175@gmail.com directly.'
      );
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#F8FAFC] text-[#080F1C] py-20 sm:py-28"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2563EB] mb-3">
                Contact
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#080F1C]">
                Have an Idea? Let&apos;s Build It.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
                Tell us about the problem you&apos;re trying to solve. Let&apos;s
                explore how technology can help.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-center text-[#2563EB] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Direct Email
                    </p>
                    <a
                      href="mailto:sivarajapratheep175@gmail.com"
                      className="text-sm font-semibold text-[#080F1C] hover:text-[#2563EB] transition-colors break-all"
                    >
                      sivarajapratheep175@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 text-xs font-medium text-slate-600 hover:text-[#080F1C] transition-colors shrink-0 cursor-pointer"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copy
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-center text-[#2563EB] shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Website
                  </p>
                  <a
                    href="https://splanjox.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#080F1C] hover:text-[#2563EB] transition-colors"
                  >
                    https://splanjox.vercel.app/
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-center text-[#2563EB] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Base
                  </p>
                  <p className="text-sm font-semibold text-[#080F1C]">
                    Sri Lanka · Collaborating Globally
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              {status === 'success' ? (
                <div className="py-8 space-y-5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#080F1C]">
                      {deliveryMode === 'email'
                        ? 'Inquiry Sent to SPLANJOX'
                        : 'Inquiry Recorded'}
                    </h3>
                    <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                      {serverFeedback}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setStatus('idle');
                        setServerFeedback('');
                        setDeliveryMode(null);
                      }}
                      className="px-4 py-2.5 rounded-lg bg-[#080F1C] hover:bg-slate-800 text-white text-sm font-semibold transition-colors cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                    <a
                      href="mailto:sivarajapratheep175@gmail.com"
                      className="px-4 py-2.5 rounded-lg border border-slate-200 hover:border-slate-300 text-sm font-semibold text-[#080F1C] transition-colors"
                    >
                      Email Directly
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Honeypot field hidden from human visitors */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="contact-website">Website</label>
                    <input
                      id="contact-website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={websiteHoneypot}
                      onChange={(e) => setWebsiteHoneypot(e.target.value)}
                    />
                  </div>

                  {status === 'error' && serverFeedback && (
                    <div
                      role="alert"
                      className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 flex items-start gap-3 text-sm text-red-800"
                    >
                      <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>{serverFeedback}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-full-name"
                        className="block text-sm font-semibold text-[#080F1C] mb-1.5"
                      >
                        Full Name
                      </label>
                      <input
                        id="contact-full-name"
                        name="fullName"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Your full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        aria-invalid={Boolean(fieldErrors.fullName)}
                        className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-[#080F1C] placeholder:text-slate-400 bg-white transition-colors ${
                          fieldErrors.fullName
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-slate-300 focus:border-[#2563EB]'
                        }`}
                      />
                      {fieldErrors.fullName && (
                        <p className="mt-1.5 text-xs text-red-600">
                          {fieldErrors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-semibold text-[#080F1C] mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-invalid={Boolean(fieldErrors.email)}
                        className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-[#080F1C] placeholder:text-slate-400 bg-white transition-colors ${
                          fieldErrors.email
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-slate-300 focus:border-[#2563EB]'
                        }`}
                      />
                      {fieldErrors.email && (
                        <p className="mt-1.5 text-xs text-red-600">
                          {fieldErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-project-type"
                      className="block text-sm font-semibold text-[#080F1C] mb-1.5"
                    >
                      Project Type
                    </label>
                    <select
                      id="contact-project-type"
                      name="projectType"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      aria-invalid={Boolean(fieldErrors.projectType)}
                      className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-[#080F1C] bg-white transition-colors ${
                        fieldErrors.projectType
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-slate-300 focus:border-[#2563EB]'
                      }`}
                    >
                      {PROJECT_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {fieldErrors.projectType && (
                      <p className="mt-1.5 text-xs text-red-600">
                        {fieldErrors.projectType}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-semibold text-[#080F1C] mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Describe the problem you're solving, key features you need, or any timeline goals..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      aria-invalid={Boolean(fieldErrors.message)}
                      className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-[#080F1C] placeholder:text-slate-400 bg-white transition-colors resize-y ${
                        fieldErrors.message
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-slate-300 focus:border-[#2563EB]'
                      }`}
                    />
                    {fieldErrors.message && (
                      <p className="mt-1.5 text-xs text-red-600">
                        {fieldErrors.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-xs text-[#64748B]">
                      All inquiries are kept confidential.
                    </p>
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#2563EB] hover:bg-[#3B82F6] disabled:opacity-60 text-white text-sm font-semibold transition-colors cursor-pointer"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Inquiry
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
