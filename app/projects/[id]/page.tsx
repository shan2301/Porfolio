import { notFound } from "next/navigation";
import { getProjectById } from "@/lib/projects";
import { ProjectTimeline } from "@/components/project-timeline";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ProjectDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-16">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 py-16 md:py-24">
        <div className="mb-10">
          <Link href="/projects">
            <Button
              variant="ghost"
              className="mb-6 text-muted-foreground hover:text-primary rounded-md px-0 hover:bg-transparent"
            >
              ← Back to Projects
            </Button>
          </Link>
        </div>

        <header className="mb-14 md:mb-20 max-w-4xl animate-reveal-up">
          <p className="text-sm font-semibold tracking-[0.18em] uppercase text-primary mb-4">
            Case study
          </p>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-primary font-medium mb-8">
            {project.client}
          </p>

          <div className="flex flex-wrap gap-8 mb-8">
            <div>
              <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-1">
                Role
              </span>
              <p className="text-base font-medium text-foreground">{project.role}</p>
            </div>
            <div>
              <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-1">
                Duration
              </span>
              <p className="text-base font-medium text-foreground">{project.duration}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="font-normal text-xs bg-secondary text-secondary-foreground border-0 rounded-md px-2.5 py-1"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-24">
          <div className="surface-panel rounded-md p-6 md:p-8">
            <h2 className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
              Problem
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              {project.problem}
            </p>
          </div>
          <div className="surface-panel rounded-md p-6 md:p-8">
            <h2 className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
              Solution
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              {project.solution}
            </p>
          </div>
        </div>

        <section className="mb-16 md:mb-24">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold tracking-tight mb-10">
            Timeline Highlights
          </h2>
          <ProjectTimeline phases={project.timeline} />
        </section>

        <section className="rounded-md bg-primary text-primary-foreground p-8 md:p-12">
          <h2 className="font-headline text-2xl md:text-3xl font-semibold mb-6 flex items-center gap-3">
            <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
            Impact & Outcomes
          </h2>
          <ul className="space-y-4">
            {project.impact.map((impact) => (
              <li key={impact} className="flex items-start gap-3 text-base md:text-lg">
                <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0 opacity-90" />
                <span>{impact}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
