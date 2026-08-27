import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Shashank Sundar | Power Platform Developer",
  description: "Power Platform Developer | SharePoint | Power BI — enterprise apps, automation, and analytics for global clients",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-primary/10">
          <div className="max-w-[1440px] mx-auto px-8 flex h-16 items-center justify-between">
            <Link href="/" className="text-lg font-semibold tracking-tight text-primary hover:opacity-80 transition-opacity">
              Shashank
            </Link>
            <div className="flex gap-8">
              <Link href="/" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/projects" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
                Projects
              </Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}

