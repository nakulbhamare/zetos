export type Language = 'fr' | 'en';

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  categoryEn: string;
  badge: 'SaaS' | 'Mobile App' | 'AI Tool' | 'Web App';
  summary: string;
  summaryEn: string;
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
  iconType: string;
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

export interface BentoCapability {
  id: string;
  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
  description: string;
  descriptionEn: string;
  tags: string[];
  icon: string;
}
