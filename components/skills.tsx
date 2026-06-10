"use client"

import { Accessibility, Brain, ClipboardCheck, Code, Database, Eye, GitBranch, Lightbulb, PenTool, Search, Server, Users, Workflow } from "lucide-react"

const engineeringSkills = [
  { name: "MERN Stack Development", icon: Code, level: 86 },
  { name: "Node.js & Express APIs", icon: Server, level: 82 },
  { name: "MongoDB Data Modeling", icon: Database, level: 78 },
  { name: "Docker, Kubernetes & Jenkins CI/CD", icon: GitBranch, level: 84 },
  { name: "PyTorch GANs & CLIP Conditioning", icon: Brain, level: 80 },
  { name: "Computer Vision Evaluation", icon: Eye, level: 76 },
]

const designSkills = [
  { name: "Figma Prototyping", icon: PenTool, level: 88 },
  { name: "User Research & Review Synthesis", icon: Search, level: 84 },
  { name: "Heuristic Evaluation", icon: ClipboardCheck, level: 80 },
  { name: "Usability Testing", icon: Users, level: 82 },
  { name: "Information Architecture & User Flows", icon: Workflow, level: 86 },
  { name: "Accessible Visual UI Systems", icon: Accessibility, level: 78 },
]

export function Skills() {
  return (
    <section className="py-24 relative bg-card/20">
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
            A focused view of the technical, research, and design capabilities
            demonstrated across the portfolio projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
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
              <span className="font-mono text-xs text-muted-foreground">
                Build
              </span>
            </div>
            <div className="space-y-4">
              {engineeringSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group rounded-sm border border-border bg-card/60 p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:shadow-primary/5"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-sm bg-background flex items-center justify-center border border-border group-hover:bg-primary/10 transition-colors duration-300">
                      <skill.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="font-mono text-xs text-primary">
                          {skill.level}
                        </span>
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-background border border-border overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

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
              <span className="font-mono text-xs text-muted-foreground">
                Research
              </span>
            </div>
            <div className="space-y-4">
              {designSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group rounded-sm border border-border bg-card/60 p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:shadow-primary/5"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-sm bg-background flex items-center justify-center border border-border group-hover:bg-primary/10 transition-colors duration-300">
                      <skill.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="font-mono text-xs text-primary">
                          {skill.level}
                        </span>
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-background border border-border overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{ width: `${skill.level}%` }}
                        />
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
  )
}
