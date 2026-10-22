import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, CheckCircle2 } from "lucide-react";
import { pricingTiers } from "@/src/data";
import { LoginForm } from "@/components/shared/LoginForm";

export const metadata: Metadata = {
  title: "Access Workspace — AI Agents Platform",
  description:
    "Log in to your AI Agents Platform account. Access your autonomous AI Workforce dashboard and manage your agents, workflows, and integrations.",
  robots: {
    index: false,
    follow: false,
  },
};

interface LoginPageProps {
  searchParams: Promise<{
    plan?: string;
    billing?: string;
  }>;
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const resolvedParams = await searchParams;
  const planId = resolvedParams?.plan;
  const isAnnual = resolvedParams?.billing === "annual";

  const selectedPlan = pricingTiers.find((p) => p.id === planId);
  let priceDisplay = selectedPlan?.price;
  if (selectedPlan && isAnnual && selectedPlan.price !== "Custom") {
    const num = parseInt(selectedPlan.price.replace("$", ""));
    if (!isNaN(num)) {
      priceDisplay = `$${Math.floor(num * 0.8)}/mo`;
    }
  } else if (selectedPlan && selectedPlan.price !== "Custom") {
    priceDisplay = `${selectedPlan.price}/mo`;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background radial gradient & grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/[0.03] rounded-full blur-[100px] pointer-events-none" />

      {/* Top Navigation Back Link */}
      <div className="absolute top-6 left-6 z-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-secondary/50"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to platform</span>
        </Link>
      </div>

      <div className="relative w-full max-w-md z-10">
        {/* Logo Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <Link href="/" aria-label="AI Agents Platform — Back to home">
            <div className="flex items-center gap-2 hover:opacity-80 transition-opacity mb-4">
              <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
                <span className="text-background text-sm font-black">AI</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                AI Agents
              </span>
            </div>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-1.5">
            {selectedPlan ? "Deploy Your AI Workforce" : "Welcome Back"}
          </h1>
          <p className="text-muted-foreground text-xs sm:text-sm font-light">
            {selectedPlan
              ? "Complete authentication to provision your autonomous agent cluster."
              : "Sign in to access your AI Workforce dashboard and workflows."}
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-card/70 border border-border/60 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          <LoginForm
            planId={selectedPlan?.id}
            planName={selectedPlan?.name}
            priceDisplay={priceDisplay}
            billingCycle={isAnnual ? "Billed annually" : "Billed monthly"}
            isTrial={Boolean(selectedPlan)}
          />

          <div className="mt-6 pt-6 border-t border-border/40 text-center">
            <p className="text-xs text-muted-foreground">
              {selectedPlan ? (
                <>
                  Need an enterprise custom contract?{" "}
                  <a
                    href="mailto:enterprise@ai-agents.com?subject=Enterprise%20Tier%20Inquiry"
                    className="text-foreground font-medium hover:underline underline-offset-4"
                  >
                    Contact Enterprise Sales
                  </a>
                </>
              ) : (
                <>
                  Don&apos;t have an active workforce?{" "}
                  <Link
                    href="/#pricing"
                    className="text-foreground font-medium hover:underline underline-offset-4"
                  >
                    Explore plans & start trial
                  </Link>
                </>
              )}
            </p>
          </div>
        </div>

        {/* Trust & Compliance Badges */}
        <div className="mt-8 flex items-center justify-center gap-4 sm:gap-6 text-muted-foreground/70 text-[11px] font-mono">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>SOC 2 Type II</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-border" />
          <div className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-foreground/60" />
            <span>256-Bit TLS</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-border" />
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>GDPR Ready</span>
          </div>
        </div>

        {/* Footer Legal Terms */}
        <p className="text-center text-[11px] text-muted-foreground/50 mt-6 leading-relaxed">
          By continuing, you agree to our{" "}
          <Link href="/#" className="hover:text-muted-foreground transition-colors underline underline-offset-2">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/#" className="hover:text-muted-foreground transition-colors underline underline-offset-2">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
