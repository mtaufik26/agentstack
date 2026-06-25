"use client";

import * as React from "react";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { finalCtaData } from "@/src/data";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { scaleUpVariant, viewport } from "@/lib/motion";

export function FinalCTA() {
  return (
    <SectionWrapper id="cta" className="relative py-20 md:py-32 overflow-hidden border-t border-white/5">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-background z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-white/[0.02] rounded-[100%] blur-[80px] z-0 pointer-events-none"></div>
      
      <Container className="relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={scaleUpVariant}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium mb-8">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
            System Ready for Deployment
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter mb-6 md:mb-8 text-foreground leading-[1.1] md:leading-[1.05]">
            {finalCtaData.headline}
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 md:mb-12 font-light max-w-2xl leading-relaxed px-2 md:px-0">
            {finalCtaData.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button 
              size="lg" 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto h-14 px-10 text-base font-semibold bg-foreground text-background hover:bg-white/90 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all hover:scale-[1.02] active:scale-[0.98]">
              {finalCtaData.primaryCta}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => window.open('mailto:sales@ai-agents.com')}
              className="w-full sm:w-auto h-14 px-10 text-base font-semibold rounded-full border-white/20 bg-black/50 backdrop-blur-md hover:bg-white/10 transition-all hover:scale-[1.02] active:scale-[0.98]">
              {finalCtaData.secondaryCta}
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-muted-foreground font-mono">
            {finalCtaData.guarantee}
          </p>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
