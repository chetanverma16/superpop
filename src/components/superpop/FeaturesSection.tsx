"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { featureGallery } from "@components/superpop/content";
import { useReveal } from "@components/superpop/useReveal";

export function FeaturesSection() {
  const reveal = useReveal();

  return (
    <section className="space-y-8" id="features">
      <motion.div {...reveal()} className="grid gap-6 md:grid-cols-2">
        {featureGallery.map((image, index) => (
          <div
            key={`feature-image-${index}`}
            className="overflow-hidden rounded-3xl border border-neutral-200"
          >
            <Image
              src={image}
              alt="SuperPop feature highlight"
              className="h-full w-full object-contain bg-white"
              sizes="(min-width: 768px) 320px, 100vw"
              priority={index === 0}
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
