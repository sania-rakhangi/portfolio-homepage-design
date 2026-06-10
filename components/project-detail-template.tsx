import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type ProjectDetail } from "@/lib/portfolio-projects";

type ProjectDetailTemplateProps = {
  project: ProjectDetail;
};

type Figure = {
  image: string;
  title: string;
  note: string;
};

const mIndicatorBeforeAfterImages = [
  "/images/m-indicator/select line screen before and after.png",
  "/images/m-indicator/select station screen before and after.png",
  "/images/m-indicator/station details screen before and after.png",
  "/images/m-indicator/train timings screen before and after.png",
  "/images/m-indicator/train timings screen Versova to Ghatkopar before and after.png",
  "/images/m-indicator/train timings screen expanded view before and after.png",
];

function titleFromImage(src: string) {
  return decodeURIComponent(src.split("/").pop() ?? "Project image").replace(
    /\.[^.]+$/,
    "",
  );
}

function figureNote(project: ProjectDetail, image: string) {
  const name = titleFromImage(image).toLowerCase();

  if (project.slug === "vehicle-parking-management-system") {
    if (name.includes("architecture")) {
      return "Shows the three-tier MERN system described in the report: React presentation layer, Express business logic, MongoDB data layer, and a Jenkins pipeline that builds, tests, pushes, and deploys to Kubernetes.";
    }
    if (name.includes("home page")) {
      return "The report verifies the frontend running at localhost:3000, where users enter the parking workflow and begin checking real-time slot availability.";
    }
    if (name.includes("book parking") || name.includes("check parking")) {
      return "These screens support the core goal of replacing manual slot checks with real-time availability, booking, and cancellation for multiple vehicle types.";
    }
    if (name.includes("confirmed") || name.includes("cancel")) {
      return "The booking and cancellation states connect to the tested backend logic for reservation, validation, cancellation, and slot status reset.";
    }
    if (name.includes("database")) {
      return "MongoDB stores booking data, with deployment variants handled through Docker Compose and Kubernetes ConfigMaps so code stays environment independent.";
    }
    if (name.includes("test")) {
      return "The report records 17 passing Jest tests across 8 suites, covering backend logic and frontend rendering before build and deployment.";
    }
    if (name.includes("jenkins")) {
      return "Jenkins Build #9 completed the full pipeline successfully: checkout, dependencies, tests, Docker builds, image push, Kubernetes deploy, smoke tests, and cleanup.";
    }
    if (name.includes("kubernetes")) {
      return "Kubernetes deployment used a dedicated namespace, frontend and backend replicas, services, ingress routing, PVC storage for MongoDB, and HPA configuration.";
    }
    if (name.includes("docker")) {
      return "Docker Compose containerized the frontend, backend, and MongoDB services before images were tagged and pushed to Docker Hub for deployment.";
    }
  }

  if (project.slug === "sketch-to-face-generation") {
    if (name.includes("architecture") || name.includes("block diagram")) {
      return "This diagram maps the CLIP-guided conditional GAN: sketch and mask encoders, CLIP text projection, bottleneck fusion, self-attention refinement, decoder, and PatchGAN discriminator.";
    }
    if (name.includes("data flow")) {
      return "The data flow follows the report pipeline: resize inputs to 256 by 256, normalize tensors, encode text with CLIP ViT-B/32, fuse modalities, and synthesize the RGB face.";
    }
    if (name.includes("training")) {
      return "Training alternates generator and discriminator updates with adversarial, L1, perceptual, feature-matching, and attention-guided losses, saving checkpoints for resumption.";
    }
    if (name.includes("psnr")) {
      return "The report shows PSNR values around 18 to 27 dB, with an average of 21.27 dB across 2,292 test samples.";
    }
    if (name.includes("ssim")) {
      return "SSIM spans roughly 0.60 to 0.85, with a 0.719 average, reflecting how sketch clarity affects structural similarity.";
    }
    if (name.includes("east asian")) {
      return "The report notes clean contours and well-defined facial lines here, with the output preserving facial width, eye shape, smooth tone, symmetry, and identity cues.";
    }
    if (name.includes("eyeglasses")) {
      return "This example tests accessory complexity; the generated image keeps the eyeglass frame, nose shape, eyebrow alignment, and chin structure with minimal distortion.";
    }
    if (name.includes("african")) {
      return "This qualitative result shows robustness across darker skin tone and sharper facial edges, reconstructing proportions, eye spacing, jawline, and texture.";
    }
    if (name.includes("long hair")) {
      return "This sample uses looser contours, yet the model reconstructs long hair, facial hair, facial width, and the main identity structure.";
    }
  }

  if (project.slug === "m-indicator-redesign") {
    if (name.includes("bg") || name.includes("abstract")) {
      return "The redesign centers on a cleaner, search-first home experience that reduces clutter and prioritizes high-frequency local train and metro tasks.";
    }
    if (name.includes("secondary research")) {
      return "The research synthesis highlights recurring user pain points: cluttered navigation, intrusive ads, repeated inputs, missing timetable clarity, and low trust in unfinished features.";
    }
  }

  return "This visual supports the project narrative and shows the artifact described in the case-study documentation.";
}

function projectFigures(project: ProjectDetail) {
  const images =
    project.slug === "m-indicator-redesign"
      ? project.images?.filter(
          (image) => !mIndicatorBeforeAfterImages.includes(image),
        )
      : project.images;

  return (images ?? []).map((image) => ({
    image,
    title: titleFromImage(image),
    note: figureNote(project, image),
  }));
}

function Page({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative border border-border bg-background/95 p-6 shadow-2xl shadow-black/15 sm:p-8 lg:min-h-[620px] ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-8 top-7 h-px bg-primary/20" />
      <div className="pointer-events-none absolute inset-x-8 bottom-7 h-px bg-primary/15" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function FigureCard({ figure }: { figure: Figure }) {
  return (
    <figure className="grid gap-4 rounded-sm border border-border bg-card/45 p-4 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="relative min-h-56 overflow-hidden rounded-sm border border-border bg-background">
        <Image
          src={figure.image}
          alt={figure.title}
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-contain p-2"
        />
      </div>
      <figcaption className="flex flex-col justify-center">
        <p className="font-mono text-xs uppercase tracking-wider text-primary">
          Figure
        </p>
        <h3 className="mt-2 font-heading text-lg font-semibold text-foreground">
          {figure.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {figure.note}
        </p>
      </figcaption>
    </figure>
  );
}

export function ProjectDetailTemplate({ project }: ProjectDetailTemplateProps) {
  const kindLabel = project.kind === "uiux" ? "UI/UX Case Study" : "Project";
  const isUiux = project.kind === "uiux";
  const figures = projectFigures(project);

  return (
    <main className="min-h-screen bg-background/45">
      <section className="relative pt-24 pb-20">
        <div className="absolute inset-0 bg-linear-to-b from-card/40 via-transparent to-background" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap gap-3">
            <Button
              asChild
              variant="outline"
              className="border-primary/40 hover:bg-primary/10"
            >
              <Link href="/#projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary/30 hover:bg-primary/10"
            >
              <Link href="/">Back to Home</Link>
            </Button>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-r-lg rounded-l-sm border border-border bg-card/50 shadow-2xl shadow-black/20" />
            <div className="absolute inset-y-8 left-1/2 z-20 hidden w-8 -translate-x-1/2 rounded-full bg-linear-to-r from-black/20 via-primary/15 to-black/20 lg:block" />
            <div className="relative grid gap-0 lg:grid-cols-2">
              <Page className="rounded-l-sm lg:rounded-r-none lg:border-r-0">
                <span className="font-mono text-xs uppercase tracking-wider text-primary">
                  {kindLabel}
                </span>
                <h1 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
                  {project.title}
                </h1>
                <p className="mt-4 text-lg leading-8 text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-8 relative aspect-[4/3] overflow-hidden rounded-sm border border-border bg-card">
                  <Image
                    src={project.image}
                    alt={`${project.title} cover`}
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-contain p-3"
                  />
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {[
                    ["Role", project.role],
                    ["Duration", project.duration],
                    ["Year", project.year],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-sm border border-border bg-card/50 p-4"
                    >
                      <p className="font-mono text-xs uppercase tracking-wide text-primary">
                        {label}
                      </p>
                      <p className="mt-2 text-sm text-foreground">{value}</p>
                    </div>
                  ))}
                </div>
              </Page>

              <Page className="rounded-r-sm lg:rounded-l-none">
                <div className="inline-flex items-center gap-2 rounded-sm border border-primary/25 bg-primary/10 px-3 py-2 font-mono text-xs uppercase tracking-wider text-primary">
                  <BookOpen className="h-4 w-4" />
                  Opening chapter
                </div>

                <h2 className="mt-8 font-heading text-2xl font-semibold text-foreground">
                  Project Overview
                </h2>
                <p className="mt-3 leading-7 text-muted-foreground">
                  {project.longDescription}
                </p>

                <div className="mt-8 grid gap-5">
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      Challenge
                    </h3>
                    <p className="mt-2 leading-7 text-muted-foreground">
                      {project.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      Approach
                    </h3>
                    <p className="mt-2 leading-7 text-muted-foreground">
                      {project.approach}
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    Tools & Stack
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-primary/30 bg-background/40 text-primary"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Page>
            </div>
          </div>

          <div className="mt-10 grid gap-0 lg:grid-cols-2">
            <Page className="rounded-l-sm lg:rounded-r-none lg:border-r-0">
              <h2 className="font-heading text-2xl font-semibold text-foreground">
                Process
              </h2>
              <ol className="mt-5 space-y-4 text-muted-foreground">
                {project.process.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="font-mono text-xs text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </Page>

            <Page className="rounded-r-sm lg:rounded-l-none">
              <h2 className="font-heading text-2xl font-semibold text-foreground">
                Outcomes
              </h2>
              <ul className="mt-5 space-y-4 text-muted-foreground">
                {project.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>

              {project.metrics && project.metrics.length > 0 ? (
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric.name}
                      className="rounded-sm border border-border bg-card/50 p-4"
                    >
                      <p className="font-mono text-xs uppercase tracking-wide text-primary">
                        {metric.name}
                      </p>
                      <p className="mt-2 text-foreground">{metric.value}</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </Page>
          </div>

          {figures.length > 0
            ? figures.map((figure, index) => (
                <div key={figure.image} className="mt-10 grid gap-0 lg:grid-cols-2">
                  <Page className="rounded-l-sm lg:rounded-r-none lg:border-r-0">
                    {index === 0 ? (
                      <>
                        <h2 className="font-heading text-2xl font-semibold text-foreground">
                          Illustrated Figures
                        </h2>
                        <p className="mt-3 leading-7 text-muted-foreground">
                          Each figure is paired with the part of the report it
                          explains, so the visuals read like a designed case
                          study instead of a loose gallery.
                        </p>
                      </>
                    ) : null}
                    <div className="relative mt-6 min-h-[360px] overflow-hidden rounded-sm border border-border bg-card">
                      <Image
                        src={figure.image}
                        alt={figure.title}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-contain p-3"
                      />
                    </div>
                  </Page>
                  <Page className="rounded-r-sm lg:rounded-l-none">
                    <p className="font-mono text-xs uppercase tracking-wider text-primary">
                      Figure {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 font-heading text-2xl font-semibold text-foreground">
                      {figure.title}
                    </h3>
                    <p className="mt-4 leading-7 text-muted-foreground">
                      {figure.note}
                    </p>
                  </Page>
                </div>
              ))
            : null}

          {isUiux ? (
            <div className="mt-10 grid gap-0 lg:grid-cols-2">
              <Page className="rounded-l-sm lg:rounded-r-none lg:border-r-0">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  Research and Testing
                </h2>
                <div className="mt-5 space-y-5">
                  {project.primaryResearchFindings?.slice(0, 3).map((item) => (
                    <div key={item.question}>
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-sm font-medium text-foreground">
                          {item.question}
                        </p>
                        <p className="font-mono text-xs text-primary">
                          {item.percentage}%
                        </p>
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-border">
                        <div
                          className="h-full rounded-full bg-primary"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </Page>

              <Page className="rounded-r-sm lg:rounded-l-none">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  Before and After
                </h2>
                <div className="mt-5 space-y-6">
                  {project.beforeAfterExamples?.map((item, index) => (
                    <div
                      key={item.feature}
                      className="rounded-sm border border-border bg-card/45 p-4"
                    >
                      <p className="font-mono text-xs uppercase tracking-wide text-primary">
                        {item.feature}
                      </p>
                      {mIndicatorBeforeAfterImages[index] ? (
                        <div className="relative mt-4 min-h-64 overflow-hidden rounded-sm border border-border bg-background">
                          <Image
                            src={mIndicatorBeforeAfterImages[index]}
                            alt={`${item.feature} before and after`}
                            fill
                            sizes="(min-width: 1024px) 45vw, 100vw"
                            className="object-contain p-2"
                          />
                        </div>
                      ) : null}
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        <p className="text-sm leading-6 text-muted-foreground">
                          <span className="text-foreground">Before: </span>
                          {item.before}
                        </p>
                        <p className="text-sm leading-6 text-muted-foreground">
                          <span className="text-foreground">After: </span>
                          {item.after}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Page>
            </div>
          ) : null}

          {project.references && project.references.length > 0 ? (
            <div className="mt-10">
              <Page className="min-h-0 rounded-sm">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  References
                </h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
                  {project.references.map((reference) => (
                    <li key={reference}>{reference}</li>
                  ))}
                </ul>
              </Page>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
