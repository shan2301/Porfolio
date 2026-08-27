'use client';

import { TimelinePhase } from "@/lib/projects";
import { Carousel } from "@/components/ui/carousel";
import { 
  Search, 
  Palette, 
  Code, 
  TestTube, 
  Rocket, 
  CheckCircle2,
  FileText,
  Database,
  Zap
} from "lucide-react";

const phaseIcons: Record<string, React.ReactNode> = {
  'Analysis': <Search className="h-4 w-4" />,
  'Discovery': <Search className="h-4 w-4" />,
  'Design': <Palette className="h-4 w-4" />,
  'Development': <Code className="h-4 w-4" />,
  'Testing': <TestTube className="h-4 w-4" />,
  'Deployment': <Rocket className="h-4 w-4" />,
  'Requirements': <FileText className="h-4 w-4" />,
  'Integration': <Database className="h-4 w-4" />,
  'UAT': <CheckCircle2 className="h-4 w-4" />,
  'Rollout': <Rocket className="h-4 w-4" />,
  'Planning': <FileText className="h-4 w-4" />,
  'Data Migration': <Database className="h-4 w-4" />,
  'AI Integration': <Zap className="h-4 w-4" />,
  'Optimization': <Zap className="h-4 w-4" />,
  'Scope Definition': <FileText className="h-4 w-4" />,
  'Architecture Design': <Palette className="h-4 w-4" />,
};

function getIconForPhase(title: string): React.ReactNode {
  for (const [key, icon] of Object.entries(phaseIcons)) {
    if (title.includes(key)) {
      return icon;
    }
  }
  return <Code className="h-4 w-4" />;
}

interface ProjectTimelineProps {
  phases: TimelinePhase[];
  screenshots?: Record<string, string[]>;
}

export function ProjectTimeline({ phases, screenshots = {} }: ProjectTimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-5 top-2 bottom-2 w-px bg-border" />

      <div className="space-y-8">
        {phases.map((phase, index) => {
          const phaseScreenshots = screenshots[phase.week] || [];

          return (
            <div key={index} className="relative flex gap-6 md:gap-8">
              <div className="relative z-10 flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-sm">
                  {getIconForPhase(phase.title)}
                </div>
              </div>

              <div className="flex-1 surface-panel rounded-md p-6 md:p-8 hover:bg-white transition-colors">
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  {phase.week}
                </div>
                <h3 className="font-headline text-xl md:text-2xl font-semibold tracking-tight mb-3">
                  {phase.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {phase.description}
                </p>

                {phaseScreenshots.length > 0 && (
                  <div className="mt-6">
                    <Carousel images={phaseScreenshots} />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
