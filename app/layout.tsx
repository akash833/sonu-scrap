import { Layout } from "./components/Layout";
import { localBusinessSchema } from "./lib/schema";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://delhiscrapdealer.com"),
  title: {
    default: "Sonu Scrap Dealer | Best Scrap Rates & Doorstep Pickup in Delhi",
    template: "%s | Sonu Scrap Dealer",
  },
  description: "Sonu Scrap Dealer is North Delhi's most trusted buyer for metal, paper, plastic, and e-waste scrap. Instant doorstep pickup and market-leading rates.",
  keywords: ["scrap dealer", "Delhi", "recycling", "kabadiwala", "metal scrap", "e-waste"],
  verification: {
    google: "google-site-verification-id",
  },
  openGraph: {
    type: "website",
    siteName: "Sonu Scrap Dealer",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Schema injected once globally */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}