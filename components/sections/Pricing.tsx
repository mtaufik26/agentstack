"use client";

import * as React from "react";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { pricingTiers } from "@/src/data";
import { Icon } from "@/components/shared/Icon";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUpScaleVariant, viewport } from "@/lib/motion";

export function Pricing() {
  const [isAnnual, setIsAnnual] = React.useState(false);

  return (
    <SectionWrapper id="pricing" className="bg-background border-t border-white/5 py-16 md:py-24 lg:py-32">
      <Container>
        <SectionHeader 
          title="Simple, Transparent Pricing" 
          subtitle="Scale your AI workforce as your company grows. No hidden fees."
          alignment="center"
        />
        
        {/* Animated Toggle */}
        <div className="flex justify-center mt-12 mb-16">
          <div className="relative flex items-center bg-white/5 border border-white/10 rounded-full p-1">
            <button 
              onClick={() => setIsAnnual(false)}
              className={cn("relative z-10 px-6 py-2 text-sm font-medium transition-colors", !isAnnual ? "text-background" : "text-foreground")}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsAnnual(true)}
              className={cn("relative z-10 px-6 py-2 text-sm font-medium transition-colors", isAnnual ? "text-background" : "text-foreground")}
            >
              Annually <span className="ml-1 text-[10px] uppercase bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30">Save 20%</span>
            </button>
            
            {/* Background pill animation */}
            <motion.div 
              className="absolute top-1 bottom-1 w-[120px] bg-foreground rounded-full"
              initial={false}
              animate={{ left: isAnnual ? "105px" : "4px", width: isAnnual ? "160px" : "90px" }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((plan, index) => {
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
                    ? "bg-white/[0.03] border-none shadow-[0_0_40px_rgba(255,255,255,0.05)]" 
                    : "bg-transparent border border-white/10"
                )}
              >
                {/* Animated Conic Gradient Border for Popular Plan */}
                {isPopular && (
                  <>
                    <div className="absolute inset-[-1px] rounded-[1.5rem] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(255,255,255,0.5)_360deg)] animate-spin-slow opacity-50 -z-10"></div>
                    <div className="absolute inset-[1px] rounded-[calc(1.5rem-1px)] bg-background z-0"></div>
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
                  </div>
                  
                  <Button 
                    onClick={() => {
                      if (plan.price === "Custom") {
                        window.open('mailto:enterprise@ai-agents.com');
                      } else {
                        alert(`Starting ${plan.name} Trial. Redirecting to checkout...`);
                      }
                    }}
                    className={cn(
                      "w-full h-12 rounded-full mb-8 font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]",
                      isPopular 
                        ? "bg-foreground text-background hover:bg-foreground/90 shadow-[0_0_20px_rgba(255,255,255,0.1)]" 
                        : "bg-white/5 text-foreground hover:bg-white/10 border border-white/10"
                    )}
                  >
                    {plan.ctaText}
                  </Button>
                  
                  <div className="space-y-4 mt-auto">
                    <span className="text-xs uppercase tracking-widest font-mono text-muted-foreground/60 block mb-4">Includes:</span>
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Icon name="Check" className="w-5 h-5 text-foreground shrink-0" />
                        <span className="text-sm text-foreground/80">{feature.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </SectionWrapper>
  );
}
