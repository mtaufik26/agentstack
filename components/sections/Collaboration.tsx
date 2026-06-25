"use client";

import * as React from "react";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { slideInLeftVariant, slideInRightVariant, viewport } from "@/lib/motion";

export function Collaboration() {
  return (
    <SectionWrapper id="collaboration" className="bg-background relative overflow-hidden py-16 md:py-24 lg:py-32 border-t border-white/5">
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={slideInLeftVariant}
            className="flex-1 space-y-8 text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-foreground leading-tight">
              The Magic is in the <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Neural Network</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
              A single agent is helpful. A team of agents collaborating with shared context is transformative. Watch them plan, execute, review, and iterate just like a human team—only 100x faster.
            </p>
            <div className="pt-4">
              <Button 
                size="lg" 
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="h-12 px-8 rounded-full bg-foreground text-background font-semibold hover:bg-foreground/90 transition-all hover:scale-105 active:scale-95">
                See Architecture Details
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={slideInRightVariant}
            className="flex-1 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl mx-auto relative"
          >
             {/* Abstract Representation of Multi-Agent Network */}
             <div className="aspect-square w-full rounded-full border border-white/5 bg-white/[0.01] flex items-center justify-center p-8 relative shadow-2xl">
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_60%)]"></div>
               
               {/* Center Node */}
               <div className="absolute z-20 w-32 h-32 rounded-full border border-white/20 bg-black/60 backdrop-blur-xl flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                 <div className="text-center">
                   <div className="text-foreground font-bold tracking-tight text-lg mb-1">Core Brain</div>
                   <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">Shared Context</div>
                 </div>
               </div>

               {/* Orbital Path */}
               <svg className="absolute inset-0 w-full h-full text-white/10" viewBox="0 0 400 400" preserveAspectRatio="none">
                 <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
               </svg>

               {/* Orbiting Nodes */}
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 w-full h-full"
               >
                 {/* Node 1 */}
                 <div className="absolute top-[20px] left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-black border border-white/20 flex flex-col items-center justify-center shadow-lg -rotate-[0deg]">
                    <span className="text-[10px] font-mono text-white/80">Frontend</span>
                 </div>
                 {/* Node 2 */}
                 <div className="absolute bottom-[40px] right-[40px] w-16 h-16 rounded-full bg-black border border-white/20 flex flex-col items-center justify-center shadow-lg -rotate-[120deg]">
                    <span className="text-[10px] font-mono text-white/80">Backend</span>
                 </div>
                 {/* Node 3 */}
                 <div className="absolute bottom-[40px] left-[40px] w-16 h-16 rounded-full bg-black border border-white/20 flex flex-col items-center justify-center shadow-lg -rotate-[240deg]">
                    <span className="text-[10px] font-mono text-white/80">QA</span>
                 </div>
               </motion.div>

               {/* Data Flow Packets (Static representation of dynamic paths) */}
               <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 400 400">
                  <motion.circle cx="200" cy="60" r="3" fill="#fff" 
                    animate={{ cy: [60, 200] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} 
                  />
                  <motion.circle cx="320" cy="320" r="3" fill="#fff" 
                    animate={{ cx: [320, 200], cy: [320, 200] }} transition={{ duration: 2, delay: 0.6, repeat: Infinity, ease: "easeInOut" }} 
                  />
                  <motion.circle cx="80" cy="320" r="3" fill="#fff" 
                    animate={{ cx: [80, 200], cy: [320, 200] }} transition={{ duration: 2, delay: 1.2, repeat: Infinity, ease: "easeInOut" }} 
                  />
               </svg>
             </div>
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
