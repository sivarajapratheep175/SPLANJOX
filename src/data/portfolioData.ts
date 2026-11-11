export type ProjectStatus = 'Completed' | 'In Progress' | 'Personal Project' | 'Academic / Team Project';
export type ProjectCategory = 'All' | 'Startup MVP' | 'Web Application' | 'Mobile App' | 'Internal Platform';

export interface ProjectItem {
  id: string;
  name: string;
  category: 'Startup MVP' | 'Web Application' | 'Mobile App' | 'Internal Platform';
  tagline: string;
  clientType: string;
  status: ProjectStatus;
  overview: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  techStack: string[];
  role: string;
  results: string;
  dateOrDuration: string;
  imageAccent: string;
}

export const portfolioData: ProjectItem[] = [
  {
    id: 'splanjox-engine',
    name: 'SPLANJOX Interactive 3D Platform',
    category: 'Internal Platform',
    tagline: 'High-performance WebGL digital architecture and brand interactive showcase.',
    clientType: 'Internal Proprietary Engineering',
    status: 'Completed',
    overview:
      'Engineered as the foundational interactive digital home for SPLANJOX, demonstrating real-time 3D WebGL rendering, responsive typography, and startup inquiry automation.',
    problem:
      'Most software agency websites are static, generic templates that fail to prove real technical capabilities, high-performance engineering standards, or procedural craft.',
    solution:
      'Architected a custom Three.js PBR rendering engine with procedural canvas texturing, software WebGL fallbacks, modular UI components, and instant inquiry workflows.',
    keyFeatures: [
      'Interactive 3D procedural globe and tech core with zero external asset latency',
      'Dynamic project cost and timeline estimation calculator for founders',
      'Fully responsive, accessible UI adhering to strict WCAG contrast standards',
      'Sleek dark futuristic visual hierarchy aligned with brand guidelines',
    ],
    techStack: ['React 19', 'Three.js', 'TypeScript', 'Tailwind CSS v4', 'Express', 'Vite'],
    role: 'Lead Architect & Full-Stack Engineering (Sivaraja Pratheep)',
    results: 'Sub-second load times, smooth 60fps WebGL execution, and an unmistakable technical brand identity.',
    dateOrDuration: '2026',
    imageAccent: 'from-blue-600 to-sky-400',
  },
  {
    id: 'agriconnect-mvp',
    name: 'AgriConnect — Rural Farm Produce Exchange',
    category: 'Startup MVP',
    tagline: 'Direct-to-market produce pricing and logistics coordination for local farmers.',
    clientType: 'Agritech Startup Initiative (Sri Lanka)',
    status: 'Completed',
    overview:
      'An MVP platform connecting regional vegetable and fruit growers directly with urban wholesale buyers, eliminating multiple middlemen layers and price exploitation.',
    problem:
      'Smallholder farmers in regional districts lacked real-time visibility into daily terminal market prices and struggled with uncoordinated transport logistics.',
    solution:
      'Engineered an SMS-capable and mobile-friendly web dashboard allowing farmers to list harvest volume, lock transparent bid pricing, and coordinate shared collection hubs.',
    keyFeatures: [
      'Bilingual interface (Sinhala / Tamil / English) tailored for regional usability',
      'Real-time daily market price ticker synced with national agricultural bulletins',
      'Bulk batch transport grouping and pickup point assignment',
      'Offline-first data caching for low-connectivity rural mobile networks',
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Twilio SMS API', 'PWA'],
    role: 'Full-Stack MVP Development & System Architecture',
    results: 'Successfully demonstrated pilot deployment with 40+ registered regional produce growers.',
    dateOrDuration: '8 Weeks Development',
    imageAccent: 'from-emerald-600 to-teal-400',
  },
  {
    id: 'ceylon-craft-portal',
    name: 'Ceylon Artisans Global Export Gateway',
    category: 'Web Application',
    tagline: 'E-commerce and artisan registry system showcasing authentic handcrafted goods.',
    clientType: 'Creative Cultural Enterprise',
    status: 'Completed',
    overview:
      'A multi-vendor digital showroom built for Sri Lankan traditional craftspersons, woodcarvers, and handloom textile makers to sell directly to international collectors.',
    problem:
      'Traditional artisans possessed exceptional craft heritage but lacked digital storefronts, multi-currency payment handling, and international logistics integration.',
    solution:
      'Built a high-performance web catalog with high-resolution visual storytelling, automated currency conversion, and direct order tracking.',
    keyFeatures: [
      'Artisan profile narratives with photo/video process showcases',
      'Multi-currency checkout supporting LKR, USD, GBP, and EUR',
      'Automated packing list generation for international air freight compliance',
      'Intuitive admin dashboard for non-technical artisans to manage stock',
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe & PayHere Gateways', 'PostgreSQL'],
    role: 'UI/UX Design, Web Application Engineering & Payment Integration',
    results: 'Enabled direct overseas customer inquiries and orders across 6 artisanal guild communities.',
    dateOrDuration: '6 Weeks Project',
    imageAccent: 'from-amber-600 to-orange-400',
  },
  {
    id: 'finpulse-ledger',
    name: 'FinPulse SME Daily Micro-Ledger',
    category: 'Mobile App',
    tagline: 'Streamlined daily cash flow, debt tracking, and digital receipting for retailers.',
    clientType: 'FinTech Startup Project',
    status: 'In Progress',
    overview:
      'A fast, touch-optimized mobile ledger application designed to replace paper cashbooks and manual credit books for neighborhood retail shops and service providers.',
    problem:
      'Small neighborhood shop owners lose revenue due to forgotten customer credits, manual tally book errors, and lack of simple digital debt reminders.',
    solution:
      'Developing a lightweight mobile app with 3-tap transaction entry, customer balance statements, and automatic WhatsApp payment reminders.',
    keyFeatures: [
      '3-tap credit/debit entry designed for fast counter service',
      'Automated customer balance summaries with 1-click WhatsApp reminder generation',
      'PIN & biometric security for business financial privacy',
      'Daily profit-and-loss summary with visual cash-flow charts',
    ],
    techStack: ['React Native', 'TypeScript', 'SQLite (Local First)', 'Supabase Cloud Sync'],
    role: 'Mobile Engineering, Local Database Sync Architecture',
    results: 'Currently in closed beta testing with 15 pilot retail merchants in Sri Lanka.',
    dateOrDuration: 'Active Development — Q2 2026',
    imageAccent: 'from-sky-600 to-indigo-500',
  },
  {
    id: 'lankatransit-routes',
    name: 'LankaTransit Public Route Intelligence',
    category: 'Startup MVP',
    tagline: 'Real-time transit timetable, bus routing, and interchange navigation.',
    clientType: 'Academic / Team Innovation Project',
    status: 'Academic / Team Project',
    overview:
      'A civic technology research and software prototype mapping public bus routes, transfer junctions, and arrival estimates across provincial corridors.',
    problem:
      'Commuters and inter-city travelers face unpredictable bus schedules and zero centralized digital route maps across regional transit depots.',
    solution:
      'Developed a crowdsourced timetable verification algorithm and GPS route mapper that operates seamlessly on budget smartphones.',
    keyFeatures: [
      'Offline transit timetable database that operates without mobile data',
      'Point-to-point route finder with calculated walking and transfer times',
      'Crowdsourced delay reporting and bus stand waypoint verification',
      'Ultra-compact app bundle under 15MB for fast downloading',
    ],
    techStack: ['React Native', 'OpenStreetMap API', 'Node.js', 'GeoJSON', 'Leaflet'],
    role: 'Co-Founder & Technical Lead (Algorithm & Interface Design)',
    results: 'Awarded University Technology Innovation commendation; featured in public transport research.',
    dateOrDuration: 'Academic Innovation Project',
    imageAccent: 'from-purple-600 to-blue-500',
  },
];
