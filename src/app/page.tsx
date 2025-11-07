import { ComparisonSection } from "@components/superpop/ComparisonSection";
import { FaqSection } from "@components/superpop/FaqSection";
import { FinalCtaSection } from "@components/superpop/FinalCtaSection";
import { FooterSection } from "@components/superpop/FooterSection";
import { HeroSection } from "@components/superpop/HeroSection";
import { HowItWorksSection } from "@components/superpop/HowItWorksSection";
import { PricingSection } from "@components/superpop/PricingSection";
import { ProblemSection } from "@components/superpop/ProblemSection";
import { SolutionSection } from "@components/superpop/SolutionSection";
import { UseCasesSection } from "@components/superpop/UseCasesSection";

import { cn } from "@cn";

export default function Home() {
  return (
    <main
      className={cn(
        "relative isolate overflow-hidden bg-white text-neutral-900",
        "before:pointer-events-none before:absolute before:-left-32 before:-top-32 before:h-[520px] before:w-[520px] before:rounded-full before:bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.08),_transparent_60%)]",
        "after:pointer-events-none after:absolute after:-right-24 after:bottom-[-18rem] after:h-[600px] after:w-[600px] after:rounded-full after:bg-[radial-gradient(circle_at_center,_rgba(79,70,229,0.08),_transparent_70%)]"
      )}
    >
      <div className="absolute inset-x-0 top-32 z-0 flex justify-center">
        <div className="h-[520px] w-[min(1100px,100%)] bg-[radial-gradient(ellipse_at_top,_rgba(15,118,110,0.08),_transparent_70%)] blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-16 sm:px-8 md:gap-24 lg:px-12 lg:py-24">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <UseCasesSection />
        <ComparisonSection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
        <FooterSection />
      </div>
    </main>
  );
}
