"use client";

import { motion } from "motion/react";

import { howItWorks, howItWorksIntro } from "@components/superpop/content";
import { useReveal } from "@components/superpop/useReveal";

export function HowItWorksSection() {
  const reveal = useReveal();

  return (
    <section className="space-y-8" id="how-it-works">
      <motion.h2 {...reveal()} className="text-2xl font-semibold text-neutral-900 md:text-3xl">
        {howItWorksIntro.heading}
      </motion.h2>
      <motion.div
        {...reveal(0.1)}
        className="grid gap-4 md:grid-cols-3"
      >
        {howItWorks.map((step, index) => (
          <motion.div
            key={step.step}
            {...reveal(0.14 + index * 0.04)}
            className="flex flex-col gap-3 rounded-3xl border border-neutral-200 p-6"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-sm font-medium text-white">
              {step.step}
            </span>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-neutral-900 md:text-base">
                {step.title}
              </div>
              <p className="text-sm leading-relaxed text-neutral-600">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

