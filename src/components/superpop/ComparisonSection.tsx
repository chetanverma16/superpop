"use client";

import { motion } from "motion/react";

import { comparisonIntro, comparisonRows } from "@components/superpop/content";
import { useReveal } from "@components/superpop/useReveal";

export function ComparisonSection() {
  const reveal = useReveal();

  return (
    <section className="space-y-8" id="comparison">
      <motion.div {...reveal()} className="space-y-3">
        <h2 className="text-2xl font-semibold text-neutral-900 md:text-3xl">
          {comparisonIntro.heading}
        </h2>
        <p className="text-sm text-neutral-600 md:text-base">
          {comparisonIntro.body}
        </p>
      </motion.div>
      <motion.div {...reveal(0.1)} className="overflow-hidden rounded-3xl border border-neutral-200">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-neutral-50 text-neutral-600">
            <tr>
              <th className="px-4 py-3 font-semibold">Feature</th>
              <th className="px-4 py-3 font-semibold">SuperPop</th>
              <th className="px-4 py-3 font-semibold">Traditional Popups</th>
              <th className="px-4 py-3 font-semibold">Other Gamification Apps</th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row.feature} className="border-t border-neutral-200">
                <td className="px-4 py-3 text-neutral-900">{row.feature}</td>
                <td className="px-4 py-3">{row.superpop}</td>
                <td className="px-4 py-3">{row.popups}</td>
                <td className="px-4 py-3">{row.others}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
}

