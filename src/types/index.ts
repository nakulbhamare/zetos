export type Language = 'fr' | 'en';

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  categoryEn: string;
  badge: 'SaaS' | 'Mobile App' | 'AI Tool' | 'Web App' | 'Platform';
  industry: 'FinTech' | 'SportsTech' | 'EdTech' | 'TravelTech' | 'AdTech' | 'MusicTech' | 'GovTech' | 'LegalTech' | 'HRTech' | 'Logistics';
  summary: string;
  summaryEn: string;
  problem: string;
  problemEn: string;
  solution: string;
  solutionEn: string;
  description: string;
  descriptionEn: string;
  client: string;
  clientRole?: string;
  quote?: string;
  quoteEn?: string;
  metrics: { label: string; labelEn: string; value: string }[];
  deliverables: string[];
  deliverablesEn: string[];
  stack: string[];
  gradientTheme: string;
  accentColor: string;
  iconType: string;
  liveStatus?: 'LIVE' | 'SCALING' | 'ACQUIRED' | 'MVP';
  isInternalProduct?: boolean;
}

export interface Offer {
  id: string;
  step: string;
  stepEn: string;
  emoji: string;
  title: string;
  titleEn: string;
  headline: string;
  headlineEn: string;
  description: string;
  descriptionEn: string;
  startingPrice: string;
  priceNote: string;
  priceNoteEn: string;
  timeline: string;
  timelineEn: string;
  processSteps: { title: string; titleEn: string; desc: string; descEn: string }[];
  deliverables: string[];
  deliverablesEn: string[];
  badgeColor?: string;
}

export interface CorePillar {
  number: string;
  tag: string;
  tagEn: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  stat: string;
  statLabel: string;
  statLabelEn: string;
  icon: string;
}

export interface Founder {
  id: string;
  name: string;
  role: string;
  roleEn: string;
  bio: string;
  bioEn: string;
  specialties: string[];
  specialtiesEn: string[];
  linkedin: string;
  imageAlt: string;
  trackRecord: string;
  trackRecordEn: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  quoteEn: string;
  author: string;
  role: string;
  company: string;
  metric: string;
  metricLabel: string;
  metricLabelEn: string;
}

export interface FAQItem {
  id: string;
  question: string;
  questionEn: string;
  answer: string;
  answerEn: string;
  category: string;
}

export interface ServiceCategory {
  id: 'product' | 'intelligence' | 'experience' | 'longterm';
  title: string;
  titleEn: string;
  tagline: string;
  taglineEn: string;
  icon: string;
  items: {
    id: string;
    title: string;
    titleEn: string;
    description: string;
    descriptionEn: string;
    deliverables: string[];
    deliverablesEn: string[];
    tag: string;
  }[];
}

export interface JourneyStage {
  step: string;
  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
  description: string;
  descriptionEn: string;
  outputs: string[];
  outputsEn: string[];
  duration: string;
  durationEn: string;
  visualType: 'concept' | 'wireframe' | 'design' | 'code' | 'launch' | 'scale';
}

export interface AIAgentScenario {
  id: string;
  title: string;
  titleEn: string;
  role: string;
  roleEn: string;
  trigger: string;
  triggerEn: string;
  reasoning: string;
  reasoningEn: string;
  action: string;
  actionEn: string;
  outcome: string;
  outcomeEn: string;
  codeSnippet: string;
}
