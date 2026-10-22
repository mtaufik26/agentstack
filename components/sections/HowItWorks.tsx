"use client";

import * as React from "react";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { howItWorksSteps } from "@/src/data";
import { Icon } from "@/components/shared/Icon";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeUpScaleVariant, viewport } from "@/lib/motion";

export function HowItWorks() {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { margin: "200px 0px" });

  return (
    <SectionWrapper id="how-it-works" className="bg-background relative py-16 md:py-24">
      <div ref={sectionRef}>
      <Container>
        <SectionHeader 
          badge="Workflow Architecture"
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
          <div className="hidden md:block absolute top-[28%] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-border to-transparent z-0"></div>

          {howItWorksSteps.map((step, index) => (
            <motion.div 
              key={step.id} 
              variants={fadeUpScaleVariant}
              className="flex flex-col relative z-10 group"
            >
              <div className="flex flex-col h-full bg-card/40 border border-border/50 rounded-3xl overflow-hidden hover:bg-card/70 hover:border-border/80 transition-all duration-300 shadow-lg">
                
                {/* Visual Header with Embedded Animation */}
                <div className="h-64 relative bg-secondary/30 border-b border-border/40 overflow-hidden flex items-center justify-center p-6">
                  {/* Background Grid */}
                  <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
                  
                  {/* Dynamic Animations based on Step Index */}
                  {index === 0 && (
                    <div className="w-full max-w-[220px] space-y-4 relative z-10 scale-90 sm:scale-100 transform origin-center">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-foreground flex items-center justify-center">
                          <Icon name="User" className="w-3.5 h-3.5 text-background" />
                        </div>
                        <div className="text-xs font-mono font-medium text-foreground">Project Lead</div>
                      </div>
                      <div className="h-24 w-full bg-card/70 border border-border/60 rounded-xl p-3.5 shadow-inner relative overflow-hidden">
                        <motion.div 
                          initial={{ clipPath: "inset(0 100% 0 0)" }}
                          whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                          transition={{ duration: 1.5, ease: "linear", delay: 0.2 }}
                          viewport={{ once: true }}
                          className="text-xs font-mono text-foreground/90 leading-relaxed"
                        >
                          &gt; Deploy fullstack auth with OAuth &amp; billing webhook...
                        </motion.div>
                        {/* Scan line */}
                        <div 
                          className="absolute left-0 right-0 h-[1px] bg-emerald-500/50 shadow-[0_0_8px_rgba(16,185,129,0.8)] z-0 animate-[scanline_2s_linear_infinite]"
                        />
                      </div>
                    </div>
                  )}

                  {index === 1 && (
                    <div className="relative w-full h-full flex items-center justify-center scale-90 sm:scale-100">
                      <div className="w-14 h-14 rounded-full bg-foreground border border-border/60 shadow-lg flex items-center justify-center z-10 relative">
                        <Icon name="Network" className="w-6 h-6 text-background" />
                        <div className="absolute inset-0 rounded-full border border-border animate-ping opacity-40"></div>
                      </div>
                      {/* Orbital path circle */}
                      <div className="absolute inset-6 rounded-full border border-dashed border-border/40 pointer-events-none"></div>
                      
                      <motion.div 
                        animate={isInView ? { rotate: 360 } : undefined}
                        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 w-full h-full transform-gpu will-change-transform"
                      >
                        <div className="absolute top-[20%] left-1/2 -translate-x-1/2">
                          <motion.div 
                            animate={isInView ? { rotate: -360 } : undefined}
                            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                            className="w-10 h-10 rounded-xl bg-card border border-border/60 flex items-center justify-center shadow-lg transform-gpu"
                          >
                            <Icon name="Code" className="w-4 h-4 text-blue-400" />
                          </motion.div>
                        </div>
                        <div className="absolute bottom-[20%] right-[20%]">
                          <motion.div 
                            animate={isInView ? { rotate: -360 } : undefined}
                            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                            className="w-10 h-10 rounded-xl bg-card border border-border/60 flex items-center justify-center shadow-lg transform-gpu"
                          >
                            <Icon name="PenTool" className="w-4 h-4 text-purple-400" />
                          </motion.div>
                        </div>
                        <div className="absolute bottom-[20%] left-[20%]">
                          <motion.div 
                            animate={isInView ? { rotate: -360 } : undefined}
                            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                            className="w-10 h-10 rounded-xl bg-card border border-border/60 flex items-center justify-center shadow-lg transform-gpu"
                          >
                            <Icon name="Search" className="w-4 h-4 text-amber-400" />
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  )}

                  {index === 2 && (
                    <div className="flex flex-col items-center w-full max-w-[200px] scale-90 sm:scale-100">
                      <motion.div 
                        initial={{ scale: 0 }} 
                        whileInView={{ scale: 1 }} 
                        viewport={{ once: true }}
                        transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
                        className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.2)] mb-4 relative"
                      >
                        <Icon name="Check" className="w-8 h-8 text-emerald-400" />
                        <motion.div 
                          initial={{ scale: 1, opacity: 1 }}
                          whileInView={{ scale: 2, opacity: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="absolute inset-0 rounded-full border border-emerald-400"
                        />
                      </motion.div>
                      <div className="bg-muted/30 border border-border/50 rounded-lg p-2 text-center w-full">
                        <div className="text-xl font-bold text-foreground">100%</div>
                        <div className="text-[9px] uppercase tracking-widest text-muted-foreground font-mono">Complete</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Text Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-muted/40 border border-border/50 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                      <Icon name={step.icon} className="w-6 h-6 text-foreground" />
                    </div>
                    <div className="text-sm font-mono text-muted-foreground bg-muted/30 px-2.5 py-1 rounded-md border border-border/40">
                      STEP 0{index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-3 tracking-tight text-foreground group-hover:text-foreground/95 transition-colors">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-light text-sm flex-1">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
      </div>
    </SectionWrapper>
  );
}
