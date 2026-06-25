"use client";

import * as React from "react";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { features } from "@/src/data";
import { Icon } from "@/components/shared/Icon";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { staggerContainer, fadeUpScaleVariant, viewport } from "@/lib/motion";

export function PlatformFeatures() {
  return (
    <SectionWrapper id="features" className="bg-background border-t border-white/5">
      <Container>
        <SectionHeader 
          title="Enterprise-Grade Architecture" 
          subtitle="Built from the ground up for scale, security, and seamless collaboration across millions of tasks."
          className="mb-12 md:mb-24"
        />
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            // Asymmetrical grid logic: 1st item spans 2 cols, others span 1.
            const isLarge = index === 0 || index === 3;
            
            return (
              <motion.div 
                key={feature.id} 
                variants={fadeUpScaleVariant}
                className={cn(
                  "group flex flex-col p-6 md:p-10 rounded-2xl border border-white/10 bg-white/[0.01] hover:bg-white/[0.03] transition-colors duration-500 relative overflow-hidden",
                  isLarge ? "md:col-span-2" : "col-span-1"
                )}
              >
                {/* Subtle Radial Glow on Hover via CSS */}
                <div className="absolute -inset-px rounded-2xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-foreground group-hover:border-foreground transition-all duration-300">
                  <Icon name={feature.icon} className="w-7 h-7 text-foreground group-hover:text-background transition-colors" />
                </div>
                
                <h3 className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tight mb-3 text-foreground">{feature.title}</h3>
                <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed font-light">
                  {feature.description}
                </p>
                
                <ul className="space-y-4 mt-auto border-t border-white/5 pt-8">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground/50"></div>
                      <span className="text-sm font-medium text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
