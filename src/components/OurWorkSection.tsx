import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Clock, ExternalLink, FlaskConical } from 'lucide-react';
import { PORTFOLIO_ITEMS, type WorkStatus } from '../data/portfolioData';

interface OurWorkSectionProps {
  onDiscussSimilar: (projectName: string) => void;
}

const FILTERS: Array<'All' | WorkStatus> = ['All', 'Live', 'In Development', 'Experiment'];

function StatusBadge({ status }: { status: WorkStatus }) {
  if (status === 'Live') {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
        <CheckCircle2 className="w-3.5 h-3.5" />
        Live
      </span>
    );
  }
  if (status === 'In Development') {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563EB]">
        <Clock className="w-3.5 h-3.5" />
        In Development
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600">
      <FlaskConical className="w-3.5 h-3.5" />
      Experiment
    </span>
  );
}

export const OurWorkSection: React.FC<OurWorkSectionProps> = ({
  onDiscussSimilar,
}) => {
  const [activeFilter, setActiveFilter] = useState<'All' | WorkStatus>('All');

  const visibleItems =
    activeFilter === 'All'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.status === activeFilter);

  return (
    <section
      id="our-work"
      className="bg-[#F8FAFC] text-[#080F1C] py-20 sm:py-28 border-b border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2563EB] mb-3">
              Our Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#080F1C]">
              Built to Solve Real Problems.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
              Every project below reflects actual SPLANJOX engineering work,
              active internal builds, and technical prototypes—presented
              transparently without inflated claims.
            </p>
          </div>

          <div
            className="flex flex-wrap items-center gap-2"
            role="group"
            aria-label="Filter work by status"
          >
            {FILTERS.map((filter) => {
              const isSelected = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={isSelected}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#080F1C] text-white'
                      : 'bg-white border border-slate-200 text-[#64748B] hover:text-[#080F1C] hover:border-slate-300'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {visibleItems.map((project) => (
            <article
              key={project.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-medium text-[#64748B]">
                    {project.category}
                  </span>
                  <StatusBadge status={project.status} />
                </div>

                <h3 className="text-xl font-bold text-[#080F1C]">
                  {project.name}
                </h3>

                <div className="space-y-4 text-sm leading-relaxed">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                      Problem
                    </p>
                    <p className="text-[#64748B]">{project.problem}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                      Solution
                    </p>
                    <p className="text-slate-700">{project.solution}</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 space-y-5">
                <p className="text-xs font-medium text-[#64748B]">
                  {project.technologies.join(' · ')}
                </p>

                <div className="flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => onDiscussSimilar(project.name)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-[#080F1C] transition-colors cursor-pointer"
                  >
                    Build Something Similar
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-[#080F1C] transition-colors"
                    >
                      Visit
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
