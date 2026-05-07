import type { Metadata } from "next";
import { generatePageMetadata } from "../lib/metadata";
import { breadcrumbSchema } from "../lib/schema";
import Contact from "./HowItWorks";

export const metadata: Metadata = generatePageMetadata({
  title: "How It Works - Scrap Collection & Recycling Process",
  description: "Learn about our efficient scrap collection and recycling process in North Delhi. See how we ensure transparency and quality in every step.",
  canonical: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "https://sonuscrap.com" },
              { name: "How It Works", url: "https://sonuscrap.com/how-it-works" },
            ])
          ),
        }}
      />
      <Contact />
    </>
  );
}