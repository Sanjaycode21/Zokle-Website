import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundCanvas from "@/components/BackgroundCanvas";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zokle | Premium Web Design & Development Agency San Francisco",
  description: "High-performance digital experiences that convert visitors into loyal customers. Zokle is a premium design and development agency specializing in Next.js web apps, custom e-commerce setups, and top SEO optimization rankings.",
  keywords: ["Web Design Agency", "Next.js Web Developers", "Web Development Agency San Francisco", "Custom E-commerce Design", "Local Business Websites", "SaaS Startup Landing Pages", "SEO Performance Optimization", "Framer Motion Interactive Design"],
  openGraph: {
    title: "Zokle | Premium Web Design & Development Agency",
    description: "High-performance, visual-first digital experiences engineered to turn visitors into paying customers.",
    url: "https://zokle.agency",
    siteName: "Zokle Agency",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zokle | Premium Web Design & Development Agency",
    description: "High-performance digital experiences designed to scale.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} dark antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col relative overflow-x-hidden">
        <BackgroundCanvas />
        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
