"use client";

import { cn } from "@/lib/utils";

interface BombDropProps {
  progress: number;
  planeLeft: number;
  planeTop: number;
}

const DROP_AT = 0.52;
const IMPACT_AT = 0.66;
const EXPLOSION_END = 0.72;

function BombIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 48"
      className={cn("w-8 sm:w-10 h-auto drop-shadow-lg", className)}
      aria-hidden
    >
      <ellipse cx="16" cy="32" rx="11" ry="13" fill="#1c1f26" stroke="#4b5563" strokeWidth="0.8" />
      <path d="M10 20 Q16 14 22 20 L20 28 L12 28 Z" fill="#2d3748" stroke="#4b5563" strokeWidth="0.6" />
      <rect x="14" y="6" width="4" height="10" rx="1" fill="#374151" />
      <circle cx="16" cy="5" r="2.5" fill="hsl(var(--runway))" className="animate-fuse-spark" />
      <path d="M6 24 L2 28 M26 24 L30 28" stroke="#4b5563" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function Explosion({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)} aria-hidden>
      <div className="absolute inset-0 rounded-full bg-runway/60 blur-xl animate-explosion-flash" />
      <div className="absolute inset-2 rounded-full bg-orange-500/70 blur-md animate-explosion-core" />
      <div className="absolute inset-4 rounded-full bg-yellow-300/80 animate-explosion-core" />
      <div className="absolute inset-0 border-2 border-runway/40 rounded-full animate-explosion-ring" />
      <div className="absolute -inset-4 border border-orange-500/30 rounded-full animate-explosion-ring delay-100" />
    </div>
  );
}

export function BombDrop({ progress, planeLeft, planeTop }: BombDropProps) {
  const falling = progress >= DROP_AT && progress < IMPACT_AT;
  const impact = progress >= IMPACT_AT && progress < EXPLOSION_END;

  if (progress < DROP_AT || progress >= EXPLOSION_END) return null;

  const fallT = Math.min(1, (progress - DROP_AT) / (IMPACT_AT - DROP_AT));
  const easedFall = fallT * fallT;

  const startTop = planeTop + 6;
  const impactTop = 82;
  const bombTop = startTop + easedFall * (impactTop - startTop);
  const bombLeft = planeLeft + 2;
  const wobble = falling ? Math.sin(fallT * Math.PI * 6) * 3 : 0;

  return (
    <>
      {falling && (
        <div
          className="fixed z-[29] pointer-events-none"
          style={{
            left: `${bombLeft + wobble * 0.3}%`,
            top: `${bombTop}%`,
            transform: `translate(-50%, -50%) rotate(${15 + fallT * 40}deg)`,
          }}
          aria-hidden
        >
          <BombIcon />
          <div
            className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-runway/50 to-transparent"
            style={{ height: `${20 + fallT * 40}px` }}
          />
        </div>
      )}

      {impact && (
        <div
          className="fixed z-[28] pointer-events-none"
          style={{
            left: `${bombLeft}%`,
            top: `${impactTop}%`,
            transform: "translate(-50%, -50%)",
          }}
          aria-hidden
        >
          <Explosion className="w-32 sm:w-44 h-32 sm:h-44" />
          <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-runway/80 whitespace-nowrap">
            Target Acquired
          </p>
        </div>
      )}
    </>
  );
}

/** Numeric path point for bomb release coordinates */
export function getPathPoint(progress: number): { left: number; top: number } {
  const FLIGHT_PATH = [
    { p: 0, left: 3, top: 78 },
    { p: 0.18, left: 6, top: 74 },
    { p: 0.42, left: 38, top: 30 },
    { p: 0.72, left: 68, top: 20 },
    { p: 1, left: 78, top: 76 },
  ];

  let i = 0;
  while (i < FLIGHT_PATH.length - 1 && progress > FLIGHT_PATH[i + 1].p) i++;

  const from = FLIGHT_PATH[i];
  const to = FLIGHT_PATH[i + 1] ?? from;
  const span = to.p - from.p || 1;
  const t = Math.min(1, Math.max(0, (progress - from.p) / span));
  const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

  return {
    left: from.left + (to.left - from.left) * eased,
    top: from.top + (to.top - from.top) * eased,
  };
}
