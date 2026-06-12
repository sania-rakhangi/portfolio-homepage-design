"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, ScrollText, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 opacity-25">
        <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-24 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        <div className="absolute left-6 top-24 bottom-24 hidden w-px bg-gradient-to-b from-transparent via-primary/25 to-transparent md:block" />
        <div className="absolute right-6 top-24 bottom-24 hidden w-px bg-gradient-to-b from-transparent via-primary/25 to-transparent md:block" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-border bg-card/60 backdrop-blur-sm shadow-lg shadow-black/10">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
            Computer Engineering · UI/UX Design
          </span>
        </div>

        <p className="font-mono text-primary text-2xl sm:text-3xl md:text-4xl mb-4 tracking-wide">
          Sania Rakhangi
        </p>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
          <span className="block text-balance">Building systems</span>
          <span className="block text-primary text-balance">
            that feel clear.
          </span>
        </h1>

        <p className="font-mono text-sm sm:text-base text-primary mb-4 tracking-wider">
          Full-Stack Engineer · Product Designer · ML Explorer
        </p>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          I am a Computer Engineering student with a minor in UI/UX Design. I
          work at the intersection of full-stack development, deployment
          automation, and research-led interface design, turning technical
          constraints into thoughtful, usable products.
        </p>

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
            <a href="#contact">
              <ScrollText className="mr-2 h-4 w-4" />
              Get in Touch
            </a>
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
