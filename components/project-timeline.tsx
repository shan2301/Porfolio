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
  'Analysis': <Search className="h-5 w-5" />,
  'Discovery': <Search className="h-5 w-5" />,
  'Design': <Palette className="h-5 w-5" />,
  'Development': <Code className="h-5 w-5" />,
  'Testing': <TestTube className="h-5 w-5" />,
  'Deployment': <Rocket className="h-5 w-5" />,
  'Requirements': <FileText className="h-5 w-5" />,
  'Integration': <Database className="h-5 w-5" />,
  'UAT': <CheckCircle2 className="h-5 w-5" />,
  'Rollout': <Rocket className="h-5 w-5" />,
  'Planning': <FileText className="h-5 w-5" />,
  'Data Migration': <Database className="h-5 w-5" />,
  'AI Integration': <Zap className="h-5 w-5" />,
  'Optimization': <Zap className="h-5 w-5" />,
  'Scope Definition': <FileText className="h-5 w-5" />,
  'Architecture Design': <Palette className="h-5 w-5" />,
};

function getIconForPhase(title: string): React.ReactNode {
  for (const [key, icon] of Object.entries(phaseIcons)) {
    if (title.includes(key)) {
      return icon;
    }
  }
  return <Code className="h-5 w-5" />;
}

interface ProjectTimelineProps {
  phases: TimelinePhase[];
  screenshots?: Record<string, string[]>;
}

export function ProjectTimeline({ phases, screenshots = {} }: ProjectTimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-primary/20" />
      
      <div className="space-y-12">
        {phases.map((phase, index) => {
          const phaseScreenshots = screenshots[phase.week] || [];
          
          return (
            <div key={index} className="relative flex gap-8">
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary border-2 border-white flex items-center justify-center shadow-lg shadow-primary/20">
                  <div className="text-white">
                    {getIconForPhase(phase.title)}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 pb-8">
                <div className="bg-white border border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 rounded-none p-8">
                  <div className="mb-4">
                    <div className="text-sm font-medium text-primary/70 uppercase tracking-wide mb-2">
                      {phase.week}
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight text-foreground mb-3">
                      {phase.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {phase.description}
                  </p>
                  
                  {phaseScreenshots.length > 0 && (
                    <div className="mt-6">
                      <Carousel images={phaseScreenshots} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

