import { Agent } from '../types';

export const agents: Agent[] = [
  {
    id: 'frontend-dev',
    name: 'Alex',
    role: 'Frontend Developer',
    department: 'Engineering',
    description: 'Builds pixel-perfect, responsive UI components and optimizes web performance.',
    capabilities: ['React/Next.js', 'Tailwind CSS', 'Performance Optimization', 'Responsive Design'],
    icon: 'Layout',
  },
  {
    id: 'backend-eng',
    name: 'Sarah',
    role: 'Backend Engineer',
    department: 'Engineering',
    description: 'Designs scalable APIs, manages databases, and implements robust security.',
    capabilities: ['API Design', 'Database Architecture', 'Authentication', 'System Scaling'],
    icon: 'Database',
  },
  {
    id: 'ui-ux-designer',
    name: 'Jordan',
    role: 'UI/UX Designer',
    department: 'Product',
    description: 'Creates intuitive user interfaces and optimizes conversion rates.',
    capabilities: ['Wireframing', 'Prototyping', 'User Research', 'Design Systems'],
    icon: 'PenTool',
  },
  {
    id: 'marketing-strategist',
    name: 'Emma',
    role: 'Marketing Strategist',
    department: 'Growth',
    description: 'Plans campaigns, analyzes metrics, and drives user acquisition.',
    capabilities: ['Campaign Planning', 'SEO Strategy', 'Copywriting', 'Growth Hacking'],
    icon: 'TrendingUp',
  },
  {
    id: 'hr-specialist',
    name: 'David',
    role: 'HR Specialist',
    department: 'HR',
    description: 'Screens candidates, schedules interviews, and manages onboarding.',
    capabilities: ['Candidate Screening', 'Onboarding Workflows', 'Job Descriptions', 'Interview Prep'],
    icon: 'Users',
  },
  {
    id: 'data-analyst',
    name: 'Priya',
    role: 'Data Analyst',
    department: 'Operations',
    description: 'Extracts actionable insights from complex business metrics.',
    capabilities: ['Report Generation', 'Dashboard Creation', 'Trend Analysis', 'Predictive Modeling'],
    icon: 'BarChart',
  }
];
