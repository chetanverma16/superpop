import type { StaticImageData } from "next/image";

import featuresImageOne from "@public/features-1.png";
import featuresImageTwo from "@public/features-2.png";
import featuresImageThree from "@public/features-3.png";
import heroImage from "@public/header.png";
import logoImage from "@public/logo.png";

export const media: {
  hero: StaticImageData;
  features: StaticImageData[];
  logo: StaticImageData;
} = {
  hero: heroImage,
  features: [featuresImageOne, featuresImageTwo, featuresImageThree],
  logo: logoImage,
};

export const heroContent = {
  badge: "SuperPop for Shopify",
  headline: "Turn Browsers Into Subscribers With Interactive Games",
  subheadline:
    "SuperPop helps Shopify merchants capture more emails through engaging spin wheels, scratch cards, mystery boxes, and memory games—without a developer on call.",
  primaryCta: {
    label: "Install on Shopify",
    href: "#pricing",
  },
  secondaryCta: {
    label: "View Live Demo",
    href: "#demo",
  },
};

export const problemCopy = {
  heading: "Stop Losing Visitors Without Capturing Their Email",
  body: "Most store visitors leave without saying a word. Traditional popups feel like interruptions, not invitations. SuperPop gives you a more thoughtful, human way to spark a conversation and convert anonymous traffic into engaged subscribers.",
};

export const solutionCopy = {
  heading: "Make Email Collection Fun and Engaging",
  body: "SuperPop transforms static opt-in forms into playful experiences that reward visitors for sharing their details. Choose from polished game templates, adapt every element to your brand, and automate the follow-up so every new lead is ready to convert.",
  highlights: [
    "Pick from four ready-to-launch game templates tailored for conversions",
    "Style every detail — colors, typography, copy, rewards — without touching code",
    "Sync captured details straight to Shopify and your email platform",
    "Use intelligent triggers to show the right experience at the ideal moment",
  ],
};

export const featureGallery = media.features;

export const howItWorksIntro = {
  heading: "Launch Your First Gamified Popup in 3 Steps",
};

export const useCasesIntro = {
  heading: "Perfect For Every Type of Store",
};

export const comparisonIntro = {
  heading: "Why Choose SuperPop?",
  body: "Compare the customer experience and operational features side-by-side to see why merchants switch from static popups and limited gamification apps.",
};

export const pricingIntro = {
  heading: "Simple, Transparent Pricing",
  body: "Choose the plan that fits your business. Every plan includes a 14-day free trial.",
};

export const faqIntro = {
  heading: "Frequently Asked Questions",
};

export const finalCta = {
  heading: "Ready to Turn Visitors Into Subscribers?",
  body: "Join hundreds of Shopify merchants using SuperPop to build their email lists with engaging, interactive popups.",
  primaryCta: {
    label: "Start your 14-day free trial",
    href: "#pricing",
  },
  secondaryCta: {
    label: "See SuperPop in action",
    href: "#demo",
  },
};

export const finalCtaStats = [
  "⚡ Setup in under 10 minutes",
  "📧 Capture 2-3x more emails",
  "🎮 4 interactive game formats",
  "📊 Real-time analytics included",
];

export const footerCopy = {
  name: "SuperPop",
  description: "Gamified email capture for Shopify stores.",
};

export const stats = [
  {
    value: "98%",
    label: "of visitors leave without buying",
  },
  {
    value: "42:1",
    label: "email marketing ROI",
  },
  {
    value: "2x",
    label: "more engagement with interactive content",
  },
];

export const howItWorks = [
  {
    step: "1",
    title: "Choose Your Game",
    description:
      "Select from spin wheels, scratch cards, mystery boxes, or memory match games.",
  },
  {
    step: "2",
    title: "Customize & Configure",
    description:
      "Match your brand colors, set display rules, and create your reward offer.",
  },
  {
    step: "3",
    title: "Launch & Track",
    description:
      "Publish your popup and watch real-time analytics as emails roll in.",
  },
];

export const useCases = [
  {
    title: "Fashion & Apparel",
    quote: "Get 15% off your first order! Spin to win your welcome discount.",
  },
  {
    title: "Beauty & Cosmetics",
    quote: "Match the pairs to unlock your exclusive skincare sample offer.",
  },
  {
    title: "Home & Decor",
    quote: "Scratch to reveal your new customer gift with purchase.",
  },
  {
    title: "Food & Beverage",
    quote:
      "Spin the wheel for free shipping on your first coffee subscription.",
  },
];

export const comparisonRows = [
  {
    feature: "Multiple game types",
    superpop: "✅ 4 games",
    popups: "❌ Forms only",
    others: "⚠️ 1-2 games",
  },
  {
    feature: "Custom form fields",
    superpop: "✅ Unlimited",
    popups: "⚠️ Limited",
    others: "⚠️ Email only",
  },
  {
    feature: "Exit intent triggers",
    superpop: "✅ Yes",
    popups: "✅ Yes",
    others: "⚠️ Sometimes",
  },
  {
    feature: "Brand customization",
    superpop: "✅ Complete control",
    popups: "⚠️ Basic colors",
    others: "⚠️ Templates only",
  },
  {
    feature: "Real-time analytics",
    superpop: "✅ Detailed metrics",
    popups: "❌ Basic stats",
    others: "⚠️ Limited data",
  },
  {
    feature: "Automatic discounts",
    superpop: "✅ Yes",
    popups: "❌ Manual",
    others: "⚠️ Sometimes",
  },
  {
    feature: "Mobile optimized",
    superpop: "✅ Fully responsive",
    popups: "⚠️ Varies",
    others: "⚠️ Varies",
  },
  {
    feature: "Setup time",
    superpop: "✅ Under 10 min",
    popups: "⚠️ 30+ min",
    others: "⚠️ 20+ min",
  },
];

export const pricingPlans = [
  {
    title: "Monthly Plan",
    price: "$10/month",
    highlight: "Unlimited popup views",
    details: [
      "All 4 game types",
      "Complete customization",
      "Unlimited custom fields",
      "Advanced analytics",
      "Email support",
      "A/B testing",
      "All features included",
    ],
  },
  {
    title: "Annual Plan",
    price: "$100/year",
    badge: "Save $20",
    highlight: "Everything in Monthly, plus:",
    details: [
      "2 months free",
      "Priority support",
      "Early access to new features",
    ],
  },
];

export const pricingBenefits = [
  "✅ 14-day free trial",
  "✅ No credit card required",
  "✅ Cancel anytime",
  "✅ Free setup assistance",
];

export const faqItems = [
  {
    question: "Does SuperPop slow down my store?",
    answer:
      "No. SuperPop is optimized for performance and loads asynchronously so it doesn't impact your store's speed or Core Web Vitals.",
  },
  {
    question: "Do I need coding skills to set up SuperPop?",
    answer:
      "Not at all. SuperPop installs with one click and the visual editor lets you customize everything without code.",
  },
  {
    question: "Can I customize the games to match my brand?",
    answer:
      "Yes! You have complete control over colors, fonts, logos, messaging, button styles, and all visual elements.",
  },
  {
    question: "What happens to the emails I collect?",
    answer:
      "All captured emails automatically sync to your Shopify customer list and can integrate with platforms like Klaviyo or Mailchimp.",
  },
  {
    question: "Can I collect more than just email addresses?",
    answer:
      "Absolutely. Add custom form fields to collect phone numbers, birthdays, preferences, or any other information you need.",
  },
  {
    question: "How do discount codes work?",
    answer:
      "SuperPop can automatically generate unique discount codes and send them via email, or use a single code for all participants.",
  },
  {
    question: "Is SuperPop mobile-friendly?",
    answer:
      "Yes. All games are fully responsive on mobile devices, tablets, and desktops.",
  },
  {
    question: "Can I run multiple popups at once?",
    answer:
      "Yes. Create multiple campaigns and set specific display rules for each based on pages, customer segments, or behavior.",
  },
  {
    question: "What kind of analytics do I get?",
    answer:
      "Track popup views, game play rates, email capture rates, conversions, device breakdowns, and performance trends.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes. Enjoy a 14-day free trial with no credit card required.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. There are no long-term contracts and you can cancel whenever you like.",
  },
  {
    question: "Do you offer setup help?",
    answer:
      "Yes. Get free setup assistance along with detailed documentation and video tutorials.",
  },
];

export const footerGroups: Array<{ title: string; links: string[] }> = [
  {
    title: "Product",
    links: ["Features", "Pricing", "How It Works", "Demo"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Video Tutorials", "Help Center"],
  },
  {
    title: "Support",
    links: ["Contact Us", "Feature Requests", "Report a Bug"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Refund Policy"],
  },
  {
    title: "Connect",
    links: ["Twitter", "LinkedIn", "YouTube", "Shopify App Store"],
  },
];
