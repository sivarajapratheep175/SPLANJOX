import React from 'react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'What We Do', href: '#what-we-do' },
  { label: 'Our Work', href: '#our-work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
}) => {
  const handleScroll = (href: string) => {
    const el = document.getElementById(href.replace('#', ''));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#080F1C] text-slate-300 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/SVG-preview_7aa9f648.png"
                alt="SPLANJOX official S-symbol logo"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <span className="font-bold text-white tracking-wider text-base">
                SPLANJOX
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Beyond Innovation. Building the Future. Originating from Sri
              Lanka, building practical software and digital solutions for
              startups and businesses.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(link.href);
                    }}
                    className="inline-block py-0.5 text-sm text-slate-400 hover:text-white rounded transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B82F6]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="mailto:sivarajapratheep175@gmail.com"
                  className="hover:text-white rounded transition-colors break-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B82F6]"
                >
                  sivarajapratheep175@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://splanjox.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white rounded transition-colors break-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B82F6]"
                >
                  https://splanjox.vercel.app/
                </a>
              </li>
              <li>Sri Lanka</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} SPLANJOX. Founded by Sivaraja
            Pratheep.
          </p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="py-1 hover:text-white rounded transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B82F6]"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={onOpenTerms}
              className="py-1 hover:text-white rounded transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B82F6]"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
