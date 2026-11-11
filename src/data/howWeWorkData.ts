export interface ProcessStep {
  step: number;
  title: string;
  tagline: string;
  description: string;
  clientReceives: string;
  iconName: string;
}

export const howWeWorkData: ProcessStep[] = [
  {
    step: 1,
    title: 'Initial Discussion',
    tagline: 'Listening to your idea and business goals.',
    description:
      'We start with a thorough conversation to understand what you want to build, who your users are, the problem being solved, and your target timeline and budget.',
    clientReceives: 'Clarity on technical feasibility, initial feedback, and discovery notes.',
    iconName: 'MessageSquare',
  },
  {
    step: 2,
    title: 'Requirements Gathering',
    tagline: 'Translating concepts into technical requirements.',
    description:
      'We break down your idea into explicit user stories, system capabilities, third-party needs, and technical constraints so nothing is left ambiguous.',
    clientReceives: 'Structured requirements document with functional user stories.',
    iconName: 'FileText',
  },
  {
    step: 3,
    title: 'Project Scope Definition',
    tagline: 'Defining exact boundaries between Core and Future features.',
    description:
      'To prevent budget overruns and delayed launches, we delineate what belongs in the initial MVP versus what can be rolled out in Version 2.0.',
    clientReceives: 'Detailed Scope of Work (SOW) and milestone breakdown.',
    iconName: 'Target',
  },
  {
    step: 4,
    title: 'Proposal & Cost Estimation',
    tagline: 'Transparent pricing with realistic schedules.',
    description:
      'You receive an honest, transparent breakdown of development costs, timeline estimates, payment milestones, and technology choices.',
    clientReceives: 'Formal project proposal with itemized milestones and timeline.',
    iconName: 'Calculator',
  },
  {
    step: 5,
    title: 'Agreement & Kickoff',
    tagline: 'Clear terms, full IP ownership, and mutual commitment.',
    description:
      'We sign a straightforward service agreement outlining confidentiality, full client intellectual property (IP) ownership upon completion, and payment schedules.',
    clientReceives: 'Signed agreement, shared project tracking board, and kickoff schedule.',
    iconName: 'ShieldCheck',
  },
  {
    step: 6,
    title: 'UI/UX Design',
    tagline: 'Designing intuitive, modern user interfaces.',
    description:
      'We craft interactive wireframes and polished visual designs. You review and approve the interface before major backend coding begins.',
    clientReceives: 'Figma interactive prototype, visual style system, and design approval.',
    iconName: 'Palette',
  },
  {
    step: 7,
    title: 'Software Development',
    tagline: 'Writing clean, scalable, maintainable code.',
    description:
      'Our development proceeds in transparent sprints. We hold regular checkpoint demos so you can see your product functioning early and often.',
    clientReceives: 'Weekly functional progress demo and staging preview link.',
    iconName: 'Code2',
  },
  {
    step: 8,
    title: 'Testing & Quality Assurance',
    tagline: 'Rigorous validation across browsers, screens, and inputs.',
    description:
      'We test for broken flows, responsive layout issues across mobile/tablet/desktop, database constraints, security checks, and speed optimization.',
    clientReceives: 'QA test report and resolved bug verification audit.',
    iconName: 'CheckCircle2',
  },
  {
    step: 9,
    title: 'Production Deployment',
    tagline: 'Launching your software to the world.',
    description:
      'We configure your live servers, link your custom domain, set up SSL security certificates, and ensure email and database connections operate flawlessly.',
    clientReceives: 'Live production URL, complete codebase repository handoff, and access credentials.',
    iconName: 'Rocket',
  },
  {
    step: 10,
    title: 'Maintenance & Support',
    tagline: 'Ongoing reliability and continuous improvements.',
    description:
      'We stand behind our work with a post-launch warranty period, proactive updates, bug resolutions, and optional monthly maintenance plans.',
    clientReceives: 'Post-launch support coverage, technical documentation, and peace of mind.',
    iconName: 'Wrench',
  },
];
