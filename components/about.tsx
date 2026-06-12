"use client";

import { Code, Compass, Palette, Zap } from "lucide-react";

const strengths = [
  {
    title: "Engineering Foundation",
    copy: "I build with React, Node.js, Express, MongoDB, Docker, Kubernetes, Jenkins, and testing workflows.",
    icon: Code,
  },
  {
    title: "Product Design",
    copy: "I use research, heuristic evaluation, user flows, prototyping, and usability testing to make interfaces easier to understand.",
    icon: Palette,
  },
  {
    title: "Cross-Functional Thinking",
    copy: "I enjoy connecting technical implementation details with the way people actually move through a product.",
    icon: Compass,
  },
  {
    title: "Iteration",
    copy: "I turn feedback, metrics, and constraints into practical improvements instead of treating design and engineering as separate tracks.",
    icon: Zap,
  },
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-x-0 top-12 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-primary tracking-wider uppercase">
            Background
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-heading font-bold text-foreground">
            About Me
          </h2>
          <div className="mt-4 w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="mx-auto max-w-5xl rounded-sm border border-border bg-background/75 p-6 shadow-2xl shadow-black/15 sm:p-8">
          <div className="flex flex-col gap-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-primary">
                Computer Engineering / UI UX
              </p>
              <h3 className="mt-3 font-heading text-2xl font-semibold text-foreground">
                I like building products where the system works well and the
                interface feels clear.
              </h3>
              <div className="mt-6 space-y-5 text-lg leading-8 text-muted-foreground">
                <p>
                  I am a Computer Engineering student with a minor in UI/UX
                  Design. My work sits between implementation and experience:
                  full-stack applications, deployment pipelines, machine
                  learning experiments, and research-led product redesigns.
                </p>
                <p>
                  The projects in this portfolio show that range. The Vehicle
                  Parking Management System focuses on MERN development and
                  DevOps automation. The sketch-to-face project explores
                  computer vision and CLIP-guided GANs. The M-Indicator redesign
                  focuses on usability, information hierarchy, accessibility,
                  and commuter workflows.
                </p>
                <p>
                  I care about making complex systems easier to use, and I enjoy
                  the process of turning technical constraints into thoughtful,
                  practical design decisions.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {strengths.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-sm border border-border bg-card/55 p-5"
                >
                  <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-sm border border-primary/20 bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {item.copy}
                    </p>
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
