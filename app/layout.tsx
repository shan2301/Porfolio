import type { Metadata } from "next";
import { Outfit, Figtree } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/portfolio/site-nav";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-headline",
});

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Shashank Sundar | Power Platform Developer",
  description:
    "Power Platform Developer | SharePoint | Power BI — enterprise apps, automation, and analytics for global clients",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${figtree.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        <SiteNav />
        <div className="flex-1">{children}</div>
        <footer className="border-t border-border/60 bg-hangar/80 mt-auto relative z-10">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-sm text-muted-foreground">
            <p className="font-headline font-medium text-foreground">
              Shashank Sundar
            </p>
            <p className="font-mono text-xs uppercase tracking-wider text-runway/70">
              Hangar · Runway · Cruise · Landing
            </p>
            <a
              href="mailto:sundarshashank@gmail.com"
              className="hover:text-runway transition-colors"
            >
              sundarshashank@gmail.com
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
