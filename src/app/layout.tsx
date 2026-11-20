import type { Metadata } from "next";
import { Atkinson_Hyperlegible, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Atkinson Hyperlegible for body and UI; Fraunces for h1 and h2 only.
const body = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-body",
});

const display = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.assisi-ni.org"),
  title: "Assisi Animal Sanctuary | Help for the Helpless",
  description: "Founded in 1997, Assisi Animal Sanctuary is Northern Ireland's leading independent animal welfare charity. Adopt a pet, volunteer, donate, or foster today.",
  keywords: "animal sanctuary, pet adoption, Northern Ireland, dogs, cats, rabbits, animal welfare, charity, volunteer, donate",
  openGraph: {
    title: "Assisi Animal Sanctuary | Help for the Helpless",
    description: "Providing safety, healing, and hope for vulnerable animals in Northern Ireland since 1997.",
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
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body className="antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-ink text-cream px-4 py-2 rounded-[8px] z-50">
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
