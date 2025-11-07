"use client";

import { motion } from "motion/react";

import { faqIntro, faqItems } from "@components/superpop/content";
import { useReveal } from "@components/superpop/useReveal";

export function FaqSection() {
  const reveal = useReveal();

  return (
    <section className="space-y-6" id="faq">
      <motion.h2 {...reveal()} className="text-2xl font-semibold text-neutral-900 md:text-3xl">
        {faqIntro.heading}
      </motion.h2>
      <motion.div
        {...reveal(0.1)}
        className="rounded-2xl border border-neutral-200"
      >
        {faqItems.map((item, index) => (
          <motion.details
            key={item.question}
            {...reveal(0.12 + index * 0.03)}
            className="group px-4 py-3 text-sm md:px-5 md:py-4"
          >
            <summary className="cursor-pointer font-semibold text-neutral-900 md:text-base">
              {item.question}
            </summary>
            <p className="mt-1 text-neutral-600 md:text-sm">
              {item.answer}
            </p>
          </motion.details>
        ))}
      </motion.div>
    </section>
  );
}

