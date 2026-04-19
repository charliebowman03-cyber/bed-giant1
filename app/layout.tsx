import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/ui/LoadingScreen";
import SearchModal from "@/components/ui/SearchModal";
import JsonLd from "@/components/seo/JsonLd";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bedgiant.com'),
  title: {
    default: 'BedGiant — Expert Sleep & Bedroom Reviews',
    template: '%s | BedGiant',
  },
  description:
    'Expert-tested reviews and curated picks for beds, mattresses, bedding and sleep accessories. Independent, honest, updated regularly.',
  openGraph: {
    siteName: 'BedGiant',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://dusk.com/cdn/shop/files/berkeley-ottoman-storage-bed-natural-797384.jpg?v=1748346528&width=1200',
        width: 1200,
        height: 630,
        alt: 'BedGiant — Expert Sleep & Bedroom Reviews',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable}`}>
      <body className="min-h-full flex flex-col bg-[#FBF8F5]">
        <JsonLd data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebSite',
              '@id': 'https://bedgiant.com/#website',
              url: 'https://bedgiant.com',
              name: 'BedGiant',
              description: 'Expert-tested reviews and curated picks for beds, mattresses, bedding and sleep accessories.',
              potentialAction: {
                '@type': 'SearchAction',
                target: { '@type': 'EntryPoint', urlTemplate: 'https://bedgiant.com/reviews?q={search_term_string}' },
                'query-input': 'required name=search_term_string',
              },
            },
            {
              '@type': 'Organization',
              '@id': 'https://bedgiant.com/#organization',
              name: 'BedGiant',
              url: 'https://bedgiant.com',
              description: 'Independent reviews and expert picks for sleep and bedroom products.',
              sameAs: [],
            },
          ],
        }} />
        <LoadingScreen />
        <SearchModal />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
