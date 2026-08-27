import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white pt-16">
      <div className="max-w-[1440px] mx-auto px-8 py-20">
        <div className="mb-20">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-foreground mb-6">
            Projects
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
            Enterprise Power Platform and Microsoft 365 solutions for clients across the USA, UK, Canada and Japan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 bg-white rounded-none shadow-sm flex flex-col h-full"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-2">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base text-primary font-medium">
                  {project.client}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 flex-grow">
                <div>
                  <h4 className="font-semibold mb-2 text-primary text-sm uppercase tracking-wide">Problem</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-primary text-sm uppercase tracking-wide">Solution</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-primary text-sm uppercase tracking-wide">My Role</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.role}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-primary text-sm uppercase tracking-wide">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="font-normal text-xs bg-primary/10 text-primary border-0 rounded-none px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-primary text-sm uppercase tracking-wide">Impact</h4>
                  <ul className="list-none space-y-2 text-sm text-muted-foreground">
                    {project.impact.map((impact, impactIndex) => (
                      <li key={impactIndex} className="leading-relaxed">• {impact}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="pt-6 mt-auto">
                <Link href={`/projects/${project.id}`} className="w-full">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 rounded-none border-0 font-medium shadow-md shadow-primary/20">
                    View Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}

