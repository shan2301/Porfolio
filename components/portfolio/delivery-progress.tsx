"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Stage = {
  id: string;
  index: string;
  label: string;
  caption: string;
};

const stages: Stage[] = [
  {
    id: "hangar",
    index: "01",
    label: "Brief",
    caption: "Introduction",
  },
  {
    id: "takeoff",
    index: "02",
    label: "Profile",
    caption: "Background & tenure",
  },
  {
    id: "cruise",
    index: "03",
    label: "Expertise",
    caption: "Capabilities",
  },
  {
    id: "mission",
    index: "04",
    label: "Work",
    caption: "Selected engagements",
  },
  {
    id: "landing",
    index: "05",
    label: "Contact",
    caption: "Next conversation",
  },
];

function clamp(n: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, n));
}

export function DeliveryProgress() {
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState(stages[0].id);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? clamp(window.scrollY / max) : 0);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-42% 0px -48% 0px", threshold: 0 }
    );

    stages.forEach((stage) => {
      const el = document.getElementById(stage.id);
      if (el) observer.observe(el);
    });

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const active = stages.find((s) => s.id === activeId) ?? stages[0];
  const activeIndex = stages.findIndex((s) => s.id === activeId);

  return (
    <>
      {/* Desktop: vertical engagement spine */}
      <aside
        className="pointer-events-none fixed right-5 xl:right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-0"
        aria-hidden
      >
        <div className="relative h-[min(52vh,420px)] w-px bg-border/80">
          <div
            className="absolute left-0 top-0 w-px bg-runway origin-top transition-[height] duration-150 ease-out"
            style={{ height: `${progress * 100}%` }}
          />

          {stages.map((stage, i) => {
            const top = (i / (stages.length - 1)) * 100;
            const reached = progress >= i / (stages.length - 1) - 0.02;
            const isActive = stage.id === activeId;

            return (
              <div
                key={stage.id}
                className="absolute right-0 -translate-y-1/2 flex items-center gap-3"
                style={{ top: `${top}%` }}
              >
                <div
                  className={cn(
                    "text-right transition-all duration-300",
                    isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
                  )}
                >
                  <p className="font-headline text-sm text-foreground leading-none">
                    {stage.label}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground mt-1">
                    {stage.caption}
                  </p>
                </div>
                <span
                  className={cn(
                    "block w-2 h-2 rotate-45 border transition-all duration-300",
                    isActive
                      ? "bg-runway border-runway scale-125 shadow-[0_0_0_4px_hsla(36,42%,55%,0.15)]"
                      : reached
                        ? "bg-runway/70 border-runway/70"
                        : "bg-background border-border"
                  )}
                />
              </div>
            );
          })}

          {/* Travelling marker */}
          <span
            className="absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 -ml-px rotate-45 bg-runway shadow-[0_4px_14px_hsla(36,42%,45%,0.35)] transition-[top] duration-150 ease-out"
            style={{ top: `calc(${progress * 100}% - 5px)` }}
          />
        </div>
      </aside>

      {/* Compact status plaque */}
      <div className="pointer-events-none fixed bottom-5 left-5 sm:bottom-8 sm:left-8 z-40">
        <div className="hangar-panel px-4 py-3 min-w-[11.5rem] shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
          <div className="flex items-center justify-between gap-6 mb-2">
            <span className="section-label">Progress</span>
            <span className="font-headline text-sm text-runway tabular-nums">
              {String(Math.round(progress * 100)).padStart(2, "0")}%
            </span>
          </div>
          <div className="h-px w-full bg-border overflow-hidden mb-3">
            <div
              className="h-full bg-runway transition-[width] duration-150 ease-out"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
          <p className="font-headline text-base leading-none text-foreground">
            {active.label}
          </p>
          <p className="text-[11px] text-muted-foreground mt-1.5 tracking-wide">
            {active.index} · {active.caption}
          </p>
          <div className="mt-3 flex gap-1">
            {stages.map((stage, i) => (
              <span
                key={stage.id}
                className={cn(
                  "h-0.5 flex-1 transition-colors duration-300",
                  i <= activeIndex ? "bg-runway" : "bg-border"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
