import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {}

export function SectionWrapper({ className, ...props }: SectionWrapperProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-24 lg:py-32 overflow-hidden",
        className
      )}
      {...props}
    />
  )
}
