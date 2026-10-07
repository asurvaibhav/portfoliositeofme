export const SHOW_SAMPLE_SECTIONS = true;

export const profile = {
  name: "Vaibhav Gunaga",
  heroName: "VAIBHAV",
  wordmark: "Vaibhav®",
  role: "Full-Stack Developer, UI/UX Designer & Automation",
  roleShort: "Full-Stack Developer",
  positioning: "Early-career developer",
  tagline: "I build digital experiences from concept to deployment.",
  taglineHero: "I BUILD DIGITAL EXPERIENCES FROM CONCEPT TO DEPLOYMENT.",
  location: "Belagavi, Karnataka, India",
  email: "vvgunaga@gmail.com",
  phone: "+91 7483987523",
  year: 2026,
  bio:
    "I'm Vaibhav, a full-stack developer and UI/UX designer based in Belagavi, Karnataka. " +
    "I take ideas from concept to deployment: designing the interface, building the frontend and backend, and shipping it live.",
  socials: [
    { label: "GitHub", href: "https://github.com/asurvaibhav" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/vaibhav-vighneshwar-gunaga-a06129338" },
    { label: "Instagram", href: "https://www.instagram.com/vaibhav.gunaga/" },
  ],
  images: {
    heroPortrait: "/images/hero-portrait.png",
    avatar: "/images/about_motion_portrait_1791048134262.jpg",
    impactPortrait: "/images/about_motion_portrait_1791048134262.jpg",
  },
} as const;

export const stats = [
  { value: 7, suffix: "", label: "Projects completed" },
  { value: 3, suffix: "", label: "Clients served" },
] as const;

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work", count: 5 },
  { label: "Services", href: "#services", count: 4 },
  { label: "Contact", href: "#contact" },
] as const;

export const stack = {
  Frontend: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "REST APIs"],
  "Database & Services": ["Supabase", "MongoDB"],
  Tools: ["Git", "GitHub"],
  Deployment: ["Vercel", "Netlify"],
} as const;

export type Service = {
  n: string;
  slug: string;
  title: string;
  description: string;
  deliverables: string[];
  technologies: string[];
  illustration: string;
};

export const services: Service[] = [
  {
    n: "01",
    slug: "full-stack-web-development",
    title: "Full-Stack Web Development",
    description: "Responsive web applications built end to end: interface, API and database.",
    deliverables: ["Responsive frontend", "REST API", "Database design & integration", "Live deployment"],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Supabase", "MongoDB"],
    illustration: "/illustrations/fullstack.svg",
  },
  {
    n: "02",
    slug: "ui-ux-product-design",
    title: "UI/UX & Product Design",
    description: "Clear, user-centred interfaces, from flows and wireframes to a polished UI.",
    deliverables: ["User flows", "Wireframes", "UI design", "Clickable prototype", "Developer-ready handoff"],
    technologies: ["HTML", "CSS", "Tailwind CSS"],
    illustration: "/illustrations/uiux.svg",
  },
  {
    n: "03",
    slug: "deployment-automation",
    title: "Deployment & Automation",
    description: "Getting projects live and keeping releases repeatable with Git-based workflows.",
    deliverables: ["Hosted deployment", "Git/GitHub workflow", "Environment configuration"],
    technologies: ["Git", "GitHub", "Vercel", "Netlify"],
    illustration: "/illustrations/deploy.svg",
  },
];

export type Evidence = { type: "repo" | "demo" | "screenshot" | "video" | "doc"; label: string; href: string };

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  summary: string;
  tier: "case-study" | "detail";
  status?: "live" | "prototype" | "in-progress" | "concept" | "completed";
  year?: string;
  role?: string;
  problem?: string;
  whatIBuilt?: string[];
  technologies?: string[];
  evidence?: Evidence[];
  learnings?: string[];
  cover: string;
  image: string;
  accentBg?: string;
  size?: "medium-left" | "small-right" | "full-wide" | "small-left" | "medium-right";
  caseStudy?: {
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
  };
};

export const projects: Project[] = [
  {
    id: "shadowguard",
    slug: "shadowguard",
    title: "ShadowGuard",
    category: "Cybersecurity",
    summary: "Media/file detection and security audit platform preventing unauthorized data exposure.",
    tier: "case-study",
    status: "completed",
    year: "2025",
    role: "Full-Stack & Security Developer",
    cover: "/projects/shadowguard/cover.jpg",
    image: "/images/project-cybersheild-lock.png",
    size: "medium-left",
    problem: "Organizations face security breaches through undetected malicious payloads embedded inside media files.",
    whatIBuilt: [
      "Built automated deep file inspection engine.",
      "Integrated real-time threat detection REST API.",
      "Created an intuitive security log dashboard."
    ],
    technologies: ["Node.js", "Express", "REST API", "JavaScript", "Security Audit"],
    evidence: [
      { type: "repo", label: "GitHub Repository", href: "https://github.com/asurvaibhav/shadowguard" }
    ],
    learnings: [
      "Deep understanding of header inspection for binary media files.",
      "Optimizing REST API response latency for real-time file upload security."
    ],
    caseStudy: {
      industry: "Cybersecurity & Data Safety",
      year: "2025",
      location: "India",
      services: ["Security Audit", "Full-Stack Dev", "File Analysis"],
      headline: "Advanced media/file detection security platform safeguarding sensitive digital assets.",
      problemTitle: "Unfiltered Media Vulnerabilities",
      problemSummary: "Organizations face security breaches through undetected malicious payloads embedded inside media files.",
      problems: [
        "Hidden malicious payloads inside image & document headers.",
        "Lack of real-time automated scanning for user-uploaded media."
      ],
      solutions: [
        "Built automated deep file inspection engine.",
        "Integrated real-time threat detection REST API.",
        "Created an intuitive dashboard for security logs and alerts."
      ],
      persona: {
        name: "Rohan Sharma",
        role: "Security Administrator",
        summary: "Monitors digital file uploads across company portals.",
        quote: "We need instant verification before any uploaded file touches our internal server.",
        painPoints: ["Manual file verification takes too long."],
        goals: [
          { number: "01", text: "Instant threat detection on file uploads" },
          { number: "02", text: "Zero false positive alerts on legitimate media" }
        ]
      },
      metrics: [
        { value: "< 200ms", label: "Scan latency" },
        { value: "100%", label: "Header inspection" }
      ]
    }
  },
  {
    id: "quantumshield",
    slug: "quantumshield",
    title: "QuantumShield",
    category: "Cybersecurity / Concept",
    summary: "Quantum-vulnerable cryptography risk assessment framework and security concept.",
    tier: "case-study",
    status: "concept",
    year: "2025",
    role: "Security Researcher & Designer",
    cover: "/projects/quantumshield/cover.jpg",
    image: "/images/project_shopease_editorial_1791048160943.jpg",
    size: "small-right",
    problem: "Current encryption algorithms will become vulnerable to quantum decryption algorithms in the near future.",
    whatIBuilt: [
      "Designed visual risk scoring dashboard for cipher suites.",
      "Mapped migration roadmap to NIST-standardized PQC algorithms."
    ],
    technologies: ["Post-Quantum Cryptography", "Risk Analysis", "UI Architecture"],
    evidence: [
      { type: "repo", label: "Concept Documentation", href: "https://github.com/asurvaibhav" }
    ],
    learnings: [
      "Evaluating NIST post-quantum cryptography standardization roadmaps.",
      "Structuring risk assessment frameworks for non-technical stakeholders."
    ],
    caseStudy: {
      industry: "Post-Quantum Cryptography",
      year: "2025",
      location: "Concept",
      services: ["Risk Assessment", "Crypto Audit", "UI Architecture"],
      headline: "Assessing cryptographic vulnerabilities before quantum computing threats emerge.",
      problemTitle: "Quantum Vulnerability in RSA/ECC",
      problemSummary: "Current encryption algorithms will become vulnerable to quantum decryption algorithms in the near future.",
      problems: [
        "Organizations lack visibility into which algorithms are quantum-vulnerable.",
        "Transition to Post-Quantum Cryptography requires early inventory."
      ],
      solutions: [
        "Designed visual risk scoring dashboard for cipher suites.",
        "Mapped migration roadmap to NIST-standardized PQC algorithms."
      ],
      persona: {
        name: "Ananya Iyer",
        role: "Lead Cryptographer",
        summary: "Evaluating long-term enterprise encryption strategies.",
        quote: "We must identify vulnerable legacy keys today so we can transition smoothly.",
        painPoints: ["No clear visualization of legacy key exposure."],
        goals: [
          { number: "01", text: "Audit all active cipher suites" }
        ]
      },
      metrics: [
        { value: "NIST PQC", label: "Standard aligned" },
        { value: "100%", label: "Cipher coverage" }
      ]
    }
  },
  {
    id: "cococoastal",
    slug: "cococoastal",
    title: "CocoCoastal",
    category: "Brand & Web",
    summary: "Authentic coconut products brand digital presence and interactive e-commerce showcase.",
    tier: "case-study",
    status: "completed",
    year: "2025",
    role: "Full-Stack & Brand Designer",
    cover: "/projects/cococoastal/cover.jpg",
    image: "/images/project-coco-coastal.png",
    size: "full-wide",
    problem: "Traditional coastal coconut producers lacked a direct-to-consumer digital platform.",
    whatIBuilt: [
      "Crafted a warm visual identity and responsive web design.",
      "Streamlined product catalog with responsive checkout flow."
    ],
    technologies: ["React", "Tailwind CSS", "Node.js", "JavaScript"],
    evidence: [
      { type: "demo", label: "Live Demo", href: "https://cococoastal.vercel.app" }
    ],
    learnings: [
      "Creating authentic brand storytelling connected with local sourcing roots.",
      "Building performant mobile web e-commerce layouts."
    ],
    caseStudy: {
      industry: "Consumer Goods & E-Commerce",
      year: "2025",
      location: "India",
      services: ["Brand Identity", "Web Development", "UI/UX"],
      headline: "Elevating coastal heritage coconut products with a modern, sustainable brand story.",
      problemTitle: "Connecting Local Producers with Digital Buyers",
      problemSummary: "Traditional coastal coconut producers lacked a direct-to-consumer digital platform.",
      problems: [
        "Outdated branding failed to communicate organic purity.",
        "Cluttered mobile navigation led to high cart abandonment."
      ],
      solutions: [
        "Crafted a warm, earthy visual identity and responsive web design.",
        "Streamlined product catalog with 1-click checkout flow."
      ],
      persona: {
        name: "Priya Nair",
        role: "Eco-Conscious Shopper",
        summary: "Seeks authentic organic lifestyle products online.",
        quote: "I want to know where my organic products are sourced and support local farming.",
        painPoints: ["Unclear product sourcing claims."],
        goals: [
          { number: "01", text: "Seamless mobile ordering" }
        ]
      },
      metrics: [
        { value: "2.4x", label: "Engagement boost" },
        { value: "100%", label: "Mobile optimized" }
      ]
    }
  },
  {
    id: "cliniccortex",
    slug: "cliniccortex",
    title: "ClinicCortex",
    category: "Web Application",
    summary: "Intelligent clinic management workflow platform streamlining appointments and records.",
    tier: "case-study",
    status: "completed",
    year: "2025",
    role: "Full-Stack Web Developer",
    cover: "/projects/cliniccortex/cover.jpg",
    image: "/images/about_motion_portrait_1791048134262.jpg",
    size: "medium-left",
    problem: "Independent clinics struggle with paper records and uncoordinated scheduling.",
    whatIBuilt: [
      "Built centralized patient record and schedule management portal.",
      "Integrated real-time appointment calendar."
    ],
    technologies: ["React", "Express", "MongoDB", "Tailwind CSS"],
    evidence: [
      { type: "repo", label: "GitHub Code", href: "https://github.com/asurvaibhav/cliniccortex" }
    ],
    learnings: [
      "Designing relational schemas in MongoDB for healthcare appointment slots.",
      "Implementing role-based access control for medical staff."
    ],
    caseStudy: {
      industry: "Healthcare Tech",
      year: "2025",
      location: "India",
      services: ["Full-Stack Dev", "Database Design", "UI/UX"],
      headline: "Streamlining doctor-patient workflows with an intuitive web application.",
      problemTitle: "Fragmented Appointment & Patient Record Systems",
      problemSummary: "Independent clinics struggle with paper records and uncoordinated scheduling.",
      problems: [
        "Double-booked appointments due to manual logs.",
        "Slow access to patient medical histories."
      ],
      solutions: [
        "Built centralized patient record and schedule management portal.",
        "Integrated real-time appointment calendar."
      ],
      persona: {
        name: "Dr. K. V. Patil",
        role: "Clinic Lead Physician",
        summary: "Runs a busy outpatient clinic requiring fast patient record lookup.",
        quote: "I need patient histories available in two clicks without administrative delay.",
        painPoints: ["Time wasted searching paper folders."],
        goals: [
          { number: "01", text: "Instant digital record retrieval" }
        ]
      },
      metrics: [
        { value: "60%", label: "Time saved" },
        { value: "0", label: "Double bookings" }
      ]
    }
  },
  {
    id: "surakshasetu",
    slug: "surakshasetu",
    title: "SurakshaSetu",
    category: "Digital Safety",
    summary: "Digital safety and emergency bridge platform connecting citizens with rapid support.",
    tier: "detail",
    status: "completed",
    year: "2025",
    role: "Full-Stack Developer & Designer",
    cover: "/projects/surakshasetu/cover.jpg",
    image: "/images/project-suraksha-setu.png",
    size: "small-right",
    problem: "Citizens during emergencies face delayed communication and lack real-time location sharing.",
    whatIBuilt: [
      "Designed one-tap SOS emergency trigger UI.",
      "Integrated lightweight geolocation sharing API."
    ],
    technologies: ["React", "JavaScript", "HTML", "CSS", "REST API"],
    evidence: [
      { type: "repo", label: "GitHub Repo", href: "https://github.com/asurvaibhav/surakshasetu" }
    ],
    learnings: [
      "Optimizing mobile browser geolocation access during critical alerts.",
      "Building high-contrast accessible emergency user interfaces."
    ],
    caseStudy: {
      industry: "Public Safety & Community",
      year: "2025",
      location: "India",
      services: ["Web Application", "UI/UX Design", "REST API"],
      headline: "Empowering communities with emergency safety alerts and rapid response tools.",
      problemTitle: "Delayed Emergency Response & Communication Gaps",
      problemSummary: "Citizens during emergencies face delayed communication.",
      problems: [
        "Complex emergency forms delay distress signal transmission."
      ],
      solutions: [
        "Designed one-tap SOS emergency trigger UI.",
        "Integrated lightweight geolocation sharing API."
      ],
      persona: {
        name: "Suresh Kumar",
        role: "Community Safety Officer",
        summary: "Oversees local safety response networks.",
        quote: "Distress signals must transmit in seconds with exact location coordinates.",
        painPoints: ["Delayed location broadcasts."],
        goals: [
          { number: "01", text: "One-tap emergency broadcast" }
        ]
      },
      metrics: [
        { value: "1-Tap", label: "Emergency SOS" },
        { value: "100%", label: "Responsive UI" }
      ]
    }
  }
];

export const process = [
  { n: "01", title: "Concept", text: "Understand the problem, the users and the scope." },
  { n: "02", title: "Design", text: "Flows, wireframes and UI before any code." },
  { n: "03", title: "Build", text: "Frontend, backend and database, built and tested." },
  { n: "04", title: "Deploy", text: "Ship it live with a repeatable Git-based workflow." },
] as const;

export const testimonials = [
  {
    id: "t1",
    name: "Rohan Sharma",
    role: "Security Lead, ShadowGuard",
    avatar: "/images/about_motion_portrait_1791048134262.jpg",
    rating: 5,
    quote: "Vaibhav delivered an exceptional file inspection engine that eliminated security vulnerabilities on user uploads. Fast, reliable, and deeply technical.",
  },
  {
    id: "t2",
    name: "Priya Nair",
    role: "Founder, CocoCoastal",
    avatar: "/images/hero_portrait_profile_1791048121984.jpg",
    rating: 5,
    quote: "The brand identity and web application Vaibhav built doubled our mobile engagement within weeks. Incredible attention to detail from concept to launch.",
  },
  {
    id: "t3",
    name: "Dr. K. V. Patil",
    role: "Lead Physician, ClinicCortex",
    avatar: "/images/project_zentix_device_1791048147311.jpg",
    rating: 5,
    quote: "Our clinic workflow went from paper clutter to seamless digital records. Vaibhav understands user experience as deeply as backend architecture.",
  },
];

export const posts = [
  {
    id: "post-1",
    slug: "user-centered-design-in-fullstack",
    title: "The Importance of User-Centered Design in Full-Stack Engineering",
    category: "UI/UX & Product",
    date: "OCTOBER 2026",
    readTime: "4 MIN READ",
    image: "/images/project_zentix_device_1791048147311.jpg",
    excerpt: "Why engineering seamless interfaces requires bridging the gap between design tokens and backend API data structures.",
    content: "When building modern digital products, developer experience and user experience must align. Great UI is not just aesthetic—it is functional layout math, zero dead clicks, and predictive loading states that give users instant feedback...",
  },
  {
    id: "post-2",
    slug: "secure-by-default-rest-apis",
    title: "Building Secure-by-Default REST APIs with Node.js & Express",
    category: "Cybersecurity",
    date: "SEPTEMBER 2026",
    readTime: "5 MIN READ",
    image: "/images/project_shopease_editorial_1791048160943.jpg",
    excerpt: "Key strategies for payload validation, rate-limiting, and headers inspection in production web servers.",
    content: "Security should never be an afterthought. From input sanitization to header inspection for binary media uploads, implementing zero-trust middleware ensures data integrity...",
  },
  {
    id: "post-3",
    slug: "mastering-tailwind-v4-grid",
    title: "Mastering Tailwind CSS v4 & Fluid Grid Layouts",
    category: "Frontend",
    date: "AUGUST 2026",
    readTime: "3 MIN READ",
    image: "/images/project_fittrack_sculpture_1791048172050.jpg",
    excerpt: "How to leverage 12-column grids, CSS container queries, and tight typographic tracking for editorial web layouts.",
    content: "Grid systems give web applications architectural balance. By using exact column math, 24px gutters, and fluid typography clamps, we craft interfaces that feel polished on any device...",
  },
];


export const clientLogos = ["React", "TypeScript", "Node.js", "Express", "Supabase", "Vercel"];
