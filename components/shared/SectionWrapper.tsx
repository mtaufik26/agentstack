import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  contentAuto?: boolean;
}

export function SectionWrapper({ className, contentAuto = true, ...props }: SectionWrapperProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-24 lg:py-32 overflow-hidden",
        contentAuto && "content-auto",
        className
      )}
      {...props}
    />
  )
}
