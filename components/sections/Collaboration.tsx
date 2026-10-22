"use client";

import * as React from "react";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { slideInLeftVariant, slideInRightVariant, viewport } from "@/lib/motion";

export function Collaboration() {
  const visualRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(visualRef, { margin: "200px 0px" });

  return (
    <SectionWrapper id="collaboration" className="bg-background relative overflow-hidden py-16 md:py-24 lg:py-32 border-t border-border/40">
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={slideInLeftVariant}
            className="flex-1 space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase border border-border/60 bg-muted/40 text-muted-foreground w-fit mx-auto lg:mx-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Neural Orchestration
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-foreground leading-tight">
              The Magic is in the <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/40">Neural Network</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
              A single agent is helpful. A team of agents collaborating with shared context is transformative. Watch them plan, execute, review, and iterate just like a human team—only 100x faster.
            </p>
            <div className="pt-2">
              <Button 
                size="lg" 
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="h-12 px-8 rounded-full bg-foreground text-background font-semibold hover:bg-foreground/90 transition-all hover:scale-105 active:scale-95 shadow-sm">
                See Architecture Details
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            ref={visualRef}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={slideInRightVariant}
            className="flex-1 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl mx-auto relative"
          >
             {/* Multi-Agent Network Holographic Node */}
             <div className="aspect-square w-full rounded-full border border-border/40 bg-card/20 backdrop-blur-sm flex items-center justify-center p-8 relative shadow-2xl">
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04),transparent_65%)]"></div>
               
               {/* Center Node */}
               <div className="absolute z-20 w-32 h-32 rounded-full border border-border/80 bg-background/90 backdrop-blur-xl flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.08)]">
                 <div className="text-center">
                   <div className="text-foreground font-bold tracking-tight text-lg mb-0.5">Core Brain</div>
                   <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">Shared Context</div>
                 </div>
               </div>

               {/* Radiating signal pulses from core */}
               <motion.div
                 animate={isInView ? { scale: [0.95, 1.45, 0.95], opacity: [0.35, 0, 0.35] } : undefined}
                 transition={{ duration: 3.5, repeat: Infinity, ease: "easeOut" }}
                 className="absolute z-10 w-36 h-36 rounded-full border border-border/60 pointer-events-none transform-gpu will-change-transform"
               />
               <motion.div
                 animate={isInView ? { scale: [0.95, 1.85, 0.95], opacity: [0.25, 0, 0.25] } : undefined}
                 transition={{ duration: 3.5, delay: 1.2, repeat: Infinity, ease: "easeOut" }}
                 className="absolute z-10 w-36 h-36 rounded-full border border-border/30 pointer-events-none transform-gpu will-change-transform"
               />

               {/* Orbital Path Track */}
               <svg className="absolute inset-0 w-full h-full text-border/40" viewBox="0 0 400 400" preserveAspectRatio="none">
                 <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
               </svg>

               {/* Orbiting Agent Nodes */}
               <motion.div 
                 animate={isInView ? { rotate: 360 } : undefined}
                 transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 w-full h-full z-20 transform-gpu will-change-transform"
               >
                 {/* Node 1 - Frontend */}
                 <div className="absolute top-[20px] left-1/2 -translate-x-1/2">
                   <motion.div 
                     animate={isInView ? { rotate: -360 } : undefined}
                     transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                     className="w-16 h-16 rounded-full bg-card border border-border/80 flex flex-col items-center justify-center shadow-lg transform-gpu"
                   >
                     <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mb-1"></span>
                     <span className="text-[10px] font-mono text-foreground font-medium">Frontend</span>
                   </motion.div>
                 </div>

                 {/* Node 2 - Backend */}
                 <div className="absolute bottom-[40px] right-[40px]">
                   <motion.div 
                     animate={isInView ? { rotate: -360 } : undefined}
                     transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                     className="w-16 h-16 rounded-full bg-card border border-border/80 flex flex-col items-center justify-center shadow-lg transform-gpu"
                   >
                     <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mb-1"></span>
                     <span className="text-[10px] font-mono text-foreground font-medium">Backend</span>
                   </motion.div>
                 </div>

                 {/* Node 3 - QA */}
                 <div className="absolute bottom-[40px] left-[40px]">
                   <motion.div 
                     animate={isInView ? { rotate: -360 } : undefined}
                     transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                     className="w-16 h-16 rounded-full bg-card border border-border/80 flex flex-col items-center justify-center shadow-lg transform-gpu"
                   >
                     <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mb-1"></span>
                     <span className="text-[10px] font-mono text-foreground font-medium">QA Test</span>
                   </motion.div>
                 </div>
               </motion.div>
             </div>
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
