"use client";

import * as React from "react";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { integrationsData } from "@/src/data";
import { Icon } from "@/components/shared/Icon";
import { motion, useInView } from "framer-motion";

const { tools } = integrationsData;
// Triplicate arrays to create a mathematically seamless infinite loop with zero empty gaps
const TOP_ROW = [...tools.slice(0, 6), ...tools.slice(0, 6), ...tools.slice(0, 6)];
const BOTTOM_ROW = [...tools.slice(6), ...tools.slice(6), ...tools.slice(6)];

export function Integrations() {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { margin: "200px 0px" });

  return (
    <SectionWrapper id="integrations" className="bg-background border-t border-border/40 overflow-hidden">
      <div ref={sectionRef}>
        <Container className="mb-12 sm:mb-16">
          <SectionHeader 
            badge="Ecosystem Integrations"
            title={integrationsData.title} 
            subtitle={integrationsData.description}
            alignment="center"
          />
        </Container>
        
        <div className="relative flex flex-col gap-4 sm:gap-6 pb-12 sm:pb-16 overflow-hidden">
          {/* Subtle Gradient Edges - Preserves card visibility on mobile */}
          <div className="absolute inset-y-0 left-0 w-8 sm:w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-8 sm:w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
          
          {/* Top Marquee (Moves Left) */}
          <div className="flex overflow-hidden">
            <motion.div 
              animate={isInView ? { x: ["0%", "-33.33%"] } : undefined}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex gap-4 sm:gap-6 px-2 sm:px-4 transform-gpu will-change-transform shrink-0"
            >
              {TOP_ROW.map((tool, idx) => (
                <div 
                  key={`${tool.id}-${idx}`}
                  className="flex items-center gap-3.5 w-[220px] sm:w-[260px] p-4 sm:p-5 rounded-2xl bg-card/60 border border-border/50 hover:bg-card/90 hover:border-border transition-all duration-300 shrink-0 select-none shadow-sm"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-secondary/80 flex items-center justify-center border border-border/60 text-foreground shrink-0">
                    <Icon name={tool.icon} className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm sm:text-base font-semibold text-foreground truncate">{tool.name}</h4>
                    <p className="text-[11px] sm:text-xs font-mono text-muted-foreground truncate">{tool.category}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Marquee (Moves Right) - Zero Blank Gaps */}
          <div className="flex overflow-hidden">
            <motion.div 
              animate={isInView ? { x: ["-33.33%", "0%"] } : undefined}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex gap-4 sm:gap-6 px-2 sm:px-4 transform-gpu will-change-transform shrink-0"
            >
              {BOTTOM_ROW.map((tool, idx) => (
                <div 
                  key={`${tool.id}-${idx}`}
                  className="flex items-center gap-3.5 w-[220px] sm:w-[260px] p-4 sm:p-5 rounded-2xl bg-card/60 border border-border/50 hover:bg-card/90 hover:border-border transition-all duration-300 shrink-0 select-none shadow-sm"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-secondary/80 flex items-center justify-center border border-border/60 text-foreground shrink-0">
                    <Icon name={tool.icon} className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm sm:text-base font-semibold text-foreground truncate">{tool.name}</h4>
                    <p className="text-[11px] sm:text-xs font-mono text-muted-foreground truncate">{tool.category}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
