"use client";

import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { footerData, navbarData } from "@/src/data";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-background pt-16 md:pt-24 pb-8 overflow-hidden relative border-t border-border/40">
      <Container className="relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12 mb-16 md:mb-24">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2 mb-6">
              <div className="w-6 h-6 rounded-md bg-foreground flex items-center justify-center">
                <span className="text-background text-xs font-black">AI</span>
              </div>
              {navbarData.logo}
            </Link>
            <p className="text-muted-foreground/80 max-w-sm font-light leading-relaxed">
              The premium platform for deploying autonomous AI agents that work, collaborate, and scale with your company.
            </p>
          </div>

          {/* Link Columns */}
          {footerData.map((column, idx) => (
            <div key={idx} className="flex flex-col gap-6 lg:col-span-1">
              <h4 className="font-semibold text-foreground text-sm tracking-wider uppercase">{column.title}</h4>
              <ul className="flex flex-col gap-4">
                {column.links.map((link, linkIdx) => {
                  const isAnchor = link.href.startsWith("#");
                  return (
                    <li key={linkIdx}>
                      <Link 
                        href={link.href} 
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium relative group"
                        onClick={(e) => {
                          if (isAnchor && link.href.length > 1) {
                            e.preventDefault();
                            const element = document.querySelector(link.href);
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          }
                        }}
                      >
                        <span>{link.label}</span>
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground/30 transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
          <p className="text-sm text-muted-foreground" suppressHydrationWarning>
            © {new Date().getFullYear()} {navbarData.logo}. All rights reserved.
          </p>
          <div className="flex items-center gap-3 bg-secondary/50 px-4 py-2 rounded-full border border-border/60">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">All Systems Operational</span>
          </div>
        </div>
      </Container>

      {/* Massive Watermark */}
      <div className="absolute bottom-[-10%] left-0 right-0 w-full overflow-hidden flex justify-center pointer-events-none z-0 select-none">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 0.03, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[15vw] font-black tracking-tighter text-foreground whitespace-nowrap leading-none"
        >
          AI WORKFORCE
        </motion.div>
      </div>
    </footer>
  );
}
