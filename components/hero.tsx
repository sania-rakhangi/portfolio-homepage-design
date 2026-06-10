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
      <Image
        src="/images/hero section bg.jpg"
        alt="Fantasy game library opening screen"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-background/55" />
      <div className="absolute inset-0 bg-linear-to-b from-background/40 via-background/35 to-background" />
      <div className="absolute inset-0 opacity-25">
        <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-24 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        <div className="absolute left-6 top-24 bottom-24 hidden w-px bg-gradient-to-b from-transparent via-primary/25 to-transparent md:block" />
        <div className="absolute right-6 top-24 bottom-24 hidden w-px bg-gradient-to-b from-transparent via-primary/25 to-transparent md:block" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-1/2 h-40 w-[min(80vw,760px)] -translate-x-1/2 rounded-t-full border-t border-primary/20 bg-card/20 blur-sm" />

      <div className="absolute inset-x-0 bottom-10 mx-auto hidden max-w-5xl grid-cols-5 gap-3 px-8 opacity-40 md:grid">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="h-28 rounded-t-sm border border-border bg-card/70 shadow-lg"
            style={{ transform: `translateY(${index % 2 === 0 ? 12 : 0}px)` }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-border bg-card/60 backdrop-blur-sm shadow-lg shadow-black/10">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
            Portfolio archive unlocked
          </span>
        </div>

        <p className="font-mono text-primary text-xl sm:text-2xl md:text-3xl mb-4 tracking-wide">
          Press Start / Sania Rakhangi
        </p>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
          <span className="block text-balance">The Archive Awaits.</span>
          <span className="block text-primary text-balance">
            Choose Your Volume.
          </span>
        </h1>

        <p className="font-mono text-sm sm:text-base text-primary mb-4 tracking-wider">
          Computer Engineering Student / UI UX Designer
        </p>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          A fantasy game opening screen for a portfolio of project novels:
          engineering quests, interface redesigns, and machine-learning spells
          bound into playable case studies.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="group relative bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-medium shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
          >
            <a href="#projects">
              Open the Shelf
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
              Send a Letter
            </a>
          </Button>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-3 text-left sm:grid-cols-3">
          {[
            "DevOps enchantments",
            "Research scrolls",
            "Vision experiments",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-sm border border-border bg-card/50 p-3 backdrop-blur-sm"
            >
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-xs font-mono uppercase tracking-wide text-muted-foreground">
                {item}
              </span>
            </div>
          ))}
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
