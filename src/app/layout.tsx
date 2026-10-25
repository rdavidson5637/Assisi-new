import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";
import { siteUrl } from "@/lib/metadata";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "800"],
  variable: "--font-heading",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["NGO", "AnimalShelter"],
  name: site.name,
  legalName: site.legalName,
  url: siteUrl,
  email: site.email,
  telephone: "+442891812622",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1 Old Bangor Road",
    addressLocality: "Conlig",
    addressRegion: "County Down",
    postalCode: "BT23 7PU",
    addressCountry: "GB",
  },
  identifier: site.charityNumber,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Assisi Animal Sanctuary | Help for the Helpless",
    template: "%s | Assisi Animal Sanctuary",
  },
  description: "Assisi Animal Sanctuary in Conlig has rescued and rehomed animals in Northern Ireland since 1997. Adopt a pet, volunteer, or donate.",
  keywords: "animal sanctuary, pet adoption, Northern Ireland, dogs, cats, rabbits, animal welfare, charity, volunteer, donate",
  openGraph: {
    title: "Assisi Animal Sanctuary | Help for the Helpless",
    description: "Assisi Animal Sanctuary in Conlig. Adopt a pet, volunteer, or donate.",
    url: "https://www.assisi-ni.org",
    siteName: "Assisi Animal Sanctuary",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} ${bricolage.variable}`}>
      <body className="antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-ink text-cream px-4 py-2 rounded-panel z-50">
          Skip to main content
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
