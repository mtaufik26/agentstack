"use client";

import * as React from "react";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { faqs } from "@/src/data";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/components/shared/Icon";
import { cn } from "@/lib/utils";
import { staggerContainerFast, fadeUpVariant, viewport } from "@/lib/motion";

export function FAQ() {
  // Start with no item open to prevent SSR/client hydration mismatch.
  // AnimatePresence with initial expanded content causes style attribute conflicts.
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <SectionWrapper id="faq" className="bg-background py-24 md:py-32">
      <Container className="max-w-3xl mx-auto">
        <SectionHeader 
          title="Frequently Asked Questions" 
          subtitle="Everything you need to know about deploying your AI workforce."
          alignment="center"
          className="mb-16"
        />
        
        <motion.div
          className="flex flex-col border-t border-white/10"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainerFast}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div key={index} variants={fadeUpVariant} className="border-b border-white/10">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className={cn(
                    "text-lg font-medium transition-colors duration-300",
                    isOpen ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                  )}>
                    {faq.question}
                  </span>
                  <div className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-300 ml-4 shrink-0",
                    isOpen ? "border-foreground bg-foreground text-background" : "border-white/10 text-white/50 group-hover:border-white/30"
                  )}>
                    <Icon name="Plus" className={cn("w-3 h-3 transition-transform duration-300", isOpen ? "rotate-45" : "rotate-0")} />
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-muted-foreground/80 font-light leading-relaxed pr-12">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
