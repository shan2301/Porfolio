"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { BombDrop, getPathPoint } from "./bomb-drop";

type FlightPhase = "hangar" | "takeoff" | "cruise" | "landing";

/** Align PNG nose with scroll flight path (anticlockwise +90° from base) */
const IMAGE_ROTATION_OFFSET = -42;

const phaseLabels: Record<FlightPhase, string> = {
  hangar: "Hangar · B-2 Pre-Flight",
  takeoff: "Runway · B-2 Take-Off",
  cruise: "Cruise · B-2 In Journey",
  landing: "Approach · B-2 Landing",
};

function getPhase(progress: number): FlightPhase {
  if (progress < 0.18) return "hangar";
  if (progress < 0.42) return "takeoff";
  if (progress < 0.72) return "cruise";
  return "landing";
}

/** Flight path keyframes: bottom-left → climb → cruise → land bottom-right */
const FLIGHT_PATH = [
  { p: 0, left: 3, top: 78, rotate: -10, scale: 0.75 },
  { p: 0.18, left: 6, top: 74, rotate: -18, scale: 0.76 },
  { p: 0.42, left: 38, top: 30, rotate: -32, scale: 0.88 },
  { p: 0.72, left: 68, top: 20, rotate: -15, scale: 0.92 },
  { p: 1, left: 78, top: 76, rotate: 12, scale: 0.78 },
];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function planeTransform(progress: number, phase: FlightPhase) {
  let i = 0;
  while (i < FLIGHT_PATH.length - 1 && progress > FLIGHT_PATH[i + 1].p) i++;

  const from = FLIGHT_PATH[i];
  const to = FLIGHT_PATH[i + 1] ?? from;
  const span = to.p - from.p || 1;
  const rawT = Math.min(1, Math.max(0, (progress - from.p) / span));
  const t = easeInOut(rawT);

  let top = lerp(from.top, to.top, t);

  /* Gentle bob during cruise */
  if (phase === "cruise") {
    const cruiseT = (progress - 0.42) / 0.3;
    top += Math.sin(cruiseT * Math.PI * 4) * 2;
  }

  return {
    left: `${lerp(from.left, to.left, t)}%`,
    top: `${top}%`,
    rotate: lerp(from.rotate, to.rotate, t),
    scale: lerp(from.scale, to.scale, t),
  };
}

function B2StealthBomberImage({ className }: { className?: string }) {
  return (
    <Image
      src="/images/stealthb12.png"
      alt=""
      width={400}
      height={400}
      priority
      className={cn("stealth-bomber-img w-36 sm:w-48 md:w-56 h-auto", className)}
      aria-hidden
    />
  );
}

export function FlightJourney() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<FlightPhase>("hangar");

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

  const transform = planeTransform(progress, phase);
  const rotation = transform.rotate + IMAGE_ROTATION_OFFSET;
  const dropPoint = getPathPoint(0.52);

  return (
    <>
      <BombDrop
        progress={progress}
        planeLeft={dropPoint.left}
        planeTop={dropPoint.top}
      />
      {/* Flight HUD */}
      <div className="fixed top-20 right-4 sm:right-8 z-40 pointer-events-none">
        <div className="hangar-panel px-4 py-3 text-xs sm:text-sm font-mono">
          <div className="text-runway/80 uppercase tracking-widest mb-1">
            Flight Status
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
        </div>
      </div>

      {/* Scroll-driven B-2 — stealthb12.png */}
      <div
        className="fixed z-30 pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: transform.left,
          top: transform.top,
          transform: `translate(-5%, -40%) rotate(${rotation}deg) scale(${transform.scale})`,
        }}
        aria-hidden
      >
        <div className="relative -scale-x-100">
          <B2StealthBomberImage
            className={cn(
              phase === "takeoff" && "animate-engine-thrust",
              phase === "cruise" && "animate-flight-bob",
              phase === "landing" && "animate-landing-flare"
            )}
          />

          {/* Exhaust plumes — trailing edge of bomber */}
          {(phase === "takeoff" || phase === "cruise") && (
            <div className="absolute top-[48%] left-[6%] -translate-y-1/2 flex flex-col gap-2 items-start pointer-events-none">
              <div
                className={cn(
                  "h-1 rounded-full bg-gradient-to-r from-runway/90 via-runway/35 to-transparent",
                  phase === "takeoff" ? "w-16 sm:w-24 animate-exhaust" : "w-10 sm:w-14 opacity-50"
                )}
              />
              <div
                className={cn(
                  "h-1 rounded-full bg-gradient-to-r from-runway via-runway/45 to-transparent",
                  phase === "takeoff" ? "w-20 sm:w-28 animate-exhaust" : "w-12 sm:w-16 opacity-60"
                )}
              />
              <div
                className={cn(
                  "h-1 rounded-full bg-gradient-to-r from-runway/90 via-runway/35 to-transparent",
                  phase === "takeoff" ? "w-16 sm:w-24 animate-exhaust" : "w-10 sm:w-14 opacity-50"
                )}
              />
            </div>
          )}

          {phase === "cruise" && progress >= 0.5 && progress < 0.54 && (
            <div className="absolute bottom-[18%] left-1/2 -translate-x-1/2 font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-runway animate-pulse-slow pointer-events-none whitespace-nowrap">
              Payload Away ↓
            </div>
          )}

          {phase === "landing" && (
            <div
              className="absolute left-1/2 w-20 h-1.5 bg-runway/40 blur-md animate-approach-flare pointer-events-none"
              style={{ bottom: "18%", transform: "translateX(-50%)" }}
            />
          )}
        </div>
      </div>

      {/* Phase-specific ambient layers */}
      <div
        className={cn(
          "fixed inset-0 pointer-events-none z-0 transition-opacity duration-700",
          phase === "hangar" ? "opacity-100" : "opacity-0"
        )}
        aria-hidden
      >
        <div className="hangar-beams" />
        <div className="hangar-floor" />
      </div>

      <div
        className={cn(
          "fixed inset-0 pointer-events-none z-0 transition-opacity duration-700",
          phase === "takeoff" ? "opacity-100" : "opacity-0"
        )}
        aria-hidden
      >
        <div className="runway-lights" />
      </div>

      <div
        className={cn(
          "fixed inset-0 pointer-events-none z-0 transition-opacity duration-700",
          phase === "cruise" ? "opacity-100" : "opacity-0"
        )}
        aria-hidden
      >
        <div className="cloud-layer cloud-1" />
        <div className="cloud-layer cloud-2" />
        <div className="cloud-layer cloud-3" />
      </div>

      <div
        className={cn(
          "fixed inset-0 pointer-events-none z-0 transition-opacity duration-700",
          phase === "landing" ? "opacity-100" : "opacity-0"
        )}
        aria-hidden
      >
        <div className="approach-lights" />
      </div>
    </>
  );
}
