import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Log In — AI Agents Platform",
  description:
    "Log in to your AI Agents Platform account. Access your autonomous AI Workforce dashboard and manage your agents, workflows, and integrations.",
  robots: {
    index: false, // login pages should not be indexed
    follow: false,
  },
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <Link href="/" aria-label="AI Agents Platform — Back to home">
            <div className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
                <span className="text-background text-sm font-black">AI</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                AI Agents
              </span>
            </div>
          </Link>
        </div>

        {/* Card */}
        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-2">
              Welcome back
            </h1>
            <p className="text-muted-foreground text-sm">
              Sign in to access your AI Workforce dashboard.
            </p>
          </div>

          {/* Placeholder form — replace with real auth */}
          <form className="flex flex-col gap-4" aria-label="Login form">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-foreground"
              >
                Work Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@company.com"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-foreground"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Forgot password?
                </a>
              </div>
              <input
                id="password"
                type="password"
                name="password"
                autoComplete="current-password"
                placeholder="••••••••"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full h-12 bg-foreground text-background rounded-full font-semibold text-sm hover:bg-foreground/90 active:scale-95 transition-all"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link
                href="/#pricing"
                className="text-foreground font-medium hover:underline underline-offset-4 transition-all"
              >
                Start free trial
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground/50 mt-8">
          By signing in, you agree to our{" "}
          <a href="#" className="hover:text-muted-foreground transition-colors">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="hover:text-muted-foreground transition-colors">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
