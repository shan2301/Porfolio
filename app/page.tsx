import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CVDownloadButton } from "@/components/cv-download-button";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-16">
      {/* Hero Section - Professional Style */}
      <section className="max-w-[1440px] mx-auto px-8">
        <div className="pt-32 pb-20 md:pt-40 md:pb-32">
          {/* Main Headline */}
          <div className="max-w-5xl">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tight leading-[1.05] text-foreground mb-6">
              Power Platform
              <br />
              <span className="text-primary">Developer</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground mb-12 tracking-tight">
              SharePoint | Power BI | Microsoft 365
            </h2>
          </div>

          {/* Credentials */}
          <div className="max-w-3xl space-y-6 mb-16">
            <p className="text-xl md:text-2xl text-foreground/90 font-medium">
              MSc (University of Nottingham, UK) · Based in Chennai, India
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              5+ years delivering enterprise Power Apps, Power Automate, SharePoint, and Power BI solutions for clients across the USA, UK, Canada, and Japan.
            </p>
          </div>

          {/* CTAs - Professional Style */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/projects">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base font-medium rounded-none border-0 shadow-lg shadow-primary/20"
              >
                View Projects
              </Button>
            </Link>
            <Link href="/about">
              <Button 
                size="lg" 
                variant="outline"
                className="h-14 px-8 text-base font-medium rounded-none border-primary/30 hover:bg-primary/5 hover:border-primary/50 text-foreground"
              >
                About Me
              </Button>
            </Link>
            <CVDownloadButton />
          </div>
        </div>
      </section>
    </main>
  );
}
