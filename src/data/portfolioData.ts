export type WorkStatus = 'Live' | 'In Development' | 'Experiment';

export interface WorkItem {
  id: string;
  name: string;
  category: string;
  status: WorkStatus;
  problem: string;
  solution: string;
  technologies: string[];
  liveUrl?: string;
}

export const PORTFOLIO_ITEMS: WorkItem[] = [
  {
    id: 'splanjox-platform',
    name: 'SPLANJOX Digital Platform',
    category: 'Company Website & Inquiry System',
    status: 'Live',
    problem:
      'Early-stage founders needed a fast, clear way to evaluate SPLANJOX capabilities and submit structured technical inquiries without broken static mailto links.',
    solution:
      'Built a lightweight React and TypeScript web platform backed by an Express inquiry API with server-side validation, rate limiting, and accessible navigation.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Express', 'Node.js'],
    liveUrl: 'https://splanjox.vercel.app/',
  },
  {
    id: 'startup-mvp-foundation',
    name: 'Startup MVP Core Architecture',
    category: 'Internal Engineering Foundation',
    status: 'In Development',
    problem:
      'New founders often lose weeks rebuilding authentication, role permissions, API validation, and deployment pipelines before validating their core product idea.',
    solution:
      'Developing a reusable, modular full-stack starter architecture that accelerates early product launches with clean API contracts and predictable database schemas.',
    technologies: ['TypeScript', 'React', 'REST APIs', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'workflow-automation-kit',
    name: 'Automated Inquiry & Triage Prototype',
    category: 'AI & Automation Experiment',
    status: 'Experiment',
    problem:
      'Small engineering teams spend significant time manually sorting incoming project briefs, extracting scope requirements, and preparing discovery summaries.',
    solution:
      'Prototyping an automated intake and triage service that validates structured project forms and prepares clean technical briefs for engineering review.',
    technologies: ['Node.js', 'TypeScript', 'Webhook Pipelines', 'Structured JSON'],
  },
];
