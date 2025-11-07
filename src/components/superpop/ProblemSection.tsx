"use client";

import { motion } from "motion/react";

import { problemCopy, stats } from "@components/superpop/content";
import { useReveal } from "@components/superpop/useReveal";

export function ProblemSection() {
  const reveal = useReveal();

  return (
    <section className="space-y-8" id="problem">
      <motion.div
        {...reveal()}
        className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-start"
      >
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-neutral-900 md:text-3xl">
            {problemCopy.heading}
          </h2>
          <p className="text-base leading-relaxed text-neutral-600 md:text-lg">
            {problemCopy.body}
          </p>
        </div>
        <motion.div
          {...reveal(0.1)}
          className="grid gap-4 sm:grid-cols-3 md:grid-cols-1"
        >
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="rounded-2xl border border-neutral-200 p-4 text-center"
            >
              <div className="text-2xl font-semibold text-neutral-900">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-neutral-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

