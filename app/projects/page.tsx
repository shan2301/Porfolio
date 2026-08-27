import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-16">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 py-16 md:py-24">
        <div className="mb-14 md:mb-20 max-w-3xl animate-reveal-up">
          <p className="text-sm font-semibold tracking-[0.18em] uppercase text-primary mb-4">
            Selected work
          </p>
          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-5">
            Projects
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Enterprise Power Platform and Microsoft 365 solutions for clients
            across the USA, UK, Canada and Japan.
          </p>
        </div>

        <div className="space-y-0 border-t border-border/80">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group grid md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 border-b border-border/80 hover:bg-white/50 transition-colors -mx-5 px-5 sm:-mx-8 sm:px-8"
            >
              <div className="md:col-span-1 font-headline text-sm text-primary/70 tabular-nums pt-1">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="md:col-span-5">
                <h2 className="font-headline text-2xl md:text-3xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors mb-2">
                  {project.title}
                </h2>
                <p className="text-primary font-medium mb-4">{project.client}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="font-normal text-xs bg-secondary text-secondary-foreground border-0 rounded-md px-2.5 py-1"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="md:col-span-5 flex flex-col justify-center">
                <p className="text-sm uppercase tracking-wider text-primary/80 font-semibold mb-2">
                  Outcome
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {project.impact[0]}
                </p>
              </div>
              <div className="md:col-span-1 flex md:justify-end items-center">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/60 text-foreground group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
