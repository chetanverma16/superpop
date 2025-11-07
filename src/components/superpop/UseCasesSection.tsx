"use client";

import { motion } from "motion/react";

import { useCases, useCasesIntro } from "@components/superpop/content";
import { useReveal } from "@components/superpop/useReveal";

type UseCase = (typeof useCases)[number];

export function UseCasesSection() {
  const reveal = useReveal();

  return (
    <section className="space-y-8" id="use-cases">
      <motion.h2
        {...reveal()}
        className="text-2xl font-semibold text-neutral-900 md:text-3xl"
      >
        {useCasesIntro.heading}
      </motion.h2>
      <motion.div {...reveal(0.1)} className="grid gap-4 md:grid-cols-2">
        {useCases.map((useCase: UseCase) => (
          <div
            key={useCase.title}
            className="rounded-3xl border border-neutral-200 p-5"
          >
            <div className="text-sm font-semibold text-neutral-900 md:text-base">
              {useCase.title}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600 md:text-base">
              “{useCase.quote}”
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
