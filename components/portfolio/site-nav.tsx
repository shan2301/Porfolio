"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#hangar", label: "Home" },
  { href: "#takeoff", label: "Profile" },
  { href: "#cruise", label: "Expertise" },
  { href: "#mission", label: "Work" },
  { href: "#landing", label: "Contact" },
];

export function SiteNav() {
  const [active, setActive] = useState("hangar");
  const [scrolled, setScrolled] = useState(false);

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

    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/80 bg-white/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 flex h-[4.25rem] items-center justify-between">
        <a
          href="#hangar"
          className="font-headline text-xl sm:text-2xl tracking-tight text-foreground hover:text-runway transition-colors"
        >
          Shashank <span className="text-runway">Sundar</span>
        </a>
        <div className="flex items-center gap-7 sm:gap-9">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] transition-colors hidden sm:block",
                  active === id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </a>
            );
          })}
          <a href="#landing" className="btn-runway text-[11px] px-4 py-2 sm:hidden">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
