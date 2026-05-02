"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "@/lib/project-data";

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-card/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-primary tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Featured Projects
          </h2>
          <div className="mt-4 w-16 h-1 bg-primary mx-auto rounded-full" />
          <div className="mt-6">
            <Button
              asChild
              variant="outline"
              className="border-primary/40 hover:bg-primary/10"
            >
              <Link href="/projects/featured">
                View Full Featured Projects Page
              </Link>
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.title}
              className="group relative bg-card border-border overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-linear-to-br from-card to-background overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="font-heading text-2xl font-bold text-primary">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Category badge */}
                <Badge className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm text-foreground border-border">
                  {project.category}
                </Badge>
                {/* Arrow icon */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <ArrowUpRight className="w-4 h-4 text-primary" />
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                {/* Tech Stack */}
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
                      View Project Details
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
