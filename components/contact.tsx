"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  const [subject, setSubject] = useState("Portfolio collaboration");
  const [message, setMessage] = useState(
    "Dear Sania,\n\nI came across your portfolio and wanted to connect about...\n\nRegards,\n",
  );

  const mailHref = useMemo(() => {
    const params = new URLSearchParams({
      subject,
      body: message,
    });

    return `mailto:sania.rakhangi@gmail.com?${params.toString()}`;
  }, [message, subject]);

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="font-mono text-xs uppercase tracking-wider text-primary">
            Contact
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            {"Let's"} Connect
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative">
            <div className="absolute -inset-4 rounded-sm border border-border bg-card/55 shadow-2xl shadow-black/20" />
            <div className="relative rounded-sm border border-border bg-background/90 p-6 shadow-2xl shadow-black/15 sm:p-10">
              <div className="absolute inset-x-10 top-8 h-px bg-primary/20" />
              <div className="absolute inset-x-10 bottom-8 h-px bg-primary/15" />
              <div className="absolute left-10 top-8 bottom-8 w-px bg-primary/15" />

              <div className="pl-6">
                <div className="mb-8 grid gap-4 border-b border-border pb-6 sm:grid-cols-2">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-primary">
                      To
                    </p>
                    <p className="mt-1 text-foreground">Sania Rakhangi</p>
                    <p className="text-sm text-muted-foreground">
                      sania.rakhangi@gmail.com
                    </p>
                  </div>
                  <div className="sm:text-right">
                    <p className="font-mono text-xs uppercase tracking-wider text-primary">
                      From
                    </p>
                    <p className="mt-1 text-foreground">Portfolio Visitor</p>
                  </div>
                </div>

                <label className="block">
                  <span className="font-mono text-xs uppercase tracking-wider text-primary">
                    Subject
                  </span>
                  <input
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                    className="mt-2 w-full border-0 border-b border-border bg-transparent px-0 py-3 text-lg text-foreground outline-none transition focus:border-primary"
                  />
                </label>

                <label className="mt-8 block">
                  <span className="font-mono text-xs uppercase tracking-wider text-primary">
                    Message
                  </span>
                  <textarea
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    rows={9}
                    className="mt-3 w-full resize-none bg-transparent px-4 py-3 text-foreground outline-none transition focus:border-primary border border-border"
                    style={{
                      lineHeight: "2rem",
                      backgroundImage:
                        "repeating-linear-gradient(to bottom, transparent, transparent calc(2rem - 1px), var(--border) calc(2rem - 1px), var(--border) 2rem)",
                      backgroundSize: "100% 2rem",
                      backgroundPositionY: "calc(2rem + 0.75rem)",
                    }}
                  />
                </label>

                <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-primary">
                      Direct Links
                    </p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      <a
                        href="https://github.com/sania-rakhangi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-sm border border-border bg-card/55 px-4 py-2 text-sm text-foreground transition hover:border-primary/50"
                      >
                        <Github className="h-4 w-4 text-primary" />
                        GitHub
                      </a>
                      <a
                        href="https://linkedin.com/in/sania-rakhangi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-sm border border-border bg-card/55 px-4 py-2 text-sm text-foreground transition hover:border-primary/50"
                      >
                        <Linkedin className="h-4 w-4 text-primary" />
                        LinkedIn
                      </a>
                    </div>
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className="group bg-primary px-8 py-6 text-base font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
                  >
                    <a href={mailHref}>
                      <Mail className="mr-2 h-4 w-4" />
                      Send Letter
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
