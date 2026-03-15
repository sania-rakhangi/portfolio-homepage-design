"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Palette } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #D89A3C10 1px, transparent 1px),
              linear-gradient(to bottom, #D89A3C10 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glowing accent lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tech Label */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-border bg-card/50 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
            Available for opportunities
          </span>
        </div>

        <p className="font-mono text-primary text-2xl sm:text-3xl md:text-4xl mb-4 tracking-wide">
          {"<SaniaRakhangi />"}
        </p>

        {/* Main Headline */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
          <span className="block text-balance">Engineering Logic.</span>
          <span className="block text-primary text-balance">
            Designing Experiences.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="font-mono text-sm sm:text-base text-primary mb-4 tracking-wider">
          Computer Engineering Student | UI/UX Designer
        </p>

        {/* Description */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          I build systems, interfaces, and digital experiences where engineering
          meets thoughtful design.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="group relative bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-medium shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
          >
            <a href="#projects">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary px-8 py-6 text-base font-medium transition-all duration-300"
          >
            <a href="#uiux">
              <Palette className="mr-2 h-4 w-4" />
              Explore UI/UX Work
            </a>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
