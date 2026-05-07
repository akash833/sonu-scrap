import type { Metadata } from "next";
import { generatePageMetadata } from "../lib/metadata";
import { breadcrumbSchema } from "../lib/schema";
import About from "./About";

export const metadata: Metadata = generatePageMetadata({
  title: "About Us - 10+ Years of Trusted Scrap Dealing",
  description: "Learn about Sonu Scrap Dealer's journey in Model Town, Delhi. A family-owned business committed to honest weighing and sustainable recycling since 2014.",
  canonical: "/about",
});

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "https://sonuscrap.com" },
              { name: "About Us", url: "https://sonuscrap.com/about" },
            ])
          ),
        }}
      />
      <About />
    </>
  );
}