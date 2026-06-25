import type { Metadata, Viewport } from "next";
import { Geist, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/shared/StructuredData";

// ─── Fonts ────────────────────────────────────────────────────────────────────

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const heading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  preload: false, // only used in code blocks — don't block rendering
});

// ─── Constants ────────────────────────────────────────────────────────────────

const BASE_URL = "https://aiagents.io";

const TITLE = "AI Agents Platform — Hire an AI Workforce, Not Just a Chatbot";
const DESCRIPTION =
  "Deploy specialized AI Agents that collaborate, execute workflows, and deliver results 24/7. Scale your business with an autonomous AI Workforce for engineering, marketing, operations, and more.";

// ─── Viewport ─────────────────────────────────────────────────────────────────

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  // ── Core ──────────────────────────────────────────────────────────────────
  metadataBase: new URL(BASE_URL),
  title: {
    default: TITLE,
    template: "%s | AI Agents Platform",
  },
  description: DESCRIPTION,
  keywords: [
    "AI agents",
    "AI workforce",
    "AI automation",
    "autonomous AI agents",
    "multi-agent collaboration",
    "AI business automation",
    "AI employees",
    "workflow automation",
    "enterprise AI",
    "AI productivity",
    "AI SaaS platform",
    "AI team collaboration",
    "business AI tools",
    "AI for startups",
    "no-code AI workflows",
  ],
  applicationName: "AI Agents Platform",
  authors: [{ name: "AI Agents Platform", url: BASE_URL }],
  creator: "AI Agents Platform",
  publisher: "AI Agents Platform",
  category: "Technology",
  classification: "Business Software",

  // ── Canonical & Indexing ───────────────────────────────────────────────────
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en-US": BASE_URL,
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    url: BASE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "AI Agents Platform",
    locale: "en_US",
    images: [
      {
        url: `${BASE_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "AI Agents Platform — Deploy an AI Workforce for Your Business",
        type: "image/png",
      },
    ],
  },

  // ── Twitter / X ───────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@aiagentsio",
    site: "@aiagentsio",
    images: [
      {
        url: `${BASE_URL}/opengraph-image.png`,
        alt: "AI Agents Platform — Deploy an AI Workforce for Your Business",
        width: 1200,
        height: 630,
      },
    ],
  },

  // ── Icons ─────────────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  // ── Verification (add keys when deploying to production) ──────────────────
  // verification: {
  //   google: "YOUR_GOOGLE_SITE_VERIFICATION_TOKEN",
  //   yandex: "YOUR_YANDEX_VERIFICATION_TOKEN",
  // },
};

// ─── Layout ───────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${heading.variable} ${mono.variable} dark scroll-smooth`}
    >
      <body>
        {/* JSON-LD Structured Data */}
        <StructuredData includeFaq={true} />
        {children}
      </body>
    </html>
  );
}