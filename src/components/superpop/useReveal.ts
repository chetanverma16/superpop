"use client";

import { useReducedMotion } from "motion/react";

const easeCurve = [0.22, 1, 0.36, 1] as const;

export function useReveal() {
  const shouldReduceMotion = useReducedMotion();

  return (delay = 0) => ({
    initial: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 },
    whileInView: shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
    transition: {
      delay,
      duration: 0.45,
      ease: easeCurve,
    },
    viewport: { once: true, margin: "-15%" },
  });
}

