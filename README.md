# AI Agents Platform

A modern, premium SaaS landing page for deploying autonomous AI agents. The platform positions AI not just as chatbots, but as a collaborative **AI Workforce** capable of executing complex workflows across engineering, marketing, HR, and operations.

## 🚀 Features

- **Premium SaaS Design**: Inspired by top-tier products like Linear, Stripe, and Vercel. Features a sleek dark mode, refined typography, and subtle micro-animations.
- **High-Performance Animations**: Centralized motion system utilizing Framer Motion with hardware-accelerated transitions.
- **Mobile-First Responsive**: Flawless experience across desktop, tablet, and mobile devices.
- **SEO Optimized**: Fully equipped with JSON-LD Structured Data, dynamic Open Graph images, proper metadata, canonical URLs, `sitemap.xml`, and `robots.txt`.
- **Accessible**: Semantic HTML, screen-reader friendly (aria-labels), keyboard navigation skip links, and `prefers-reduced-motion` support.
- **Component Architecture**: Modular, scalable UI built with shadcn/ui primitives.

## 🛠️ Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📂 Project Structure

```text
├── app/                  # Next.js App Router (Layout, Page, SEO files)
├── components/           # React Components
│   ├── sections/         # Main landing page sections (Hero, Pricing, etc.)
│   ├── shared/           # Reusable UI wrappers (Container, SectionHeader)
│   └── ui/               # shadcn/ui base primitives
├── lib/                  # Utilities (Motion tokens, cn helper)
├── src/                  # Centralized data and types
│   ├── data/             # Static content driving the UI (agents, pricing, etc.)
│   └── types/            # TypeScript interfaces
└── public/               # Static assets
```

## 💻 Getting Started

1. **Install dependencies:**

```bash
npm install
```

2. **Run the development server:**

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Configuration

- **Animation Settings**: Adjust easing curves and durations centrally in `lib/motion.ts`.
- **Content Updates**: All text, pricing, FAQs, and agent data can be managed without touching UI code via `src/data/`.
- **SEO Data**: Site-wide JSON-LD schema is managed in `components/shared/StructuredData.tsx` and `app/layout.tsx`.
