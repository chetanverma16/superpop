"use client";

import { motion } from "motion/react";

import { solutionCopy } from "@components/superpop/content";
import { useReveal } from "@components/superpop/useReveal";

export function SolutionSection() {
  const reveal = useReveal();

  return (
    <section className="space-y-8" id="solution">
      <motion.div
        {...reveal()}
        className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center"
      >
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-neutral-900 md:text-3xl">
            {solutionCopy.heading}
          </h2>
          <p className="text-base leading-relaxed text-neutral-600 md:text-lg">
            {solutionCopy.body}
          </p>
        </div>
        <motion.ul
          {...reveal(0.12)}
          className="space-y-3 rounded-3xl border border-neutral-200 p-6 text-sm text-neutral-600 md:text-base"
        >
          {solutionCopy.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 flex-none rounded-full bg-neutral-900" />
              <span>{item}</span>
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}

