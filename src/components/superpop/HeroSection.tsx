"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { heroContent, media } from "@components/superpop/content";
import { useReveal } from "@components/superpop/useReveal";

export function HeroSection() {
  const reveal = useReveal();

  return (
    <section className="space-y-8">
      <motion.div {...reveal(0)} className="space-y-6 text-center md:text-left">
        <div className="flex justify-center md:justify-start">
          <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-neutral-200">
            <Image
              src={media.logo}
              alt="SuperPop logo"
              className="h-full w-full object-cover"
              sizes="48px"
              priority
            />
          </div>
        </div>
        <span className="inline-flex items-center justify-center rounded-full border border-neutral-200 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-neutral-600 md:justify-start">
          {heroContent.badge}
        </span>
        <motion.h1
          {...reveal(0.12)}
          className="mx-auto max-w-3xl text-3xl font-semibold leading-tight text-neutral-900 md:mx-0 md:text-4xl md:leading-snug"
        >
          {heroContent.headline}
        </motion.h1>
        <motion.p
          {...reveal(0.2)}
          className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-600 md:mx-0 md:text-lg"
        >
          {heroContent.subheadline}
        </motion.p>
      </motion.div>

      <motion.div
        {...reveal(0.28)}
        className="flex flex-wrap items-center justify-center gap-3 md:justify-start"
      >
        <motion.a
          {...reveal(0.35)}
          href={heroContent.primaryCta.href}
          className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800 md:px-6"
        >
          {heroContent.primaryCta.label}
        </motion.a>
        <motion.a
          {...reveal(0.4)}
          href={heroContent.secondaryCta.href}
          className="inline-flex items-center justify-center rounded-full border border-neutral-900 px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100 md:px-6"
        >
          {heroContent.secondaryCta.label}
        </motion.a>
      </motion.div>

      <motion.div
        {...reveal(0.48)}
        className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50"
      >
        <Image
          src={media.hero}
          alt="Preview of SuperPop's interactive games"
          className="h-full w-full object-cover"
          priority
          sizes="(min-width: 768px) 960px, 100vw"
        />
      </motion.div>
    </section>
  );
}
