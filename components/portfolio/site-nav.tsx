"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#hangar", label: "Hangar" },
  { href: "#takeoff", label: "Brief" },
  { href: "#cruise", label: "Skills" },
  { href: "#mission", label: "Missions" },
  { href: "#landing", label: "Contact" },
];

export function SiteNav() {
  const [active, setActive] = useState("hangar");

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-hangar/85 backdrop-blur-xl">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 flex h-16 items-center justify-between">
        <a
          href="#hangar"
          className="font-headline text-base sm:text-lg font-semibold tracking-tight text-foreground hover:text-runway transition-colors"
        >
          SS<span className="text-runway">.</span>Hangar
        </a>
        <div className="flex items-center gap-4 sm:gap-6">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-xs sm:text-sm font-medium transition-colors hidden sm:block",
                  active === id
                    ? "text-runway"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </a>
            );
          })}
          <a href="#landing" className="btn-runway text-xs px-4 py-2 sm:hidden">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
