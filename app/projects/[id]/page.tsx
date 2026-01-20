import { notFound } from "next/navigation";
import { getProjectById } from "@/lib/projects";
import { ProjectTimeline } from "@/components/project-timeline";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <main className="min-h-screen bg-white pt-16">
      <div className="max-w-[1440px] mx-auto px-8 py-20">
        {/* Back Button */}
        <div className="mb-12">
          <Link href="/projects">
            <Button variant="ghost" className="mb-4 text-muted-foreground hover:text-primary rounded-none border-0 px-0">
              ← Back to Projects
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground mb-6">
            {project.title}
          </h1>
          <p className="text-2xl md:text-3xl text-primary mb-8 font-medium">
            {project.client}
          </p>
          
          <div className="flex flex-wrap gap-8 mb-8">
            <div>
              <span className="text-sm text-primary/70 uppercase tracking-wide block mb-1">Your Role</span>
              <p className="text-lg font-medium text-foreground">{project.role}</p>
            </div>
            <div>
              <span className="text-sm text-primary/70 uppercase tracking-wide block mb-1">Duration</span>
              <p className="text-lg font-medium text-foreground">{project.duration}</p>
            </div>
          </div>

          <div>
            <span className="text-sm text-primary/70 uppercase tracking-wide block mb-3">Tech Stack</span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <Badge key={index} variant="secondary" className="font-normal text-xs bg-primary/10 text-primary border-0 rounded-none px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Problem & Solution */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <Card className="border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 rounded-none shadow-sm bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-primary uppercase tracking-wide">Problem</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
            </CardContent>
          </Card>
          <Card className="border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 rounded-none shadow-sm bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-primary uppercase tracking-wide">Solution</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-12">Timeline Highlights</h2>
          <ProjectTimeline phases={project.timeline} />
        </div>

        {/* Outcome Box */}
        <Card className="bg-primary text-primary-foreground rounded-none border-0 shadow-xl shadow-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl font-semibold">
              <CheckCircle2 className="h-6 w-6" />
              Impact & Outcomes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {project.impact.map((impact, index) => (
                <li key={index} className="flex items-start gap-3 text-lg">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>{impact}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

