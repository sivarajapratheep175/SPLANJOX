export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  typicalTimeline: string;
  techStack: string[];
  stages: { phase: string; details: string }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'startup-mvp',
    number: '01',
    title: 'Startup MVP Development',
    tagline: 'Turn early-stage ideas into functional, testable products for market validation.',
    description:
      'We help founders define the essential core features, craft a user-friendly prototype, and build a reliable Minimum Viable Product (MVP) ready for early users, user feedback, and investor demonstrations.',
    deliverables: [
      'Idea discussion & technical feasibility assessment',
      'Requirements analysis & feature prioritization matrix',
      'MVP feature roadmap (Core vs Nice-to-have)',
      'UI/UX design wireframes and clickable prototypes',
      'Full-stack software development (Frontend + Backend + DB)',
      'Quality testing, staging deployment & production launch',
    ],
    idealFor: 'Early-stage founders, startup teams, and entrepreneurs validating a new concept.',
    typicalTimeline: '4 to 8 weeks depending on scope',
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Vercel / Cloud Run'],
    stages: [
      { phase: 'Discovery', details: 'Scope definition, technical architecture & data modeling' },
      { phase: 'UX/UI Design', details: 'High-fidelity Figma flows and interactive user journey' },
      { phase: 'Sprint Build', details: 'Agile sprints with weekly functional progress demos' },
      { phase: 'Launch Ready', details: 'Smoke testing, performance tuning, and DNS setup' },
    ],
  },
  {
    id: 'website-web-app',
    number: '02',
    title: 'Website & Web Application Development',
    tagline: 'Modern, high-converting websites and responsive web applications.',
    description:
      'From responsive business websites and high-impact landing pages to full-featured custom web applications and secure admin portals, we build fast, accessible, and search-optimized web platforms.',
    deliverables: [
      'Modern, mobile-responsive business websites',
      'High-converting startup landing pages',
      'Portfolio & product showcase websites',
      'Interactive custom web applications & SaaS dashboards',
      'Secure administrative back-office portals',
      'SEO metadata, analytics integration & Core Web Vitals optimization',
    ],
    idealFor: 'Businesses wanting a strong online presence, SaaS startups, and operational teams.',
    typicalTimeline: '2 to 5 weeks for websites; 6 to 10 weeks for web apps',
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'RESTful APIs', 'Headless CMS / DB'],
    stages: [
      { phase: 'Wireframing', details: 'Content structure and responsive layout architecture' },
      { phase: 'Visual Polish', details: 'Typography, animations, dark/light theme, brand alignment' },
      { phase: 'Engineering', details: 'Fast, semantic, clean code with responsive mobile behavior' },
      { phase: 'Handoff', details: 'Domain connection, SSL configuration & content training' },
    ],
  },
  {
    id: 'mobile-app',
    number: '03',
    title: 'Mobile App Development',
    tagline: 'Native and cross-platform mobile apps for Android and iOS.',
    description:
      'We design and build clean, intuitive mobile experiences that provide smooth performance, offline resilience, and secure backend integration for consumer and enterprise users.',
    deliverables: [
      'Android and iOS mobile applications',
      'Cross-platform development for faster time-to-market',
      'Secure user authentication (Email, OAuth, Social)',
      'Real-time database integration & cloud sync',
      'REST & GraphQL API integration with backend services',
      'App Store & Google Play preparation and release guidance',
    ],
    idealFor: 'Startups with mobile-first business models, on-demand services, and consumer tools.',
    typicalTimeline: '6 to 12 weeks',
    techStack: ['React Native', 'Flutter', 'TypeScript', 'Firebase / Supabase', 'REST APIs'],
    stages: [
      { phase: 'App Wireflow', details: 'Mobile-first user experience and touch interaction design' },
      { phase: 'Core App Build', details: 'State management, local storage, camera/push notifications' },
      { phase: 'Device Testing', details: 'Physical device testing across Android and iOS screen sizes' },
      { phase: 'Store Ready', details: 'Store assets, privacy policies, and build signing' },
    ],
  },
  {
    id: 'backend-api',
    number: '04',
    title: 'Backend & API Development',
    tagline: 'Reliable server architectures, scalable databases, and clean REST APIs.',
    description:
      'Behind every dependable frontend lies a solid backend. We engineer scalable API layers, secure database architectures, third-party webhook integrations, and authentication systems that scale with your growth.',
    deliverables: [
      'Custom backend services & microservices architecture',
      'Structured RESTful API design with comprehensive documentation',
      'Relational (PostgreSQL, MySQL) & NoSQL database architecture',
      'Role-based access control (RBAC) & secure authentication',
      'Payment gateway (Stripe, PayHere, etc.) & third-party integrations',
      'Cloud server deployment, monitoring & backup automation',
    ],
    idealFor: 'Founders building multi-user platforms, data-heavy systems, and API-driven products.',
    typicalTimeline: '3 to 6 weeks',
    techStack: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
    stages: [
      { phase: 'Schema Design', details: 'Entity-relationship modeling and security access matrices' },
      { phase: 'API Construction', details: 'Type-safe route handlers, input validation, and business logic' },
      { phase: 'Integration', details: 'Third-party APIs, webhooks, transactional email, and logs' },
      { phase: 'Deployment', details: 'Containerization, automated migration scripts, and monitoring' },
    ],
  },
  {
    id: 'maintenance-support',
    number: '05',
    title: 'Maintenance & Technical Support',
    tagline: 'Continuous monitoring, performance tuning, bug fixing, and feature updates.',
    description:
      'Launching your software is only day one. We offer ongoing technical stewardship so you can focus on sales, marketing, and customers while we keep your systems updated, fast, and secure.',
    deliverables: [
      'Proactive bug fixes and error resolution',
      'Framework, library & security patch updates',
      'Database health checks, query indexing & optimization',
      'Performance enhancements & uptime monitoring',
      'Iterative feature updates based on real user feedback',
      'Deployment assistance, domain management & backup verification',
    ],
    idealFor: 'Existing products needing dedicated engineering support and ongoing improvements.',
    typicalTimeline: 'Monthly retainer or on-demand support blocks',
    techStack: ['Git CI/CD', 'Cloud Monitoring', 'Issue Tracking', 'Automated Backups'],
    stages: [
      { phase: 'Audit', details: 'Codebase review, dependency inspection, and vulnerability check' },
      { phase: 'SLA Setup', details: 'Response time agreements and shared ticketing channel' },
      { phase: 'Active Guard', details: 'Continuous monitoring and scheduled maintenance windows' },
      { phase: 'Evolution', details: 'Monthly roadmap reviews and incremental capability releases' },
    ],
  },
];
