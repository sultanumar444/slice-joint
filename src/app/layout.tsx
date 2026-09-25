import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slice Joint UAE — New York Style Pizza in Dubai",
  description:
    "Slice Joint Dubai — hot pizza, juicy burgers and loaded fries. Fast delivery on Talabat, Deliveroo, Careem and noon food, or call +971 54 456 7894.",
  icons: { icon: "/images/slice-joint-icon.png" },
  openGraph: {
    title: "Slice Joint UAE — New York Style Pizza in Dubai",
    description:
      "Hot Pizza. Juicy Burgers. Loaded Fries. Fast delivery & unforgettable taste across Dubai.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-brand-cream text-brand-dark font-sans">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
