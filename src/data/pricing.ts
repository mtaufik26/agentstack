import { PricingTier } from '../types';

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$49',
    description: 'Perfect for small teams and startups ready to automate daily tasks.',
    ctaText: 'Start Free Trial',
    features: [
      { name: 'Access to 3 active AI Agents', included: true },
      { name: 'Basic workflow automations', included: true },
      { name: '100,000 tasks per month', included: true },
      { name: 'Community support', included: true },
      { name: 'Multi-agent collaboration', included: false },
      { name: 'Custom knowledge base', included: false },
    ]
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '$199',
    description: 'For growing companies that need collaborative AI teams and custom contexts.',
    isPopular: true,
    ctaText: 'Start Free Trial',
    features: [
      { name: 'Access to 10 active AI Agents', included: true },
      { name: 'Advanced workflow automations', included: true },
      { name: 'Unlimited tasks per month', included: true },
      { name: 'Priority email support', included: true },
      { name: 'Multi-agent collaboration', included: true },
      { name: 'Custom knowledge base (up to 1GB)', included: true },
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations requiring bank-grade security and unlimited scale.',
    ctaText: 'Talk to Sales',
    features: [
      { name: 'Unlimited active AI Agents', included: true },
      { name: 'Custom agent training', included: true },
      { name: 'Unlimited tasks per month', included: true },
      { name: '24/7 dedicated account manager', included: true },
      { name: 'SOC2 Type II compliance & RBAC', included: true },
      { name: 'Unlimited custom knowledge base', included: true },
    ]
  }
];
