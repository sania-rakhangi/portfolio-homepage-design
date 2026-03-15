"use client"

import { Code, Palette, Zap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-primary tracking-wider uppercase">
            Background
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-heading font-bold text-foreground">
            About Me
          </h2>
          <div className="mt-4 w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a Computer Engineering student with a minor in UI/UX Design, I occupy a unique space where technical depth meets creative problem-solving. My engineering background gives me the foundation to understand how systems work at their core—from algorithms and data structures to embedded systems and software architecture.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                What draws me to UI/UX is the opportunity to bridge the gap between complex technology and the humans who use it. I believe the best digital experiences are built when engineers and designers speak the same language, and I{"'"}m constantly working to become fluent in both.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My passion lies in building user-centered technology—products that are not only technically sound but also intuitive, accessible, and delightful to use. Whether I{"'"}m writing efficient algorithms or crafting pixel-perfect interfaces, my goal remains the same: creating experiences that make a meaningful impact.
              </p>
            </div>

            {/* Side Cards */}
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-card border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Code className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Technical Foundation</h3>
                <p className="text-sm text-muted-foreground">
                  Strong background in systems programming, algorithms, and software engineering principles.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-card border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Palette className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Design Thinking</h3>
                <p className="text-sm text-muted-foreground">
                  User research, wireframing, prototyping, and visual design skills honed through practice.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-card border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Bridging Disciplines</h3>
                <p className="text-sm text-muted-foreground">
                  Unique ability to translate between engineering constraints and design aspirations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
