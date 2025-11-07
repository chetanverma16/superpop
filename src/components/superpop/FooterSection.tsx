"use client";

import Image from "next/image";

import { footerCopy, media } from "@components/superpop/content";

export function FooterSection() {
  return (
    <footer className="space-y-8 border-t border-neutral-200 pt-10 text-sm text-neutral-600 md:text-base">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-2xl border border-neutral-200">
            <Image
              src={media.logo}
              alt="SuperPop logo"
              className="h-full w-full object-cover"
              sizes="40px"
            />
          </div>
          <div>
            <div className="text-base font-semibold text-neutral-900 md:text-lg">
              {footerCopy.name}
            </div>
            <p>{footerCopy.description}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
