"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  sectionHeaderContainer,
  sectionTitleVariant,
  sectionSubtitleVariant,
  viewport,
} from "@/lib/motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  alignment = "center",
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={sectionHeaderContainer}
      className={cn(
        "flex flex-col gap-4 mb-16 md:mb-24",
        alignment === "center" ? "text-center items-center" : "text-left items-start",
        className
      )}
    >
      <motion.h2
        variants={sectionTitleVariant}
        className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground max-w-3xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={sectionSubtitleVariant}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
