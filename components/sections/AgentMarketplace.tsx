"use client";

import * as React from "react";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { agents } from "@/src/data";
import { Icon } from "@/components/shared/Icon";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeUpScaleVariant, viewport } from "@/lib/motion";

export function AgentMarketplace() {
  const departments = Array.from(new Set(agents.map(a => a.department)));
  const [hoveredAgent, setHoveredAgent] = React.useState<string | null>(null);

  return (
    <SectionWrapper id="agents" className="bg-background border-t border-white/5">
      <Container>
        <SectionHeader
          title="Meet Your New AI Workforce"
          subtitle="Deploy specialized agents that instantly plug into your company's workflows."
          alignment="center"
        />

        <Tabs defaultValue={departments[0]} className="w-full mt-12">
          {/* Department Tabs - Mobile Friendly */}
          <div className="flex justify-center mb-16 overflow-x-auto pb-4 scrollbar-hide">
            <TabsList className="bg-white/5 border border-white/10 p-1 rounded-full inline-flex w-auto min-w-max">
              {departments.map(dept => (
                <TabsTrigger
                  key={dept}
                  value={dept}
                  className={`
                    rounded-full 
                    font-medium 
                    transition-all 
                    data-[state=active]:bg-foreground 
                    data-[state=active]:text-background 
                    data-[state=active]:shadow-md 
                    whitespace-nowrap
                    /* Mobile styles - Lebih besar dari sebelumnya */
                    px-3 py-2 text-[10px]
                    /* Desktop styles */
                    sm:px-6 sm:py-2.5 sm:text-sm
                  `}
                >
                  {dept}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {departments.map(dept => (
            <TabsContent key={dept} value={dept} className="mt-0 outline-none">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
              >
                {agents
                  .filter(a => a.department === dept)
                  .map(agent => (
                    <motion.div
                      key={agent.id}
                      variants={fadeUpScaleVariant}
                      onMouseEnter={() => setHoveredAgent(agent.id)}
                      onMouseLeave={() => setHoveredAgent(null)}
                      className="group relative h-[340px] sm:h-[380px] rounded-2xl bg-white/[0.02] border border-white/10 transition-all duration-500 hover:bg-white/[0.04] hover:border-white/20 overflow-hidden flex flex-col"
                    >
                      {/* Glowing Accent */}
                      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-white/40 transition-colors duration-700"></div>

                      <div className="p-5 sm:p-8 flex-1 flex flex-col relative z-10">
                        <div className="flex justify-between items-start mb-4 sm:mb-6">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-foreground group-hover:text-background transition-colors duration-300 shadow-sm">
                            <Icon 
                              name={agent.icon} 
                              className="w-5 h-5 sm:w-6 sm:h-6 text-foreground group-hover:text-background transition-colors" 
                            />
                          </div>
                          <Badge 
                            variant="outline" 
                            className="bg-transparent text-[10px] sm:text-xs font-mono border-white/20 rounded-full px-2 sm:px-3 whitespace-nowrap"
                          >
                            {agent.role}
                          </Badge>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight mb-2 sm:mb-3 text-foreground">
                          {agent.name}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground/80 leading-relaxed font-light mb-4 sm:mb-6 flex-1 line-clamp-3 sm:line-clamp-none">
                          {agent.description}
                        </p>

                        <div className="space-y-2 sm:space-y-3 mt-auto">
                          <span className="text-[8px] sm:text-[10px] uppercase tracking-widest font-bold text-muted-foreground/50">
                            Capabilities
                          </span>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {agent.capabilities
                              .slice(0, 3)
                              .map(cap => (
                                <span 
                                  key={cap} 
                                  className="inline-flex items-center rounded-md bg-white/5 px-1.5 sm:px-2 py-0.5 sm:py-1 text-[9px] sm:text-[11px] font-mono font-medium text-muted-foreground border border-white/10 whitespace-nowrap"
                                >
                                  {cap}
                                </span>
                              ))}
                          </div>
                        </div>
                      </div>

                      {/* Interactive Reveal Overlay on Hover - Hide on Mobile */}
                      <AnimatePresence>
                        {hoveredAgent === agent.id && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute inset-0 z-20 bg-black/80 backdrop-blur-md p-5 sm:p-8 flex flex-col justify-center border border-white/10 rounded-2xl hidden sm:flex"
                          >
                            <div className="text-xs font-mono text-white/50 mb-4 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                              Live Execution Simulation
                            </div>
                            <div className="space-y-3">
                              <div className="h-4 w-3/4 bg-white/10 rounded overflow-hidden relative">
                                <motion.div 
                                  className="absolute inset-0 bg-white/20 w-full" 
                                  initial={{ x: '-100%' }} 
                                  animate={{ x: '0%' }} 
                                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} 
                                />
                              </div>
                              <div className="h-4 w-1/2 bg-white/10 rounded overflow-hidden relative">
                                <motion.div 
                                  className="absolute inset-0 bg-white/20 w-full" 
                                  initial={{ x: '-100%' }} 
                                  animate={{ x: '0%' }} 
                                  transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay: 0.2 }} 
                                />
                              </div>
                              <div className="h-4 w-2/3 bg-white/10 rounded overflow-hidden relative">
                                <motion.div 
                                  className="absolute inset-0 bg-white/20 w-full" 
                                  initial={{ x: '-100%' }} 
                                  animate={{ x: '0%' }} 
                                  transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: 0.5 }} 
                                />
                              </div>
                            </div>
                            <div className="mt-8 text-sm font-semibold text-foreground flex items-center gap-2 hover:underline cursor-pointer">
                              View Full Capability Spec 
                              <Icon name="ArrowRight" className="w-4 h-4" />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </Container>
    </SectionWrapper>
  );
}