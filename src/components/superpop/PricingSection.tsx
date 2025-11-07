"use client";

import { motion } from "motion/react";

import {
  pricingBenefits,
  pricingIntro,
  pricingPlans,
} from "@components/superpop/content";
import { useReveal } from "@components/superpop/useReveal";

export function PricingSection() {
  const reveal = useReveal();

  return (
    <section className="space-y-10" id="pricing">
      <motion.div {...reveal()} className="space-y-4">
        <h2 className="text-2xl font-semibold text-neutral-900 md:text-3xl">
          {pricingIntro.heading}
        </h2>
        <p className="text-base leading-relaxed text-neutral-600 md:text-lg">
          {pricingIntro.body}
        </p>
      </motion.div>
      <motion.div {...reveal(0.12)} className="grid gap-6 md:grid-cols-2">
        {pricingPlans.map((plan) => {
          const isFeatured = Boolean(plan.badge);
          const accentText = isFeatured ? "text-white" : "text-neutral-900";
          const accentSubtle = isFeatured
            ? "text-neutral-200"
            : "text-neutral-600";
          const borderClass = isFeatured
            ? "border-neutral-900 bg-neutral-900"
            : "border-neutral-200 bg-white";
          const bulletClass = isFeatured ? "bg-white" : "bg-neutral-900";

          return (
            <div
              key={plan.title}
              className={`flex h-full flex-col justify-between gap-6 rounded-3xl border ${borderClass} p-6 shadow-sm`}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className={`space-y-1 ${accentText}`}>
                    <h3 className="text-lg font-semibold md:text-xl">
                      {plan.title}
                    </h3>
                    <p className={`text-sm md:text-base ${accentSubtle}`}>
                      {plan.highlight}
                    </p>
                  </div>
                  {plan.badge && (
                    <span className="rounded-full border border-white/40 px-3 py-1 text-xs font-medium uppercase text-white">
                      {plan.badge}
                    </span>
                  )}
                </div>
                <div
                  className={`text-3xl font-semibold md:text-4xl ${accentText}`}
                >
                  {plan.price}
                </div>
                <ul
                  className={`space-y-2 text-sm md:text-base ${accentSubtle}`}
                >
                  {plan.details.map((detail) => (
                    <li
                      key={`${plan.title}-${detail}`}
                      className="flex items-center gap-2"
                    >
                      <span
                        className={`h-1 w-1 flex-none rounded-full ${bulletClass}`}
                      />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <a
                  href="#demo"
                  className={`inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-sm font-medium transition ${
                    isFeatured
                      ? "bg-white text-neutral-900 hover:bg-neutral-200"
                      : "bg-neutral-900 text-white hover:bg-neutral-800"
                  }`}
                >
                  {plan.title.includes("Annual")
                    ? "Start annual plan"
                    : "Start monthly plan"}
                </a>
                {!isFeatured && (
                  <p className="text-xs text-neutral-500">
                    Upgrade anytime. Your progress and settings stay in sync.
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div
        {...reveal(0.2)}
        className="flex flex-wrap items-center gap-3"
      >
        {pricingBenefits.map((benefit) => (
          <span
            key={benefit}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-600"
          >
            {benefit}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
