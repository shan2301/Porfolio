import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CVDownloadButton } from "@/components/cv-download-button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-[100dvh] pt-16">
      {/* Full-bleed hero: brand + headline + line + CTAs + dominant portrait */}
      <section className="relative min-h-[calc(100dvh-4rem)] grid lg:grid-cols-2 overflow-hidden">
        {/* Copy plane */}
        <div className="relative z-10 flex flex-col justify-center px-5 sm:px-10 lg:px-14 xl:px-20 py-16 lg:py-24 order-2 lg:order-1">
          <p className="font-headline text-sm sm:text-base font-semibold tracking-[0.18em] uppercase text-primary mb-6 animate-reveal-up">
            Shashank Sundar
          </p>

          <h1 className="font-headline text-[clamp(2.75rem,7vw,5.75rem)] font-semibold leading-[0.98] text-balance mb-6 animate-reveal-up delay-100">
            Power Platform
            <span className="block text-primary">Developer</span>
          </h1>

          <p className="max-w-xl text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 animate-reveal-up delay-200">
            Enterprise apps, SharePoint, automation, and Power BI for clients
            across the USA, UK, Canada, and Japan — 5+ years of delivery.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 animate-reveal-up delay-300">
            <Link href="/projects">
              <Button
                size="lg"
                className="h-12 px-7 text-base font-semibold rounded-md shadow-none gap-2"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-7 text-base font-semibold rounded-md border-foreground/15 bg-white/50 hover:bg-white hover:border-primary/40"
              >
                About Me
              </Button>
            </Link>
            <CVDownloadButton />
          </div>
        </div>

        {/* Dominant full-bleed portrait */}
        <div className="relative min-h-[48vh] lg:min-h-full order-1 lg:order-2 animate-image-settle">
          <Image
            src="/images/profileimg.jpeg"
            alt="Shashank Sundar"
            fill
            priority
            className="object-cover object-[center_20%]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[hsl(198_28%_97%)] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[hsl(198_28%_97%)] lg:via-[hsl(198_28%_97%/0.15)] lg:to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-multiply"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
            aria-hidden
          />
        </div>
      </section>
    </main>
  );
}
