"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"

const contactLinks = [
  {
    name: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
    icon: Mail,
  },
  {
    name: "GitHub",
    value: "github.com/username",
    href: "https://github.com",
    icon: Github,
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/username",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-primary tracking-wider uppercase">
            Get in Touch
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-heading font-bold text-foreground">
            {"Let's"} Connect
          </h2>
          <div className="mt-4 w-16 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto text-pretty">
            Interested in collaborating or just want to say hello? I{"'"}d love to hear from you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          {contactLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
              className="group p-6 rounded-xl bg-background border border-border transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <link.icon className="w-5 h-5 text-primary transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                {link.name}
              </h3>
              <p className="text-xs text-muted-foreground font-mono truncate">
                {link.value}
              </p>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="group bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-medium shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
          >
            <a href="mailto:hello@example.com">
              Send a Message
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
