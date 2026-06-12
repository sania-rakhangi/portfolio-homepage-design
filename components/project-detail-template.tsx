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

const mIndicatorExcludedImages = [...mIndicatorBeforeAfterImages];

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
      return "The three-tier MERN architecture: React presentation layer on Port 3000, Express business logic on Port 5000, and MongoDB Atlas as the cloud data layer. A Jenkins declarative pipeline automates the full lifecycle, checkout, npm ci, Jest tests, Docker build, image push to Docker Hub, and kubectl deploy to Kubernetes.";
    }
    if (name.includes("home page")) {
      return "The frontend running at localhost:3000. Users enter the parking workflow here, selecting vehicle type (Bike, Car, EV, or Truck) before checking real-time slot availability.";
    }
    if (name.includes("book parking") || name.includes("check parking")) {
      return "The check and book screens replace the manual slot-checking process. Real-time availability is fetched from the Express API, which reads from MongoDB, and the booking is confirmed with full validation.";
    }
    if (name.includes("confirmed") || name.includes("cancel")) {
      return "Booking confirmation and cancellation states, both tested by the Jest suite. The cancelBooking.test.js and bookSlot.test.js suites verify correct status resets and slot availability updates after cancellation.";
    }
    if (name.includes("database")) {
      return "MongoDB stores booking records with environment-specific URIs injected via Kubernetes ConfigMap (backend-config), keeping application code unchanged between Docker Compose (mongodb:27017) and Kubernetes (mongodb.parking-system.svc.cluster.local) deployments.";
    }
    if (name.includes("test")) {
      return "All 17 Jest tests passing across 8 suites: 6 backend suites (12 tests, ~2.1s) covering booking, cancellation, slot checking, validation, and time utilities, plus 2 frontend suites (5 tests, ~3.6s) covering BookingForm rendering and API service mocks.";
    }
    if (name.includes("jenkins")) {
      return "Jenkins Build #9, the first full pipeline SUCCESS after 8 failed iterations (builds #1–#8 failed due to incorrect Docker credential binding and missing npm ci steps). The successful build completed all 9 stages: Checkout → Install Dependencies → Run Tests → Build Docker Images → Push to Docker Hub → Deploy to Kubernetes → Smoke Tests → Cleanup.";
    }
    if (name.includes("kubernetes")) {
      return "The parking-system namespace with all 5 pods running (1 mongodb, 2 parking-backend replicas, 2 parking-frontend replicas), 0 restarts. ClusterIP services expose frontend on Port 80, backend on Port 5000, and mongodb on Port 27017. HPA configured for min 2 / max 5 backend replicas at 70% CPU threshold.";
    }
    if (name.includes("docker")) {
      return "Docker Compose bringing up all 3 containerised services: parking-frontend (React Vite, Port 3000), parking-backend (Node.js, Port 5000), and parking-mongodb (Port 27017 with named volume). Images tagged as saniar2021/parking-backend:latest and saniar2021/parking-frontend:latest and pushed to Docker Hub.";
    }
  }

  if (project.slug === "sketch-to-face-generation") {
    if (name.includes("architecture") || name.includes("block diagram")) {
      return "The high-level block diagram of the multimodal synthesis framework. Three inputs, sketch (RGB, 3 channels), spatial mask (grayscale, 1 channel), and text description (512-dim CLIP ViT-B/32 embedding), feed into the dual-path encoder-decoder GAN with a PatchGAN discriminator evaluating patch-wise realism at 16×16 resolution.";
    }
    if (name.includes("data flow")) {
      return "The six-stage data flow: raw images from FS2K and CUHK datasets → preprocessing (resize to 256×256, normalize to [-1,1]) → hierarchical visual encoding (64→128→256→512 channels) and CLIP text encoding → dual-pooling bottleneck fusion (max + average pooling → 1024 channels → 256 channels) → decoder with skip connections → PatchGAN discrimination and multi-loss backpropagation.";
    }
    if (name.includes("training")) {
      return "The adversarial training cycle alternating discriminator and generator updates. Generator loss is a weighted combination: Adversarial (λ=1) + L1 Reconstruction (λ=50) + Perceptual VGG-19 (λ=20) + Edge/Sobel (λ=5) + Total Variation (λ=2) + Feature Matching (λ=10) + Eye-Focused (λ=90 combined). Checkpoints saved every 10 epochs via StepLR scheduling (0.5× decay per 10 epochs).";
    }
    if (name.includes("psnr")) {
      return "PSNR distribution across 2,292 test samples. Values range from approximately 18–27 dB, with an average of 21.27 dB. Performance correlates strongly with sketch clarity and shading uniformity, cleaner contours produce higher PSNR. The model is competitive with HiTS (21.1 dB average) while using significantly lower architectural complexity.";
    }
    if (name.includes("ssim")) {
      return "SSIM distribution across 2,292 test samples, spanning 0.60–0.85 with an average of 0.719. While HiTS achieves 0.84 SSIM through hierarchical text-guided stylization and component-level attribute control, our model delivers these results with a simpler architecture suitable for resource-limited deployments.";
    }
    if (name.includes("east asian")) {
      return "Example 1, East Asian female: clean contours and well-defined facial lines allow the model to closely match facial width, eye shape, and skin tone smoothness. The softer facial structure typical of East Asian features is preserved along with symmetry and identity cues.";
    }
    if (name.includes("eyeglasses")) {
      return "Example 2, White male with eyeglasses and facial hair: the model reconstructs the eyeglass frame with minimal distortion, preserving nose shape, eyebrow alignment, and chin structure. This tests accessory complexity and demonstrates strong identity preservation despite occlusion.";
    }
    if (name.includes("african")) {
      return "Example 3, African/Black male: despite shading inconsistencies in the input sketch, the model reconstructs facial proportions, eye spacing, and jawline effectively. Texture and complexion detail is improved relative to baseline GAN models, demonstrating robustness across diverse skin tones.";
    }
    if (name.includes("long hair")) {
      return "Example 4, Hispanic male with long hair and facial hair: loose sketch contours for hair and facial features are handled well, the model reconstructs the long-hair structure, mustache, and overall facial width accurately, demonstrating resilience to incomplete or stylized input sketches.";
    }
  }

  if (project.slug === "m-indicator-redesign") {
    if (name.includes("secondary research")) {
      return "Secondary research synthesis from Google Play Store reviews. Recurring pain points: cluttered navigation, intrusive ad placements that break navigation flow, repeated source/destination inputs despite saved favourites, outdated timetable data, non-functional features (platform numbers, favourites), and the removal of categorised train listings that long-term users relied on.";
    }
  }

  return "This visual supports the project narrative and shows the artifact described in the case-study documentation.";
}

function projectFigures(project: ProjectDetail) {
  const images =
    project.slug === "m-indicator-redesign"
      ? project.images?.filter((image) => {
          const name = titleFromImage(image).toLowerCase();
          const isBeforeAfter = mIndicatorExcludedImages.some(
            (excluded) => image === excluded,
          );
          const isAbstractOrBg =
            name.includes("abstract") || name.includes("bg");
          const isSecondaryResearch = name.includes("secondary research");
          return !isBeforeAfter && !isAbstractOrBg && !isSecondaryResearch;
        })
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
      className={`relative border border-border bg-background/95 p-6 shadow-2xl shadow-black/15 sm:p-8 ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-8 top-7 h-px bg-primary/20" />
      <div className="pointer-events-none absolute inset-x-8 bottom-7 h-px bg-primary/15" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// ─── Project-specific enriched content ───────────────────────────────────────

function VPMSContent() {
  const testSuites = [
    {
      file: "booking.test.js",
      status: "PASS",
      desc: "Booking creation & validation",
    },
    {
      file: "validateVehicle.test.js",
      status: "PASS",
      desc: "Vehicle type & number validation",
    },
    {
      file: "checkSlots.test.js",
      status: "PASS",
      desc: "Slot availability checking logic",
    },
    {
      file: "bookSlot.test.js",
      status: "PASS",
      desc: "Slot reservation logic",
    },
    {
      file: "cancelBooking.test.js",
      status: "PASS",
      desc: "Cancellation & status reset",
    },
    {
      file: "timeUtils.test.js",
      status: "PASS",
      desc: "Time parsing & overlap detection",
    },
    {
      file: "BookingForm.test.jsx",
      status: "PASS",
      desc: "Frontend booking form rendering",
    },
    { file: "api.test.js", status: "PASS", desc: "API service call mocks" },
  ];

  const k8sResources = [
    {
      name: "Deployments",
      detail:
        "parking-frontend (2 replicas), parking-backend (2 replicas), mongodb (1 replica)",
    },
    {
      name: "Services",
      detail:
        "ClusterIP for frontend (Port 80), backend (Port 5000), mongodb (Port 27017)",
    },
    {
      name: "Ingress",
      detail: "parking-ingress routing parking.example.com → frontend Port 80",
    },
    {
      name: "HPA",
      detail: "parking-backend-hpa, min 2, max 5 replicas, 70% CPU threshold",
    },
    {
      name: "PVC",
      detail: "mongodb-pvc, 1Gi Bound, standard storage class, RWO access",
    },
    {
      name: "ConfigMap & Secret",
      detail:
        "backend-config for MONGO_URI env injection; mongodb-secret for credentials",
    },
  ];

  const challenges = [
    {
      title: "Jenkins pipeline failures (#1–#8)",
      resolution:
        "Corrected withCredentials syntax and added a separate Install Dependencies stage before Test, ensuring npm ci ran for both frontend and backend before any Docker operations.",
    },
    {
      title: "Kubernetes HPA showing <unknown> CPU targets",
      resolution:
        "Acknowledged as a Docker Desktop limitation, the metrics-server is not installed. HPA configuration was structurally validated; min/max replicas (2/5) confirmed correct.",
    },
    {
      title: "MongoDB URI mismatch across environments",
      resolution:
        "Used a Kubernetes ConfigMap (backend-config) to inject the correct MONGO_URI per environment, keeping application code unchanged between Compose and Kubernetes.",
    },
    {
      title: "Docker image naming for Jenkins push",
      resolution:
        "Added explicit docker tag commands in the Jenkinsfile Push stage to rename docker compose–built images to the Docker Hub convention before pushing.",
    },
  ];

  return (
    <div className="mt-10 space-y-6">
      {/* Test Results */}
      <Page className="rounded-sm">
        <h2 className="font-heading text-2xl font-semibold text-foreground">
          Jest Test Results
        </h2>
        <p className="mt-3 leading-7 text-muted-foreground">
          17 tests across 8 suites, all passing. Backend: 6 suites, 12 tests
          (~2.1s). Frontend: 2 suites, 5 tests (~3.6s).
        </p>
        <div className="mt-6 overflow-hidden rounded-sm border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-card/50">
                <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-wide text-primary">
                  Test File
                </th>
                <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-wide text-primary">
                  Status
                </th>
                <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-wide text-primary">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {testSuites.map((suite, i) => (
                <tr
                  key={suite.file}
                  className={i % 2 === 0 ? "bg-background/40" : "bg-card/30"}
                >
                  <td className="px-4 py-3 font-mono text-xs text-foreground">
                    {suite.file}
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-block rounded-sm bg-emerald-500/10 px-2 py-0.5 font-mono text-xs text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      {suite.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {suite.desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            { label: "Total Tests", value: "17 / 17 PASS" },
            { label: "Backend Runtime", value: "~2.1 seconds" },
            { label: "Frontend Runtime", value: "~3.6 seconds" },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-sm border border-border bg-card/50 p-4"
            >
              <p className="font-mono text-xs uppercase tracking-wide text-primary">
                {m.label}
              </p>
              <p className="mt-2 text-sm text-foreground">{m.value}</p>
            </div>
          ))}
        </div>
      </Page>

      {/* Jenkins Build History */}
      <Page className="rounded-sm">
        <h2 className="font-heading text-2xl font-semibold text-foreground">
          Jenkins Build History
        </h2>
        <p className="mt-3 leading-7 text-muted-foreground">
          Build #9 was the first full pipeline SUCCESS after 8 failed
          development iterations. The pipeline runs 9 stages: Checkout → Install
          Dependencies → Run Tests → Build Docker Images → Push to Docker Hub →
          Deploy to Kubernetes → Smoke Tests → Cleanup.
        </p>
        <div className="mt-6 overflow-hidden rounded-sm border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-card/50">
                <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-wide text-primary">
                  Build
                </th>
                <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-wide text-primary">
                  Status
                </th>
                <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-wide text-primary">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  build: "#9 (Latest)",
                  status: "SUCCESS",
                  statusClass:
                    "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
                  note: "Full pipeline: Checkout → Test → Build → Push → Deploy",
                },
                {
                  build: "#8",
                  status: "FAILED",
                  statusClass:
                    "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
                  note: "Failed during pipeline development",
                },
                {
                  build: "#1–#7",
                  status: "FAILED",
                  statusClass:
                    "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
                  note: "Early development iterations",
                },
              ].map((row) => (
                <tr
                  key={row.build}
                  className="border-b border-border/50 last:border-0"
                >
                  <td className="px-4 py-3 font-mono text-xs text-foreground">
                    {row.build}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block rounded-sm px-2 py-0.5 font-mono text-xs border ${row.statusClass}`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">
                    {row.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Page>

      {/* Kubernetes Resources */}
      <Page className="rounded-sm">
        <h2 className="font-heading text-2xl font-semibold text-foreground">
          Kubernetes Deployment
        </h2>
        <p className="mt-3 leading-7 text-muted-foreground">
          All 5 pods in the parking-system namespace ran with STATUS: Running
          and 0 restarts. Manifests organised under k8s/ (namespace, mongodb/,
          backend/, frontend/).
        </p>
        <div className="mt-6 space-y-3">
          {k8sResources.map((r) => (
            <div
              key={r.name}
              className="rounded-sm border border-border bg-card/45 p-4"
            >
              <p className="font-mono text-xs uppercase tracking-wide text-primary">
                {r.name}
              </p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                {r.detail}
              </p>
            </div>
          ))}
        </div>
      </Page>

      {/* Challenges */}
      <Page className="rounded-sm">
        <h2 className="font-heading text-2xl font-semibold text-foreground">
          Challenges & Resolutions
        </h2>
        <div className="mt-6 space-y-5">
          {challenges.map((c, i) => (
            <div key={c.title} className="flex gap-4">
              <span className="font-mono text-xs text-primary shrink-0 mt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="font-medium text-foreground">{c.title}</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  <span className="text-foreground">Resolution: </span>
                  {c.resolution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Page>

      {/* Future Scope */}
      <Page className="rounded-sm">
        <h2 className="font-heading text-2xl font-semibold text-foreground">
          Future Scope
        </h2>
        <ul className="mt-5 space-y-4 text-muted-foreground">
          {[
            "Integration of Prometheus and Grafana for real-time application monitoring, alerting, and dashboard visualisation of parking system metrics.",
            "Multi-environment deployment pipeline (Development → Staging → Production) with environment-specific Kubernetes namespaces and approval gates in Jenkins.",
            "Security scanning integration using OWASP Dependency Check or SonarQube for static code analysis and vulnerability detection in the CI pipeline.",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Page>
    </div>
  );
}

function SketchContent() {
  const metrics = [
    { name: "Test Samples", value: "2,292 paired sketch–photo pairs" },
    { name: "Average PSNR", value: "21.27 dB" },
    { name: "Average SSIM", value: "0.719" },
    { name: "Average L1 Loss", value: "0.0941" },
    { name: "Average L2 Loss", value: "0.0425" },
    { name: "PSNR Range", value: "~18–27 dB" },
    { name: "SSIM Range", value: "0.60–0.85" },
    { name: "Training Split", value: "80% train (1,834) / 20% val (458)" },
  ];

  const comparison = [
    { metric: "PSNR (dB)", ours: "21.27", hits: "21.1", oursWins: true },
    { metric: "SSIM", ours: "0.719", hits: "0.84", oursWins: false },
    {
      metric: "Attribute-Level Control",
      ours: "No",
      hits: "Yes",
      oursWins: false,
    },
    {
      metric: "Component-wise Stylization",
      ours: "No",
      hits: "Yes",
      oursWins: false,
    },
    {
      metric: "Identity Preservation",
      ours: "Moderate",
      hits: "High",
      oursWins: false,
    },
    { metric: "Model Complexity", ours: "Low", hits: "High", oursWins: true },
  ];

  const lossComponents = [
    {
      name: "Adversarial Loss",
      weight: "λ = 1",
      desc: "Encourages the generator to fool the discriminator",
    },
    {
      name: "L1 Reconstruction",
      weight: "λ = 50",
      desc: "Pixel-level mean absolute error against ground truth",
    },
    {
      name: "Perceptual (VGG-19)",
      weight: "λ = 20",
      desc: "Deep feature matching up to layer 18",
    },
    {
      name: "Edge / Sobel",
      weight: "λ = 5",
      desc: "Preserves structural boundaries and high-frequency contours",
    },
    {
      name: "Total Variation",
      weight: "λ = 2",
      desc: "Spatial smoothness regularisation, reduces checkerboard artifacts",
    },
    {
      name: "Feature Matching",
      weight: "λ = 10",
      desc: "Matches intermediate discriminator feature activations",
    },
    {
      name: "Eye-Focused",
      weight: "λ = 90 combined",
      desc: "L1 + perceptual + Laplacian sharpness on 64×64 eye patches via MediaPipe",
    },
  ];

  return (
    <div className="mt-10 space-y-6">
      {/* Quantitative Results */}
      <Page className="rounded-sm">
        <h2 className="font-heading text-2xl font-semibold text-foreground">
          Quantitative Results
        </h2>
        <p className="mt-3 leading-7 text-muted-foreground">
          Evaluated on the full dataset of 2,292 paired sketch–photo samples
          from FS2K and CUHK. PSNR and SSIM values are consistent with baseline
          sketch-to-photo translation models, particularly those preceding
          hierarchical text-guided stylisation techniques such as HiTS.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <div
              key={m.name}
              className="rounded-sm border border-border bg-card/50 p-4"
            >
              <p className="font-mono text-xs uppercase tracking-wide text-primary">
                {m.name}
              </p>
              <p className="mt-2 text-sm text-foreground">{m.value}</p>
            </div>
          ))}
        </div>
      </Page>

      {/* Comparison Table */}
      <Page className="rounded-sm">
        <h2 className="font-heading text-2xl font-semibold text-foreground">
          Comparison with HiTS (State-of-the-Art)
        </h2>
        <p className="mt-3 leading-7 text-muted-foreground">
          HiTS leverages hierarchical text-guided stylisation and
          component-level attribute control. Our model prioritises efficient
          direct reconstruction with lower architectural complexity, making it
          suitable for real-time or resource-limited forensic deployments.
        </p>
        <div className="mt-6 overflow-hidden rounded-sm border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-card/50">
                <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-wide text-primary">
                  Metric / Feature
                </th>
                <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-wide text-primary">
                  Our Model
                </th>
                <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-wide text-primary">
                  HiTS
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr
                  key={row.metric}
                  className={i % 2 === 0 ? "bg-background/40" : "bg-card/30"}
                >
                  <td className="px-4 py-3 text-foreground">{row.metric}</td>
                  <td
                    className={`px-4 py-3 font-mono text-xs ${row.oursWins ? "text-emerald-600 dark:text-emerald-400" : "text-muted-foreground"}`}
                  >
                    {row.ours}
                  </td>
                  <td
                    className={`px-4 py-3 font-mono text-xs ${!row.oursWins ? "text-primary" : "text-muted-foreground"}`}
                  >
                    {row.hits}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Page>

      {/* Loss Function Breakdown */}
      <Page className="rounded-sm">
        <h2 className="font-heading text-2xl font-semibold text-foreground">
          Generator Loss Function
        </h2>
        <p className="mt-3 leading-7 text-muted-foreground">
          The total generator loss is the weighted sum of seven components. The
          heavy L1 weight (λ=50) anchors pixel fidelity, while the eye-focused
          loss (λ=90 combined) dedicates extra supervision to identity-critical
          facial features using MediaPipe face mesh extraction.
        </p>
        <div className="mt-6 space-y-3">
          {lossComponents.map((l) => (
            <div
              key={l.name}
              className="flex items-start gap-4 rounded-sm border border-border bg-card/45 p-4"
            >
              <div className="shrink-0 rounded-sm border border-primary/20 bg-primary/10 px-2 py-1">
                <span className="font-mono text-xs text-primary">
                  {l.weight}
                </span>
              </div>
              <div>
                <p className="font-medium text-foreground">{l.name}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{l.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Page>

      {/* Dataset */}
      <Page className="rounded-sm">
        <h2 className="font-heading text-2xl font-semibold text-foreground">
          Dataset & System Requirements
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground">
              Dataset Statistics
            </h3>
            <div className="mt-4 space-y-2">
              {[
                { k: "Total Samples", v: "2,292 paired sketch–photo" },
                { k: "Training (80%)", v: "1,834 samples" },
                { k: "Validation (20%)", v: "458 samples" },
                { k: "Resolution", v: "256 × 256 px" },
                { k: "Sketch Types", v: "Hand-drawn + algorithmic" },
                { k: "Gender Split", v: "52% female, 48% male" },
                { k: "Avg Description", v: "18.3 tokens" },
                { k: "Sources", v: "FS2K and CUHK datasets" },
              ].map(({ k, v }) => (
                <div
                  key={k}
                  className="flex justify-between gap-4 border-b border-border/50 py-2 last:border-0"
                >
                  <span className="text-sm text-muted-foreground">{k}</span>
                  <span className="text-sm text-foreground">{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground">
              System Requirements
            </h3>
            <div className="mt-4 space-y-2">
              {[
                { k: "GPU", v: "NVIDIA CUDA (8 GB VRAM min)" },
                { k: "RAM", v: "16 GB min, 32 GB recommended" },
                { k: "Storage", v: "50 GB (datasets + checkpoints)" },
                { k: "Python", v: "3.8 or higher" },
                { k: "PyTorch", v: "1.12+ with CUDA 11.6+" },
                {
                  k: "Training Time",
                  v: "~20–30 hrs on RTX 3090 (100 epochs)",
                },
                { k: "Generator Params", v: "~15.4 million" },
                { k: "Discriminator Params", v: "~5.4 million" },
              ].map(({ k, v }) => (
                <div
                  key={k}
                  className="flex justify-between gap-4 border-b border-border/50 py-2 last:border-0"
                >
                  <span className="text-sm text-muted-foreground">{k}</span>
                  <span className="text-sm text-foreground">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
}

function MIndicatorContent({ project }: { project: ProjectDetail }) {
  const primaryResearch = [
    {
      question: "Find the design visually appealing (rated 3 or below)",
      percentage: 87,
      detail:
        "91 responses, 50.5% rated the app a 3, with 13.2% giving it a 1, showing widespread dissatisfaction with the visual design.",
    },
    {
      question: "Find navigation unintuitive (rated 3 or below)",
      percentage: 87,
      detail:
        "91 responses, 20.9% gave navigation a 1 (worst), with only 13.2% rating it 4 or above.",
    },
    {
      question: "Experience frequent errors on the app",
      percentage: 64,
      detail:
        "63.7% of 91 respondents reported facing frequent errors, covering broken features, non-loading timetables, and missing data.",
    },
  ];

  const heuristicScores = [
    { heuristic: "Match Between System & Real World", score: 10 },
    { heuristic: "Consistency & Standards", score: 10 },
    { heuristic: "Visibility of System Status", score: 8 },
    { heuristic: "Error Prevention", score: 4 },
    { heuristic: "Recognition Rather Than Recall", score: 4 },
    { heuristic: "Flexibility & Efficiency of Use", score: 4 },
    { heuristic: "User Control & Freedom", score: 3 },
    { heuristic: "Aesthetic & Minimalist Design", score: 2 },
    { heuristic: "Help Users Recognize & Recover from Errors", score: 2 },
    { heuristic: "Help & Documentation", score: 2 },
  ];

  const userTestingResults = [
    {
      module: "Local Train",
      uiScore: 4.1,
      taskScore: 4.3,
      taskLabel: "Ease of finding train to desired location",
    },
    {
      module: "Train Route Visualization",
      uiScore: 4.3,
      taskScore: 4.4,
      taskLabel: "Timeline and station sequence clarity",
    },
    {
      module: "Metro",
      uiScore: 4.8,
      taskScore: 4.75,
      taskLabel: "Ease of selecting correct metro line",
    },
    {
      module: "Bus",
      uiScore: 4.3,
      taskScore: 4.3,
      taskLabel: "Ease of finding buses by source/destination",
    },
    {
      module: "Monorail",
      uiScore: 4.3,
      taskScore: 4.1,
      taskLabel: "Route and station list clarity",
    },
    {
      module: "Ferry",
      uiScore: 4.5,
      taskScore: 4.3,
      taskLabel: "Finding ferry and understanding timings",
    },
    {
      module: "MSRTC",
      uiScore: 4.2,
      taskScore: 4.5,
      taskLabel: "Clarity of bus search process",
    },
    {
      module: "Overall App",
      uiScore: 4.2,
      taskScore: 4.2,
      taskLabel: "Overall ease of use",
    },
  ];

  const sectionRedesigns = [
    {
      section: "Home Screen",
      before:
        "Dark theme tiles for transport modes, large intrusive ads at bottom, no search-first layout.",
      after:
        "Clean, search-focused layout with origin/destination input, transit icons, favourites strip, and minimal ad placement.",
    },
    {
      section: "Navigation Drawer",
      before:
        "Dark overlay menu with vertically stacked text links. Options like Update Timetable, Rate Us, and Select Language buried with no visual hierarchy.",
      after:
        "Light theme matching main UI, rounded containers and icons, new Feature Guide option added, social media icons refined at bottom.",
    },
    {
      section: "Local Train, Station List",
      before:
        "Congested list with no prioritisation, no recent stations, dark background reducing scanability.",
      after:
        "Improved spacing and lighter theme with recent stations surfaced at the top, Near Me section, and railway line filter tabs (ALL / W / C / H / T / U / P).",
    },
    {
      section: "Local Train, Train List",
      before:
        "Congested list with unnecessary information like train number cluttering the scan path.",
      after:
        "Simplified cards with improved spacing, lighter theme, and essential timing and direction information only.",
    },
    {
      section: "Local Train, Train Stops",
      before:
        "Dark list with numerous unnecessary buttons making it hard to track the journey path.",
      after:
        "Clean timeline with station bubbles, platform numbers, and departure times neatly aligned for each stop.",
    },
    {
      section: "Local Train, A to B",
      before:
        "Visually unappealing UI, search and results on separate screens without justification.",
      after:
        "Lighter theme with search and results on the same page, improving context and reducing navigation steps.",
    },
    {
      section: "Metro, Line Selection",
      before:
        "Dark theme with minimal spacing, plain list items, no visual separation between lines.",
      after:
        "Light theme with card-style line buttons, improved spacing, and clear visual separation for each metro line.",
    },
    {
      section: "Metro, Station Selection",
      before:
        "Dense vertical list on black background, no emphasis on selection state.",
      after:
        "Light blue background with large, tappable station buttons and highlighted selection, improving accessibility.",
    },
    {
      section: "Metro, Train Timings",
      before:
        "Dark vertical list with minimal styling, cluttered information, and unclear direction labels.",
      after:
        "Station bubbles with neatly aligned timings, spacious cards per train, and clear direction indicators.",
    },
    {
      section: "Monorail, Flow",
      before:
        "Direction selection prompted before station entry, causing confusion about which direction applied to which station.",
      after:
        "Station entry first, then direction selection. The sequence follows the user's natural mental model: where am I → where do I want to go.",
    },
    {
      section: "MSRTC, Home Screen",
      before:
        "Flat red theme, boxy buttons, crowded service list with no visual hierarchy.",
      after:
        "Clean layout with modern icons, soft colour palette, quick access to AC Services, Feedback, and Bus Booking, with a Recent section for repeat journeys.",
    },
    {
      section: "Bus, Search",
      before:
        "Single flat red/black theme, boxy buttons, limited search options visible upfront.",
      after:
        "Three clear search paths (Source & Destination, Bus Number, Bus Stop) with card-style results and colour-coded bus types.",
    },
    {
      section: "Ferry",
      before:
        "Static table layout with route pairs and dense text, no filtering capability.",
      after:
        "Source and destination input for quick filtering, all routes shown by default with frequency, journey time, fare, and bike allowance as scannable icons.",
    },
  ];

  const painPoints = [
    {
      area: "Ad Intrusiveness",
      desc: "Poorly placed and overly disruptive advertisements interrupting navigation flow.",
    },
    {
      area: "UX Writing",
      desc: "Interface text lacks clarity and helpful cues in critical places.",
    },
    {
      area: "Accessibility",
      desc: "No dedicated accessibility tools or thoughtful content segmentation for diverse users.",
    },
    {
      area: "System Feedback",
      desc: "No alerts for timetable updates or schedule changes, users rely on potentially outdated data.",
    },
    {
      area: "Navigation",
      desc: "Too many steps to access primary features like train schedules; rigid multi-click menu structure.",
    },
    {
      area: "Customisation",
      desc: "No ability to tailor the experience, train-only users must navigate unrelated transport sections.",
    },
    {
      area: "Aesthetics",
      desc: "Outdated visuals and layout reduce user trust and overall appeal.",
    },
    {
      area: "Efficiency",
      desc: "Fixed UI flow wastes time on frequent tasks; source/destination must be re-entered despite saved favourites.",
    },
  ];

  // Secondary research images rendered inline after the Secondary Research section
  const secondaryResearchImages = (project.images ?? []).filter((image) =>
    titleFromImage(image).toLowerCase().includes("secondary research"),
  );

  return (
    <div className="mt-10 space-y-6">
      {/* Primary Research */}
      <Page className="rounded-sm">
        <h2 className="font-heading text-2xl font-semibold text-foreground">
          Primary Research
        </h2>
        <p className="mt-3 leading-7 text-muted-foreground">
          Surveys conducted with 91 metro and railway travellers confirmed that
          M-Indicator, while still popular, is frustrating users due to poor UI
          , leading some to switch to competitors or avoid using it despite
          needing it daily.
        </p>
        <div className="mt-6 space-y-5">
          {primaryResearch.map((item) => (
            <div key={item.question}>
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-medium text-foreground">
                  {item.question}
                </p>
                <p className="font-mono text-xs text-primary shrink-0">
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
        <div className="mt-8 pt-6 border-t border-border">
          <h3 className="font-heading text-lg font-semibold text-foreground">
            Key Findings
          </h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              { stat: "65.9%", label: "Use app primarily for Local Train" },
              { stat: "37.4%", label: "Use app for Metro" },
              { stat: "63.7%", label: "Face frequent errors on the app" },
              { stat: "68.2%", label: "Find the layout cluttered (rated 1–2)" },
            ].map((s) => (
              <div
                key={s.stat}
                className="rounded-sm border border-border bg-card/50 p-4"
              >
                <p className="font-heading text-2xl font-bold text-primary">
                  {s.stat}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Page>

      {/* Secondary Research */}
      <Page className="rounded-sm">
        <h2 className="font-heading text-2xl font-semibold text-foreground">
          Secondary Research
        </h2>
        <p className="mt-3 leading-7 text-muted-foreground">
          Google Play Store review analysis revealed consistent negative
          patterns across thousands of user reviews, regardless of when they
          were written, indicating long-standing, unresolved issues rather than
          one-off bugs.
        </p>
        <div className="mt-6 space-y-3">
          {[
            {
              issue: "Outdated emergency contact information",
              detail:
                "Users report calling numbers listed under Casualty/Emergency that no longer connect, raising safety concerns.",
            },
            {
              issue: "Live tracking non-functional",
              detail:
                "Train and bus live tracking system broken, leading users to rely on static timetables and miss trains.",
            },
            {
              issue: "Non-functional favourites",
              detail:
                "Saved routes require re-entering source and destination each time, defeating the purpose of the feature.",
            },
            {
              issue: "Platform numbers too small",
              detail:
                "Platform number font size reported as too small to read quickly on the platform, a critical usability failure.",
            },
            {
              issue: "Categorised train listings removed",
              detail:
                "249 users found the removal of Central/Western/Harbour line categories from the new version more difficult than the old one.",
            },
            {
              issue: "Excessive ad interruptions",
              detail:
                "Ads placed mid-navigation, with mandatory viewing periods before dismissal, blocking users from completing tasks.",
            },
          ].map((item) => (
            <div
              key={item.issue}
              className="rounded-sm border border-border bg-card/45 p-4"
            >
              <p className="font-medium text-foreground">{item.issue}</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </Page>

      {/* Secondary Research Images, immediately after Secondary Research */}
      {secondaryResearchImages.length > 0 && (
        <div className="space-y-6">
          {secondaryResearchImages.map((image, index) => (
            <Page key={image} className="rounded-sm">
              <p className="font-mono text-xs uppercase tracking-wider text-primary">
                Secondary Research, Figure {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-heading text-xl font-semibold text-foreground">
                {titleFromImage(image)}
              </h3>
              <div className="mt-6 relative min-h-[360px] overflow-hidden rounded-sm border border-border bg-card">
                <Image
                  src={image}
                  alt={titleFromImage(image)}
                  fill
                  sizes="(min-width: 896px) 800px, 100vw"
                  className="object-contain p-3"
                />
              </div>
              <p className="mt-5 leading-7 text-muted-foreground">
                {figureNote(project, image)}
              </p>
            </Page>
          ))}
        </div>
      )}

      {/* Pain Points */}
      <Page className="rounded-sm">
        <h2 className="font-heading text-2xl font-semibold text-foreground">
          Pain Points Identified
        </h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {painPoints.map((p) => (
            <div
              key={p.area}
              className="rounded-sm border border-border bg-card/45 p-4"
            >
              <p className="font-mono text-xs uppercase tracking-wide text-primary">
                {p.area}
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </Page>

      {/* Heuristic Evaluation */}
      <Page className="rounded-sm">
        <h2 className="font-heading text-2xl font-semibold text-foreground">
          Heuristic Evaluation
        </h2>
        <p className="mt-3 leading-7 text-muted-foreground">
          The original app was scored against Nielsen's 10 usability heuristics
          on a scale of 1–10. Scores of 10 indicate the heuristic is fully
          violated (worst). The app scored perfectly on Match Between System &
          Real World and Consistency & Standards, meaning it uses familiar
          language and behaves consistently, but scored critically low on
          aesthetics, error recovery, and documentation.
        </p>
        <div className="mt-6 space-y-3">
          {heuristicScores.map((h) => (
            <div key={h.heuristic}>
              <div className="flex items-center justify-between gap-4 mb-1">
                <span className="text-sm text-foreground">{h.heuristic}</span>
                <span className="font-mono text-xs text-primary shrink-0">
                  {h.score}/10
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-border">
                <div
                  className={`h-full rounded-full ${h.score >= 8 ? "bg-red-500" : h.score >= 4 ? "bg-amber-500" : "bg-emerald-500"}`}
                  style={{ width: `${h.score * 10}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Higher bar = more violated (worse). Red = critical violation, Amber =
          moderate, Green = acceptable.
        </p>
      </Page>

      {/* Section Redesigns */}
      <Page className="rounded-sm">
        <h2 className="font-heading text-2xl font-semibold text-foreground">
          Section-by-Section Redesigns
        </h2>
        <p className="mt-3 leading-7 text-muted-foreground">
          Every transport module in the app was redesigned. The changes below
          cover all 13 sections addressed in the redesign report, from the home
          screen through to the ferry booking flow.
        </p>
        <div className="mt-6 space-y-4">
          {sectionRedesigns.map((s) => (
            <div
              key={s.section}
              className="rounded-sm border border-border bg-card/45 p-5"
            >
              <p className="font-mono text-xs uppercase tracking-wider text-primary">
                {s.section}
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground mb-2">
                    Before
                  </p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {s.before}
                  </p>
                </div>
                <div className="rounded-sm border border-primary/20 bg-primary/5 p-3">
                  <p className="font-mono text-xs uppercase tracking-wide text-primary mb-2">
                    After
                  </p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {s.after}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Page>

      {/* Before & After images */}
      <div className="space-y-6">
        <div>
          <h2 className="font-heading text-2xl font-semibold text-foreground">
            Before & After Screens
          </h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            Each screen comparison is drawn directly from the redesign report,
            showing the original M-Indicator interface alongside the Figma
            redesign.
          </p>
        </div>
        {project.beforeAfterExamples?.map((item, index) => (
          <Page key={item.feature} className="rounded-sm">
            <p className="font-mono text-xs uppercase tracking-wider text-primary">
              Before & After
            </p>
            <h3 className="mt-2 font-heading text-xl font-semibold text-foreground">
              {item.feature}
            </h3>
            {mIndicatorBeforeAfterImages[index] ? (
              <div className="mt-6 relative min-h-[420px] overflow-hidden rounded-sm border border-border bg-background">
                <Image
                  src={mIndicatorBeforeAfterImages[index]}
                  alt={`${item.feature} before and after`}
                  fill
                  sizes="(min-width: 896px) 800px, 100vw"
                  className="object-contain p-3"
                />
              </div>
            ) : null}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-sm border border-border bg-card/45 p-4">
                <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground mb-2">
                  Before
                </p>
                <p className="text-sm leading-6 text-muted-foreground">
                  {item.before}
                </p>
              </div>
              <div className="rounded-sm border border-primary/20 bg-primary/5 p-4">
                <p className="font-mono text-xs uppercase tracking-wide text-primary mb-2">
                  After
                </p>
                <p className="text-sm leading-6 text-muted-foreground">
                  {item.after}
                </p>
              </div>
            </div>
          </Page>
        ))}
      </div>

      {/* User Testing Results */}
      <Page className="rounded-sm">
        <h2 className="font-heading text-2xl font-semibold text-foreground">
          User Testing Results
        </h2>
        <p className="mt-3 leading-7 text-muted-foreground">
          Usability testing conducted on 19 December 2025 with 10 participants
          across age groups 18–50, drawn from Mumbai and suburban regions.
          Participants included daily commuters (40%), working professionals
          (30%), and students (30%). 70% reported using transport apps daily.
        </p>
        <div className="mt-6 overflow-hidden rounded-sm border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-card/50">
                <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-wide text-primary">
                  Module
                </th>
                <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-wide text-primary">
                  UI Score / 5
                </th>
                <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-wide text-primary">
                  Task Metric
                </th>
                <th className="hidden sm:table-cell px-4 py-3 text-left font-mono text-xs uppercase tracking-wide text-primary">
                  What was measured
                </th>
              </tr>
            </thead>
            <tbody>
              {userTestingResults.map((row, i) => (
                <tr
                  key={row.module}
                  className={`border-b border-border/50 last:border-0 ${i % 2 === 0 ? "bg-background/40" : "bg-card/30"}`}
                >
                  <td className="px-4 py-3 font-medium text-foreground">
                    {row.module}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-primary">
                    {row.uiScore}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-primary">
                    {row.taskScore}
                  </td>
                  <td className="hidden sm:table-cell px-4 py-3 text-sm text-muted-foreground">
                    {row.taskLabel}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            { label: "Overall Satisfaction", value: "4.2 / 5" },
            { label: "Task Completion Rate", value: "99%" },
            { label: "Sample Size", value: "10 participants" },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-sm border border-border bg-card/50 p-4"
            >
              <p className="font-mono text-xs uppercase tracking-wide text-primary">
                {m.label}
              </p>
              <p className="mt-2 font-heading text-xl font-bold text-foreground">
                {m.value}
              </p>
            </div>
          ))}
        </div>
      </Page>
    </div>
  );
}

// ─── Main Template ────────────────────────────────────────────────────────────

export function ProjectDetailTemplate({ project }: ProjectDetailTemplateProps) {
  const kindLabel = project.kind === "uiux" ? "UI/UX Case Study" : "Project";
  const figures = projectFigures(project);

  return (
    <main className="min-h-screen bg-background/45">
      <section className="relative pt-24 pb-20">
        <div className="absolute inset-0 bg-linear-to-b from-card/40 via-transparent to-background" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Back buttons */}
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

          {/* Hero page, image on top, description below */}
          <Page className="rounded-sm">
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
                sizes="(min-width: 896px) 800px, 100vw"
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

            <div className="mt-10 pt-10 border-t border-border">
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

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
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
            </div>
          </Page>

          {/* Process & Outcomes */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <Page className="rounded-sm">
              <h2 className="font-heading text-2xl font-semibold text-foreground">
                Process
              </h2>
              <ol className="mt-5 space-y-4 text-muted-foreground">
                {project.process.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="font-mono text-xs text-primary shrink-0 mt-0.5">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </Page>

            <Page className="rounded-sm">
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

          {/* Figures */}
          {figures.length > 0 ? (
            <div className="mt-10 space-y-6">
              {figures.map((figure, index) => (
                <Page key={figure.image} className="rounded-sm">
                  <p className="font-mono text-xs uppercase tracking-wider text-primary">
                    Figure {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-heading text-xl font-semibold text-foreground">
                    {figure.title}
                  </h3>
                  <div className="mt-6 relative min-h-[360px] overflow-hidden rounded-sm border border-border bg-card">
                    <Image
                      src={figure.image}
                      alt={figure.title}
                      fill
                      sizes="(min-width: 896px) 800px, 100vw"
                      className="object-contain p-3"
                    />
                  </div>
                  <p className="mt-5 leading-7 text-muted-foreground">
                    {figure.note}
                  </p>
                </Page>
              ))}
            </div>
          ) : null}

          {/* Project-specific enriched content */}
          {project.slug === "vehicle-parking-management-system" && (
            <VPMSContent />
          )}
          {project.slug === "sketch-to-face-generation" && <SketchContent />}
          {project.slug === "m-indicator-redesign" && (
            <MIndicatorContent project={project} />
          )}

          {/* References */}
          {project.references && project.references.length > 0 ? (
            <div className="mt-10">
              <Page className="rounded-sm">
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
