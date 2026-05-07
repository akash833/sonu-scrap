import type { Metadata } from "next";
import { generatePageMetadata } from "../lib/metadata";
import { breadcrumbSchema } from "../lib/schema";
import Services from "./Services";

export const metadata: Metadata = generatePageMetadata({
  title: "Our Services - Metal, Paper, Plastic & E-Waste Pickup",
  description: "Explore recycling services by Sonu Scrap Dealer. We buy Iron, Copper, Aluminum, Brass, Old Newspapers, Office E-waste, and more with instant payment and honest weighing.",
  canonical: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "https://delhiscrapdealer.com" },
              { name: "Services", url: "https://delhiscrapdealer.com/services" },
            ])
          ),
        }}
      />
      <Services />
    </>
  );
}