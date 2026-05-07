import { Layout } from "./components/Layout";
import { localBusinessSchema } from "./lib/schema";
import "./globals.css";

export const metadata = {
  title: {
    default: "Sonu Scrap Dealer | Best Scrap Rates & Doorstep Pickup in Delhi",
    template: "%s | Sonu Scrap Dealer",
  },
  description: "Sonu Scrap Dealer is North Delhi's most trusted buyer for metal, paper, plastic, and e-waste scrap. Instant doorstep pickup and market-leading rates.",
  openGraph: {
    type: "website",
    siteName: "Sonu Scrap Dealer",
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