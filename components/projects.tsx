"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { type MouseEvent, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/portfolio-projects";

export function Projects() {
  const router = useRouter();
  const [openingSlug, setOpeningSlug] = useState<string | null>(null);

  const openProject = (
    event: MouseEvent<HTMLAnchorElement>,
    slug: string,
  ) => {
    event.preventDefault();
    setOpeningSlug(slug);
    window.setTimeout(() => router.push(`/projects/${slug}`), 520);
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-card/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-primary tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Projects
          </h2>
          <div className="mt-4 w-16 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Three selected projects, each linking to a dedicated case-study
            page.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              onClick={(event) => openProject(event, project.slug)}
              className="group relative block h-full [perspective:1200px]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-y-4 -right-5 w-10 rounded-r-md border-y border-r border-border bg-background shadow-lg shadow-black/10" />
              <div className="absolute inset-y-6 -right-8 w-10 rounded-r-md border-y border-r border-border bg-background/90 shadow-md" />
              <div className="absolute right-[-34px] top-10 bottom-10 w-12 overflow-hidden rounded-r-sm border-y border-r border-border bg-background">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent_0_8px,var(--border)_8px_9px)] opacity-80" />
                <div className="absolute inset-y-0 left-1 w-px bg-border" />
                <div className="absolute inset-y-0 left-3 w-px bg-border/70" />
                <div className="absolute inset-y-0 right-2 w-px bg-card" />
              </div>

              <article
                className={`relative h-full min-h-[460px] overflow-hidden rounded-r-lg rounded-l-sm border border-border bg-linear-to-br from-card via-background to-card shadow-xl shadow-black/5 transition-all duration-500 transform-gpu group-hover:border-primary/50 group-hover:shadow-2xl group-hover:shadow-primary/10 group-hover:[transform:rotateY(-5deg)_translateY(-8px)] ${
                  openingSlug === project.slug
                    ? "[transform:rotateY(-62deg)_translateX(-12px)] opacity-95"
                    : ""
                }`}
              >
                <div className="absolute inset-y-0 left-0 w-11 border-r border-primary/20 bg-linear-to-b from-primary/25 via-primary/10 to-primary/25 shadow-inner" />
                <div className="absolute inset-y-4 left-4 w-px bg-primary/40" />
                <div className="absolute inset-y-0 right-0 w-3 bg-linear-to-l from-background/80 to-transparent" />
                <div className="absolute inset-x-11 bottom-0 h-4 border-t border-border bg-background" />
                <div className="absolute -right-10 top-12 h-56 w-20 rounded-full bg-primary/10 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />

                <div className="relative z-10 flex min-h-[430px] flex-col p-7 pl-16">
                  <div className="flex items-start justify-between gap-4">
                    <Badge className="bg-background/80 text-foreground border-border">
                      {project.category}
                    </Badge>
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowUpRight className="w-4 h-4 text-primary" />
                    </div>
                  </div>

                  <div className="mt-8 overflow-hidden rounded-sm border border-primary/25 bg-background shadow-xl shadow-black/10">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={project.image}
                        alt={`${project.title} cover`}
                        fill
                        sizes="(min-width: 768px) 28vw, 100vw"
                        className="object-contain p-2 transition duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="flex items-center gap-2 border-t border-border px-3 py-2">
                      {project.icon ? (
                        <project.icon className="w-4 h-4 text-primary" />
                      ) : null}
                      <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        Cover image
                      </span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="font-mono text-xs uppercase tracking-wider text-primary">
                      {project.year} / {project.role}
                    </p>
                    <h3 className="mt-3 text-2xl font-heading font-bold leading-tight text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-muted-foreground line-clamp-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-8">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-mono bg-background/75 text-muted-foreground rounded border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="mt-5 text-sm font-medium text-primary">
                      Open project page
                    </p>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
