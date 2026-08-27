'use client';

import { GraduationCap, Briefcase } from "lucide-react";

interface TimelineItem {
  type: 'education' | 'experience';
  title: string;
  organization: string;
  location: string;
  period: string;
  description?: string;
}

interface ExperienceTimelineProps {
  items: TimelineItem[];
}

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-5 top-2 bottom-2 w-px bg-border" />

      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative flex gap-6 md:gap-8">
            <div className="relative z-10 flex-shrink-0">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border border-border bg-white shadow-sm ${
                  item.type === "education" ? "text-primary" : "text-foreground"
                }`}
              >
                {item.type === "education" ? (
                  <GraduationCap className="h-5 w-5" />
                ) : (
                  <Briefcase className="h-5 w-5" />
                )}
              </div>
            </div>

            <div className="flex-1 surface-panel rounded-md p-6 md:p-8 hover:bg-white transition-colors">
              <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                {item.period}
              </div>
              <h3 className="font-headline text-xl md:text-2xl font-semibold tracking-tight mb-1">
                {item.title}
              </h3>
              <p className="text-primary font-medium mb-0.5">{item.organization}</p>
              <p className="text-sm text-muted-foreground mb-3">{item.location}</p>
              {item.description && (
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
