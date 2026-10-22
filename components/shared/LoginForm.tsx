"use client";

import * as React from "react";
import { Eye, EyeOff, Lock, Mail, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LoginFormProps {
  planId?: string;
  planName?: string;
  priceDisplay?: string;
  billingCycle?: string;
  isTrial?: boolean;
}

export function LoginForm({
  planId,
  planName,
  priceDisplay,
  billingCycle,
  isTrial = false,
}: LoginFormProps) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState(true);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate authentication / checkout redirect
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <div className="w-full">
      {/* Selected Plan Banner if arriving from Pricing */}
      {planName && (
        <div className="mb-6 p-4 rounded-2xl border border-primary/20 bg-secondary/50 backdrop-blur-md">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                Selected Plan
              </span>
            </div>
            <span className="text-[11px] font-mono text-emerald-400 font-semibold bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
              14-Day Free Trial
            </span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-lg font-bold text-foreground">{planName}</span>
            <span className="text-sm font-mono text-foreground/80">
              {priceDisplay}
              {billingCycle && (
                <span className="text-xs text-muted-foreground"> ({billingCycle})</span>
              )}
            </span>
          </div>
        </div>
      )}

      {/* Social SSO Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <button
          type="button"
          onClick={() => alert("Enterprise SSO (GitHub) integration demo")}
          className="flex-1 h-11 flex items-center justify-center gap-2.5 rounded-xl border border-border/60 bg-secondary/40 hover:bg-secondary/80 text-foreground text-xs font-medium transition-all active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          Continue with GitHub
        </button>

        <button
          type="button"
          onClick={() => alert("Enterprise SSO (Google Workspace) integration demo")}
          className="flex-1 h-11 flex items-center justify-center gap-2.5 rounded-xl border border-border/60 bg-secondary/40 hover:bg-secondary/80 text-foreground text-xs font-medium transition-all active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z" />
            <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z" />
            <path fill="#FBBC05" d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3 0-.8.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12.3 0 15s.7 5.3 1.9 7.7l3.7-2.9z" />
            <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.4-6.4-5.5L1.9 15.7C3.7 20.4 7.5 23 12 23z" />
          </svg>
          Google Workspace
        </button>
      </div>

      {/* Divider */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border/50"></div>
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-card px-3 text-muted-foreground font-mono uppercase text-[10px] tracking-wider">
            Or continue with work email
          </span>
        </div>
      </div>

      {/* Actual Form */}
      {submitted ? (
        <div className="p-6 rounded-2xl bg-secondary/50 border border-emerald-500/30 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">Check your inbox</h3>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            We sent a secure magic authentication link to <span className="font-mono text-foreground font-medium">{email}</span>. Click the link to complete your login.
          </p>
          <Button
            variant="outline"
            onClick={() => setSubmitted(false)}
            className="mt-4 text-xs h-9 rounded-full border-border/60"
          >
            Use a different email
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4" aria-label="Sign in form">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-xs font-medium text-foreground flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-muted-foreground" />
              Work Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              placeholder="you@company.com"
              required
              className="w-full h-11 bg-secondary/30 border border-border/60 rounded-xl px-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-all"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-xs font-medium text-foreground flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-muted-foreground" />
                Password
              </label>
              <button
                type="button"
                onClick={() => alert("Password reset instructions will be sent to your work email.")}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Forgot password?
              </button>
            </div>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                placeholder="••••••••••••"
                required
                className="w-full h-11 bg-secondary/30 border border-border/60 rounded-xl px-4 pr-11 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center gap-2 pt-1">
            <input
              id="remember"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded border-border bg-secondary/40 text-foreground focus:ring-ring"
            />
            <label htmlFor="remember" className="text-xs text-muted-foreground cursor-pointer select-none">
              Remember this device for 30 days
            </label>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="mt-3 w-full h-12 bg-foreground text-background rounded-full font-semibold text-sm hover:bg-foreground/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-background/20 border-t-background rounded-full animate-spin"></span>
                Authenticating...
              </span>
            ) : isTrial || planId ? (
              <>
                <span>Start 14-Day Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </>
            ) : (
              <>
                <span>Sign In to Workspace</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  );
}
