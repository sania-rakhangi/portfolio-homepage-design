"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cpu, Database, GitBranch, Terminal } from "lucide-react"

const engineeringProjects = [
  {
    title: "Custom Operating System Kernel",
    description: "Built a minimal operating system kernel from scratch with memory management, process scheduling, and basic I/O.",
    icon: Cpu,
    technologies: ["C", "Assembly", "QEMU"],
    status: "Completed",
  },
  {
    title: "Distributed Database System",
    description: "Implemented a distributed key-value store with consistent hashing, replication, and fault tolerance mechanisms.",
    icon: Database,
    technologies: ["Go", "gRPC", "Raft Consensus"],
    status: "In Progress",
  },
  {
    title: "Compiler Construction",
    description: "Developed a compiler for a custom programming language including lexer, parser, semantic analysis, and code generation.",
    icon: Terminal,
    technologies: ["Rust", "LLVM", "Parsing"],
    status: "Completed",
  },
  {
    title: "Version Control System",
    description: "Created a Git-like version control system implementing core features like branching, merging, and diff algorithms.",
    icon: GitBranch,
    technologies: ["Python", "SHA-256", "Delta Encoding"],
    status: "Completed",
  },
]

export function EngineeringProjects() {
  return (
    <section id="engineering" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-primary tracking-wider uppercase">
            Systems & Algorithms
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Engineering Projects
          </h2>
          <div className="mt-4 w-16 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Deep dives into systems programming, algorithms, and low-level engineering challenges.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-4">
          {engineeringProjects.map((project, index) => (
            <Card
              key={project.title}
              className="group bg-card border-border overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  {/* Icon */}
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <project.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                      <h3 className="text-lg font-heading font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <Badge 
                        variant="outline" 
                        className={project.status === "In Progress" 
                          ? "border-primary/50 text-primary bg-primary/10" 
                          : "border-muted-foreground/30 text-muted-foreground"
                        }
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {project.description}
                    </p>
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-mono bg-background text-muted-foreground rounded border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
