"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Figma, Layers, MousePointer, Smartphone } from "lucide-react"

const uiuxProjects = [
  {
    title: "Mobile Banking Redesign",
    description: "Complete UX overhaul of a banking app focusing on accessibility and user-centered design principles.",
    icon: Smartphone,
    tools: ["Figma", "Principle", "User Testing"],
    type: "Case Study",
  },
  {
    title: "E-commerce Design System",
    description: "Comprehensive design system with reusable components, tokens, and documentation for scalable product design.",
    icon: Layers,
    tools: ["Figma", "Storybook", "Design Tokens"],
    type: "Design System",
  },
  {
    title: "Interactive Prototype",
    description: "High-fidelity interactive prototype for a health and wellness application with micro-interactions.",
    icon: MousePointer,
    tools: ["Figma", "Framer", "After Effects"],
    type: "Prototype",
  },
  {
    title: "SaaS Dashboard UI",
    description: "Data-driven dashboard interface design with focus on information hierarchy and user workflows.",
    icon: Figma,
    tools: ["Figma", "Maze", "Analytics"],
    type: "UI Design",
  },
]

export function UIUXWork() {
  return (
    <section id="uiux" className="py-24 relative bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-primary tracking-wider uppercase">
            Design Portfolio
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-heading font-bold text-foreground">
            UI/UX Work
          </h2>
          <div className="mt-4 w-16 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Exploring the intersection of aesthetics and usability through research-driven design solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {uiuxProjects.map((project, index) => (
            <Card
              key={project.title}
              className="group relative bg-background border-border overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 flex gap-6">
                {/* Icon */}
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-lg font-heading font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <Badge variant="outline" className="shrink-0 border-primary/30 text-primary">
                      {project.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  {/* Tools */}
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
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
