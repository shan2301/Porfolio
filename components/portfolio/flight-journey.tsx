"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type FlightPhase = "pad" | "ascent" | "transit" | "moon" | "return" | "landing";

const phaseLabels: Record<FlightPhase, string> = {
  pad: "Launch Pad · Pre-Flight",
  ascent: "Liftoff · Ascent",
  transit: "Transit · Coast to Moon",
  moon: "Lunar Orbit · Touchdown",
  return: "TEI · Return to Earth",
  landing: "Boostback · Landing",
};

function getPhase(progress: number): FlightPhase {
  if (progress < 0.12) return "pad";
  if (progress < 0.32) return "ascent";
  if (progress < 0.48) return "transit";
  if (progress < 0.58) return "moon";
  if (progress < 0.82) return "return";
  return "landing";
}

/**
 * SpaceX-style arc:
 * bottom-left pad → climb → moon (top-right) → arc back → land bottom-right
 */
const FLIGHT_PATH = [
  { p: 0, left: 8, top: 78, rotate: 0, scale: 0.85 },
  { p: 0.12, left: 10, top: 72, rotate: -4, scale: 0.88 },
  { p: 0.32, left: 28, top: 28, rotate: -18, scale: 0.95 },
  { p: 0.48, left: 62, top: 14, rotate: -8, scale: 0.9 },
  { p: 0.55, left: 78, top: 12, rotate: 0, scale: 0.82 },
  { p: 0.58, left: 80, top: 14, rotate: 8, scale: 0.8 },
  { p: 0.72, left: 58, top: 32, rotate: 22, scale: 0.9 },
  { p: 0.88, left: 72, top: 62, rotate: 8, scale: 0.88 },
  { p: 1, left: 82, top: 76, rotate: 0, scale: 0.82 },
];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function rocketTransform(progress: number, phase: FlightPhase) {
  let i = 0;
  while (i < FLIGHT_PATH.length - 1 && progress > FLIGHT_PATH[i + 1].p) i++;

  const from = FLIGHT_PATH[i];
  const to = FLIGHT_PATH[i + 1] ?? from;
  const span = to.p - from.p || 1;
  const rawT = Math.min(1, Math.max(0, (progress - from.p) / span));
  const t = easeInOut(rawT);

  let top = lerp(from.top, to.top, t);
  let left = lerp(from.left, to.left, t);
  let rotate = lerp(from.rotate, to.rotate, t);

  if (phase === "transit" || phase === "return") {
    const bob = Math.sin(progress * Math.PI * 8) * 1.2;
    top += bob;
  }

  if (phase === "moon") {
    rotate += Math.sin(progress * 40) * 2;
  }

  return {
    left: `${left}%`,
    top: `${top}%`,
    rotate,
    scale: lerp(from.scale, to.scale, t),
  };
}

function FalconRocket({
  className,
  thrusting,
}: {
  className?: string;
  thrusting?: boolean;
}) {
  return (
    <div className={cn("relative flex flex-col items-center", className)}>
      <svg
        viewBox="0 0 48 160"
        className="w-10 sm:w-12 md:w-14 h-auto drop-shadow-[0_12px_28px_rgba(0,0,0,0.65)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="rocket-body" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e8eaef" />
            <stop offset="45%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#c5cad3" />
          </linearGradient>
          <linearGradient id="rocket-fairing" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#d7dbe3" />
          </linearGradient>
        </defs>

        {/* Nose cone / fairing */}
        <path
          d="M24 4 C18 18, 16 28, 16 36 L32 36 C32 28, 30 18, 24 4 Z"
          fill="url(#rocket-fairing)"
          stroke="#9aa3b2"
          strokeWidth="0.6"
        />

        {/* Upper stage */}
        <rect x="16" y="36" width="16" height="28" fill="url(#rocket-body)" stroke="#9aa3b2" strokeWidth="0.5" />
        <rect x="17" y="48" width="14" height="3" fill="#111827" opacity="0.85" />

        {/* Interstage */}
        <rect x="15.5" y="64" width="17" height="6" fill="#94a3b8" stroke="#64748b" strokeWidth="0.4" />

        {/* First stage / booster */}
        <rect x="15" y="70" width="18" height="62" rx="1" fill="url(#rocket-body)" stroke="#9aa3b2" strokeWidth="0.5" />
        <rect x="16.5" y="92" width="15" height="4" fill="#0f172a" opacity="0.9" />
        <text
          x="24"
          y="108"
          textAnchor="middle"
          fill="#0f172a"
          fontSize="5"
          fontFamily="ui-monospace, monospace"
          fontWeight="700"
          opacity="0.55"
        >
          SS
        </text>

        {/* Grid fins */}
        <rect x="8" y="74" width="6" height="10" rx="0.5" fill="#64748b" />
        <rect x="34" y="74" width="6" height="10" rx="0.5" fill="#64748b" />

        {/* Landing legs (folded look) */}
        <path d="M15 128 L8 142" stroke="#94a3b8" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M33 128 L40 142" stroke="#94a3b8" strokeWidth="1.4" strokeLinecap="round" />

        {/* Engine bells */}
        <path d="M18 132 L16 148 L20 148 Z" fill="#475569" />
        <path d="M22 132 L20.5 150 L27.5 150 L26 132 Z" fill="#334155" />
        <path d="M30 132 L28 148 L32 148 Z" fill="#475569" />
      </svg>

      {/* Exhaust plume */}
      {thrusting && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 flex flex-col items-center">
          <div className="w-3 sm:w-4 h-10 sm:h-14 rounded-full bg-gradient-to-b from-sky-glow via-runway to-transparent blur-[1px] animate-rocket-plume" />
          <div className="absolute top-0 w-5 sm:w-6 h-8 sm:h-10 rounded-full bg-gradient-to-b from-white via-runway/80 to-transparent blur-sm opacity-80 animate-rocket-plume-core" />
          <div className="absolute top-6 w-8 sm:w-10 h-10 rounded-full bg-runway/30 blur-md animate-rocket-haze" />
        </div>
      )}
    </div>
  );
}

function Moon({ visible }: { visible: boolean }) {
  return (
    <div
      className={cn(
        "fixed z-20 pointer-events-none transition-all duration-700",
        visible ? "opacity-100 scale-100" : "opacity-40 scale-90"
      )}
      style={{ right: "4%", top: "8%" }}
      aria-hidden
    >
      <div className="relative w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48">
        <div className="absolute -inset-6 rounded-full bg-steel-light/10 blur-2xl animate-moon-glow" />
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_40px_rgba(226,232,240,0.25)]">
          <defs>
            <radialGradient id="moon-fill" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="55%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#64748b" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="92" fill="url(#moon-fill)" />
          <circle cx="70" cy="75" r="18" fill="#94a3b8" opacity="0.35" />
          <circle cx="120" cy="110" r="28" fill="#64748b" opacity="0.28" />
          <circle cx="95" cy="140" r="12" fill="#94a3b8" opacity="0.3" />
          <circle cx="140" cy="70" r="10" fill="#64748b" opacity="0.25" />
          <circle cx="55" cy="120" r="8" fill="#94a3b8" opacity="0.25" />
        </svg>
        {visible && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-sky-glow/90 whitespace-nowrap">
            Lunar LZ
          </div>
        )}
      </div>
    </div>
  );
}

function Starfield({ visible }: { visible: boolean }) {
  return (
    <div
      className={cn(
        "fixed inset-0 pointer-events-none z-0 transition-opacity duration-700",
        visible ? "opacity-100" : "opacity-0"
      )}
      aria-hidden
    >
      <div className="starfield" />
    </div>
  );
}

export function FlightJourney() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<FlightPhase>("pad");

  useEffect(() => {
    const onScroll = () => {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const p = docHeight > 0 ? window.scrollY / docHeight : 0;
      const clamped = Math.min(1, Math.max(0, p));
      setProgress(clamped);
      setPhase(getPhase(clamped));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transform = rocketTransform(progress, phase);
  const thrusting =
    phase === "ascent" ||
    phase === "transit" ||
    phase === "return" ||
    phase === "landing" ||
    (phase === "pad" && progress > 0.04);
  const showMoon = phase === "transit" || phase === "moon" || phase === "return";
  const moonLanding = phase === "moon";
  const showStars =
    phase === "ascent" ||
    phase === "transit" ||
    phase === "moon" ||
    phase === "return";

  return (
    <>
      {/* Mission HUD */}
      <div className="fixed top-20 right-4 sm:right-8 z-40 pointer-events-none">
        <div className="hangar-panel px-4 py-3 text-xs sm:text-sm font-mono">
          <div className="text-runway/80 uppercase tracking-widest mb-1">
            Mission Status
          </div>
          <div className="text-sky-glow font-semibold animate-pulse-slow">
            {phaseLabels[phase]}
          </div>
          <div className="mt-2 h-1 w-24 bg-steel rounded-full overflow-hidden">
            <div
              className="h-full bg-runway transition-all duration-150"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
          <div className="mt-2 text-[10px] text-muted-foreground uppercase tracking-wider">
            {Math.round(progress * 100)}% · Earth ↔ Moon
          </div>
        </div>
      </div>

      <Starfield visible={showStars} />
      <Moon visible={showMoon} />

      {/* Scroll-driven Falcon-style rocket */}
      <div
        className="fixed z-30 pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: transform.left,
          top: transform.top,
          transform: `translate(-50%, -50%) rotate(${transform.rotate}deg) scale(${transform.scale})`,
        }}
        aria-hidden
      >
        <FalconRocket
          thrusting={thrusting}
          className={cn(
            phase === "ascent" && "animate-engine-thrust",
            (phase === "transit" || phase === "return") && "animate-flight-bob",
            phase === "landing" && "animate-landing-flare"
          )}
        />

        {moonLanding && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-sky-glow whitespace-nowrap animate-pulse-slow">
            Lunar Touchdown
          </div>
        )}

        {phase === "landing" && progress > 0.9 && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-runway whitespace-nowrap animate-pulse-slow">
            Legs Deployed · Soft Landing
          </div>
        )}
      </div>

      {/* Ambient phase layers */}
      <div
        className={cn(
          "fixed inset-0 pointer-events-none z-0 transition-opacity duration-700",
          phase === "pad" ? "opacity-100" : "opacity-0"
        )}
        aria-hidden
      >
        <div className="hangar-beams" />
        <div className="launch-pad" />
      </div>

      <div
        className={cn(
          "fixed inset-0 pointer-events-none z-0 transition-opacity duration-700",
          phase === "ascent" ? "opacity-100" : "opacity-0"
        )}
        aria-hidden
      >
        <div className="liftoff-plume" />
      </div>

      <div
        className={cn(
          "fixed inset-0 pointer-events-none z-0 transition-opacity duration-700",
          phase === "landing" ? "opacity-100" : "opacity-0"
        )}
        aria-hidden
      >
        <div className="landing-zone" />
      </div>
    </>
  );
}
