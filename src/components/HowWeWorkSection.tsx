import React from 'react';

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand the problem.',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'Define the requirements and solution.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Create the user experience.',
  },
  {
    number: '04',
    title: 'Develop',
    description: 'Build and test the product.',
  },
  {
    number: '05',
    title: 'Launch',
    description: 'Deploy and provide support.',
  },
];

export const HowWeWorkSection: React.FC = () => {
  return (
    <section
      id="how-we-work"
      className="bg-white text-[#080F1C] py-20 sm:py-28 border-b border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2563EB] mb-3">
            How We Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#080F1C]">
            A Clear Process From Problem to Launch.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            Every engagement follows five transparent stages so founders always
            know what is being built and why.
          </p>
        </div>

        {/* Desktop horizontal timeline / Mobile vertical timeline */}
        <ol className="relative grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-6">
          {/* Desktop connecting line */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-5 left-10 right-10 h-px bg-slate-200"
          />

          {PROCESS_STEPS.map((step, index) => (
            <li
              key={step.number}
              className="relative flex lg:flex-col items-start gap-4 lg:gap-5"
            >
              {/* Mobile vertical connecting line */}
              {index < PROCESS_STEPS.length - 1 && (
                <div
                  aria-hidden="true"
                  className="lg:hidden absolute top-11 bottom-[-2rem] left-5 w-px bg-slate-200"
                />
              )}

              <div className="relative z-10 w-10 h-10 rounded-full bg-[#080F1C] text-white flex items-center justify-center text-xs font-bold tabular-nums shrink-0">
                {step.number}
              </div>

              <div className="pt-0.5 lg:pt-0">
                <h3 className="text-lg font-bold text-[#080F1C]">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm sm:text-base text-[#64748B] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
