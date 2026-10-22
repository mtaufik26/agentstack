/**
 * @file types/index.ts
 * Core TypeScript interfaces for the AI Agents Platform.
 * All types should be consistent with PROJECT_CONTEXT.md.
 */

export interface Agent {
  id: string;
  name: string;
  role: string;
  department: 'Engineering' | 'Growth' | 'Operations' | 'Product' | 'Sales' | 'HR' | 'Finance' | 'Legal';
  description: string;
  capabilities: string[];
  icon: string; // Lucide icon name
  taskSimulation?: string[];
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  icon: string; // Lucide icon name
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  metrics: string;
  avatarUrl: string;
}

export interface PricingFeature {
  name: string;
  included: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
  ctaText: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface HeroData {
  headline: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta: string;
}

export interface Step {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

export interface Integration {
  id: string;
  name: string;
  icon: string; // Lucide icon name or brand SVG
  category?: string;
}

export interface UseCase {
  id: string;
  department: string;
  title: string;
  description: string;
  metrics: string;
  icon: string; // Lucide icon name
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export interface StatItem {
  value: string;
  label: string;
  description?: string;
}
