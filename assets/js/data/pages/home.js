import { seoContent } from "../site/seo.js";

export const homePage = {
  meta: seoContent.home,
  hero: {
    eyebrow: "Automation-first partner",
    title: "Engineer a future-ready automation OS",
    subtitle:
      "Zyvrix is a modern software development and automation company. We combine n8n workflows, AI-powered agents, custom APIs, full-stack engineering, and cohesive integrations so businesses operate faster, smarter, and with less manual effort.",
    primaryCta: { label: "Plan my automation roadmap", href: "contact.html" },
    secondaryCta: { label: "See how we build", href: "about.html" },
    metrics: [
      { value: "1.2M+", label: "Manual tasks automated" },
      { value: "35+", label: "Systems orchestrated" },
      { value: "<14 days", label: "To first live workflow" },
    ],
    image: "assets/img/hero-automation.png",
    imageAlt: "Glassmorphic automation dashboard collage",
  },
  logos: {
    eyebrow: "Trusted across SaaS, operations, finance, and GTM teams",
    items: ["NovaGrid", "Helios Bank", "ArcLight", "PulseBio", "Bluefin", "Aether"],
  },
  overview: {
    eyebrow: "Company overview",
    heading: "Automation + AI + software engineering under one roof",
    copy:
      "Zyvrix eliminates repetitive work by building intelligent digital systems. We map processes, craft automations, and ship software that keeps operations humming 24/7.",
    points: [
      "n8n workflow automation and process engineering",
      "AI agents that read, reason, and act",
      "Custom API and integration development",
      "Full-stack software, dashboards, and SaaS products",
      "Automation support, monitoring, and optimisation",
    ],
  },
  missionVision: {
    visionEyebrow: "Vision",
    visionHeading: "Australia's leading automation-first software company",
    visionCopy:
      "Empower businesses with intelligent systems that operate reliably and automatically across every department.",
    missionEyebrow: "Mission",
    missionHeading: "Replace repetitive work with modern workflows",
    missionCopy:
      "Design scalable, automation-led solutions powered by n8n, AI, and clean software architecture so every process is precise and dependable.",
  },
  values: {
    eyebrow: "Core values",
    heading: "Principles we work by",
    copy: "Clean logic, clean code, clean workflows—every release reflects these beliefs.",
    items: [
      { title: "Innovation", copy: "Experiment with the newest automation, AI, and API tech to stay ahead." },
      { title: "Automation first", copy: "Reduce manual work anywhere we touch with orchestration and logic." },
      { title: "Reliability", copy: "Engineer systems that run flawlessly with safeguards and observability." },
      { title: "Integrity", copy: "Communicate transparently and deliver exactly what was promised." },
      { title: "Precision", copy: "Tidy architectures, documented workflows, and measurable outcomes." },
    ],
  },
  services: {
    heading: "Where we plug in",
    cards: [
      {
        title: "n8n workflow automation",
        icon: "⚙️",
        description: "Custom multi-step workflows that sync CRMs, process invoices, and automate Google Workspace or document pipelines.",
        highlights: [
          "CRM syncing + lead pipelines",
          "Invoice + document automation",
          "PDF → AI → sheet processing",
        ],
      },
      {
        title: "AI-powered agents",
        icon: "🤖",
        description: "Autonomous agents that read, decide, and execute—like AI invoice managers, data cleaners, or workflow managers.",
        highlights: [
          "Document + data extraction",
          "Decisioning + task routing",
          "API + tool hand-offs",
        ],
      },
      {
        title: "Custom API development",
        icon: "🔗",
        description: "Secure REST/GraphQL APIs, webhooks, auth layers, and third-party integrations for payments, CRMs, and ERPs.",
        highlights: [
          "OAuth2 + authentication",
          "Payment + ERP gateways",
          "Developer-first documentation",
        ],
      },
      {
        title: "Full-stack software",
        icon: "🕸️",
        description: "Internal tools, dashboards, automation platforms, and SaaS-style products built on scalable Node.js/Python stacks.",
        highlights: [
          "Automation-ready portals",
          "Complex backend systems",
          "Secure, scalable architectures",
        ],
      },
      {
        title: "Business process automation",
        icon: "📊",
        description: "Accounting, inventory, lead management, onboarding, reporting, and document workflows handled end-to-end.",
        highlights: [
          "Accounting + inventory flows",
          "Customer onboarding",
          "Data validation + reporting",
        ],
      },
      {
        title: "System integrations",
        icon: "🧩",
        description: "Connect Google Workspace, Notion, CRMs, databases, payment systems, and messaging apps into one ecosystem.",
        highlights: [
          "Cross-cloud orchestration",
          "Realtime syncing + webhooks",
          "Audit-friendly logging",
        ],
      },
      {
        title: "Automation support & monitoring",
        icon: "🛰️",
        description: "Health dashboards, updates, bug fixes, performance tuning, backups, error prevention, and scalability planning.",
        highlights: [
          "Workflow health monitoring",
          "Rapid fixes + change control",
          "Performance + scale reviews",
        ],
      },
    ],
  },
  capabilities: {
    eyebrow: "Full-service delivery",
    heading: "Every layer orchestrated",
    copy: "We operate like an internal platform team—pairing automation with product, growth, and security workstreams.",
    groups: [
      {
        title: "API & platform engineering",
        copy: "Design and maintain the services that join CRMs, ERPs, finance tools, and data lakes together.",
        items: [
          "REST, GraphQL, and event-driven services",
          "Gateway governance + threat detection",
          "Interactive docs, SDKs, and testing",
        ],
      },
      {
        title: "Web + app builds",
        copy: "Launch headless sites, portals, and mobile apps that expose automation states in real time.",
        items: [
          "Design systems + component libraries",
          "Notion/Contentful CMS + localisation",
          "CI/CD, QA labs, and telemetry",
        ],
      },
      {
        title: "Security & SEO consulting",
        copy: "Balance trust with discoverability by pairing cybersecurity leadership and growth analytics.",
        items: [
          "Zero Trust and incident response",
          "Regulated data workflows",
          "SEO automation + ROI dashboards",
        ],
      },
    ],
  },
  addOns: {
    eyebrow: "Programs",
    heading: "Curated automation programs",
    copy: "Pick the engagement that fits your maturity. Every program ships playbooks, metrics, and access to the founders.",
    cards: [
      {
        title: "Automation OS",
        price: "From $9.5k/mo",
        description: "Central nervous system for operations—n8n workflows, monitoring, and change-safe sandboxes.",
        highlights: [
          "Unlimited workflow iterations",
          "Connector + credential management",
          "24/7 telemetry + runbook handover",
        ],
        image: "assets/img/program-automation-os.png",
      },
      {
        title: "Agent studio",
        price: "From $7.2k/mo",
        description: "Design, deploy, and govern AI teammates with retrieval meshes, escalation rails, and FinOps visibility.",
        highlights: [
          "Prompt + RAG pipeline lab",
          "Bias + safety dashboards",
          "Human-in-the-loop tooling",
        ],
        image: "assets/img/program-agent-studio.png",
      },
      {
        title: "Experience lab",
        price: "From $6.4k/mo",
        description: "Web + app delivery tied to growth and automation metrics—perfect for portals, dashboards, and GTM sites.",
        highlights: [
          "Component-driven UI systems",
          "Experimentation + SEO ops",
          "Security + accessibility guardians",
        ],
        image: "assets/img/program-experience-lab.png",
      },
    ],
  },
  markets: {
    eyebrow: "Target markets",
    heading: "Teams who benefit immediately",
    copy: "We partner with operations-heavy teams craving relief from repetitive work.",
    items: [
      {
        title: "Growth-stage businesses",
        copy: "Small and medium enterprises, service providers, and automation-first startups scaling operations.",
        points: ["Ops-heavy SMEs", "Automation-focused founders", "Agencies + consultancies"],
      },
      {
        title: "Industry specialists",
        copy: "E-commerce, logistics, accounting, finance, legal, and real-estate teams with complex workflows.",
        points: ["Inventory + logistics", "Accounting + finance", "Real estate + legal"],
      },
      {
        title: "Digital departments",
        copy: "Marketing, sales, and customer teams needing faster pipelines, data hygiene, and automated reporting.",
        points: ["Lead management", "Customer onboarding", "Data + reporting"],
      },
    ],
  },
  strengths: {
    eyebrow: "Business strengths",
    heading: "Why teams choose Zyvrix",
    copy: "We blend automation, AI, and product engineering with a clean, modern brand presentation.",
    items: [
      {
        title: "Automation depth",
        copy: "Advanced n8n expertise, AI agents, and process automation in a single engagement.",
        points: ["Automation + AI combined", "Entire processes automated", "Workflow health + monitoring"],
      },
      {
        title: "Software craftsmanship",
        copy: "APIs, integrators, and full-stack apps built with scalable patterns and fast delivery.",
        points: ["Custom APIs + integrations", "Full-stack SaaS + dashboards", "Scalability-first engineering"],
      },
      {
        title: "Continuous partnership",
        copy: "Ongoing support, clean design, and modern branding to match enterprise expectations.",
        points: ["Support + optimisation retainers", "Neon-white, minimal branding", "Faster delivery than traditional teams"],
      },
    ],
  },
  identity: {
    cards: [
      {
        eyebrow: "Brand identity",
        title: "Clean, modern, trustworthy",
        copy: "Glassmorphic whites, neon teals, and minimal gradients keep the experience professional yet futuristic.",
        tags: ["White", "Teal", "Glass", "Gradients"],
        points: ["Automation-first storytelling", "SaaS-grade layouts", "Enterprise-ready tone"],
      },
      {
        eyebrow: "Automation support",
        title: "Always-on reliability",
        copy: "Monitoring, alerts, backup logic, and scalability planning ensure workflows stay stable at any hour.",
        tags: ["Monitoring", "Scalability", "Error prevention"],
        points: ["Workflow health dashboards", "Performance optimisation", "Backup + failover systems"],
      },
    ],
  },
  tech: {
    eyebrow: "Technology stack",
    heading: "Tools we reach for",
    copy: "From automation studios to backend and cloud, we favour proven, scalable tech.",
    categories: [
      {
        title: "Automation & AI",
        copy: "n8n, Make.com, GPT agents, document extractors, Python agents, and logic-based AI nodes.",
        items: ["n8n", "Make.com", "GPT agents", "Python automations", "Document AI"],
      },
      {
        title: "Backend & APIs",
        copy: "Node.js, Python, C++ when needed, REST, GraphQL, OAuth2, and webhook infrastructure.",
        items: ["Node.js", "Python", "C++", "REST", "GraphQL", "OAuth2", "Webhooks"],
      },
      {
        title: "Data & cloud",
        copy: "PostgreSQL, MySQL, Supabase, Firestore, Google Cloud, AWS, Firebase, GitHub.",
        items: ["PostgreSQL", "MySQL", "Supabase", "Firestore", "GCP", "AWS", "Firebase", "GitHub"],
      },
    ],
  },
  addOnsContinue: {},
  highlights: {
    heading: "Outcome snapshots",
    items: [
      {
        title: "Neobank automation spine",
        description: "Connected core banking, fraud, and support tooling with 47 workflows and policy-driven agents.",
        img: "assets/img/outcome-automation-spine.png",
        alt: "Finance analytics UI",
        metrics: [
          { value: "86%", label: "Manual ops removed" },
          { value: "12 markets", label: "Active locales" },
        ],
      },
      {
        title: "AI deal desk copilots",
        description: "Agents read proposals, assemble pricing, and trigger approvals directly from Salesforce + Stripe.",
        img: "assets/img/outcome-agent-copilot.png",
        alt: "CRM automation cards",
        metrics: [
          { value: "11 hrs", label: "Saved per deal" },
          { value: "+32%", label: "Win rate lift" },
        ],
      },
      {
        title: "Omnichannel analytics hub",
        description: "Unified warehouse, marketing, and app telemetry into a portal where executives watch automation ROI live.",
        img: "assets/img/outcome-analytics-hub.png",
        alt: "Analytics trends",
        metrics: [
          { value: "4.5x", label: "Faster insights" },
          { value: "<2s", label: "Median load" },
        ],
      },
    ],
  },
  gallery: {
    heading: "Inside the studio",
    copy: "Glassmorphic glimpses of strategy rooms, experimentation labs, and reliability pods keeping automations calm.",
    items: [
      {
        title: "Systems map",
        caption: "Founders mapping an end-to-end revenue journey before automating hand-offs.",
        img: "assets/img/gallery-systems-map.png",
        alt: "Whiteboard strategy",
      },
      {
        title: "Agent telemetry",
        caption: "Live agent runs with neon status pills and escalation indicators.",
        img: "assets/img/gallery-agent-telemetry.png",
        alt: "Dashboard UI",
      },
      {
        title: "Design sync",
        caption: "Web + app designers aligning on motion, typography, and states.",
        img: "assets/img/gallery-design-sync.png",
        alt: "Design review",
      },
    ],
  },
  testimonials: {
    heading: "Signals from teams we support",
    items: [
      {
        quote:
          "Zyvrix rebuilt our operations landscape—automation, APIs, SEO, even the marketing site. It feels like a single product now.",
        author: "Mara Fields, COO — NovaGrid",
      },
      {
        quote:
          "Their agent program came with guardrails, FinOps dashboards, and training. Adoption was instant because everyone trusted the system.",
        author: "Ian Velez, VP Product — Helios Bank",
      },
    ],
  },
  goals: {
    eyebrow: "2025–2026 goals",
    heading: "Building toward Automation-as-a-Service",
    copy: "A roadmap focused on scale, products, and customer empowerment.",
    items: [
      {
        title: "Automation-as-a-service",
        detail: "Expand retainers into full automation services with runbooks, dashboards, and outcomes tied to revenue.",
      },
      {
        title: "Zyvrix AI workflow assistant",
        detail: "Launch an AI assistant that monitors workflows, suggests automations, and answers stakeholder questions.",
      },
      {
        title: "Automation control cloud",
        detail: "Build a client portal for live metrics, approvals, knowledge, and change requests.",
      },
      {
        title: "Enterprise growth",
        detail: "Sign more enterprise clients, ship template libraries, and build a tutorials hub.",
      },
    ],
  },
  spotlight: {
    heading: "Founders in the loop",
    copy: "Work directly with Pasan Rathnayake (automation architect) and Sunera Ranasooriya (security + strategy). No layers, just accountable leadership.",
    memberIds: ["pasan-rathnayake", "sunera-ranasooriya"],
  },
  contact: {
    heading: "Ready for a neon-clear operating system?",
    basicHeading: "Start with a quick brief",
    points: [
      "Automation OS roadmap delivered in 48 hours",
      "n8n, AI, APIs, software, and integrations covered",
      "Direct founder access + telemetry per sprint",
    ],
    basicPoints: [
      "Share your manual workflows and target KPIs",
      "Receive prep work plus discovery slots",
      "Personal replies within one business day",
    ],
  },
};
