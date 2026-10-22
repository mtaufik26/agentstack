"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { pricingTiers } from "@/src/data";
import { Icon } from "@/components/shared/Icon";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUpScaleVariant, viewport } from "@/lib/motion";

export function Pricing() {
  const router = useRouter();
  const [isAnnual, setIsAnnual] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "200px 0px" });

  return (
    <SectionWrapper id="pricing" className="bg-background border-t border-border/40 py-16 md:py-24 lg:py-32">
      <div ref={containerRef}>
      <Container>
        <SectionHeader 
          badge="Plans & Pricing"
          title="Simple, Transparent Pricing" 
          subtitle="Scale your AI workforce as your company grows. No hidden fees."
          alignment="center"
        />
        
        {/* Animated Toggle */}
        <div className="flex justify-center mt-12 mb-16">
          <div 
            role="tablist" 
            aria-label="Billing frequency selection" 
            className="relative flex items-center bg-secondary/50 border border-border/60 rounded-full p-1 gap-1"
          >
            <button 
              role="tab"
              aria-selected={!isAnnual}
              onClick={() => setIsAnnual(false)}
              className={cn(
                "relative px-5 py-2 text-sm font-medium transition-colors rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                !isAnnual ? "text-background" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {!isAnnual && (
                <motion.div
                  layoutId="pricing-active-pill"
                  className="absolute inset-0 bg-foreground rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">Monthly</span>
            </button>
            <button 
              role="tab"
              aria-selected={isAnnual}
              onClick={() => setIsAnnual(true)}
              className={cn(
                "relative px-5 py-2 text-sm font-medium transition-colors rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isAnnual ? "text-background" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {isAnnual && (
                <motion.div
                  layoutId="pricing-active-pill"
                  className="absolute inset-0 bg-foreground rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              )}
              <span className="relative z-10 inline-flex items-center gap-1.5">
                Annually
                <span className={cn(
                  "text-[10px] uppercase px-2 py-0.5 rounded-full border font-semibold",
                  isAnnual 
                    ? "bg-black/20 text-background border-white/20" 
                    : "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                )}>
                  Save 20%
                </span>
              </span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((plan) => {
            const isPopular = plan.isPopular;
            // Calculate annual price roughly
            const priceNum = parseInt(plan.price.replace('$', ''));
            const displayPrice = isAnnual && !isNaN(priceNum) ? `$${Math.floor(priceNum * 0.8)}` : plan.price;
            
            return (
              <motion.div 
                key={plan.id}
                variants={fadeUpScaleVariant}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className={cn(
                  "relative flex flex-col p-6 md:p-8 rounded-3xl transition-transform duration-500 hover:-translate-y-2",
                  isPopular 
                    ? "bg-card/80 border-none shadow-[0_0_40px_rgba(255,255,255,0.06)]" 
                    : "bg-card/40 border border-border/50 hover:border-border/80 hover:bg-card/60 transition-all"
                )}
              >
                {/* Animated Conic Gradient Border for Popular Plan */}
                {isPopular && (
                  <>
                    <div className={cn(
                      "absolute inset-[-1px] rounded-[1.5rem] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(255,255,255,0.5)_360deg)] opacity-50 -z-10 transform-gpu will-change-transform",
                      isInView && "animate-spin-slow"
                    )}></div>
                    <div className="absolute inset-[1px] rounded-[calc(1.5rem-1px)] bg-card z-0"></div>
                  </>
                )}
                
                <div className="relative z-10 flex flex-col h-full">
                  {isPopular && (
                    <div className="absolute -top-12 left-0 right-0 flex justify-center">
                      <span className="bg-foreground text-background text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-medium text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm min-h-[40px]">{plan.description}</p>
                  
                  <div className="my-6 md:my-8">
                    <span className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground transition-all">{displayPrice}</span>
                    {plan.price !== "Custom" && <span className="text-muted-foreground font-mono ml-2">/ month</span>}
                    {isAnnual && plan.price !== "Custom" && !isNaN(priceNum) && (
                      <span className="text-xs text-emerald-400 font-mono block mt-1.5">
                        Billed annually (${Math.floor(priceNum * 0.8 * 12)}/yr)
                      </span>
                    )}
                  </div>
                  
                  <Button 
                    onClick={() => {
                      if (plan.price === "Custom") {
                        window.location.href = 'mailto:enterprise@ai-agents.com?subject=Enterprise%20Tier%20Inquiry';
                      } else {
                        router.push(`/login?plan=${plan.id}&billing=${isAnnual ? 'annual' : 'monthly'}`);
                      }
                    }}
                    className={cn(
                      "w-full h-12 rounded-full mb-8 font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]",
                      isPopular 
                        ? "bg-foreground text-background hover:bg-foreground/90 shadow-[0_0_20px_rgba(255,255,255,0.1)]" 
                        : "bg-secondary text-foreground hover:bg-secondary/80 border border-border/60"
                    )}
                  >
                    {plan.ctaText}
                  </Button>
                  
                  <div className="space-y-4 mt-auto">
                    <span className="text-xs uppercase tracking-widest font-mono text-muted-foreground/60 block mb-4">Includes:</span>
                    {plan.features.map((feature, i) => (
                      <div key={i} className={cn("flex items-start gap-3", !feature.included && "opacity-40")}>
                        {feature.included ? (
                          <Icon name="Check" className="w-5 h-5 text-foreground shrink-0" />
                        ) : (
                          <Icon name="Minus" className="w-5 h-5 text-muted-foreground shrink-0" />
                        )}
                        <span className={cn(
                          "text-sm",
                          feature.included ? "text-foreground/80" : "text-muted-foreground line-through"
                        )}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
      </div>
    </SectionWrapper>
  );
}
