import { profile, nav, stats, testimonials, posts, clientLogos } from './content';
export { profile, nav, stats, testimonials, posts, clientLogos };

export interface CaseStudyData {
  industry: string;
  year: string;
  location: string;
  services: string[];
  headline: string;
  problemTitle: string;
  problemSummary: string;
  problems: string[];
  solutions: string[];
  persona: {
    name: string;
    role: string;
    summary: string;
    quote: string;
    painPoints: string[];
    goals: { number: string; text: string }[];
  };
  metrics: { value: string; label: string }[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  size: 'medium-left' | 'small-right' | 'full-wide' | 'small-left' | 'medium-right';
  image: string;
  accentBg: string;
  featuredInHero?: boolean;
  summary: string;
  caseStudy: CaseStudyData;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  illustration?: string;
  deliverables: string[];
  timeline: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  detail: string;
  duration: string;
  deliverable: string;
  iconType: 'spark' | 'asterisk' | 'cross' | 'clover';
}

export const IMAGES = {
  heroPortrait: '/images/hero_portrait_profile_1791048121984.jpg',
  surakshaSetu: '/images/project-suraksha-setu.png',
  cyberShield: '/images/project-cybersheild-lock.png',
  cocoCoastal: '/images/project-coco-coastal.png',
  aboutMotion: '/images/about_motion_portrait_1791048134262.jpg',
  zentixDevice: '/images/project-zentix-app-screens.png',
  smartpayLilies: '/images/project_smartpay_lilies_1791098793863.jpg',
  shopeaseEditorial: '/images/project_shopease_editorial_1791048160943.jpg',
  herdoModule: '/images/project_herdo_module_1791098808505.jpg',
  fittrackSculpture: '/images/project_fittrack_sculpture_1791048172050.jpg',
  clinicCortexDashboard: '/images/project-cliniccortex-dashboard.png',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'ui-ux-design',
    number: '01',
    title: 'UI/UX DESIGN',
    description: 'Research-led interfaces, thoughtful user flows, and polished visuals built around real user needs.',
    tags: ['User flows', 'Wireframes', 'Visual design systems', 'Interactive prototypes'],
    image: '/illustrations/services-uiux-showcase.png',
    illustration: '/illustrations/uiux.svg',
    deliverables: ['User Flows', 'Wireframes', 'Interactive Prototype', 'Design System'],
    timeline: '1–2 Weeks',
  },
  {
    id: 'web-application-full-stack',
    number: '02',
    title: 'WEB APPLICATION (FULL STACK)',
    description: 'Complete web applications from responsive frontend and APIs to database integration and deployment.',
    tags: ['React', 'TypeScript', 'Node.js', 'REST APIs', 'Database'],
    image: '/illustrations/services-fullstack-showcase.png',
    illustration: '/illustrations/fullstack.svg',
    deliverables: ['Responsive Frontend', 'REST API', 'Database Integration', 'Deployment'],
    timeline: '2–3 Weeks',
  },
  {
    id: 'android-app',
    number: '03',
    title: 'ANDROID APP',
    description: 'Android apps with clear navigation, useful features, and interfaces designed for everyday use.',
    tags: ['Android UI', 'App flows', 'Mobile-first design'],
    image: '/illustrations/services-android-showcase.png',
    illustration: '/illustrations/uiux.svg',
    deliverables: ['App Screens', 'Navigation Flow', 'Functional Features'],
    timeline: '2–4 Weeks',
  },
  {
    id: 'automation',
    number: '04',
    title: 'AUTOMATION',
    description: 'Practical workflow automation that reduces repetitive work and keeps everyday processes moving.',
    tags: ['Workflow automation', 'API integrations', 'Process optimization'],
    image: '/illustrations/services-automation-showcase.png',
    illustration: '/illustrations/deploy.svg',
    deliverables: ['Workflow Mapping', 'Tool Integrations', 'Automated Processes'],
    timeline: '1–2 Weeks',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'zentix',
    slug: 'zentix',
    title: 'ClinicCortex',
    category: 'UI/UX Design',
    size: 'medium-left',
    image: IMAGES.zentixDevice,
    accentBg: '#F8EEEA',
    summary: 'A mobile-first healthcare experience that makes booking appointments, consulting doctors, and managing health information easier.',
    caseStudy: {
      industry: 'Healthcare & Digital Health',
      year: '2025',
      location: 'Mobile App',
      services: ['Mobile App UI/UX', 'Appointment Booking', 'Consultation Flows'],
      headline: 'A clear, patient-friendly mobile experience for appointments, doctor consultations, and health information.',
      problemTitle: 'Making Healthcare Tasks Easier to Navigate',
      problemSummary: 'Patients need clear paths through appointment booking, consultations, messages, and health information.',
      problems: [
        'Key tasks such as booking and contacting a doctor need to be easy to find.',
        'Patients need consistent navigation across consultations, messages, and health tools.',
      ],
      solutions: [
        'Organized the mobile experience around common patient tasks.',
        'Designed consistent screens for booking, calls, messages, and health information.',
      ],
      persona: {
        name: 'Clinic Patient',
        role: 'Mobile App User',
        summary: 'Uses the app to book appointments, connect with doctors, and access health information.',
        quote: 'I want to find the right healthcare task quickly without getting lost in the app.',
        painPoints: ['Difficulty finding appointment and consultation actions.'],
        goals: [{ number: '01', text: 'Navigate essential care tasks with ease' }],
      },
      metrics: [],
    },
  },
  {
    id: 'smartpay',
    slug: 'smartpay',
    title: 'SMARTPAY',
    category: 'Finance App',
    size: 'small-right',
    image: IMAGES.smartpayLilies,
    accentBg: '#F7E1DA',
    summary: 'Next-generation digital banking and frictionless financial transaction application.',
    caseStudy: {
      industry: 'Fintech & Digital Banking',
      year: '2025',
      location: 'London / Global',
      services: ['Mobile App Design', 'UI/UX Design', 'Design System'],
      headline: 'Redefining personal wealth management through calm, botanical visual clarity.',
      problemTitle: 'Cognitive Overload in Financial Dashboards',
      problemSummary: 'Complex multi-currency cards overwhelm users with cluttered tables and anxious red alerts.',
      problems: [
        'Dense data tables causing user fatigue and hesitation.',
        'Lack of transparent fee calculations on international remittances.',
      ],
      solutions: [
        'Designed high-contrast, calm card interfaces with instant swipe transfers.',
        'Streamlined multi-account currency balances into a single visual card.',
      ],
      persona: {
        name: 'Marcus Vance',
        role: 'Global Nomad & Founder',
        summary: 'Manages international payroll and multi-currency investments on mobile.',
        quote: 'I want my banking interface to give me peace of mind in three taps.',
        painPoints: ['Hidden fees and confusing transaction timelines.'],
        goals: [{ number: '01', text: 'Instant settlement verification' }],
      },
      metrics: [
        { value: '< 1s', label: 'Transfer flow' },
        { value: '4.9★', label: 'App store rating' },
      ],
    },
  },
  {
    id: 'shopease',
    slug: 'shopease',
    title: 'SHOPEASE',
    category: 'E-commerce Website',
    size: 'full-wide',
    image: IMAGES.shopeaseEditorial,
    accentBg: '#F8DAD2',
    summary: 'High-conversion editorial lifestyle e-commerce web platform for artisanal goods.',
    caseStudy: {
      industry: 'Artisanal Spirits & Hospitality',
      year: '2025',
      location: 'Milan / Berlin',
      services: ['E-Commerce Strategy', 'Full-Stack Web Dev', 'UI/UX Design'],
      headline: 'Connecting boutique beverage artisans directly with culinary enthusiasts worldwide.',
      problemTitle: 'Bridging Heritage Storytelling with Modern Conversion',
      problemSummary: 'Heritage brand stories were lost in generic off-the-shelf checkout templates.',
      problems: [
        'Generic product grids failing to communicate maker pedigree and aging notes.',
        'High mobile drop-off rates on multi-step bottle checkout.',
      ],
      solutions: [
        'Built full-bleed editorial imagery with immersive sommelier tasting notes.',
        'Implemented one-click Apple Pay and express shipping checkout.',
      ],
      persona: {
        name: 'Luigi Moretti',
        role: 'Master Blender',
        summary: 'Produces small-batch botanical aperitifs with decades of tradition.',
        quote: 'Our digital storefront must tell the story behind every distilled drop.',
        painPoints: ['Disjointed customer checkout experience.'],
        goals: [{ number: '01', text: 'Seamless international bottle delivery' }],
      },
      metrics: [
        { value: '+42%', label: 'Conversion rate' },
        { value: '0.8s', label: 'Page load speed' },
      ],
    },
  },
  {
    id: 'herdo',
    slug: 'herdo',
    title: 'HERDO',
    category: 'SaaS Dashboard',
    size: 'small-left',
    image: IMAGES.herdoModule,
    accentBg: '#F8EEEA',
    summary: 'Modular hardware configuration and audio DSP parameter management SaaS dashboard.',
    caseStudy: {
      industry: 'Audio Engineering & IoT Hardware',
      year: '2025',
      location: 'Stockholm',
      services: ['SaaS Dashboard', 'Component Library', 'Design System'],
      headline: 'Synchronizing hardware synthesizer modules with intuitive cloud preset libraries.',
      problemTitle: 'Complex Hardware Patch Management',
      problemSummary: 'Hardware music producers struggle to back up analog rotary presets across studio rigs.',
      problems: [
        'Patch data loss when traveling between live sets and studio sessions.',
        'Steep learning curve in proprietary configuration utilities.',
      ],
      solutions: [
        'Created real-time bidirectional WebMIDI parameter synchronization.',
        'Developed tactile software representations of physical hardware knobs.',
      ],
      persona: {
        name: 'Astrid Lind',
        role: 'Live Electronic Musician',
        summary: 'Performs live hardware electronic sets worldwide.',
        quote: 'My hardware controllers must sync presets instantly over USB without driver hassle.',
        painPoints: ['Manual knob alignment during tight stage transitions.'],
        goals: [{ number: '01', text: 'Instant preset backup' }],
      },
      metrics: [
        { value: '12ms', label: 'MIDI sync latency' },
        { value: '10k+', label: 'Presets shared' },
      ],
    },
  },
  {
    id: 'fittrack',
    slug: 'fittrack',
    title: 'FITTRACK',
    category: 'Fitness App',
    size: 'medium-right',
    image: IMAGES.fittrackSculpture,
    accentBg: '#F7E1DA',
    summary: 'Next-generation fitness analytics and daily performance tracking application.',
    caseStudy: {
      industry: 'Athletic Performance & Healthtech',
      year: '2025',
      location: 'California',
      services: ['Product Design', 'Mobile Experience', 'User Analytics'],
      headline: 'Empowering athletes with clear bio-metric milestones and recovery tracking.',
      problemTitle: 'Metric Confusion & Over-Tracking',
      problemSummary: 'Wearable devices provide vast numbers without actionable recovery guidance.',
      problems: [
        'Raw bio-metric numbers fail to translate into daily training recommendations.',
        'Cluttered fitness screens causing user abandonment.',
      ],
      solutions: [
        'Created a singular Daily Readiness Score backed by heart-rate variability.',
        'Designed tactile progression rings with rewarding haptic feedback.',
      ],
      persona: {
        name: 'David Chen',
        role: 'Competitive Triathlete',
        summary: 'Balances intense training routines with busy professional commitments.',
        quote: 'Tell me if I should push hard today or take a recovery run. Make it clear.',
        painPoints: ['Excessive contradictory fitness scores.'],
        goals: [{ number: '01', text: 'Clear daily recovery recommendation' }],
      },
      metrics: [
        { value: '88%', label: '30-day retention' },
        { value: '150k', label: 'Active athletes' },
      ],
    },
  },
  {
    id: 'shadowguard',
    slug: 'shadowguard',
    title: 'SHADOWGUARD',
    category: 'Cybersecurity',
    size: 'medium-left',
    image: IMAGES.cyberShield,
    accentBg: '#F8EEEA',
    summary: 'Media and file detection security project protecting sensitive uploads.',
    caseStudy: {
      industry: 'Cybersecurity & Data Safety',
      year: '2025',
      location: 'India',
      services: ['Security Audit', 'Full-Stack Dev', 'File Analysis'],
      headline: 'Advanced media/file detection security platform safeguarding digital assets.',
      problemTitle: 'Unfiltered Media File Vulnerabilities',
      problemSummary: 'Organizations face security breaches through malicious payloads embedded inside media uploads.',
      problems: [
        'Hidden payloads inside image and document headers.',
        'Lack of automated scanning for user-uploaded media.',
      ],
      solutions: [
        'Built automated file inspection engine.',
        'Integrated real-time threat detection REST API.',
      ],
      persona: {
        name: 'Rohan Sharma',
        role: 'Security Administrator',
        summary: 'Monitors digital file uploads across company portals.',
        quote: 'We need instant verification before any uploaded file touches our internal server.',
        painPoints: ['Manual file verification takes too long.'],
        goals: [{ number: '01', text: 'Instant threat detection on file uploads' }],
      },
      metrics: [
        { value: '< 200ms', label: 'Scan latency' },
        { value: '100%', label: 'Header inspection' },
      ],
    },
  },
  {
    id: 'quantumshield',
    slug: 'quantumshield',
    title: 'QUANTUMSHIELD',
    category: 'Cybersecurity / Concept',
    size: 'small-right',
    image: IMAGES.shopeaseEditorial,
    accentBg: '#F7E1DA',
    summary: 'Quantum-vulnerable cryptography risk assessment framework and security concept.',
    caseStudy: {
      industry: 'Post-Quantum Cryptography',
      year: '2025',
      location: 'Concept',
      services: ['Risk Assessment', 'Crypto Audit', 'UI Architecture'],
      headline: 'Assessing cryptographic vulnerabilities before quantum computing threats emerge.',
      problemTitle: 'Quantum Vulnerability in Legacy Encryption',
      problemSummary: 'Current encryption algorithms will become vulnerable to quantum decryption.',
      problems: ['Organizations lack visibility into quantum-vulnerable algorithms.'],
      solutions: ['Designed visual risk scoring dashboard for cipher suites.'],
      persona: {
        name: 'Ananya Iyer',
        role: 'Lead Cryptographer',
        summary: 'Evaluating long-term enterprise encryption strategies.',
        quote: 'We must identify vulnerable legacy keys today so we can transition smoothly.',
        painPoints: ['No clear visualization of legacy key exposure.'],
        goals: [{ number: '01', text: 'Audit all active cipher suites' }],
      },
      metrics: [
        { value: 'NIST PQC', label: 'Standard aligned' },
        { value: '100%', label: 'Cipher coverage' },
      ],
    },
  },
  {
    id: 'cococoastal',
    slug: 'cococoastal',
    title: 'COCOCOASTAL',
    category: 'Brand & Web',
    size: 'full-wide',
    image: IMAGES.cocoCoastal,
    accentBg: '#F8DAD2',
    summary: 'Coconut products brand identity and interactive web showcase.',
    caseStudy: {
      industry: 'Consumer Goods & E-Commerce',
      year: '2025',
      location: 'India',
      services: ['Brand Identity', 'Web Development', 'UI/UX'],
      headline: 'Elevating coastal heritage coconut products with a modern, sustainable web presence.',
      problemTitle: 'Connecting Local Producers with Digital Buyers',
      problemSummary: 'Traditional coastal coconut producers lacked a direct-to-consumer digital platform.',
      problems: ['Outdated branding failed to communicate organic purity.'],
      solutions: ['Crafted a warm, earthy visual identity and responsive web design.'],
      persona: {
        name: 'Priya Nair',
        role: 'Eco-Conscious Shopper',
        summary: 'Seeks authentic organic lifestyle products online.',
        quote: 'I want to know where my organic products are sourced and support local farming.',
        painPoints: ['Unclear product sourcing claims.'],
        goals: [{ number: '01', text: 'Seamless mobile ordering' }],
      },
      metrics: [
        { value: '2.4x', label: 'Engagement boost' },
        { value: '100%', label: 'Mobile optimized' },
      ],
    },
  },
  {
    id: 'cliniccortex',
    slug: 'cliniccortex',
    title: 'CLINICCORTEX',
    category: 'Web Application',
    size: 'medium-left',
    image: IMAGES.clinicCortexDashboard,
    accentBg: '#F8EEEA',
    summary: 'Intelligent clinic workflow management application streamlining appointments and records.',
    caseStudy: {
      industry: 'Healthcare Tech',
      year: '2025',
      location: 'India',
      services: ['Full-Stack Dev', 'Database Design', 'UI/UX'],
      headline: 'Streamlining doctor-patient workflows with an intuitive web application.',
      problemTitle: 'Fragmented Appointment & Patient Record Systems',
      problemSummary: 'Independent clinics struggle with paper records and uncoordinated scheduling.',
      problems: ['Double-booked appointments due to manual logs.'],
      solutions: ['Built centralized patient record and schedule management portal.'],
      persona: {
        name: 'Dr. K. V. Patil',
        role: 'Clinic Lead Physician',
        summary: 'Runs a busy outpatient clinic requiring fast patient record lookup.',
        quote: 'I need patient histories available in two clicks without administrative delay.',
        painPoints: ['Time wasted searching paper folders.'],
        goals: [{ number: '01', text: 'Instant digital record retrieval' }],
      },
      metrics: [
        { value: '60%', label: 'Time saved' },
        { value: '0', label: 'Double bookings' },
      ],
    },
  },
  {
    id: 'surakshasetu',
    slug: 'surakshasetu',
    title: 'SURAKSHASETU',
    category: 'Digital Safety',
    size: 'small-right',
    image: IMAGES.surakshaSetu,
    accentBg: '#F7E1DA',
    summary: 'Digital safety and emergency bridge platform connecting citizens with rapid support.',
    caseStudy: {
      industry: 'Public Safety & Community',
      year: '2025',
      location: 'India',
      services: ['Web Application', 'UI/UX Design', 'REST API'],
      headline: 'Empowering communities with emergency safety alerts and rapid response tools.',
      problemTitle: 'Delayed Emergency Response & Communication Gaps',
      problemSummary: 'Citizens during emergencies face delayed communication.',
      problems: ['Complex emergency forms delay distress signal transmission.'],
      solutions: ['Designed one-tap SOS emergency trigger UI.'],
      persona: {
        name: 'Suresh Kumar',
        role: 'Community Safety Officer',
        summary: 'Oversees local safety response networks.',
        quote: 'Distress signals must transmit in seconds with exact location coordinates.',
        painPoints: ['Delayed location broadcasts.'],
        goals: [{ number: '01', text: 'One-tap emergency broadcast' }],
      },
      metrics: [
        { value: '1-Tap', label: 'Emergency SOS' },
        { value: '100%', label: 'Responsive UI' },
      ],
    },
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'step-01-concept',
    title: 'CONCEPT',
    description: 'Understand the problem, the users and the scope.',
    detail: 'Requirement gathering, scope definition, and structural planning.',
    duration: '1 Week',
    deliverable: 'Project Specification',
    iconType: 'spark',
  },
  {
    id: 'step-02-design',
    title: 'DESIGN',
    description: 'Flows, wireframes and UI before any code.',
    detail: 'User journey mapping, high-fidelity wireframing, and interactive UI prototypes.',
    duration: '1–2 Weeks',
    deliverable: 'Figma UI Prototype',
    iconType: 'asterisk',
  },
  {
    id: 'step-03-build',
    title: 'BUILD',
    description: 'Frontend, backend and database, built and tested.',
    detail: 'Clean TypeScript frontend, REST API endpoints, and database schema implementation.',
    duration: '2–3 Weeks',
    deliverable: 'Full-Stack Application Code',
    iconType: 'cross',
  },
  {
    id: 'step-04-deploy',
    title: 'DEPLOY',
    description: 'Ship it live with a repeatable Git-based workflow.',
    detail: 'Vercel/Netlify hosting deployment, environment config, and live validation.',
    duration: '1 Week',
    deliverable: 'Live Production URL',
    iconType: 'clover',
  },
];
