import { Feature } from '../types';

export const features: Feature[] = [
  {
    id: 'multi-agent-collab',
    title: 'Multi-Agent Collaboration',
    description: 'Watch as multiple specialized agents work together to execute complex projects natively within your workspace.',
    benefits: ['Seamless handoffs', 'Shared context', 'Automated QA'],
    icon: 'Network',
  },
  {
    id: 'custom-workflows',
    title: 'Custom Workflows',
    description: 'Design dynamic processes tailored to your exact business needs with a simple drag-and-drop interface.',
    benefits: ['No-code builder', 'Trigger-based actions', 'Conditional logic'],
    icon: 'Workflow',
  },
  {
    id: 'knowledge-base',
    title: 'Context Retention',
    description: 'Connect your internal documentation and SOPs so agents understand your unique business context and guidelines.',
    benefits: ['Notion integration', 'Secure document parsing', 'Persistent memory'],
    icon: 'BrainCircuit',
  },
  {
    id: 'enterprise-security',
    title: 'Enterprise Security',
    description: 'Bank-grade security ensuring your proprietary data never trains external models and remains strictly confidential.',
    benefits: ['SOC2 Type II Compliant', 'Zero data retention', 'Role-based access'],
    icon: 'ShieldCheck',
  }
];
