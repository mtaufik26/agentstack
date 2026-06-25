import { Testimonial } from '../types';

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'VP of Engineering',
    company: 'TechFlow',
    content: 'The Multi-Agent Collaboration feature completely changed how we ship. Our Frontend and QA agents work together autonomously overnight, cutting our release cycles in half.',
    metrics: '50% faster release cycles',
    avatarUrl: '/images/avatars/sarah.webp',
  },
  {
    id: 't2',
    name: 'Marcus Chen',
    role: 'Founder & CEO',
    company: 'GrowthStack',
    content: 'We delayed hiring an entire marketing team because the AI Marketing Strategist and Content Writer agents handle 80% of our inbound lead generation flawlessly.',
    metrics: '$120k/yr saved in headcount',
    avatarUrl: '/images/avatars/marcus.webp',
  },
  {
    id: 't3',
    name: 'Elena Rodriguez',
    role: 'Head of Operations',
    company: 'ScaleUp Inc',
    content: 'Finally, an AI that understands our strict enterprise compliance. It ingested our 500-page SOP document and now answers tier-1 support tickets with zero hallucinations.',
    metrics: '0% hallucination rate on SOPs',
    avatarUrl: '/images/avatars/elena.webp',
  }
];
