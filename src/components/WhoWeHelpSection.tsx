import React from 'react';
import { 
  Users, 
  Rocket, 
  Briefcase, 
  Store, 
  GraduationCap, 
  Workflow, 
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface WhoWeHelpSectionProps {
  onDiscussIdea: () => void;
}

export const WhoWeHelpSection: React.FC<WhoWeHelpSectionProps> = ({ onDiscussIdea }) => {
  const audiences = [
    {
      id: 'startups',
      title: 'Early-Stage Startups',
      tagline: 'Turn early-stage ideas into functional MVPs.',
      icon: Rocket,
      accent: 'from-blue-600 to-sky-500',
      description:
        'You have a validated concept and need to test it with real users fast. We help you design and build a lean, working MVP without burning through runway on unnecessary features.',
      benefits: [
        'Rapid MVP prototyping (4-8 weeks)',
        'Investor-ready demo applications',
        'Scalable foundation built for growth',
      ],
    },
    {
      id: 'entrepreneurs',
      title: 'Solo Entrepreneurs',
      tagline: 'Build digital platforms for business ideas.',
      icon: Briefcase,
      accent: 'from-sky-500 to-cyan-400',
      description:
        'You know your domain and market, but need a reliable engineering partner to build the software. We act as your fractional CTO and technical development arm.',
      benefits: [
        'End-to-end technical stewardship',
        'Honest feasibility & tech strategy',
        'No co-founder equity required',
      ],
    },
    {
      id: 'small-biz',
      title: 'Small Businesses',
      tagline: 'Improve business operations through custom software.',
      icon: Store,
      accent: 'from-indigo-600 to-blue-500',
      description:
        'Generic off-the-shelf software doesn’t fit how you work. We build custom client portals, booking systems, inventory trackers, and internal tools tailored to your exact workflows.',
      benefits: [
        'Eliminate repetitive manual tasks',
        'Streamline customer transactions',
        'Own your operational data completely',
      ],
    },
    {
      id: 'student-founders',
      title: 'Student Founders',
      tagline: 'Get technical guidance to develop early projects.',
      icon: GraduationCap,
      accent: 'from-blue-500 to-teal-400',
      description:
        'University builders and student innovators working on final-year tech capstones, hackathon winners, or collegiate startup ventures. We provide affordable, mentorship-driven development.',
      benefits: [
        'Pragmatic architectural coaching',
        'Production-quality code standards',
        'Student-friendly payment flexibility',
      ],
    },
    {
      id: 'digitize',
      title: 'Businesses Digitizing Operations',
      tagline: 'Transition from paper & spreadsheets to modern systems.',
      icon: Workflow,
      accent: 'from-cyan-500 to-blue-600',
      description:
        'Moving past messy Excel sheets, lost paper receipts, and uncoordinated WhatsApp groups. We digitize your order fulfillment, staff rosters, and financial micro-ledgers.',
      benefits: [
        'Zero-loss data migration',
        'Simple interfaces staff can use easily',
        'Automated real-time reporting',
      ],
    },
  ];

  return (
    <section id="who-we-help" className="relative py-28 bg-[#0a0f1d] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-xs font-semibold text-sky-400 uppercase tracking-widest mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>Target Audience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Montserrat']">
            Built for People Building Something New.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Whether you are sketching your first concept on a napkin or looking to modernize an established local company, we engineer the tech that brings it to life.
          </p>
        </div>

        {/* 5 Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {audiences.map((aud, idx) => {
            const Icon = aud.icon;
            return (
              <div
                key={aud.id}
                className={`relative rounded-3xl bg-[#0b1220] border border-slate-800 p-8 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 group hover:shadow-xl hover:shadow-blue-950/30 ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${aud.accent} flex items-center justify-center text-white shadow-md`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500 uppercase">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 font-['Montserrat']">
                    {aud.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-sky-400 font-semibold mb-3 leading-snug">
                    {aud.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {aud.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  {aud.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Blueprint Call to Action */}
        <div className="rounded-3xl bg-gradient-to-br from-blue-900/40 via-[#0b1220] to-[#0b1220] border border-blue-500/30 p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Montserrat'] mb-3">
            Let's Discuss Your Idea.
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
            No technical jargon. No upfront commitments. Tell us what you want to achieve, and we’ll outline practical technology paths to make it happen.
          </p>
          <button
            onClick={onDiscussIdea}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 transition-all cursor-pointer"
          >
            <span>Start the Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
