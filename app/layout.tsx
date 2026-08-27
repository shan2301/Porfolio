import type { Metadata } from "next";
import { Outfit, Figtree } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-[hsl(198_28%_97%/0.82)] backdrop-blur-xl">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 flex h-16 items-center justify-between">
            <Link
              href="/"
              className="font-headline text-lg sm:text-xl font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
            >
              Shashank Sundar
            </Link>
            <div className="flex items-center gap-6 sm:gap-8">
              <Link
                href="/"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </Link>
            </div>
          </div>
        </nav>
        <div className="flex-1">{children}</div>
        <footer className="border-t border-border/70 bg-white/40 mt-auto">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-sm text-muted-foreground">
            <p className="font-headline font-medium text-foreground">
              Shashank Sundar
            </p>
            <p>Power Platform · SharePoint · Power BI</p>
            <a
              href="mailto:sundarshashank@gmail.com"
              className="hover:text-primary transition-colors"
            >
              sundarshashank@gmail.com
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
