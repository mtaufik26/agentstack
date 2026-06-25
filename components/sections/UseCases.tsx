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
    <SectionWrapper id="use-cases" className="bg-background border-t border-white/5 py-24 md:py-32">
      <Container>
        <SectionHeader
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
                      ? "bg-white/[0.03] border-white/20 shadow-lg"
                      : "bg-transparent border-transparent hover:bg-white/[0.01] hover:border-white/5"
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
                      isActive ? "border-foreground bg-foreground text-background" : "border-white/10 text-white/30"
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
                          <div className="bg-white/5 rounded-xl p-4 border border-white/5 inline-flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                              <Icon name="TrendingUp" className="w-4 h-4 text-emerald-400" />
                            </div>
                            <div className="text-lg font-medium text-foreground">{useCase.metrics}</div>
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
            <div className="sticky top-40 aspect-square w-full rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden shadow-2xl flex items-center justify-center p-12">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_70%)]"></div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center border border-white/10 bg-white/5 rounded-3xl p-8 shadow-inner"
                >
                  <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mb-8 border border-white/20">
                    <Icon name="Activity" className="w-10 h-10 text-foreground" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">{useCases[activeIndex].title} Graph</h4>
                  <p className="text-white/50 font-mono text-sm max-w-[200px]">Simulating optimized workflow execution paths.</p>

                  {/* Decorative Graph lines */}
                  <div className="absolute bottom-12 left-12 right-12 h-24 border-b border-l border-white/10 flex items-end gap-2 px-4">
                    {[40, 70, 30, 90, 60, 100].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="flex-1 bg-white/20 rounded-t-sm"
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
