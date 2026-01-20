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
      {/* Vertical line */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-primary/20" />
      
      <div className="space-y-12">
        {items.map((item, index) => (
          <div key={index} className="relative flex gap-8">
            {/* Timeline icon */}
            <div className="relative z-10 flex-shrink-0">
              <div className={`w-12 h-12 rounded-full border-2 border-white flex items-center justify-center shadow-lg shadow-primary/20 ${
                item.type === 'education' ? 'bg-primary' : 'bg-primary/90'
              }`}>
                {item.type === 'education' ? (
                  <GraduationCap className="h-6 w-6 text-white" />
                ) : (
                  <Briefcase className="h-6 w-6 text-white" />
                )}
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 pb-8">
              <div className="bg-white border border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 rounded-none p-8">
                <div className="mb-3">
                  <div className="text-sm font-medium text-primary/70 uppercase tracking-wide mb-2">
                    {item.period}
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-lg text-primary font-medium mb-1">
                    {item.organization}
                  </p>
                  <p className="text-base text-muted-foreground">
                    {item.location}
                  </p>
                  {item.description && (
                    <p className="text-muted-foreground leading-relaxed mt-3">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

