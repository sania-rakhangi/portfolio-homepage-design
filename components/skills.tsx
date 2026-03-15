"use client"

import { Code, Cpu, Database, GitBranch, Layers, Lightbulb, Palette, PenTool, Search, Users } from "lucide-react"

const engineeringSkills = [
  { name: "Data Structures", icon: GitBranch },
  { name: "Algorithms", icon: Cpu },
  { name: "Backend Development", icon: Database },
  { name: "Systems Programming", icon: Code },
]

const designSkills = [
  { name: "UI Design", icon: Palette },
  { name: "UX Research", icon: Search },
  { name: "Wireframing", icon: Layers },
  { name: "Prototyping", icon: PenTool },
]

export function Skills() {
  return (
    <section className="py-24 relative bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-primary tracking-wider uppercase">
            Expertise
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Skills & Capabilities
          </h2>
          <div className="mt-4 w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Engineering Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground">
                Engineering
              </h3>
            </div>
            <div className="space-y-4">
              {engineeringSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group flex items-center gap-4 p-4 rounded-lg bg-background border border-border transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:shadow-primary/5"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-card flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                    <skill.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <span className="font-medium text-foreground">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Design Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground">
                Design
              </h3>
            </div>
            <div className="space-y-4">
              {designSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group flex items-center gap-4 p-4 rounded-lg bg-background border border-border transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:shadow-primary/5"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-card flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                    <skill.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <span className="font-medium text-foreground">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
