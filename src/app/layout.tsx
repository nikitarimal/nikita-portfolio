import type { Metadata } from "next";
import { Inter, Barlow_Condensed, Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const display = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const handwriting = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: "500",
});

export const metadata: Metadata = {
  title: "Nikita Rimal | UI/UX Designer",
  description:
    "Selected web, mobile, and interface design by Nikita Rimal. UI/UX designer based in Kathmandu, Nepal.",
  icons: {
    icon: "/image/nikita-logo.png",
    apple: "/image/nikita-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${display.variable} ${handwriting.variable}`}
      >
        <SmoothScroll>
          <ScrollProgress />
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
