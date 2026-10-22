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
    taskSimulation: [
      'Compiling responsive design tokens and Tailwind variables',
      'Synthesizing accessible WCAG 2.2 navigation component',
      'Verifying Core Web Vitals: FCP 0.38s, LCP 0.72s, zero layout shift',
    ],
  },
  {
    id: 'backend-eng',
    name: 'Sarah',
    role: 'Backend Engineer',
    department: 'Engineering',
    description: 'Designs scalable APIs, manages databases, and implements robust security.',
    capabilities: ['API Design', 'Database Architecture', 'Authentication', 'System Scaling'],
    icon: 'Database',
    taskSimulation: [
      'Ingesting OpenAPI 3.1 specification schema',
      'Establishing pooled database connection and migration lock',
      'Securing JWT rotate handlers & rate-limiting middleware',
    ],
  },
  {
    id: 'ui-ux-designer',
    name: 'Jordan',
    role: 'UI/UX Designer',
    department: 'Product',
    description: 'Creates intuitive user interfaces and optimizes conversion rates.',
    capabilities: ['Wireframing', 'Prototyping', 'User Research', 'Design Systems'],
    icon: 'PenTool',
    taskSimulation: [
      'Analyzing checkout drop-off friction and cognitive load',
      'Establishing 8pt grid baseline and semantic color hierarchy',
      'Running contrast ratio verification: 100% AAA compliant',
    ],
  },
  {
    id: 'marketing-strategist',
    name: 'Emma',
    role: 'Marketing Strategist',
    department: 'Growth',
    description: 'Plans campaigns, analyzes metrics, and drives user acquisition.',
    capabilities: ['Campaign Planning', 'SEO Strategy', 'Copywriting', 'Growth Hacking'],
    icon: 'TrendingUp',
    taskSimulation: [
      'Identifying high-intent organic keywords and competitor gaps',
      'Generating high-converting multi-channel launch campaign',
      'Projecting +320% qualified inbound pipeline over 90 days',
    ],
  },
  {
    id: 'hr-specialist',
    name: 'David',
    role: 'HR Specialist',
    department: 'HR',
    description: 'Screens candidates, schedules interviews, and manages onboarding.',
    capabilities: ['Candidate Screening', 'Onboarding Workflows', 'Job Descriptions', 'Interview Prep'],
    icon: 'Users',
    taskSimulation: [
      'Ingesting senior engineering rubric and technical criteria',
      'Screening 48 candidate profiles against experience benchmarks',
      'Automating interview scheduling and calendar synchronization',
    ],
  },
  {
    id: 'data-analyst',
    name: 'Priya',
    role: 'Data Analyst',
    department: 'Operations',
    description: 'Extracts actionable insights from complex business metrics.',
    capabilities: ['Report Generation', 'Dashboard Creation', 'Trend Analysis', 'Predictive Modeling'],
    icon: 'BarChart',
    taskSimulation: [
      'Querying warehouse retention and activation cohorts',
      'Synthesizing real-time executive dashboard visualizations',
      'Flagging positive ROI anomalies: +42% efficiency gain detected',
    ],
  }
];
