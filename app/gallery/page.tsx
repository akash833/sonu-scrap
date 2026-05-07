import type { Metadata } from "next";
import { generatePageMetadata } from "../lib/metadata";
import { breadcrumbSchema } from "../lib/schema";
import Contact from "./Gallery";

export const metadata: Metadata = generatePageMetadata({
  title: "Gallery - Scrap Collection & Recycling Photos",
  description: "View our latest scrap collection projects in North Delhi. See our transparent weighing process, pickup fleet, and recycling warehouse in action.",
  canonical: "/gallery",
});

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "https://sonuscrap.com" },
              { name: "Gallery", url: "https://sonuscrap.com/gallery" },
            ])
          ),
        }}
      />
      <Contact />
    </>
  );
}