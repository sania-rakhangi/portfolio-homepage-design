import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { uiuxProjects } from "@/lib/project-data";

export default function UiUxProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative pt-24 pb-20 bg-card/10">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-card/20 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
            <div>
              <span className="font-mono text-xs text-primary tracking-wider uppercase">
                Design Portfolio
              </span>
              <h1 className="mt-2 text-3xl sm:text-4xl font-heading font-bold text-foreground">
                UI/UX Work
              </h1>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                Product design case studies and interface systems that blend
                visual clarity with practical user flows.
              </p>
            </div>

            <Button
              asChild
              variant="outline"
              className="border-primary/40 hover:bg-primary/10"
            >
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {uiuxProjects.map((project) => (
              <Card
                key={project.title}
                className="group relative bg-background border-border overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
              >
                <CardContent className="p-6 flex gap-6">
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h2 className="text-lg font-heading font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h2>
                      <Badge
                        variant="outline"
                        className="shrink-0 border-primary/30 text-primary"
                      >
                        {project.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-1 text-xs font-mono bg-card text-muted-foreground rounded"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5">
                      <Button
                        asChild
                        variant="outline"
                        className="border-primary/40 hover:bg-primary/10"
                      >
                        <Link href={`/projects/${project.slug}`}>
                          Open Full Project Page
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
