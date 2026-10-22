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
import { cn } from "@/lib/utils";

const DEPARTMENTS = Array.from(new Set(agents.map(a => a.department)));
const DEPT_ROW_1 = DEPARTMENTS.slice(0, 3); // Engineering, Product, Growth
const DEPT_ROW_2 = DEPARTMENTS.slice(3);    // HR, Operations

const DEPARTMENT_CONFIG: Record<string, { icon: string }> = {
  Engineering: { icon: "Terminal" },
  Product: { icon: "Layers" },
  Growth: { icon: "TrendingUp" },
  HR: { icon: "Users" },
  Operations: { icon: "Activity" },
};

export function AgentMarketplace() {
  const [selectedDept, setSelectedDept] = React.useState(DEPARTMENTS[0]);
  const [hoveredAgent, setHoveredAgent] = React.useState<string | null>(null);

  return (
    <SectionWrapper id="agents" className="bg-background border-t border-border/40">
      <Container>
        <SectionHeader
          badge="AI Workforce"
          title="Meet Your New AI Workforce"
          subtitle="Deploy specialized agents that instantly plug into your company's workflows."
          alignment="center"
        />

        <Tabs 
          value={selectedDept} 
          onValueChange={setSelectedDept} 
          className="w-full mt-10 md:mt-12"
        >
          {/* Department Tabs: Balanced 2 Rows on Mobile, Elegant Centered Single Bar on Desktop */}
          <div className="w-full flex justify-center mb-10 md:mb-14 px-4">
            <TabsList className="bg-transparent border-0 p-0 shadow-none sm:bg-secondary/40 sm:border sm:border-border/60 sm:p-1.5 sm:rounded-full flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-1.5 sm:shadow-sm sm:backdrop-blur-md w-full sm:w-auto max-w-[350px] sm:max-w-none mx-auto h-auto">
              {/* Row 1 on mobile: 3 equal-width columns (111px each) */}
              <div className="grid grid-cols-3 gap-2 w-full sm:contents">
                {DEPT_ROW_1.map(dept => {
                  const icon = DEPARTMENT_CONFIG[dept]?.icon || "Boxes";
                  const isActive = selectedDept === dept;
                  return (
                    <TabsTrigger
                      key={dept}
                      value={dept}
                      className={cn(
                        "rounded-full transition-all text-xs sm:text-sm py-2 sm:py-2.5 px-3 sm:px-4 md:px-5 min-h-[38px] sm:min-h-[42px] flex items-center justify-center gap-1.5 sm:gap-2 select-none cursor-pointer border",
                        isActive
                          ? "!bg-foreground !text-background border-foreground shadow-md font-semibold"
                          : "bg-secondary/60 border-border/70 text-muted-foreground hover:text-foreground hover:bg-secondary/90 hover:border-border sm:bg-transparent sm:border-transparent sm:hover:bg-muted/40 font-medium"
                      )}
                    >
                      <Icon
                        name={icon}
                        className={cn(
                          "w-4 h-4 shrink-0 transition-colors hidden sm:inline-flex",
                          isActive ? "!text-background" : "text-muted-foreground"
                        )}
                      />
                      <span className={cn("whitespace-nowrap", isActive ? "!text-background font-semibold" : "")}>
                        {dept}
                      </span>
                    </TabsTrigger>
                  );
                })}
              </div>

              {/* Row 2 on mobile: 2 equal-width columns of exact matching width (111px each) */}
              <div className="grid grid-cols-2 gap-2 w-[230px] sm:w-auto sm:contents mx-auto">
                {DEPT_ROW_2.map(dept => {
                  const icon = DEPARTMENT_CONFIG[dept]?.icon || "Boxes";
                  const isActive = selectedDept === dept;
                  return (
                    <TabsTrigger
                      key={dept}
                      value={dept}
                      className={cn(
                        "rounded-full transition-all text-xs sm:text-sm py-2 sm:py-2.5 px-3 sm:px-4 md:px-5 min-h-[38px] sm:min-h-[42px] flex items-center justify-center gap-1.5 sm:gap-2 select-none border cursor-pointer",
                        isActive
                          ? "!bg-foreground !text-background border-foreground shadow-md font-semibold"
                          : "bg-secondary/60 border-border/70 text-muted-foreground hover:text-foreground hover:bg-secondary/90 hover:border-border sm:bg-transparent sm:border-transparent sm:hover:bg-muted/40 font-medium"
                      )}
                    >
                      <Icon
                        name={icon}
                        className={cn(
                          "w-4 h-4 shrink-0 transition-colors hidden sm:inline-flex",
                          isActive ? "!text-background" : "text-muted-foreground"
                        )}
                      />
                      <span className={cn("whitespace-nowrap", isActive ? "!text-background font-semibold" : "")}>
                        {dept}
                      </span>
                    </TabsTrigger>
                  );
                })}
              </div>
            </TabsList>
          </div>

          {DEPARTMENTS.map(dept => (
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
                      onClick={() => setHoveredAgent(hoveredAgent === agent.id ? null : agent.id)}
                      className="group relative h-[350px] sm:h-[390px] rounded-2xl bg-card/40 border border-border/50 transition-all duration-300 hover:bg-card/70 hover:border-border/80 overflow-hidden flex flex-col cursor-pointer sm:cursor-default shadow-sm"
                    >
                      {/* Glowing Accent */}
                      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent group-hover:via-foreground/30 transition-colors duration-500"></div>

                      <div className="p-5 sm:p-8 flex-1 flex flex-col relative z-10">
                        <div className="flex justify-between items-start mb-4 sm:mb-6">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-muted/40 flex items-center justify-center border border-border/50 group-hover:bg-foreground group-hover:text-background transition-colors duration-300 shadow-sm">
                            <Icon 
                              name={agent.icon} 
                              className="w-5 h-5 sm:w-6 sm:h-6 text-foreground group-hover:text-background transition-colors" 
                            />
                          </div>
                          <Badge 
                            variant="outline" 
                            className="bg-muted/30 text-[10px] sm:text-xs font-mono border-border/50 rounded-full px-2 sm:px-3 whitespace-nowrap text-muted-foreground"
                          >
                            {agent.role}
                          </Badge>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight mb-2 sm:mb-3 text-foreground">
                          {agent.name}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-light mb-4 sm:mb-6 flex-1 line-clamp-3 sm:line-clamp-none">
                          {agent.description}
                        </p>

                        <div className="space-y-2 sm:space-y-3 mt-auto">
                          <div className="flex items-center justify-between">
                            <span className="text-[8px] sm:text-[10px] uppercase tracking-widest font-bold text-muted-foreground/60">
                              Capabilities
                            </span>
                            <span className="sm:hidden text-[9px] font-mono text-muted-foreground/50">
                              Tap to inspect
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {agent.capabilities
                              .slice(0, 3)
                              .map(cap => (
                                <span 
                                  key={cap} 
                                  className="inline-flex items-center rounded-md bg-muted/30 px-1.5 sm:px-2 py-0.5 sm:py-1 text-[9px] sm:text-[11px] font-mono font-medium text-muted-foreground border border-border/40 whitespace-nowrap"
                                >
                                  {cap}
                                </span>
                              ))}
                          </div>
                        </div>
                      </div>

                      {/* Interactive Reveal Overlay on Hover / Mobile Tap */}
                      <AnimatePresence>
                        {hoveredAgent === agent.id && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute inset-0 z-20 bg-background/90 backdrop-blur-md p-5 sm:p-8 flex flex-col justify-center border border-border rounded-2xl"
                          >
                            <div className="flex items-center justify-between mb-4">
                              <div className="text-xs font-mono text-muted-foreground flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                Live Execution Simulation
                              </div>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setHoveredAgent(null);
                                }}
                                className="sm:hidden text-muted-foreground hover:text-foreground p-1 rounded-md"
                                aria-label="Close simulation preview"
                              >
                                <Icon name="X" className="w-4 h-4" />
                              </button>
                            </div>
                            <div className="space-y-2.5 font-mono text-xs">
                              {agent.taskSimulation && agent.taskSimulation.length > 0 ? (
                                agent.taskSimulation.map((log, logIdx) => (
                                  <motion.div
                                    key={logIdx}
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: logIdx * 0.12, duration: 0.25 }}
                                    className="flex items-start gap-2 text-foreground/85 leading-snug"
                                  >
                                    <span className="text-emerald-400 font-bold shrink-0">❯</span>
                                    <span className="text-[11px] sm:text-xs">{log}</span>
                                  </motion.div>
                                ))
                              ) : (
                                <div className="text-xs text-muted-foreground font-mono">
                                  Autonomous task orchestration in progress...
                                </div>
                              )}
                            </div>
                            <button 
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                              }}
                              className="mt-8 text-sm font-semibold text-foreground flex items-center gap-2 hover:gap-3 transition-all cursor-pointer w-fit group/btn"
                            >
                              <span>Deploy this agent</span> 
                              <Icon name="ArrowRight" className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                            </button>
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