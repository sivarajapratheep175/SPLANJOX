import React from 'react';
import { 
  Building2, 
  Target, 
  Eye, 
  Award, 
  GraduationCap, 
  MapPin, 
  Code2, 
  HeartHandshake, 
  Sparkles,
  HelpCircle,
  Lightbulb,
  ShieldCheck,
  Users,
  BookOpen
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const coreValues = [
    {
      title: 'Problem First',
      tagline: 'Understand the problem before writing any code.',
      icon: HelpCircle,
      description: 'We prioritize deep domain discovery. Software must be built to solve an authentic friction, not to chase trends.',
      accent: 'text-sky-400',
    },
    {
      title: 'Innovation',
      tagline: 'Explore better, smarter solutions.',
      icon: Lightbulb,
      description: 'Challenging convention with modern frameworks, efficient architectures, and lean prototyping.',
      accent: 'text-amber-400',
    },
    {
      title: 'Quality',
      tagline: 'Build reliable, maintainable products.',
      icon: Award,
      description: 'Zero-compromise engineering: type safety, automated tests, clean component architecture, and responsive UX.',
      accent: 'text-blue-400',
    },
    {
      title: 'Integrity',
      tagline: 'Earn customer trust through transparency.',
      icon: ShieldCheck,
      description: 'Honest timelines, clear milestone billing, zero hidden lock-ins, and 100% intellectual property handoff.',
      accent: 'text-emerald-400',
    },
    {
      title: 'Accessibility',
      tagline: 'Make technology useful to everyone.',
      icon: Users,
      description: 'Engineering systems that run fast on entry-level mobile devices, low-bandwidth networks, and diverse skill levels.',
      accent: 'text-purple-400',
    },
    {
      title: 'Continuous Learning',
      tagline: 'Relentless technical and domain curiosity.',
      icon: BookOpen,
      description: 'Staying at the frontier of full-stack ecosystems, modern cloud standards, and emerging AI tooling.',
      accent: 'text-cyan-400',
    },
  ];

  return (
    <section id="about" className="relative py-28 bg-[#070b14] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-xs font-semibold text-sky-400 uppercase tracking-widest mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>Company & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Montserrat']">
            About SPLANJOX
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A Sri Lanka-based technology initiative focused on helping startups and businesses transform ideas into practical digital solutions.
          </p>
        </div>

        {/* Narrative & Founder Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Company Background & Strategic Purpose */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-3xl bg-[#0b1220] border border-slate-800 space-y-4">
              <h3 className="text-2xl font-bold text-white font-['Montserrat']">
                Who We Are
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                <strong className="text-white">SPLANJOX</strong> was founded on a simple conviction: technology should solve meaningful problems and open economic opportunities for businesses and communities.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Rather than acting as a traditional, bureaucratic agency, we operate as a hands-on technical co-pilot for founders. We guide early-stage builders through the complete lifecycle — from initial requirements scoping and UI/UX prototyping to full-stack code implementation, cloud deployment, and post-launch maintenance.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-400 uppercase mb-1">
                    <Target className="w-4 h-4" />
                    <span>Our Mission</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    To transform real-world challenges into practical, accessible, and reliable technology solutions.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-400 uppercase mb-1">
                    <Eye className="w-4 h-4" />
                    <span>Our Vision</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    To grow into a globally recognized technology company that develops impactful software products and innovations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Genuine Founder Profile */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#0b1220] border border-blue-500/30 p-8 shadow-2xl relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/40 p-2.5 flex items-center justify-center">
                  <img
                    src="/assets/aistudio/SVG-preview_7aa9f648.png"
                    alt="SPLANJOX"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white font-['Montserrat']">
                    Sivaraja Pratheep
                  </h4>
                  <p className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                    Founder — SPLANJOX
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span>Sri Lanka</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                <p>
                  Sivaraja Pratheep is a technology strategist and full-stack software engineer dedicated to empowering startups, regional businesses, and entrepreneurs.
                </p>
                <p>
                  With expertise spanning modern web architecture, mobile applications, distributed backends, and interactive WebGL experiences, he founded SPLANJOX to provide early-stage founders with transparent, accessible, and high-quality technical execution.
                </p>
              </div>

              {/* Skills & Focus */}
              <div className="pt-4 border-t border-slate-800">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2 font-semibold">
                  Engineering Specialties:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Full-Stack Architecture',
                    'Startup MVP Strategy',
                    'React & Next.js',
                    'TypeScript',
                    'Node.js & REST APIs',
                    'Cloud Deployments',
                    'Database Engineering',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-sky-300 border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Core Values */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Montserrat']">
              Our 6 Core Values
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-400">
              The operating principles that define how we build software, treat founders, and run SPLANJOX.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="p-6 rounded-2xl bg-[#0b1220] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                        Value 0{idx + 1}
                      </span>
                      <Icon className={`w-5 h-5 ${val.accent}`} />
                    </div>
                    <h4 className="text-lg font-bold text-white font-['Montserrat'] mb-1">
                      {val.title}
                    </h4>
                    <p className="text-xs font-semibold text-sky-300 mb-3">
                      {val.tagline}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
