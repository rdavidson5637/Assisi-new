import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
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
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-emerald-700 text-white px-4 py-2 rounded-lg z-50">
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
