"use client";

import * as React from "react";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { useCases } from "@/src/data";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/shared/Icon";
import { staggerContainer, fadeUpVariant, slideInRightVariant, viewport } from "@/lib/motion";

export function UseCases() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <SectionWrapper id="use-cases" className="bg-background border-t border-border/40 py-24 md:py-32">
      <Container>
        <SectionHeader
          badge="Enterprise Use Cases"
          title="Transforming Every Department"
          subtitle="See how different teams are leveraging the AI Workforce to achieve unprecedented productivity."
          alignment="left"
        />

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mt-16">
          {/* Interactive Accordion List — with stagger entrance */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer}
          >
            {useCases.map((useCase, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.div
                  key={useCase.id}
                  variants={fadeUpVariant}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "cursor-pointer p-6 md:p-8 rounded-2xl border transition-all duration-300",
                    isActive
                      ? "bg-card/70 border-border shadow-lg shadow-black/20"
                      : "bg-card/20 border-border/40 hover:bg-card/40 hover:border-border/60"
                  )}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className={cn(
                      "text-2xl font-semibold tracking-tight transition-colors duration-300",
                      isActive ? "text-foreground" : "text-muted-foreground"
                    )}>
                      {useCase.title}
                    </h3>
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300",
                      isActive ? "border-primary bg-primary text-primary-foreground" : "border-border/60 text-muted-foreground/60"
                    )}>
                      <Icon name="ArrowRight" className={cn("w-4 h-4 transition-transform duration-300", isActive ? "rotate-45" : "rotate-0")} />
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-muted-foreground text-lg pt-4 leading-relaxed font-light mb-6">
                          {useCase.description}
                        </p>
                        <div className="mt-2">
                          <div className="bg-secondary/60 rounded-xl p-4 border border-border/50 inline-flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                              <Icon name="TrendingUp" className="w-4 h-4 text-emerald-400" />
                            </div>
                            <div className="text-lg font-medium text-foreground">{useCase.metrics}</div>
                          </div>
                        </div>

                        {/* Inline preview for Mobile / Tablet where right column is hidden */}
                        <div className="lg:hidden mt-6 p-4 rounded-xl border border-border/60 bg-secondary/30">
                          <div className="flex items-center justify-between text-xs font-mono text-muted-foreground mb-3">
                            <span>Workflow execution path</span>
                            <span className="text-emerald-400 font-semibold">{useCase.metrics}</span>
                          </div>
                          <div className="h-16 border-b border-l border-border/40 flex items-end gap-1.5 px-2 pb-1">
                            {[40, 70, 30, 90, 60, 100].map((h, i) => (
                              <div
                                key={i}
                                style={{ height: `${h}%` }}
                                className="flex-1 bg-primary/40 rounded-t-xs"
                              />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Sticky Visual State */}
          <motion.div
            className="w-full lg:w-1/2 relative hidden lg:block"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={slideInRightVariant}
          >
            <div className="sticky top-40 aspect-square w-full rounded-2xl border border-border/60 bg-card/60 backdrop-blur-xl overflow-hidden shadow-2xl flex items-center justify-center p-12">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_70%)]"></div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center border border-border/50 bg-secondary/30 rounded-3xl p-8 shadow-inner"
                >
                  <div className="w-24 h-24 rounded-full bg-secondary/70 flex items-center justify-center mb-8 border border-border/60">
                    <Icon name="Activity" className="w-10 h-10 text-foreground" />
                  </div>
                  <h4 className="text-2xl font-bold text-foreground mb-2">{useCases[activeIndex].title} Graph</h4>
                  <p className="text-muted-foreground font-mono text-sm max-w-[200px]">Simulating optimized workflow execution paths.</p>

                  {/* Decorative Graph lines */}
                  <div className="absolute bottom-12 left-12 right-12 h-24 border-b border-l border-border/40 flex items-end gap-2 px-4">
                    {[40, 70, 30, 90, 60, 100].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="flex-1 bg-primary/40 rounded-t-sm"
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
