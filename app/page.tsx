import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { AgentMarketplace } from "@/components/sections/AgentMarketplace";
import { Collaboration } from "@/components/sections/Collaboration";
import { PlatformFeatures } from "@/components/sections/PlatformFeatures";
import { Integrations } from "@/components/sections/Integrations";
import { UseCases } from "@/components/sections/UseCases";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://aiagents.io",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-clip">
      {/* Skip to main content — keyboard navigation & screen reader accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-foreground focus:text-background focus:rounded-lg focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="flex-1 flex flex-col" aria-label="AI Agents Platform main content">
        {/* Hero — Primary value proposition */}
        <Hero />

        {/* Social Proof — Trust signals from recognizable companies */}
        <SocialProof />

        {/* How It Works — 3-step workflow explanation */}
        <HowItWorks />

        {/* Agent Marketplace — Browse available AI Agents */}
        <AgentMarketplace />

        {/* Multi-Agent Collaboration — Core differentiator showcase */}
        <Collaboration />

        {/* Platform Features — Feature grid */}
        <PlatformFeatures />

        {/* Integrations — Connect with existing tools */}
        <Integrations />

        {/* Use Cases — Department-specific outcomes */}
        <UseCases />

        {/* Testimonials — Social proof from real customers */}
        <Testimonials />

        {/* Pricing — Plans and conversion */}
        <Pricing />

        {/* FAQ — Handles objections, generates FAQ rich snippets */}
        <FAQ />

        {/* Final CTA — Last conversion opportunity */}
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
