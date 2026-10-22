"use client";

import * as React from "react";
import { Container } from "@/components/shared/Container";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import { heroData } from "@/src/data";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ChevronRight, LayoutTemplate, Database, ShieldCheck, Activity, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { EASE_OUT_EXPO } from "@/lib/motion";

const agents = [
  { id: 'frontend', name: 'Frontend', role: 'UI Engineer', icon: LayoutTemplate, color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/30', glow: 'shadow-[0_0_15px_rgba(96,165,250,0.3)]' },
  { id: 'backend', name: 'Backend', role: 'API Architect', icon: Database, color: 'text-purple-400', bg: 'bg-purple-400/10', border: 'border-purple-400/30', glow: 'shadow-[0_0_15px_rgba(192,132,252,0.3)]' },
  { id: 'qa', name: 'QA', role: 'Test Engineer', icon: ShieldCheck, color: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/30', glow: 'shadow-[0_0_15px_rgba(52,211,153,0.3)]' },
];

const terminalSteps = [
  { agentId: 'system', text: "Initializing collaborative workspace...", delay: 0 },
  { agentId: 'frontend', text: "Building responsive UI components...", delay: 1500 },
  { agentId: 'frontend', text: "Optimizing state management...", delay: 2500 },
  { agentId: 'backend', text: "Designing database schema...", delay: 4000 },
  { agentId: 'backend', text: "Securing API endpoints...", delay: 5000 },
  { agentId: 'qa', text: "Running e2e test suite...", delay: 6500 },
  { agentId: 'qa', text: "All 244 tests passed.", delay: 7500 },
  { agentId: 'system', text: "Deployment successful. Ready for production.", delay: 8500 }
];

export function Hero() {
  const [activeStepIndex, setActiveStepIndex] = React.useState(0);
  const timeoutsRef = React.useRef<NodeJS.Timeout[]>([]);
  const loopTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const runSequenceRef = React.useRef<(startIndex?: number) => void>(() => {});

  const clearAllTimeouts = React.useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    if (loopTimeoutRef.current) {
      clearTimeout(loopTimeoutRef.current);
      loopTimeoutRef.current = null;
    }
  }, []);

  const runSequence = React.useCallback((startIndex = 0) => {
    clearAllTimeouts();
    const remainingSteps = terminalSteps.slice(startIndex);
    const baseDelay = startIndex === 0 ? 0 : terminalSteps[startIndex].delay;

    timeoutsRef.current = remainingSteps.map((step, idx) => {
      const actualIndex = startIndex + idx;
      const delay = Math.max(0, step.delay - baseDelay);
      return setTimeout(() => {
        setActiveStepIndex(actualIndex);
      }, delay);
    });

    const totalDuration = Math.max(0, 13000 - baseDelay);
    loopTimeoutRef.current = setTimeout(() => {
      runSequenceRef.current(0);
    }, totalDuration);
  }, [clearAllTimeouts]);

  React.useEffect(() => {
    runSequenceRef.current = runSequence;
  }, [runSequence]);

  React.useEffect(() => {
    runSequence(0);
    return () => clearAllTimeouts();
  }, [runSequence, clearAllTimeouts]);

  const handleSelectAgent = (agentId: string) => {
    const idx = terminalSteps.findIndex((s) => s.agentId === agentId);
    if (idx !== -1) {
      setActiveStepIndex(idx);
      clearAllTimeouts();
      loopTimeoutRef.current = setTimeout(() => {
        runSequenceRef.current((idx + 1) % terminalSteps.length);
      }, 4000);
    }
  };

  const currentStep = terminalSteps[activeStepIndex];
  const activeAgentId = currentStep?.agentId;
  const isProductionReady = activeStepIndex === terminalSteps.length - 1;

  return (
    <SectionWrapper id="hero" contentAuto={false} className="pt-24 md:pt-40 pb-16 lg:pt-32 lg:pb-32 bg-background relative overflow-hidden px-4 md:px-0">
      {/* Massive subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none transform-gpu">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.4),transparent_70%)] blur-[80px]"></div>
      </div>
      
      <Container className="relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
          className="inline-flex items-center rounded-full border border-border/50 bg-muted/30 backdrop-blur-sm px-3 py-1.5 md:py-1 text-xs md:text-sm font-medium mb-8 hover:bg-muted/50 transition-colors cursor-pointer"
        >
          <span className="flex h-2 w-2 rounded-full bg-foreground mr-2 animate-pulse"></span>
          <span className="text-muted-foreground">Introducing the AI Workforce</span>
          <ChevronRight className="w-4 h-4 ml-1 text-muted-foreground" />
        </motion.div>
        
        {/* Typography Hierarchy */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE_OUT_EXPO }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter max-w-[1100px] mb-6 md:mb-8 text-foreground leading-[1.1] md:leading-[1.05]"
        >
          {heroData.headline}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: EASE_OUT_EXPO }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-[700px] mb-10 md:mb-12 leading-relaxed font-light px-2 md:px-0"
        >
          {heroData.subheadline}
        </motion.p>
        
        {/* CTA Hierarchy */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: EASE_OUT_EXPO }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center"
        >
          <Button 
            size="lg" 
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto h-12 px-8 text-sm font-semibold bg-foreground text-background hover:bg-foreground/90 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all hover:scale-[1.02] active:scale-[0.98]">
            {heroData.primaryCta}
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto h-12 px-8 text-sm font-semibold rounded-full border-border/50 hover:bg-muted/30 transition-all hover:scale-[1.02] active:scale-[0.98]">
            {heroData.secondaryCta}
          </Button>
        </motion.div>

        {/* Dual-Panel AI Workforce Command Center */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5, ease: EASE_OUT_EXPO }}
          className="mt-20 md:mt-24 w-full max-w-5xl rounded-2xl border border-border/60 bg-card/60 backdrop-blur-md shadow-2xl overflow-hidden flex flex-col relative ring-1 ring-border/40 transform-gpu"
        >
           {/* macOS style top bar */}
           <div className="h-12 w-full border-b border-border/40 flex items-center px-4 bg-secondary/40">
             <div className="flex gap-2">
               <div className="w-3 h-3 rounded-full bg-border/80"></div>
               <div className="w-3 h-3 rounded-full bg-border/80"></div>
               <div className="w-3 h-3 rounded-full bg-border/80"></div>
             </div>
             <div className="mx-auto flex items-center gap-2 text-xs font-mono text-muted-foreground">
               <Terminal className="w-3.5 h-3.5" />
               workspace/ai-workforce-orchestration
             </div>
           </div>
           
           <div className="flex flex-col md:flex-row min-h-[350px]">
             {/* Left Panel: Live Terminal */}
             <div className="w-full md:w-3/5 p-6 md:p-8 text-left font-mono text-sm relative border-b md:border-b-0 md:border-r border-border/40">
               <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
               <div className="relative z-10 space-y-4">
                 <div className="text-muted-foreground mb-6 text-xs uppercase tracking-widest flex items-center gap-2">
                   <Activity className="w-3.5 h-3.5 text-emerald-400" /> Execution Stream
                 </div>
                 
                 <AnimatePresence mode="popLayout">
                   {terminalSteps.slice(0, activeStepIndex + 1).map((step, index) => {
                     const isSystem = step.agentId === 'system';
                     const agentInfo = agents.find(a => a.id === step.agentId);
                     const textColor = isSystem ? 'text-foreground/80' : agentInfo?.color;
                     
                     return (
                       <motion.div
                         key={index}
                         initial={{ opacity: 0, x: -10, height: 0 }}
                         animate={{ opacity: 1, x: 0, height: 'auto' }}
                         transition={{ duration: 0.3 }}
                         className="flex items-start gap-3"
                       >
                         {isSystem ? (
                           <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-400/80" />
                         ) : (
                           <span className={cn("mt-0.5 text-xs font-black", textColor)}>❯</span>
                         )}
                         <span className={cn(textColor, "text-xs sm:text-sm")}>{step.text}</span>
                       </motion.div>
                     );
                   })}
                 </AnimatePresence>
                 
                 {/* Blinking Cursor */}
                 {activeStepIndex < terminalSteps.length - 1 && (
                   <motion.div 
                     animate={{ opacity: [1, 0] }}
                     transition={{ repeat: Infinity, duration: 0.8 }}
                     className="w-2 h-4 bg-foreground/60 ml-7 mt-2"
                   />
                 )}
               </div>
               
               {/* Fade out bottom gradient */}
               <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/80 to-transparent pointer-events-none"></div>
             </div>
             
             {/* Right Panel: Active Agent Roster */}
             <div className="w-full md:w-2/5 p-6 md:p-8 bg-secondary/20">
                <div className="text-muted-foreground mb-6 text-xs uppercase tracking-widest text-left font-mono flex items-center justify-between">
                  <span>Active Roster</span>
                  <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    {isProductionReady ? "Completed" : "Live"}
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  {agents.map((agent) => {
                    const isWorking = activeAgentId === agent.id;
                    const isActive = isWorking || isProductionReady;
                    const IconComponent = agent.icon;
                    
                    return (
                      <div 
                        key={agent.id}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleSelectAgent(agent.id);
                          }
                        }}
                        onClick={() => handleSelectAgent(agent.id)}
                        className={cn(
                          "flex items-center p-4 rounded-xl border transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                          isActive 
                            ? cn("bg-card border-border shadow-md scale-[1.02]", agent.glow) 
                            : "bg-secondary/40 border-border/40 opacity-60 hover:opacity-100 hover:border-border/80"
                        )}
                        title={`Click to inspect ${agent.name} activity`}
                      >
                        <div className={cn(
                          "w-10 h-10 rounded-lg flex items-center justify-center border transition-colors duration-300",
                          isActive ? cn(agent.bg, agent.border) : "bg-secondary/60 border-border/50"
                        )}>
                          <IconComponent className={cn(
                            "w-5 h-5 transition-colors duration-300",
                            isActive ? agent.color : "text-muted-foreground"
                          )} />
                        </div>
                        <div className="ml-4 text-left">
                          <h4 className={cn(
                            "text-sm font-semibold transition-colors duration-300",
                            isActive ? "text-foreground" : "text-muted-foreground"
                          )}>
                            {agent.name}
                          </h4>
                          <p className="text-xs text-muted-foreground font-mono mt-0.5">{agent.role}</p>
                        </div>
                        
                        {/* Active Indicator Pulse */}
                        {isActive && (
                          <div className="ml-auto flex items-center justify-center">
                             <span className="relative flex h-2 w-2">
                                <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", agent.bg)}></span>
                                <span className={cn("relative inline-flex rounded-full h-2 w-2", agent.bg.replace('/10', ''))}></span>
                             </span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
             </div>
           </div>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
