import React, { useState } from 'react';
import { 
  FolderKanban, 
  ExternalLink, 
  CheckCircle2, 
  Clock, 
  Layers, 
  ArrowRight, 
  X,
  Code2,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { portfolioData, ProjectItem, ProjectStatus } from '../data/portfolioData';

interface OurWorkSectionProps {
  onStartSimilarProject: (projectName: string) => void;
}

export const OurWorkSection: React.FC<OurWorkSectionProps> = ({ onStartSimilarProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Startup MVP', 'Web Application', 'Mobile App', 'Internal Platform'];

  const filteredProjects = selectedCategory === 'All'
    ? portfolioData
    : portfolioData.filter((p) => p.category === selectedCategory);

  const getStatusBadge = (status: ProjectStatus) => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400';
      case 'In Progress':
        return 'bg-amber-500/15 border-amber-500/40 text-amber-400';
      case 'Personal Project':
        return 'bg-blue-500/15 border-blue-500/40 text-blue-400';
      case 'Academic / Team Project':
        return 'bg-purple-500/15 border-purple-500/40 text-purple-400';
      default:
        return 'bg-slate-800 border-slate-700 text-slate-300';
    }
  };

  return (
    <section id="our-work" className="relative py-28 bg-[#0a0f1d] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-xs font-semibold text-sky-400 uppercase tracking-widest mb-4">
            <FolderKanban className="w-3.5 h-3.5" />
            <span>Case Studies & Implementations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Montserrat']">
            Turning Ideas into Working Solutions.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A transparent showcase of our completed builds, active developments, and startup engineering prototypes.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 border border-sky-400'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-[#0b1220] border border-slate-800 hover:border-slate-700 overflow-hidden flex flex-col justify-between transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-950/40"
            >
              <div>
                {/* Visual Accent Banner */}
                <div className={`h-36 bg-gradient-to-br ${project.imageAccent} p-6 flex flex-col justify-between relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-white px-2.5 py-1 rounded bg-black/40 backdrop-blur-xs">
                      {project.category}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${getStatusBadge(project.status)} bg-black/50`}>
                      {project.status}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-xl font-extrabold text-white font-['Montserrat'] line-clamp-1 drop-shadow-sm">
                      {project.name}
                    </h3>
                    <p className="text-xs text-slate-200/90 font-medium truncate">
                      {project.clientType}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.overview}
                  </p>

                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
                    <span className="text-slate-400 font-mono uppercase text-[10px] block mb-1">
                      Problem Solved:
                    </span>
                    <p className="text-slate-200 line-clamp-2 leading-snug">
                      {project.problem}
                    </p>
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-sky-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 border-t border-slate-800/80 flex items-center justify-between gap-3 mt-4">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onStartSimilarProject(project.name)}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 cursor-pointer"
                >
                  Build Similar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Transparency Footnote */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 inline-flex items-center gap-2 bg-slate-900/80 px-4 py-2 rounded-full border border-slate-800">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>
              Integrity note: SPLANJOX only publishes verified completed or genuinely ongoing projects with explicit status tags.
            </span>
          </p>
        </div>
      </div>

      {/* Case Study Full Inspection Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-3xl bg-[#0b1220] border border-blue-500/40 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
              <div className="flex items-center gap-3">
                <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${getStatusBadge(activeModalProject.status)}`}>
                  {activeModalProject.status}
                </span>
                <h3 className="text-base font-bold text-white font-['Montserrat'] truncate">
                  {activeModalProject.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close case study"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div>
                <span className="text-xs font-mono text-sky-400 uppercase tracking-wider block mb-1">
                  {activeModalProject.clientType} • {activeModalProject.dateOrDuration}
                </span>
                <h4 className="text-xl font-bold text-white font-['Montserrat'] mb-2">
                  {activeModalProject.tagline}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeModalProject.overview}
                </p>
              </div>

              {/* Problem vs Solution Comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-red-950/20 border border-red-500/30">
                  <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider block mb-2">
                    The Problem
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeModalProject.problem}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30">
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block mb-2">
                    Our Solution
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeModalProject.solution}
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h5 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-3">
                  Key Features Implemented:
                </h5>
                <div className="space-y-2">
                  {activeModalProject.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Role & Results */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs">
                <div>
                  <span className="text-slate-400 block mb-1 font-mono uppercase">Role & Contribution:</span>
                  <span className="text-white font-medium">{activeModalProject.role}</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-1 font-mono uppercase">Results Achieved:</span>
                  <span className="text-emerald-300 font-medium">{activeModalProject.results}</span>
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  Technology Stack:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-800 text-sky-300 border border-slate-700"
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
                onClick={() => setActiveModalProject(null)}
                className="text-xs text-slate-400 hover:text-white cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const name = activeModalProject.name;
                  setActiveModalProject(null);
                  onStartSimilarProject(name);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md cursor-pointer"
              >
                <span>Inquire About Similar Solution</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
