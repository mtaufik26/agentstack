"use client";

import * as React from "react";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { howItWorksSteps } from "@/src/data";
import { Icon } from "@/components/shared/Icon";
import { motion } from "framer-motion";
import { staggerContainer, fadeUpScaleVariant, viewport } from "@/lib/motion";

export function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" className="bg-background relative py-16 md:py-24">
      <Container>
        <SectionHeader 
          title="The Paradigm Shift in Automation" 
          subtitle="Stop writing complex zapier rules. Start assigning goals to intelligent agents that understand context."
          className="mb-12 md:mb-20 px-4 sm:px-0"
        />
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 relative"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {/* Subtle background connecting line for desktop */}
          <div className="hidden md:block absolute top-[20%] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>

          {howItWorksSteps.map((step, index) => (
            <motion.div 
              key={step.id} 
              variants={fadeUpScaleVariant}
              className="flex flex-col relative z-10 group"
            >
              <div className="flex flex-col h-full bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/[0.07] transition-colors duration-500 shadow-lg">
                
                {/* Visual Header with Embedded Animation */}
                <div className="h-64 relative bg-black/50 border-b border-white/10 overflow-hidden flex items-center justify-center p-6">
                  {/* Background Grid */}
                  <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
                  
                  {/* Dynamic Animations based on Step Index */}
                  {index === 0 && (
                    <div className="w-full max-w-[200px] space-y-4 relative z-10 scale-90 sm:scale-100 transform origin-center">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-foreground flex items-center justify-center">
                          <Icon name="User" className="w-3 h-3 text-background" />
                        </div>
                        <div className="text-xs font-medium text-foreground">You</div>
                      </div>
                      <div className="h-24 w-full bg-white/5 border border-white/10 rounded-xl p-3 shadow-inner relative overflow-hidden">
                        <motion.div 
                          initial={{ clipPath: "inset(0 100% 0 0)" }}
                          whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                          transition={{ duration: 1.5, ease: "linear", delay: 0.2 }}
                          viewport={{ once: true }}
                          className="text-xs font-medium text-white/90"
                        >
                          Build and deploy...
                        </motion.div>
                        {/* Scan line — CSS animation to avoid SSR style mismatch */}
                        <div 
                          className="absolute left-0 right-0 h-[1px] bg-emerald-500/50 shadow-[0_0_8px_rgba(16,185,129,0.8)] z-0 animate-[scanline_2s_linear_infinite]"
                        />
                      </div>
                    </div>
                  )}

                  {index === 1 && (
                    <div className="relative w-full h-full flex items-center justify-center scale-90 sm:scale-100">
                      <div className="w-14 h-14 rounded-full bg-foreground shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center z-10 relative">
                        <Icon name="Network" className="w-6 h-6 text-background" />
                        <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-50"></div>
                      </div>
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 w-full h-full"
                      >
                        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-10 h-10 rounded-xl bg-black border border-white/10 flex items-center justify-center shadow-lg -rotate-[0deg]">
                           <Icon name="Code" className="w-4 h-4 text-blue-400" />
                        </div>
                        <div className="absolute bottom-[20%] right-[20%] w-10 h-10 rounded-xl bg-black border border-white/10 flex items-center justify-center shadow-lg -rotate-[120deg]">
                           <Icon name="PenTool" className="w-4 h-4 text-purple-400" />
                        </div>
                        <div className="absolute bottom-[20%] left-[20%] w-10 h-10 rounded-xl bg-black border border-white/10 flex items-center justify-center shadow-lg -rotate-[240deg]">
                           <Icon name="Search" className="w-4 h-4 text-amber-400" />
                        </div>
                      </motion.div>
                    </div>
                  )}

                  {index === 2 && (
                    <div className="flex flex-col items-center w-full max-w-[200px] scale-90 sm:scale-100">
                      <motion.div 
                        initial={{ scale: 0 }} 
                        whileInView={{ scale: 1 }} 
                        viewport={{ once: false }}
                        transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
                        className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.2)] mb-4 relative"
                      >
                        <Icon name="Check" className="w-8 h-8 text-emerald-400" />
                        <motion.div 
                          initial={{ scale: 1, opacity: 1 }}
                          whileInView={{ scale: 2, opacity: 0 }}
                          viewport={{ once: false }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="absolute inset-0 rounded-full border border-emerald-400"
                        />
                      </motion.div>
                      <div className="bg-white/5 border border-white/10 rounded-lg p-2 text-center w-full">
                        <div className="text-xl font-bold text-foreground">100%</div>
                        <div className="text-[9px] uppercase tracking-widest text-muted-foreground font-mono">Complete</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Text Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500">
                      <Icon name={step.icon} className="w-6 h-6 text-foreground" />
                    </div>
                    <div className="text-sm font-mono text-muted-foreground bg-white/5 px-2 py-1 rounded-md border border-white/10">
                      STEP 0{index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-3 tracking-tight text-foreground group-hover:text-white transition-colors">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-light text-sm flex-1">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
