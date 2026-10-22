"use client";

import * as React from "react";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { testimonials } from "@/src/data";
import { motion } from "framer-motion";
import { Icon } from "@/components/shared/Icon";
import { staggerContainerFast, fadeUpScaleVariant, viewport } from "@/lib/motion";

export function Testimonials() {
  return (
    <SectionWrapper id="testimonials" className="bg-background border-t border-border/40 relative overflow-hidden">
      {/* Abstract Background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 pointer-events-none transform-gpu">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8),transparent_50%)] blur-[80px]"></div>
      </div>

      <Container className="relative z-10">
        <SectionHeader 
          badge="Customer Success"
          title="Loved by Engineering Teams" 
          subtitle="Don't just take our word for it. Read what technical leaders say about deploying our AI workforce."
          alignment="center"
          className="mb-20"
        />
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainerFast}
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              variants={fadeUpScaleVariant}
              className="break-inside-avoid bg-card/50 border border-border/50 p-6 md:p-8 rounded-2xl hover:bg-card/80 hover:border-border transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon key={star} name="Star" className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-sm md:text-base lg:text-lg text-foreground font-light leading-relaxed mb-6 md:mb-8">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/70 flex items-center justify-center font-bold text-foreground border border-border/60">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">{testimonial.name}</h4>
                  <p className="text-xs font-mono text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
