"use client";

import * as React from "react";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { integrationsData } from "@/src/data";
import { Icon } from "@/components/shared/Icon";
import { motion } from "framer-motion";

export function Integrations() {
  const { tools } = integrationsData;
  const topRow = [...tools.slice(0, 4), ...tools.slice(0, 4)];
  const bottomRow = [...tools.slice(4), ...tools.slice(4)];

  return (
    <SectionWrapper id="integrations" className="bg-background border-t border-white/5 overflow-hidden">
      <Container className="mb-16">
        <SectionHeader 
          title={integrationsData.title} 
          subtitle={integrationsData.description}
          alignment="center"
        />
      </Container>
      
      <div className="relative flex flex-col gap-8 pb-16">
        {/* Gradient Edges */}
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
        
        {/* Top Marquee (Moves Left) */}
        <div className="flex w-[200%]">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 px-4"
          >
            {topRow.map((tool, idx) => (
              <div 
                key={`${tool.id}-${idx}`}
                className="group flex items-center gap-4 w-[300px] p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  <Icon name={tool.icon} className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-foreground">{tool.name}</h4>
                  <p className="text-sm font-mono text-muted-foreground">{tool.category}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Marquee (Moves Right) */}
        <div className="flex w-[200%] justify-end">
          <motion.div 
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 px-4"
          >
            {bottomRow.map((tool, idx) => (
              <div 
                key={`${tool.id}-${idx}`}
                className="group flex items-center gap-4 w-[300px] p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  <Icon name={tool.icon} className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-foreground">{tool.name}</h4>
                  <p className="text-sm font-mono text-muted-foreground">{tool.category}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
