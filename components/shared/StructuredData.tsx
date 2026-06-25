/**
 * @file StructuredData.tsx
 * JSON-LD structured data for the AI Agents Platform.
 *
 * Implements:
 * - Organization
 * - WebSite (with SearchAction for sitelinks searchbox)
 * - SoftwareApplication
 * - FAQPage (for Google FAQ rich snippets)
 *
 * Placed in layout so it applies to all pages.
 * Additional page-specific schemas can be added per-page.
 */

const BASE_URL = 'https://aiagents.io';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'AI Agents Platform',
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/opengraph-image.png`,
    width: 1200,
    height: 630,
  },
  description:
    'AI Agents Platform provides specialized AI Agents for businesses, startups, agencies, and enterprise teams — an autonomous AI Workforce that executes tasks, automates workflows, and scales operations 24/7.',
  sameAs: [
    'https://twitter.com/aiagentsio',
    'https://linkedin.com/company/aiagents',
    'https://github.com/aiagents',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: 'sales@aiagents.io',
    availableLanguage: ['English'],
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: 'AI Agents Platform',
  description: 'Deploy an AI Workforce — specialized AI Agents that automate business workflows for engineering, marketing, operations, and more.',
  publisher: { '@id': `${BASE_URL}/#organization` },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `${BASE_URL}/#software`,
  name: 'AI Agents Platform',
  url: BASE_URL,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'AI Automation Platform',
  operatingSystem: 'Web',
  description:
    'A SaaS platform providing specialized AI Agents — Frontend Developer, Backend Engineer, Marketing Strategist, HR Specialist, Data Analyst, and more — that work autonomously as an AI Workforce for businesses of all sizes.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Starter Plan',
      price: '49',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '49',
        priceCurrency: 'USD',
        billingIncrement: 1,
        unitCode: 'MON',
      },
      description: 'Access to 3 active AI Agents, basic workflow automations, 100,000 tasks per month.',
      eligibleCustomerType: 'Business',
    },
    {
      '@type': 'Offer',
      name: 'Professional Plan',
      price: '199',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '199',
        priceCurrency: 'USD',
        billingIncrement: 1,
        unitCode: 'MON',
      },
      description: 'Access to 10 active AI Agents, multi-agent collaboration, unlimited tasks, custom knowledge base.',
      eligibleCustomerType: 'Business',
    },
    {
      '@type': 'Offer',
      name: 'Enterprise Plan',
      price: '0',
      priceCurrency: 'USD',
      description: 'Unlimited AI Agents, custom training, SOC2 Type II compliance, RBAC, dedicated account manager.',
      eligibleCustomerType: 'Business',
    },
  ],
  featureList: [
    'Multi-Agent Collaboration',
    'Custom Workflow Builder',
    'Knowledge Base Integration',
    'Enterprise Security (SOC2 Type II)',
    'Analytics Dashboard',
    'GitHub, Slack, Notion, Figma, Salesforce integrations',
  ],
  screenshot: `${BASE_URL}/opengraph-image.png`,
  author: { '@id': `${BASE_URL}/#organization` },
  publisher: { '@id': `${BASE_URL}/#organization` },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '312',
    bestRating: '5',
    worstRating: '1',
  },
};

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How is this different from ChatGPT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ChatGPT is a conversational assistant that gives you answers. Our AI Agents are an autonomous workforce that executes tasks. You assign them a goal (e.g., "Review these pull requests"), and they complete the work independently using the tools you already use.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is my proprietary company data safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We are SOC2 Type II compliant. Your data is encrypted end-to-end and is never used to train our base foundation models. For Enterprise clients, we offer Private LLM deployment options.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the agents work together?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, this is our core differentiator. A Product Manager agent can write a spec, hand it off to a Frontend Agent to build the UI, and then pass it to a QA Agent to write the tests, all seamlessly within the platform.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need coding skills to create workflows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Our custom workflow builder uses a visual drag-and-drop interface. You can set up complex multi-agent processes using plain English and visual triggers.',
      },
    },
  ],
};

interface StructuredDataProps {
  /** Pass 'faq' to include the FAQPage schema (only on pages with FAQ content) */
  includeFaq?: boolean;
}

export function StructuredData({ includeFaq = true }: StructuredDataProps) {
  const schemas = [
    organizationSchema,
    websiteSchema,
    softwareApplicationSchema,
    ...(includeFaq ? [faqPageSchema] : []),
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
