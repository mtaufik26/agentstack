/**
 * @file motion.ts
 * Centralized animation system for the AI Agents Platform.
 *
 * Philosophy:
 * - All durations and easings are defined once here.
 * - Components import these tokens — never hardcode animation values.
 * - Every animation must be purposeful (entrance, interaction, state change).
 * - Performance-first: use `viewport={{ once: true }}` to avoid re-triggering.
 */

import type { Variants, Transition } from "framer-motion";

// ─── Easing Curves ───────────────────────────────────────────────────────────

/** Premium spring-like custom ease — used by Linear, Vercel. */
export const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Standard ease-in-out for subtle interactions. */
export const EASE_INOUT: [number, number, number, number] = [0.4, 0, 0.2, 1];

// ─── Duration Tokens ─────────────────────────────────────────────────────────

export const DURATION = {
  fast: 0.25,
  base: 0.45,
  slow: 0.60,
  slower: 0.75,
} as const;

// ─── Shared Viewport Settings ────────────────────────────────────────────────

/** Standard viewport — fire once, 80px before entering view. */
export const viewport = {
  once: true,
  margin: "-80px",
} as const;

/** Tighter viewport for elements that should animate later. */
export const viewportTight = {
  once: true,
  margin: "-40px",
} as const;

// ─── Reusable Transitions ────────────────────────────────────────────────────

export const transition = {
  default: {
    duration: DURATION.base,
    ease: EASE_OUT_EXPO,
  } satisfies Transition,

  fast: {
    duration: DURATION.fast,
    ease: EASE_OUT_EXPO,
  } satisfies Transition,

  slow: {
    duration: DURATION.slow,
    ease: EASE_OUT_EXPO,
  } satisfies Transition,

  slower: {
    duration: DURATION.slower,
    ease: EASE_OUT_EXPO,
  } satisfies Transition,

  spring: {
    type: "spring" as const,
    stiffness: 400,
    damping: 30,
  } satisfies Transition,

  springGentle: {
    type: "spring" as const,
    stiffness: 200,
    damping: 25,
  } satisfies Transition,
};

// ─── Entrance Variants ───────────────────────────────────────────────────────

/** Fade up — the primary entrance for most sections and cards. */
export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transition.default,
  },
};

/** Fade in — for elements with no directional preference. */
export const fadeInVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transition.default,
  },
};

/** Fade up with slight scale — for cards and feature panels. */
export const fadeUpScaleVariant: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: transition.slow,
  },
};

/** Slide in from left — for text content on the left side. */
export const slideInLeftVariant: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transition.slow,
  },
};

/** Slide in from right — for visuals on the right side. */
export const slideInRightVariant: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transition.slow,
  },
};

/** Scale in — for hero UI panels and large visual elements. */
export const scaleUpVariant: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: transition.slower,
  },
};

// ─── Container Variants (for staggered children) ─────────────────────────────

/** Standard stagger container. Children should use `fadeUpVariant`. */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

/** Faster stagger for dense grids (e.g., testimonials, pricing). */
export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.02,
    },
  },
};

// ─── Section Header Variants ─────────────────────────────────────────────────

/** Container for the SectionHeader — staggers title + subtitle. */
export const sectionHeaderContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/** For the h2 title of a section header. */
export const sectionTitleVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASE_OUT_EXPO },
  },
};

/** For the p subtitle of a section header. */
export const sectionSubtitleVariant: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASE_OUT_EXPO },
  },
};
