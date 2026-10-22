import { HeroData, NavLink, Step, Integration, UseCase, FooterColumn } from '../types';

export const navbarData = {
  logo: "AI Agents",
  links: [
    { label: "Agents", href: "#agents" },
    { label: "Features", href: "#features" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Pricing", href: "#pricing" },
  ] as NavLink[],
  loginText: "Log in",
  ctaText: "Start Free Trial"
};

export const heroData: HeroData = {
  headline: "Hire an AI Workforce, Not Just a Chatbot",
  subheadline: "Scale your company as fast as software. Delegate complex workflows to specialized AI Agents that collaborate, execute, and deliver results 24/7.",
  primaryCta: "Start Free Trial",
  secondaryCta: "Explore Platform"
};

export const socialProofLogos = [
  "Acme Corp", "GlobalTech", "Quantum", "Nexus", "Pinnacle", "Aether"
];

export const howItWorksSteps: Step[] = [
  {
    id: "step-1",
    title: "Assign Workflows",
    description: "Provide your SOPs and assign goals in plain English.",
    icon: "ClipboardList"
  },
  {
    id: "step-2",
    title: "Agents Collaborate",
    description: "Specialized agents form a team, plan the execution, and hand off tasks seamlessly.",
    icon: "Network"
  },
  {
    id: "step-3",
    title: "Review Results",
    description: "Approve the completed work and watch your productivity multiply.",
    icon: "CheckCircle"
  }
];

export const integrations: Integration[] = [
  { id: "github", name: "GitHub", icon: "Github", category: "Version Control" },
  { id: "slack", name: "Slack", icon: "Slack", category: "Team Chat" },
  { id: "jira", name: "Jira", icon: "Jira", category: "Issue Tracking" },
  { id: "linear", name: "Linear", icon: "Linear", category: "Project Tracking" },
  { id: "notion", name: "Notion", icon: "Notion", category: "Documentation" },
  { id: "figma", name: "Figma", icon: "Figma", category: "Design Systems" },
  { id: "docker", name: "Docker", icon: "Boxes", category: "Containerization" },
  { id: "aws", name: "AWS Cloud", icon: "Cloud", category: "Infrastructure" },
  { id: "sentry", name: "Sentry", icon: "ShieldAlert", category: "Telemetry" },
  { id: "stripe", name: "Stripe", icon: "CreditCard", category: "Payments & Invoicing" },
  { id: "salesforce", name: "Salesforce", icon: "Database", category: "Enterprise CRM" },
  { id: "zoom", name: "Zoom", icon: "Video", category: "Virtual Meetings" },
];

export const integrationsData = {
  title: "Connects with Your Entire Stack",
  description: "Seamlessly integrate your AI workforce with the tools you already use. No custom code required.",
  tools: integrations
};

export const finalCtaData = {
  headline: "Ready to Scale?",
  description: "Join hundreds of innovative companies scaling their operations with our autonomous AI workforce.",
  primaryCta: "Start Free Trial",
  secondaryCta: "Talk to Sales",
  guarantee: "14-day free trial. No credit card required."
};

export const useCases: UseCase[] = [
  {
    id: "uc-tech",
    department: "Engineering",
    title: "Ship features 10x faster",
    description: "Frontend and Backend agents collaborate to build, test, and deploy features based on your PRDs.",
    metrics: "40 hrs saved per week",
    icon: "Code"
  },
  {
    id: "uc-marketing",
    department: "Growth & Marketing",
    title: "Automate inbound engines",
    description: "SEO and Content agents research keywords and publish high-converting articles daily.",
    metrics: "300% increase in organic traffic",
    icon: "TrendingUp"
  },
  {
    id: "uc-ops",
    department: "Operations",
    title: "Zero-touch customer support",
    description: "Support agents ingest your SOPs to resolve tier-1 and tier-2 tickets autonomously.",
    metrics: "95% auto-resolution rate",
    icon: "Headphones"
  }
];

export const footerData: FooterColumn[] = [
  {
    title: "Platform",
    links: [
      { label: "Agents", href: "#agents" },
      { label: "Features", href: "#features" },
      { label: "Integrations", href: "#integrations" },
      { label: "Pricing", href: "#pricing" }
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "How it Works", href: "#how-it-works" },
      { label: "Use Cases", href: "#use-cases" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQ", href: "#faq" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" }
    ]
  }
];
