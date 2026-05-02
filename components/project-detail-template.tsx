import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { type ProjectDetail } from "@/lib/project-data";

type ProjectDetailTemplateProps = {
  project: ProjectDetail;
};

export function ProjectDetailTemplate({ project }: ProjectDetailTemplateProps) {
  const backPath =
    project.kind === "featured" ? "/projects/featured" : "/projects/uiux";
  const backLabel =
    project.kind === "featured"
      ? "Back to Featured Projects"
      : "Back to UI/UX Projects";

  return (
    <main className="min-h-screen bg-background">
      <section className="relative pt-24 pb-20">
        <div className="absolute inset-0 bg-linear-to-b from-card/40 via-transparent to-background" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-10">
            <Button
              asChild
              variant="outline"
              className="border-primary/40 hover:bg-primary/10"
            >
              <Link href={backPath}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                {backLabel}
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary/30 hover:bg-primary/10"
            >
              <Link href="/">Back to Home</Link>
            </Button>
          </div>

          <header className="mb-10">
            <span className="font-mono text-xs text-primary tracking-wider uppercase">
              {project.kind === "featured"
                ? "Engineering Project"
                : "Design Project"}
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground">
              {project.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {project.description}
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <Card className="bg-card/70 border-border">
              <CardContent className="p-4">
                <p className="font-mono text-xs text-primary uppercase tracking-wide">
                  Role
                </p>
                <p className="mt-2 text-foreground">{project.role}</p>
              </CardContent>
            </Card>
            <Card className="bg-card/70 border-border">
              <CardContent className="p-4">
                <p className="font-mono text-xs text-primary uppercase tracking-wide">
                  Duration
                </p>
                <p className="mt-2 text-foreground">{project.duration}</p>
              </CardContent>
            </Card>
            <Card className="bg-card/70 border-border">
              <CardContent className="p-4">
                <p className="font-mono text-xs text-primary uppercase tracking-wide">
                  Year
                </p>
                <p className="mt-2 text-foreground">{project.year}</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card/60 border-border mb-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                Project Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.longDescription}
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-card/60 border-border">
              <CardContent className="p-6">
                <h2 className="text-lg font-heading font-semibold text-foreground mb-3">
                  Challenge
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/60 border-border">
              <CardContent className="p-6">
                <h2 className="text-lg font-heading font-semibold text-foreground mb-3">
                  Approach
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.approach}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="bg-card/60 border-border">
              <CardContent className="p-6">
                <h2 className="text-lg font-heading font-semibold text-foreground mb-4">
                  Process
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  {project.process.map((step) => (
                    <li key={step} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-card/60 border-border">
              <CardContent className="p-6">
                <h2 className="text-lg font-heading font-semibold text-foreground mb-4">
                  Outcomes
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  {project.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card/60 border-border">
            <CardContent className="p-6">
              <h2 className="text-lg font-heading font-semibold text-foreground mb-4">
                Tools & Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-primary/30 text-primary bg-background/40"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
