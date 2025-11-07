import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Superpop – Gamified Email Capture for Shopify",
    template: "%s | Superpop",
  },
  description:
    "Superpop helps Shopify stores turn casual visitors into engaged subscribers with interactive spin wheels, scratch cards, and more—all customizable in minutes.",
  keywords: [
    "Superpop",
    "Shopify",
    "email capture",
    "gamified popup",
    "spin wheel",
    "lead capture",
    "shopify app",
    "interactive marketing",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Superpop – Gamified Email Capture for Shopify",
    description:
      "Install Superpop to launch interactive games that collect emails, grow your subscriber list, and delight customers on Shopify.",
    url: "https://superpop.app",
    siteName: "Superpop",
    images: [
      {
        url: "/header.png",
        width: 1200,
        height: 630,
        alt: "Superpop gamified popup preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Superpop – Gamified Email Capture for Shopify",
    description:
      "Capture more emails on Shopify with interactive games and on-brand experiences from Superpop.",
    images: ["/header.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
