"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navbarData } from "@/src/data";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [activeSection, setActiveSection] = React.useState<string>("");
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const sectionIds = navbarData.links.map((l) => l.href.substring(1));
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    let observer: IntersectionObserver | null = null;
    if (typeof window !== "undefined" && "IntersectionObserver" in window && sectionElements.length > 0) {
      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries.filter((e) => e.isIntersecting);
          if (visible.length > 0) {
            visible.sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));
            setActiveSection(visible[0].target.id);
          }
        },
        {
          rootMargin: "-20% 0px -50% 0px",
          threshold: [0, 0.2],
        }
      );
      sectionElements.forEach((el) => observer!.observe(el));
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (observer) observer.disconnect();
    };
  }, []);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 transform-gpu",
          scrolled
            ? "border-b border-border/50 bg-background/80 backdrop-blur-xl shadow-sm"
            : "border-transparent bg-transparent"
        )}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity flex items-center gap-2 z-10">
            <div className="w-6 h-6 rounded-md bg-foreground flex items-center justify-center">
              <span className="text-background text-xs font-black">AI</span>
            </div>
            {navbarData.logo}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navbarData.links.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors relative rounded-full",
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-secondary/80 border border-border/60 rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {navbarData.loginText}
            </Link>
            <Button
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="h-9 px-4 text-sm font-medium bg-foreground text-background hover:bg-foreground/90 rounded-full transition-all hover:scale-105 active:scale-95">
              {navbarData.ctaText}
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden relative z-10 flex items-center justify-center w-10 h-10 rounded-full text-foreground hover:bg-secondary/60 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col md:hidden"
          >
            <div className="flex flex-col flex-1 px-6 pt-24 pb-8">
              <nav className="flex flex-col gap-1 flex-1">
                {navbarData.links.map((link, index) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.07, duration: 0.3 }}
                      onClick={closeMobileMenu}
                      className={cn(
                        "flex items-center justify-between py-4 text-2xl font-medium border-b border-border/40 transition-colors",
                        isActive ? "text-foreground" : "text-muted-foreground"
                      )}
                    >
                      <span>{link.label}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-foreground"></span>
                      )}
                    </motion.a>
                  );
                })}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-3 mt-8"
              >
                <Link
                  href="/login"
                  onClick={closeMobileMenu}
                  className="text-center py-3 text-base font-medium text-muted-foreground hover:text-foreground transition-colors border border-border/60 bg-secondary/30 hover:bg-secondary/60 rounded-full"
                >
                  {navbarData.loginText}
                </Link>
                <Button
                  onClick={() => {
                    setMobileOpen(false);
                    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full h-12 text-base rounded-full bg-foreground text-background active:scale-95 transition-all font-semibold">
                  {navbarData.ctaText}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
