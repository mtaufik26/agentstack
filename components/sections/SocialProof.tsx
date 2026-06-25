"use client";

import * as React from "react";
import { socialProofLogos } from "@/src/data";
import { motion } from "framer-motion";

export function SocialProof() {
  // Duplicate array to create seamless loop
  const logos = [...socialProofLogos, ...socialProofLogos, ...socialProofLogos];

  return (
    <section className="py-16 md:py-20 border-b border-white/5 bg-background overflow-hidden relative">
      {/* Gradient masks for smooth fading on edges */}
      <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 mb-10">
        <p className="text-center text-sm font-medium text-muted-foreground/60 tracking-widest uppercase">
          Trusted by engineering teams at
        </p>
      </div>
      
      <div className="flex overflow-hidden relative">
        <motion.div 
          className="flex gap-16 md:gap-24 items-center whitespace-nowrap px-8"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 20 
          }}
        >
          {logos.map((logo, index) => (
            <div 
              key={`${logo}-${index}`} 
              className="text-xl md:text-2xl font-bold tracking-tighter text-muted-foreground/30 hover:text-foreground transition-colors duration-300 cursor-default"
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
