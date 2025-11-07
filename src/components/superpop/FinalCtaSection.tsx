"use client";

import { motion } from "motion/react";

import { finalCta, finalCtaStats } from "@components/superpop/content";
import { useReveal } from "@components/superpop/useReveal";

export function FinalCtaSection() {
  const reveal = useReveal();

  return (
    <section className="space-y-8 text-center md:space-y-10" id="final-cta">
      <motion.h2 {...reveal()} className="text-2xl font-semibold text-neutral-900 md:text-3xl">
        {finalCta.heading}
      </motion.h2>
      <motion.p
        {...reveal(0.12)}
        className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg"
      >
        {finalCta.body}
      </motion.p>
      <motion.div
        {...reveal(0.18)}
        className="flex flex-wrap items-center justify-center gap-3"
      >
        <a
          href={finalCta.primaryCta.href}
          className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
        >
          {finalCta.primaryCta.label}
        </a>
        <a
          href={finalCta.secondaryCta.href}
          className="inline-flex items-center justify-center rounded-full border border-neutral-900 px-6 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
        >
          {finalCta.secondaryCta.label}
        </a>
      </motion.div>
      <motion.ul
        {...reveal(0.24)}
        className="mx-auto grid gap-3 text-sm text-neutral-600 md:max-w-3xl md:grid-cols-2 md:text-base"
      >
        {finalCtaStats.map((stat) => (
          <li key={stat} className="rounded-2xl border border-neutral-200 px-4 py-3">
            {stat}
          </li>
        ))}
      </motion.ul>
    </section>
  );
}

