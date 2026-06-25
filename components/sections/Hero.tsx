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

  React.useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];
    
    // Start the sequence
    const runSequence = () => {
      timeouts = terminalSteps.map((step, index) => {
        return setTimeout(() => {
          setActiveStepIndex(index);
        }, step.delay);
      });
    };

    runSequence();

    return () => timeouts.forEach(clearTimeout);
  }, []);

  const currentStep = terminalSteps[activeStepIndex];
  const activeAgentId = currentStep?.agentId;

  return (
    <SectionWrapper id="hero" className="pt-24 md:pt-40 pb-16 lg:pt-32 lg:pb-32 bg-background relative overflow-hidden px-4 md:px-0">
      {/* Massive subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.4),transparent_70%)] blur-[100px]"></div>
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
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto h-12 px-8 text-sm font-semibold rounded-full border-border/50 hover:bg-muted/30 transition-all hover:scale-[1.02] active:scale-[0.98]">
            {heroData.secondaryCta}
          </Button>
        </motion.div>

        {/* Dual-Panel AI Workforce Command Center */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5, ease: EASE_OUT_EXPO }}
          className="mt-20 md:mt-24 w-full max-w-5xl rounded-2xl border border-white/10 bg-black/40 backdrop-blur-2xl shadow-2xl overflow-hidden flex flex-col relative ring-1 ring-white/5"
        >
           {/* macOS style top bar */}
           <div className="h-12 w-full border-b border-white/5 flex items-center px-4 bg-white/[0.02]">
             <div className="flex gap-2">
               <div className="w-3 h-3 rounded-full bg-white/20"></div>
               <div className="w-3 h-3 rounded-full bg-white/20"></div>
               <div className="w-3 h-3 rounded-full bg-white/20"></div>
             </div>
             <div className="mx-auto flex items-center gap-2 text-xs font-mono text-white/40">
               <Terminal className="w-3 h-3" />
               workspace/ai-collaboration
             </div>
           </div>
           
           <div className="flex flex-col md:flex-row min-h-[350px]">
             {/* Left Panel: Live Terminal */}
             <div className="w-full md:w-3/5 p-6 md:p-8 text-left font-mono text-sm relative border-b md:border-b-0 md:border-r border-white/5">
               <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
               <div className="relative z-10 space-y-4">
                 <div className="text-white/40 mb-6 text-xs uppercase tracking-widest flex items-center gap-2">
                   <Activity className="w-3 h-3" /> Execution Log
                 </div>
                 
                 <AnimatePresence mode="popLayout">
                   {terminalSteps.slice(0, activeStepIndex + 1).map((step, index) => {
                     const isSystem = step.agentId === 'system';
                     const agentInfo = agents.find(a => a.id === step.agentId);
                     const textColor = isSystem ? 'text-white/80' : agentInfo?.color;
                     
                     return (
                       <motion.div
                         key={index}
                         initial={{ opacity: 0, x: -10, height: 0 }}
                         animate={{ opacity: 1, x: 0, height: 'auto' }}
                         transition={{ duration: 0.3 }}
                         className="flex items-start gap-3"
                       >
                         {isSystem ? (
                           <CheckCircle2 className="w-4 h-4 mt-0.5 text-white/40" />
                         ) : (
                           <span className={cn("mt-0.5 text-xs font-black", textColor)}>❯</span>
                         )}
                         <span className={textColor}>{step.text}</span>
                       </motion.div>
                     );
                   })}
                 </AnimatePresence>
                 
                 {/* Blinking Cursor */}
                 {activeStepIndex < terminalSteps.length - 1 && (
                   <motion.div 
                     animate={{ opacity: [1, 0] }}
                     transition={{ repeat: Infinity, duration: 0.8 }}
                     className="w-2 h-4 bg-white/60 ml-7 mt-2"
                   />
                 )}
               </div>
               
               {/* Fade out bottom gradient */}
               <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
             </div>
             
             {/* Right Panel: Active Agent Roster */}
             <div className="w-full md:w-2/5 p-6 md:p-8 bg-white/[0.01]">
                <div className="text-white/40 mb-6 text-xs uppercase tracking-widest text-left font-mono flex items-center gap-2">
                  Network Roster
                </div>
                <div className="flex flex-col gap-4">
                  {agents.map((agent) => {
                    const isActive = activeAgentId === agent.id;
                    const IconComponent = agent.icon;
                    
                    return (
                      <div 
                        key={agent.id}
                        className={cn(
                          "flex items-center p-4 rounded-xl border transition-all duration-500",
                          isActive 
                            ? cn("bg-white/5 border-white/20 scale-[1.02]", agent.glow) 
                            : "bg-white/[0.02] border-white/5 opacity-50"
                        )}
                      >
                        <div className={cn(
                          "w-10 h-10 rounded-lg flex items-center justify-center border transition-colors duration-500",
                          isActive ? cn(agent.bg, agent.border) : "bg-white/5 border-white/10"
                        )}>
                          <IconComponent className={cn(
                            "w-5 h-5 transition-colors duration-500",
                            isActive ? agent.color : "text-white/40"
                          )} />
                        </div>
                        <div className="ml-4 text-left">
                          <h4 className={cn(
                            "text-sm font-semibold transition-colors duration-500",
                            isActive ? "text-white" : "text-white/60"
                          )}>
                            {agent.name}
                          </h4>
                          <p className="text-xs text-white/40 font-mono mt-1">{agent.role}</p>
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
