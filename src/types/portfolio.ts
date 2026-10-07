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

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  expandedContext: string;
  projectDelivered: string;
  metricImpact: string;
  rating: number;
  layoutVariant: 'quote-top' | 'author-top';
  avatarBg: string;
  initials: string;
}

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  category: string;
  featured: boolean;
  image: string;
  excerpt: string;
  content: {
    intro: string;
    sections: { heading: string; body: string }[];
    takeaways: string[];
  };
}
