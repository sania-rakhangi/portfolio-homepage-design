import {
  Figma,
  Layers,
  MousePointer,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export type ProjectKind = "featured" | "uiux";

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
  icon?: LucideIcon;
};

export type FeaturedProject = {
  slug: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  category: string;
};

export type UiUxProject = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tools: string[];
  type: string;
};

export const projectDetails: ProjectDetail[] = [
  {
    slug: "smart-home-dashboard",
    kind: "featured",
    title: "Smart Home Dashboard",
    description:
      "A comprehensive IoT dashboard for monitoring and controlling smart home devices with real-time data visualization.",
    longDescription:
      "Smart Home Dashboard is a centralized command center for home automation devices. The project combines telemetry streams from connected sensors and appliances, then presents them through clean visual panels that support quick monitoring and real-time control.",
    category: "Full Stack",
    image: "/placeholder-project-1.jpg",
    tags: ["React", "Node.js", "MQTT", "D3.js"],
    role: "Full-stack Developer",
    duration: "12 weeks",
    year: "2025",
    challenge:
      "Device data arrived at different rates and formats, making it difficult to keep dashboard state accurate and responsive.",
    approach:
      "I standardized incoming data contracts, created a resilient event pipeline, and built modular widgets so users could personalize their monitoring layout.",
    process: [
      "Mapped user monitoring journeys and prioritized high-frequency actions.",
      "Designed a real-time event model with fallback and reconnection handling.",
      "Built data visualizations and control widgets with reusable state patterns.",
      "Validated interaction flows with usage-based test scenarios.",
    ],
    outcomes: [
      "Faster device insight through near real-time updates.",
      "Reduced control friction with grouped quick actions.",
      "Improved reliability during unstable network conditions.",
    ],
  },
  {
    slug: "algorithm-visualizer",
    kind: "featured",
    title: "Algorithm Visualizer",
    description:
      "Interactive web application that visualizes common sorting and pathfinding algorithms for educational purposes.",
    longDescription:
      "Algorithm Visualizer turns abstract computational concepts into interactive animations. It allows learners to compare algorithm behavior, speed, and complexity through side-by-side controls and step-by-step simulation playback.",
    category: "Frontend",
    image: "/placeholder-project-2.jpg",
    tags: ["TypeScript", "Canvas API", "React"],
    role: "Frontend Developer",
    duration: "8 weeks",
    year: "2024",
    challenge:
      "Complex state transitions during animations caused performance issues and made comparisons between algorithms hard to follow.",
    approach:
      "I introduced a deterministic simulation engine with timeline controls, frame batching, and configurable speed settings for clear educational pacing.",
    process: [
      "Defined learning goals for sorting and pathfinding tracks.",
      "Implemented a canvas renderer with timeline scrubbing controls.",
      "Added complexity overlays and operation counters.",
      "Ran usability feedback sessions with student users.",
    ],
    outcomes: [
      "Clearer understanding of algorithm trade-offs for learners.",
      "Smoother playback under larger input datasets.",
      "Higher engagement through interactive controls.",
    ],
  },
  {
    slug: "embedded-systems-monitor",
    kind: "featured",
    title: "Embedded Systems Monitor",
    description:
      "Real-time monitoring system for embedded devices with custom firmware and wireless communication protocols.",
    longDescription:
      "Embedded Systems Monitor is a diagnostic platform for low-level hardware environments. The system collects and streams firmware-level metrics to a web interface, helping teams identify faults, optimize performance, and verify device behavior in production-like conditions.",
    category: "Systems",
    image: "/placeholder-project-3.jpg",
    tags: ["C++", "Python", "WebSocket", "ARM"],
    role: "Systems Engineer",
    duration: "14 weeks",
    year: "2025",
    challenge:
      "Telemetry from constrained devices had tight power and bandwidth limitations while still requiring reliable live diagnostics.",
    approach:
      "I optimized firmware logging granularity, built a lightweight transport layer, and designed anomaly-first dashboard alerts to surface critical events quickly.",
    process: [
      "Established diagnostic metrics and threshold conditions.",
      "Implemented firmware-side telemetry compression routines.",
      "Built a WebSocket ingestion service for live updates.",
      "Designed alert-first visual patterns for debugging workflows.",
    ],
    outcomes: [
      "Earlier fault detection during long-running device sessions.",
      "Lower telemetry overhead on constrained hardware.",
      "More efficient debugging cycles for firmware teams.",
    ],
  },
  {
    slug: "mobile-banking-redesign",
    kind: "uiux",
    title: "Mobile Banking Redesign",
    description:
      "Complete UX overhaul of a banking app focusing on accessibility and user-centered design principles.",
    longDescription:
      "Mobile Banking Redesign reimagines critical financial flows for clarity and trust. The project focused on reducing user anxiety around transactions while improving accessibility and improving completion rates for key tasks.",
    icon: Smartphone,
    category: "Case Study",
    image: "/placeholder-project-1.jpg",
    tags: ["Figma", "Principle", "User Testing"],
    role: "UI/UX Designer",
    duration: "10 weeks",
    year: "2025",
    challenge:
      "Users found transfer and bill-pay journeys confusing, especially when managing multiple accounts and payment deadlines.",
    approach:
      "I simplified information hierarchy, introduced clearer status feedback, and validated redesigned flows through iterative usability tests.",
    process: [
      "Conducted heuristic evaluation and user interview synthesis.",
      "Built wireframes and tested revised IA for core flows.",
      "Created high-fidelity interactive prototypes in Figma.",
      "Refined accessibility contrast and touch target standards.",
    ],
    outcomes: [
      "Higher completion confidence for key financial actions.",
      "Improved accessibility across high-priority screens.",
      "Reduced task confusion in account and payment flows.",
    ],
  },
  {
    slug: "ecommerce-design-system",
    kind: "uiux",
    title: "E-commerce Design System",
    description:
      "Comprehensive design system with reusable components, tokens, and documentation for scalable product design.",
    longDescription:
      "This design system established a scalable visual and interaction foundation for an e-commerce product suite. It aligned design and engineering with reusable components, tokenized styles, and practical implementation guidance.",
    icon: Layers,
    category: "Design System",
    image: "/placeholder-project-2.jpg",
    tags: ["Figma", "Storybook", "Design Tokens"],
    role: "Product Designer",
    duration: "9 weeks",
    year: "2024",
    challenge:
      "Inconsistent UI patterns across teams slowed shipping velocity and created brand fragmentation.",
    approach:
      "I defined a shared token system, documented component usage rules, and partnered with developers to ensure implementation parity.",
    process: [
      "Audited existing interfaces and identified repeatable patterns.",
      "Defined typography, spacing, and color token architecture.",
      "Built reusable components and variant guidelines.",
      "Published documentation with adoption examples.",
    ],
    outcomes: [
      "More consistent cross-product visual language.",
      "Faster handoff and implementation cycles.",
      "Reduced design debt in new feature work.",
    ],
  },
  {
    slug: "interactive-health-prototype",
    kind: "uiux",
    title: "Interactive Prototype",
    description:
      "High-fidelity interactive prototype for a health and wellness application with micro-interactions.",
    longDescription:
      "Interactive Prototype explored onboarding, progress tracking, and habit-forming interactions for a wellness product. The goal was to create motivating experiences while keeping cognitive load low for daily use.",
    icon: MousePointer,
    category: "Prototype",
    image: "/placeholder-project-3.jpg",
    tags: ["Figma", "Framer", "After Effects"],
    role: "Interaction Designer",
    duration: "6 weeks",
    year: "2024",
    challenge:
      "Users dropped off after onboarding because progress feedback felt static and lacked motivation.",
    approach:
      "I designed lightweight motion cues and milestone feedback loops to reinforce habit completion without distracting from primary tasks.",
    process: [
      "Mapped onboarding friction points with journey analysis.",
      "Explored micro-interaction concepts for key touchpoints.",
      "Prototyped interaction states and tested emotional response.",
      "Iterated timing, easing, and visual hierarchy details.",
    ],
    outcomes: [
      "More engaging first-time user experience.",
      "Clearer progress reinforcement in recurring flows.",
      "Higher perceived product polish from participants.",
    ],
  },
  {
    slug: "saas-dashboard-ui",
    kind: "uiux",
    title: "SaaS Dashboard UI",
    description:
      "Data-driven dashboard interface design with focus on information hierarchy and user workflows.",
    longDescription:
      "SaaS Dashboard UI was designed for teams tracking operational metrics at scale. The project focused on turning dense datasets into structured, actionable interfaces for rapid decision-making.",
    icon: Figma,
    category: "UI Design",
    image: "/placeholder-project-1.jpg",
    tags: ["Figma", "Maze", "Analytics"],
    role: "UI Designer",
    duration: "7 weeks",
    year: "2025",
    challenge:
      "Users struggled to identify priority metrics quickly due to overloaded dashboards and inconsistent visual emphasis.",
    approach:
      "I restructured page hierarchy with modular cards, progressive disclosure, and benchmark-aware chart styling.",
    process: [
      "Reviewed analytics usage to identify critical dashboard paths.",
      "Created layout systems for metric prioritization.",
      "Tested dashboard comprehension with scenario tasks.",
      "Refined chart readability and filter interaction patterns.",
    ],
    outcomes: [
      "Faster recognition of high-priority business signals.",
      "Cleaner workflows for cross-functional teams.",
      "Improved dashboard comprehension for new users.",
    ],
  },
];

export const featuredProjects: FeaturedProject[] = projectDetails
  .filter((project) => project.kind === "featured")
  .map((project) => ({
    slug: project.slug,
    title: project.title,
    description: project.description,
    image: project.image,
    techStack: project.tags,
    category: project.category,
  }));

export const uiuxProjects: UiUxProject[] = projectDetails
  .filter((project) => project.kind === "uiux")
  .map((project) => ({
    slug: project.slug,
    title: project.title,
    description: project.description,
    icon: project.icon ?? Figma,
    tools: project.tags,
    type: project.category,
  }));

export const getProjectBySlug = (slug: string) =>
  projectDetails.find((project) => project.slug === slug);
