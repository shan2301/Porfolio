"use client";

import {
  LayoutGrid,
  Workflow,
  Globe,
  BarChart3,
  Database,
  Cloud,
  Atom,
  Code2,
  Layers,
  Share2,
  Building2,
  Boxes,
  Bot,
  Table,
  GitBranch,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { skillTools } from "@/lib/portfolio-data";

const iconMap: Record<string, LucideIcon> = {
  LayoutGrid,
  Workflow,
  Globe,
  BarChart3,
  Database,
  Cloud,
  Atom,
  Code2,
  Layers,
  Share2,
  Building2,
  Boxes,
  Bot,
  Table,
  GitBranch,
  Sparkles,
};

export function SkillOrbit() {
  return (
    <div className="relative min-h-[420px] sm:min-h-[520px] flex items-center justify-center mx-auto max-w-3xl">
      <div className="absolute z-10 w-28 h-28 sm:w-36 sm:h-36 rounded-full hangar-panel flex flex-col items-center justify-center animate-hub-pulse">
        <span className="text-runway text-xs uppercase tracking-widest font-mono">
          Tech Stack
        </span>
        <span className="font-headline text-2xl sm:text-3xl font-bold text-sky-glow mt-1">
          16+
        </span>
        <span className="text-steel-light text-xs">Tools</span>
      </div>

      <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-runway/20 animate-orbit-spin-slow" />
      <div className="absolute w-[22rem] h-[22rem] sm:w-[32rem] sm:h-[32rem] rounded-full border border-steel-light/10 animate-orbit-spin-reverse" />

      {skillTools.map((tool, i) => {
        const Icon = iconMap[tool.icon] ?? Sparkles;
        const angle = (i / skillTools.length) * 360;
        const radius = i % 2 === 0 ? 130 : 185;

        return (
          <div
            key={tool.name}
            className="absolute skill-orbit-item opacity-0 animate-orbit-appear"
            style={{
              ["--orbit-angle" as string]: `${angle}deg`,
              ["--orbit-radius" as string]: `${radius}px`,
              animationDelay: `${0.3 + i * 0.08}s`,
            }}
          >
            <div
              className="skill-badge group cursor-default"
              style={{ ["--tool-color" as string]: tool.color }}
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-125 group-hover:rotate-12" />
              <span className="text-[10px] sm:text-xs font-medium whitespace-nowrap">
                {tool.name}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
