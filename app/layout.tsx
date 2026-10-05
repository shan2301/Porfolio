import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/portfolio/site-nav";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-headline",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Shashank Sundar | Technical Delivery Lead",
  description:
    "Technical Delivery Lead | Business Analysis | Agile Delivery | Digital Transformation — enterprise digital solutions for global clients",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        <SiteNav />
        <div className="flex-1">{children}</div>
        <footer className="relative z-10 mt-auto border-t border-border/80 bg-white/50 backdrop-blur-md">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-10 py-10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between text-sm text-muted-foreground">
            <p className="font-headline text-lg text-foreground tracking-tight">
              Shashank Sundar
            </p>
            <p className="text-xs uppercase tracking-[0.18em] text-runway/80">
              Delivery · Analysis · Agile · Transformation
            </p>
            <a
              href="mailto:sundarshashank@gmail.com"
              className="hover:text-foreground transition-colors"
            >
              sundarshashank@gmail.com
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
