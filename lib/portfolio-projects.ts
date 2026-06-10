import { Code2, Smartphone, type LucideIcon } from "lucide-react";

export type ProjectKind = "project" | "uiux";

export type ProjectDetail = {
  slug: string;
  kind: ProjectKind;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  image: string;
  tags: string[];
  role: string;
  duration: string;
  year: string;
  challenge: string;
  approach: string;
  process: string[];
  outcomes: string[];
  designHighlights?: string[];
  abstract?: string;
  architecture?: string;
  results?: string[];
  metrics?: { name: string; value: string }[];
  references?: string[];
  images?: string[];
  primaryResearch?: string[];
  secondaryResearch?: string[];
  heuristicRatings?: { metric: string; score: number }[];
  primaryResearchFindings?: {
    question: string;
    percentage: number;
    detail: string;
  }[];
  secondaryResearchFindings?: {
    question: string;
    percentage: number;
    detail: string;
  }[];
  researchConclusion?: string;
  userTesting?: {
    demographics?: string;
    sampleSize?: number;
    date?: string;
    overallSatisfaction?: string;
    taskCompletion?: string;
    moduleResults?: { module: string; rating: string; notes?: string }[];
  };
  testingTasks?: string[];
  beforeAfterExamples?: { feature: string; before: string; after: string }[];
  icon?: LucideIcon;
};

export const projectDetails: ProjectDetail[] = [
  {
    slug: "vehicle-parking-management-system",
    kind: "project",
    title: "Vehicle Parking Management System",
    description:
      "A full-stack MERN application with a complete DevOps pipeline for automated parking slot booking, monitoring and scalable deployment.",
    longDescription:
      "Vehicle Parking Management System is a production-oriented MERN web application that automates slot availability, booking and cancellation across multiple vehicle types. The project includes containerization with Docker, Kubernetes orchestration, and a Jenkins-driven CI/CD pipeline that builds, tests, and deploys the application to a Kubernetes cluster.",
    category: "Engineering Project",
    image: "/images/vpms/home page.png",
    tags: ["React", "Node.js", "MongoDB", "Docker", "Kubernetes", "Jenkins"],
    role: "Full-stack & DevOps Engineer",
    duration: "10 weeks",
    year: "2025",
    challenge:
      "Manual parking management and fragmented deployments required a resilient, automated system with persistent storage, scaling, and reliable CI/CD for repeatable releases.",
    approach:
      "Built a MERN stack app, containerized services with Docker, automated testing with Jest, and implemented an end-to-end Jenkins Declarative pipeline to build, push images, and deploy to Kubernetes with PVCs, HPA and Ingress routing.",
    process: [
      "Defined system architecture: frontend (React Vite), backend (Node/Express), and MongoDB data layer.",
      "Implemented features for slot availability, booking and cancellation across vehicle types.",
      "Containerized services and wrote Kubernetes manifests (namespace, deployments, services, PVC, HPA, ingress).",
      "Configured Jenkins pipeline: checkout, install, test, build images, push to Docker Hub, deploy to cluster.",
    ],
    outcomes: [
      "Automated CI/CD delivering reproducible builds and Kubernetes deployments.",
      "Reliable persistent storage for MongoDB via PVC and scalable backend using HPA.",
      "Comprehensive Jest test coverage (17 tests across 8 suites) ensuring pipeline stability.",
    ],
    abstract:
      "A full-stack MERN parking application demonstrating a complete DevOps lifecycle: containerization (Docker), Kubernetes orchestration (HPA, PVC, Ingress), and Jenkins Declarative CI/CD that builds, tests, and deploys reproducible releases.",
    architecture:
      "Three-tier architecture: React Vite frontend, Node/Express backend, and MongoDB data layer. CI/CD pipeline automates build → test → image push → kubectl apply across a dedicated namespace with Service, Deployment, PVC, HPA, and Ingress resources.",
    results: [
      "Jenkins build #9: full pipeline success (checkout → test → build → push → deploy).",
      "All Jest tests passed: 17 total across backend and frontend.",
      "Kubernetes deployment confirmed with running pods, ingress routing, and HPA configured.",
    ],
    metrics: [
      { name: "Jest Tests", value: "17 (all passing)" },
      { name: "Kubernetes", value: "HPA (min:2, max:5), PVC for MongoDB" },
    ],
    references: [
      "Docker Documentation - https://docs.docker.com",
      "Jenkins User Documentation - https://www.jenkins.io/doc/",
      "Kubernetes Docs - https://kubernetes.io/docs/",
    ],
    images: [
      "/images/vpms/architecture diagram.png",
      "/images/vpms/backend test.png",
      "/images/vpms/book parking slot page.png",
      "/images/vpms/booking cancelled page.png",
      "/images/vpms/booking confirmed page.png",
      "/images/vpms/cancel booking page.png",
      "/images/vpms/check parking slot availability page.png",
      "/images/vpms/confirm cancellation page.png",
      "/images/vpms/containerization with docker.png",
      "/images/vpms/database page.png",
      "/images/vpms/frontend test.png",
      "/images/vpms/home page.png",
      "/images/vpms/jenkins page.png",
      "/images/vpms/kubernetes usage.png",
    ],
    icon: Code2,
  },
  {
    slug: "sketch-to-face-generation",
    kind: "project",
    title: "Sketch → Face: CLIP‑guided GAN",
    description:
      "A multimodal deep learning system that generates realistic face images from forensic sketches and textual descriptions using a CLIP‑conditioned GAN.",
    longDescription:
      "This project implements a CLIP‑guided conditional GAN that fuses hierarchical sketch features with textual attribute embeddings to synthesize high‑resolution, identity‑preserving face images. The generator uses multi‑stage encoding, dual‑pooling fusion, self‑attention refinement and a PatchGAN discriminator; training optimizes adversarial, perceptual and reconstruction losses.",
    category: "Engineering Project",
    image: "/images/sketch to face/Sketch-to-photo synthesis for an East Asian female subject.png",
    tags: ["PyTorch", "GAN", "CLIP", "Computer Vision", "Deep Learning"],
    role: "ML Researcher / Engineer",
    duration: "12 weeks",
    year: "2025",
    challenge:
      "Sketches lack texture and color while demographic bias in datasets reduces real‑world robustness; the task requires fusing sparse structural cues with semantic attributes to preserve identity.",
    approach:
      "Designed a dual‑path encoder–decoder GAN that conditions on CLIP text embeddings, uses multi‑head self‑attention and PatchGAN discrimination, and combines adversarial, L1, perceptual and feature‑matching losses for stable, realistic synthesis.",
    process: [
      "Curated and preprocessed paired sketch–photo datasets, tokenized textual attribute descriptions using CLIP.",
      "Implemented encoder modules for sketches and masks, projected CLIP embeddings to spatial maps, and fused modalities at the bottleneck.",
      "Trained with alternating generator/discriminator updates using Adam optimizers and scheduled learning‑rate decay; saved model checkpoints for resumption.",
      "Evaluated with PSNR/SSIM metrics and qualitative comparisons against baselines, and iterated on loss weights to improve identity preservation.",
    ],
    outcomes: [
      "Generated high‑fidelity reconstructions with average PSNR ~21.3 dB and SSIM ~0.72 across the test set.",
      "Demonstrated improved identity preservation by combining sketch structure and textual cues, and produced qualitative results robust across demographic variations.",
      "Provided a reproducible research pipeline with training scripts, checkpoints, and evaluation metrics for future improvements.",
    ],
    abstract:
      "A multimodal sketch-to-face generative system that fuses forensic sketches with CLIP-encoded textual attributes to synthesize realistic, identity-preserving facial images using a CLIP-guided conditional GAN.",
    architecture:
      "Dual-path encoder–decoder GAN: multi-stage sketch encoder, mask input, CLIP text projection fused at the bottleneck, self-attention refinement, and a PatchGAN discriminator. Training uses adversarial, L1, perceptual (VGG), and feature-matching losses.",
    results: [
      "Quantitative metrics: PSNR ≈ 21.27 dB, SSIM ≈ 0.719 on test dataset.",
      "Qualitative results demonstrated improved identity preservation across diverse demographics and accessory conditions.",
      "Dataset: ~2,292 paired sketch–photo samples with textual attributes; checkpoints saved every 10 epochs.",
    ],
    metrics: [
      { name: "PSNR (avg)", value: "21.27 dB" },
      { name: "SSIM (avg)", value: "0.719" },
      { name: "Dataset", value: "2292 paired samples" },
    ],
    references: [
      "HiTS: Hierarchical Text-Guided Stylization for Face Sketch-to-Photo Synthesis",
      "Sketch2Portrait: Attention-Based GAN for Crime Investigation",
      "DeepFaceEditing: Disentangled Geometry and Appearance Control",
    ],
    images: [
      "/images/sketch to face/architecture.png",
      "/images/sketch to face/data flow diagram.png",
      "/images/sketch to face/Distribution of PSNR values across test samples.png",
      "/images/sketch to face/Distribution of SSIM values across test samples.png",
      "/images/sketch to face/High-level block diagram of the multimodal sketch-to-face synthesis framework.png",
      "/images/sketch to face/Sketch-to-photo synthesis for a Caucasian male subject with eyeglasses..png",
      "/images/sketch to face/Sketch-to-photo synthesis for a male subject with long hair..png",
      "/images/sketch to face/Sketch-to-photo synthesis for an African male subject..png",
      "/images/sketch to face/Sketch-to-photo synthesis for an East Asian female subject.png",
      "/images/sketch to face/training workflow.png",
    ],
    designHighlights: [
      "CLIP‑guided textual conditioning fused with visual bottleneck features.",
      "Dual‑pooling and self‑attention for improved global coherence.",
      "PatchGAN discriminator and perceptual losses for sharper textures and identity preservation.",
    ],
    icon: Code2,
  },
  {
    slug: "m-indicator-redesign",
    kind: "uiux",
    title: "M‑Indicator — App Redesign & Testing",
    description:
      "A complete redesign of M‑Indicator focused on simplifying navigation, decluttering primary transit workflows, and improving task efficiency for commuters across Mumbai and suburban regions.",
    longDescription:
      "The M‑Indicator redesign project refactors the app into a search‑first, transit‑centric experience: clearer information hierarchy, reduced cognitive load, and consistent visual language across train, metro, bus, monorail, ferry and MSRTC modules. The work includes user research, heuristic evaluation, wireframes, high‑fidelity prototypes, and usability testing with representative commuters.",
    category: "UI/UX Case Study",
    image: "/images/m-indicator/bg.png",
    tags: ["Figma", "User Research", "Usability Testing", "Accessibility"],
    role: "UI/UX Designer",
    duration: "8–12 weeks",
    year: "2025",
    challenge:
      "The original app offered broad functionality but suffered from cluttered UI, inconsistent patterns, intrusive ads, and inefficient flows for primary commuter tasks — especially local train and metro journeys.",
    approach:
      "Conducted mixed qualitative and quantitative research, synthesized heuristics and Play Store reviews, prioritized primary commuter journeys, and iteratively validated wireframes and Figma prototypes with representative users to tune information hierarchy and interaction flows.",
    process: [
      "Stakeholder interviews and app store review analysis to surface pain points.",
      "Heuristic evaluation across 10 core usability criteria to quantify deficits.",
      "Design workshops and wireframing to establish a search‑first home and transit icons taxonomy.",
      "Prototyping in Figma and moderated usability tests (N=10) covering Train, Metro, Bus, Monorail, Ferry and MSRTC tasks.",
      "Iterative refinements: favorites, recent stations, direction-first flows, and reduced ad intrusiveness.",
    ],
    outcomes: [
      "Overall satisfaction: 4.2 / 5 across participants.",
      "Task completion rate: 99% across scripted scenarios (train search, route understanding, bus searches).",
      "Module-specific improvements: Train UI ease 4.3, Bus UI 4.3, Metro UI 4.1 average ratings.",
      "Reduced navigation complexity with a search‑focused home and visible favorites—fewer repeated inputs in testing scenarios.",
    ],
    designHighlights: [
      "Search‑first home screen with quick access to favorites and recent stations for fast trip planning.",
      "Unified transit iconography and card‑style metro/line selection for clearer discovery.",
      "Direction‑after‑station flow in Monorail to reduce input confusion and improve timeliness.",
      "Light, pastel color palette and improved spacing to increase scanability and reduce perceived clutter.",
      "Reduced ad intrusiveness and clearer support & feedback pathways.",
    ],
    abstract:
      "Redesigned M‑Indicator to prioritize commuter tasks by simplifying primary flows, restructuring navigation, and validating changes through targeted usability testing. The design achieves higher task efficiency and satisfaction while keeping secondary transit services discoverable.",
    architecture:
      "Design artifacts include a search‑focused home, transit module templates (train/metro/bus), navigation drawer with regional toggles, and a feature guide overlay. Prototypes and flowcharts document A→B vs Station‑first paths and updated timeline visualizations for route clarity.",
    results: [
      "Average UI quality across modules: 4.2 / 5.",
      "Train route visualization clarity: 4.3 / 5; timeline and station order clarity: 4.4 / 5.",
      "Bus and Monorail modules: consistent 4.3 / 5 satisfaction in targeted tasks.",
    ],
    metrics: [
      { name: "Overall satisfaction", value: "4.2 / 5" },
      { name: "Task completion", value: "99% (scripted tasks)" },
      { name: "Train UI ease", value: "4.3 / 5" },
    ],
    references: [
      "M‑Indicator usability study & Figma prototypes (project reports)",
      "Play Store review synthesis and primary interviews",
    ],
    images: [
      "/images/m-indicator/abstract.png",
      "/images/m-indicator/bg.png",
      "/images/m-indicator/secondary research review 1.png",
      "/images/m-indicator/secondary research review 2.png",
      "/images/m-indicator/secondary research review 3.png",
      "/images/m-indicator/select line screen before and after.png",
      "/images/m-indicator/select station screen before and after.png",
      "/images/m-indicator/station details screen before and after.png",
      "/images/m-indicator/train timings screen before and after.png",
      "/images/m-indicator/train timings screen expanded view before and after.png",
      "/images/m-indicator/train timings screen Versova to Ghatkopar before and after.png",
    ],
    primaryResearchFindings: [
      {
        question: "Users described the app as old and clunky",
        percentage: 90,
        detail:
          "Most metro and railway travelers said the current experience feels dated and frustrating to use.",
      },
      {
        question: "Users found the UI unintuitive",
        percentage: 85,
        detail:
          "Participants struggled to understand where primary actions lived and how to reach them quickly.",
      },
      {
        question: "Primary commuter flows should be prioritized",
        percentage: 95,
        detail:
          "The report repeatedly states that local train and metro tasks should appear first in the interface.",
      },
      {
        question: "Favorites and shortcuts should reduce repetition",
        percentage: 75,
        detail:
          "Users wanted faster access to repeated searches, saved routes, and nearby stations.",
      },
      {
        question: "Features that look broken reduce trust",
        percentage: 70,
        detail:
          "The report notes that incomplete or non-functional features lower confidence in the app.",
      },
    ],
    secondaryResearchFindings: [
      {
        question: "Cluttered UI and confusing navigation in reviews",
        percentage: 95,
        detail:
          "Google Play reviews consistently called out the cluttered layout, repetitive actions and hard-to-follow flows.",
      },
      {
        question: "Intrusive ads disrupt the experience",
        percentage: 90,
        detail:
          "Reviews and the report both highlight large or poorly placed ads as a major friction point.",
      },
      {
        question: "Missing or outdated timetable information",
        percentage: 80,
        detail:
          "Secondary research points to inaccurate, missing, or hard-to-find train and bus timings.",
      },
      {
        question: "Platform numbers and accessibility details are hard to see",
        percentage: 85,
        detail:
          "Small fonts and weak visibility make critical transport details difficult to read.",
      },
      {
        question: "Support and emergency information needs improvement",
        percentage: 75,
        detail:
          "The report notes outdated or unreachable contact details and a desire for better help content.",
      },
    ],
    researchConclusion:
      "Both research rounds point to the same conclusion: the app should prioritize commuter-first tasks, reduce visual clutter, surface high-frequency actions sooner, and keep information clear, current, and easy to scan.",
    heuristicRatings: [
      { metric: "Visibility of System Status", score: 8 },
      { metric: "Match Between System & Real World", score: 10 },
      { metric: "User Control & Freedom", score: 3 },
      { metric: "Consistency & Standards", score: 10 },
      { metric: "Error Prevention", score: 4 },
      { metric: "Recognition Rather Than Recall", score: 4 },
      { metric: "Flexibility & Efficiency of Use", score: 4 },
      { metric: "Aesthetic & Minimalist Design", score: 2 },
      { metric: "Help Users Recognize, Diagnose, & Recover", score: 2 },
      { metric: "Help & Documentation", score: 2 },
    ],
    userTesting: {
      demographics:
        "Daily commuters, college students, working professionals, occasional users (Mumbai suburbs)",
      sampleSize: 10,
      date: "2025-12-19",
      overallSatisfaction: "4.2 / 5",
      taskCompletion: "99% (scripted tasks)",
      moduleResults: [
        {
          module: "Local Train",
          rating: "4.1 / 5",
          notes: "Train search/listing rated 4.3 for ease; route timeline 4.4",
        },
        {
          module: "Metro",
          rating: "4.1 / 5",
          notes: "Some variability; line selection felt complex for some users",
        },
        {
          module: "Bus",
          rating: "4.3 / 5",
          notes: "Strong feedback for bus search paradigms and readability",
        },
        {
          module: "Monorail",
          rating: "4.3 / 5",
          notes: "Good discoverability for niche module",
        },
        {
          module: "Ferry",
          rating: "4.3 / 5",
          notes: "Solid clarity for seasonal usage",
        },
        {
          module: "MSRTC",
          rating: "4.2 / 5",
          notes: "Good intercity flow handling",
        },
      ],
    },
    testingTasks: [
      "Local Train Search: find next available train and platform (Vasai Road → Andheri)",
      "Train Route Understanding: count stations and journey time (Virar → Borivali)",
      "Metro Line & Timing Search: choose correct line and timing (Versova → Ghatkopar)",
      "Bus Search (Source → Destination): find buses between Andheri and Borivali",
      "Bus Number Search: find route & timings for bus 105",
      "Monorail Route & Timing: find next monorail and intermediate stations (Chembur → Sant Gadge Maharaj Chowk)",
      "Ferry Availability: first & last ferry timings (Gorai Jetty → Borivali)",
    ],
    beforeAfterExamples: [
      {
        feature: "Select Line Screen",
        before:
          "Dark theme with minimal spacing and simple list items that made line selection feel dense.",
        after:
          "Light card-style buttons with clearer spacing and improved readability for faster selection.",
      },
      {
        feature: "Select Station Screen",
        before:
          "Congested station list with no priority given to recent stations or discovery shortcuts.",
        after:
          "Improved spacing, lighter theme, and easier-to-scan station options with better hierarchy.",
      },
      {
        feature: "Station Details (Andheri)",
        before:
          "Compact dark list with small fonts and unclear direction information.",
        after:
          "Spacious cards for timings and clearer direction indicators that improve comprehension.",
      },
      {
        feature: "Train Timings – Andheri",
        before:
          "Dark vertical list with minimal styling and cluttered information.",
        after:
          "Light timeline layout with station bubbles and cleaner station-time pairing.",
      },
      {
        feature: "Train Timings – Versova to Ghatkopar",
        before:
          "Plain list without interactive elements and unclear current status.",
        after:
          "Dropdown-style sections and expanded route details that make tracking easier.",
      },
      {
        feature: "Expanded View",
        before:
          "A plain list that made it hard to focus on the relevant journey path.",
        after:
          "Expanded route cards that keep only the useful station and timing information visible.",
      },
    ],
    icon: Smartphone,
  },
];

export const projects = projectDetails;

export const getProjectBySlug = (slug: string) =>
  projectDetails.find((project) => project.slug === slug);
