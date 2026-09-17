import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { sanctuary, socialLinks } from "@/data/shops";
import { siteUrl } from "@/lib/metadata";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Assisi Animal Sanctuary | Help for the Helpless",
    template: "%s | Assisi Animal Sanctuary",
  },
  description: "Founded in 1997, Assisi Animal Sanctuary is a local, independent, no-kill animal welfare charity in Northern Ireland. Adopt a pet, volunteer, donate, or foster today.",
  keywords: ["animal sanctuary", "pet adoption", "Northern Ireland", "dogs", "cats", "rabbits", "animal welfare", "charity", "volunteer", "donate"],
  openGraph: {
    title: "Assisi Animal Sanctuary | Help for the Helpless",
    description: "Providing safety, healing, and hope for vulnerable animals in Northern Ireland since 1997.",
    url: siteUrl,
    siteName: "Assisi Animal Sanctuary",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Assisi Animal Sanctuary | Help for the Helpless",
    description: "Providing safety, healing, and hope for vulnerable animals in Northern Ireland since 1997.",
  },
};

export const viewport: Viewport = {
  themeColor: "#fbbf24",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: sanctuary.name,
  url: siteUrl,
  logo: `${siteUrl}/logo.jpg`,
  description:
    "A local, independent, no-kill animal welfare charity in Northern Ireland rescuing, treating and rehoming dogs, cats, rabbits and small animals since 1997.",
  email: sanctuary.email,
  telephone: sanctuary.phone,
  foundingDate: "1997",
  address: {
    "@type": "PostalAddress",
    streetAddress: sanctuary.address,
    addressLocality: "Conlig, Newtownards",
    postalCode: sanctuary.postcode,
    addressCountry: "GB",
  },
  sameAs: socialLinks.map((link) => link.href),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${inter.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-gray-900 text-white px-4 py-2 rounded-lg z-50">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
