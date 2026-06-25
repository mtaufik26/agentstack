import { FAQ } from '../types';

export const faqs: FAQ[] = [
  {
    id: 'faq-1',
    question: 'How is this different from ChatGPT?',
    answer: 'ChatGPT is a conversational assistant that gives you answers. Our AI Agents are an autonomous workforce that executes tasks. You assign them a goal (e.g., "Review these pull requests"), and they complete the work independently using the tools you already use.'
  },
  {
    id: 'faq-2',
    question: 'Is my proprietary company data safe?',
    answer: 'Absolutely. We are SOC2 Type II compliant. Your data is encrypted end-to-end and is never used to train our base foundation models. For Enterprise clients, we offer Private LLM deployment options.'
  },
  {
    id: 'faq-3',
    question: 'Can the agents work together?',
    answer: 'Yes, this is our core differentiator. A Product Manager agent can write a spec, hand it off to a Frontend Agent to build the UI, and then pass it to a QA Agent to write the tests, all seamlessly within the platform.'
  },
  {
    id: 'faq-4',
    question: 'Do I need coding skills to create workflows?',
    answer: 'No. Our custom workflow builder uses a visual drag-and-drop interface. You can set up complex multi-agent processes using plain English and visual triggers.'
  }
];
