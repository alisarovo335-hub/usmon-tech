import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Globe,
  LayoutDashboard,
  LineChart,
  MonitorSmartphone,
  Palette,
  Server,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Wrench,
} from "lucide-react";

export type ProjectStatus = "Completed" | "In Development" | "Prototype";

export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  /** What you built in this product (verifiable scope, not client results). */
  role: string;
  status: ProjectStatus;
  href?: string;
  /** Accessible label for the external demo button. */
  externalDemoLabel?: string;
  /** Shown under demo buttons — limits of what the URL provides. */
  demoAccessNote?: string;
  image: string;
  imageAlt: string;
  /** Optional crop for phone frame; defaults to main image when omitted. */
  mobileImage?: string;
  mobileImageAlt?: string;
  /** Label in browser chrome (public hostname path only). */
  demoUrlLabel?: string;
  /** Show phone mockup with responsive preview of the same UI asset. */
  showMobilePreview: boolean;
  highlights: string[];
  /** What a visitor can verify today (demo, screenshots, or codebase scope). */
  implementedFeatures: string[];
  demoNote?: string;
}

export interface Service {
  title: string;
  description: string;
  outcome: string;
  icon: LucideIcon;
}

export interface TechCategory {
  name: string;
  items: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    title: "E-commerce Website Development",
    description:
      "Custom online stores with product catalogs, secure checkout flows, and admin tools tailored to your market and brand.",
    outcome: "Helps you sell online with a storefront customers trust.",
    icon: ShoppingCart,
  },
  {
    title: "Business Website Development",
    description:
      "Fast, professional company websites built for credibility, SEO, and lead generation across international audiences.",
    outcome: "Turns visitors into qualified leads with a clear message and structure.",
    icon: Globe,
  },
  {
    title: "Mobile Application Development",
    description:
      "Cross-platform mobile apps with intuitive UX, stable performance, and integration with your existing systems.",
    outcome: "Puts your service or product in your customers’ pockets on iOS and Android.",
    icon: Smartphone,
  },
  {
    title: "Admin Dashboard Development",
    description:
      "Role-based dashboards to manage users, content, orders, and analytics with clear, actionable interfaces.",
    outcome: "Gives your team control without wrestling with spreadsheets.",
    icon: LayoutDashboard,
  },
  {
    title: "Business Management Systems",
    description:
      "Tailored internal tools for workflows, reporting, and operations — designed around how your team actually works.",
    outcome: "Replaces manual processes with software your staff will actually use.",
    icon: LineChart,
  },
  {
    title: "AI-Powered Applications",
    description:
      "Practical AI features such as smart search, automation, and assistants that solve real business problems.",
    outcome: "Automates repetitive work when a standard CRUD app is not enough.",
    icon: Brain,
  },
  {
    title: "Website Redesign and Optimization",
    description:
      "Modern redesigns with improved speed, accessibility, and conversion-focused layouts without losing your brand.",
    outcome: "Refreshes outdated sites so they load fast and convert better.",
    icon: Sparkles,
  },
  {
    title: "API and Backend Development",
    description:
      "Secure, well-documented APIs and backend services that scale with your product and integrate cleanly.",
    outcome: "Connects your web, mobile, and third-party tools with reliable data.",
    icon: Server,
  },
];

export const projects: Project[] = [
  {
    id: "arzon-bozor",
    name: "ARZON BOZOR",
    category: "E-commerce · Live storefront demo",
    description:
      "Online marketplace for Tajikistan: catalog browsing, promos, and multi-language storefront UI on a static Surge demo. The wider product also includes a NestJS API and Expo app in code — not all of that runs on the public demo host.",
    role: "Sole developer — storefront UI, catalog UX, integration planning, and full-stack architecture for the marketplace codebase.",
    status: "Completed",
    href: "https://arzon-bozor.surge.sh/products.html",
    externalDemoLabel: "Browse catalog demo",
    demoAccessNote:
      "Opens the public product catalog (no buyer account required on this static demo). Seller onboarding uses a separate sign-in page; checkout and live payment are not production-complete on Surge.",
    image: "/projects/arzon-bozor-cover.jpg",
    imageAlt: "Screenshot of the ARZON BOZOR marketplace storefront homepage",
    demoUrlLabel: "arzon-bozor.surge.sh/products",
    showMobilePreview: true,
    highlights: [
      "Static HTML/CSS storefront (Surge demo)",
      "NestJS + PostgreSQL (marketplace codebase)",
      "Expo React Native companion app (codebase)",
    ],
    implementedFeatures: [
      "Homepage, category navigation, and product listing pages on the static demo",
      "Responsive storefront layout (Tajik / Russian / English UI toggles on the live site)",
      "Separate seller sign-in flow — not required to browse the catalog demo",
    ],
    demoNote:
      "Portfolio screenshot above is from the storefront UI. The demo runs as static HTML on Surge; the Next.js/NestJS/Expo stack in the repo is not fully wired on that host.",
  },
  {
    id: "newvid",
    name: "NEWVID",
    category: "Video platform · In development",
    description:
      "Video-sharing product in progress: Next.js web client, NestJS microservices, and PostgreSQL with Prisma. Work focuses on modular services and upload/browse flows — still being built.",
    role: "Sole developer — architecture, web client, and backend service design.",
    status: "In Development",
    image: "/projects/newvid-cover.png",
    imageAlt: "In-progress NEWVID product branding and interface preview",
    showMobilePreview: false,
    highlights: ["Next.js web application", "NestJS microservices", "PostgreSQL with Prisma"],
    implementedFeatures: [
      "Service boundaries and data model taking shape in the repository",
      "In-progress UI and branding (preview image on this page)",
      "No public demo URL — status remains In Development",
    ],
  },
];

export const techCategories: TechCategory[] = [
  {
    name: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Backend",
    items: ["NestJS", "Node.js", "REST APIs", "JWT Authentication"],
  },
  {
    name: "Database",
    items: ["PostgreSQL", "TypeORM", "Prisma", "Redis"],
  },
  {
    name: "Mobile Development",
    items: ["React Native", "Expo"],
  },
  {
    name: "DevOps",
    items: ["Docker Compose", "MinIO", "Static deployment (Surge)"],
  },
  {
    name: "AI",
    items: ["AI integration (project-based scope)"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Understanding Client Requirements",
    description:
      "I clarify goals, users, timelines, and success metrics so the solution matches your business needs.",
  },
  {
    step: 2,
    title: "Planning and Architecture",
    description:
      "Technical scope, milestones, and system design are defined before development starts.",
  },
  {
    step: 3,
    title: "UI/UX Design",
    description:
      "Wireframes and visual direction aligned with your brand, with mobile-first responsive layouts.",
  },
  {
    step: 4,
    title: "Development",
    description:
      "Iterative build with clean code, regular updates, and integration of agreed features.",
  },
  {
    step: 5,
    title: "Testing and Quality Assurance",
    description:
      "Functional testing, performance checks, and fixes across devices and browsers.",
  },
  {
    step: 6,
    title: "Deployment and Support",
    description:
      "Production deployment, handover documentation, and post-launch support as agreed.",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines depend on scope. A focused business website may take a few weeks; larger platforms with mobile and backend work often run several months. After the initial call, you receive a clear milestone plan.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Projects are quoted based on scope, complexity, and timeline — either fixed milestones or phased delivery. You always see what is included before work begins.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "I work with modern stacks verified in my projects: React, Next.js, TypeScript, NestJS, PostgreSQL, React Native (Expo), and related tools. The stack is chosen to fit maintainability and your goals.",
  },
  {
    question: "How many revisions are included?",
    answer:
      "Design and build phases include agreed revision rounds at each milestone. Additional changes outside scope are discussed transparently before implementation.",
  },
  {
    question: "Do you accept international payments?",
    answer:
      "Yes. Remote clients in the US, UK, EU, Germany, UAE, Qatar, and similar markets can pay via mutually agreed methods (e.g. bank transfer, Wise, PayPal where available). Details are confirmed in the contract.",
  },
  {
    question: "How does remote collaboration work?",
    answer:
      "I communicate via video calls, email, and messaging tools in your time zone where possible. Progress updates, shared task lists, and staging environments keep the project visible end to end.",
  },
];

export const aboutHighlights = [
  {
    title: "Problem solving",
    description: "Breaking down complex business needs into clear, buildable solutions.",
    icon: Wrench,
  },
  {
    title: "Clean code",
    description: "Maintainable architecture that teams can extend after launch.",
    icon: MonitorSmartphone,
  },
  {
    title: "Modern technologies",
    description: "Proven stacks used in real products — not experiments on your budget.",
    icon: Sparkles,
  },
  {
    title: "Business-focused",
    description: "Features and UX driven by outcomes: leads, sales, efficiency, trust.",
    icon: LineChart,
  },
  {
    title: "International collaboration",
    description: "Experience working with remote stakeholders and async communication.",
    icon: Globe,
  },
  {
    title: "Thoughtful UI/UX",
    description: "Professional interfaces that feel premium on desktop and mobile.",
    icon: Palette,
  },
];

/** Shown in the hero for quick scanning — factual service lines, not metrics. */
export const heroDeliverables = [
  "Business & e-commerce websites",
  "Cross-platform mobile applications",
  "APIs, dashboards, and internal tools",
];