import { generatePageMetadata } from "../lib/metadata";
import { faqSchema, breadcrumbSchema } from "../lib/schema";
import Home from "./Home"; // your actual Home component

export const metadata = generatePageMetadata({
  canonical: "/",
});

export default function HomePage() {
  const faqs = [
    { question: "How do I schedule a pickup?", answer: "Call or WhatsApp us and we'll come to your doorstep." },
    { question: "What scrap do you buy?", answer: "Metal, paper, plastic, e-waste and more." },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", url: "https://sonuscrap.com" }
      ])) }} />
      <Home />
    </>
  );
}