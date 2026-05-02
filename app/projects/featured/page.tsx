import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/lib/project-data";

export default function FeaturedProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative pt-24 pb-20">
        <div className="absolute inset-0 bg-linear-to-b from-card/40 via-transparent to-background" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
            <div>
              <span className="font-mono text-xs text-primary tracking-wider uppercase">
                Project Collection
              </span>
              <h1 className="mt-2 text-3xl sm:text-4xl font-heading font-bold text-foreground">
                Featured Projects
              </h1>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                A deeper look at selected engineering projects with a focus on
                architecture, reliability, and user impact.
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Card
                key={project.title}
                className="group relative bg-card border-border overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2"
              >
                <div className="relative h-52 bg-linear-to-br from-card to-background overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="font-heading text-3xl font-bold text-primary">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm text-foreground border-border">
                    {project.category}
                  </Badge>
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ArrowUpRight className="w-4 h-4 text-primary" />
                  </div>
                </div>

                <CardContent className="p-6">
                  <h2 className="text-xl font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono bg-background text-muted-foreground rounded border border-border"
                      >
                        {tech}
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
