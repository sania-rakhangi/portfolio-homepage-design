"use client";

import {
  Accessibility,
  Brain,
  ClipboardCheck,
  Code,
  Database,
  Eye,
  GitBranch,
  Lightbulb,
  PenTool,
  Search,
  Server,
  Users,
  Workflow,
} from "lucide-react";

const VPMS = "Vehicle Parking System";
const SKETCH = "Sketch-to-Face";
const MINDICATOR = "M-Indicator Redesign";

const engineeringSkills = [
  { name: "MERN Stack Development", icon: Code, projects: [VPMS] },
  { name: "Node.js & Express APIs", icon: Server, projects: [VPMS] },
  { name: "MongoDB Data Modeling", icon: Database, projects: [VPMS] },
  {
    name: "Docker, Kubernetes & Jenkins CI/CD",
    icon: GitBranch,
    projects: [VPMS],
  },
  { name: "PyTorch GANs & CLIP Conditioning", icon: Brain, projects: [SKETCH] },
  { name: "Computer Vision Evaluation", icon: Eye, projects: [SKETCH] },
];

const designSkills = [
  { name: "Figma Prototyping", icon: PenTool, projects: [MINDICATOR] },
  {
    name: "User Research & Review Synthesis",
    icon: Search,
    projects: [MINDICATOR],
  },
  {
    name: "Heuristic Evaluation",
    icon: ClipboardCheck,
    projects: [MINDICATOR],
  },
  { name: "Usability Testing", icon: Users, projects: [MINDICATOR] },
  {
    name: "Information Architecture & User Flows",
    icon: Workflow,
    projects: [MINDICATOR],
  },
  {
    name: "Accessible Visual UI Systems",
    icon: Accessibility,
    projects: [MINDICATOR],
  },
];

const projectColors: Record<string, string> = {
  [VPMS]:
    "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20",
  [SKETCH]:
    "bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20",
  [MINDICATOR]:
    "bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20",
};

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-card/20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-primary tracking-wider uppercase">
            Capabilities
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Skills & Capabilities
          </h2>
          <div className="mt-4 w-16 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Each skill is tied to the project where it was applied.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Engineering */}
          <div className="rounded-sm border border-border bg-background/60 p-5 shadow-xl shadow-black/10">
            <div className="mb-6 flex items-center justify-between gap-4 border-b border-border pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Lightbulb className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-primary">
                    Focus
                  </p>
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    Engineering
                  </h3>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              {engineeringSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="group rounded-sm border border-border bg-card/60 p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:shadow-primary/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-sm bg-background flex items-center justify-center border border-border group-hover:bg-primary/10 transition-colors duration-300">
                      <skill.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="font-medium text-foreground block">
                        {skill.name}
                      </span>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {skill.projects.map((p) => (
                          <span
                            key={p}
                            className={`inline-block px-2 py-0.5 rounded-sm text-xs font-mono ${projectColors[p]}`}
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Design */}
          <div className="rounded-sm border border-border bg-background/60 p-5 shadow-xl shadow-black/10">
            <div className="mb-6 flex items-center justify-between gap-4 border-b border-border pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-primary">
                    Focus
                  </p>
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    Product Design
                  </h3>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              {designSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="group rounded-sm border border-border bg-card/60 p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:shadow-primary/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-sm bg-background flex items-center justify-center border border-border group-hover:bg-primary/10 transition-colors duration-300">
                      <skill.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="font-medium text-foreground block">
                        {skill.name}
                      </span>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {skill.projects.map((p) => (
                          <span
                            key={p}
                            className={`inline-block px-2 py-0.5 rounded-sm text-xs font-mono ${projectColors[p]}`}
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
