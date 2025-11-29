import { seoContent } from "../site/seo.js";

export const aboutPage = {
  meta: seoContent.about,
  intro:
    "Zyvrix is a next-generation automation company founded to replace manual busywork with intelligent digital systems—spanning workflow automation, API development, web and app builds, cybersecurity consulting, and SEO optimisation.",
  mission:
    "We design, build, and run n8n workflows, AI agents, APIs, and custom software so organisations can operate at machine speed with human oversight.",
  pillarsHeading: "What guides every build",
  pillars: [
    {
      title: "Automation-first delivery",
      detail:
        "Every engagement begins with mapping the processes holding teams back. We automate the data hand-offs, approvals, and updates end-to-end.",
      highlights: [
        "ROI modelling and workflow architecture",
        "Custom connectors for unique systems",
        "Telemetry that shows time and cost saved",
      ],
    },
    {
      title: "Intelligent agents with guardrails",
      detail:
        "AI agents are only valuable when they can be trusted. We pair reasoning models with policies, context retrieval, and human-in-the-loop controls.",
      highlights: [
        "Decision trees tied to SOPs",
        "Compliance-ready logging",
        "Escalation paths for sensitive work",
      ],
    },
    {
      title: "Deep integration & governance",
      detail:
        "Our APIs and integrations keep ERPs, CRMs, data warehouses, and back-office tools in sync with enterprise-grade security.",
      highlights: [
        "Zero Trust identity and access design",
        "Schema governance and contract tests",
        "Audit packs for procurement teams",
      ],
    },
  ],
  story: {
    copy:
      "Pasan and Sunera spent years inside scaling startups and regulated enterprises. They saw teams drowning in urgent manual work while digital transformation projects dragged on. Zyvrix launched to provide a pragmatic, automation-first alternative.",
    milestones: [
      { year: "2019", detail: "Automated onboarding flows for an APAC telco, proving the power of orchestration plus security." },
      { year: "2021", detail: "Built integration hubs for finance and logistics clients needing single sources of truth." },
      { year: "2023", detail: "Launched AI agent services that combine reasoning models with policy enforcement." },
      { year: "2024", detail: "Scaled retainers focused on process intelligence, compliance reporting, and autonomous ops." },
    ],
    media: {
      img: "assets/img/about-story.png",
      alt: "Zyvrix workshop",
      caption: "Weekly automation review pairing workflow architects with security oversight.",
    },
  },
  approach: [
    {
      title: "Discover",
      detail:
        "Interview stakeholders, capture SOPs, and benchmark manual effort to define success metrics and automation scope.",
    },
    {
      title: "Design",
      detail:
        "Prototype workflows, AI prompts, and integration maps with measurable guardrails before touching production.",
    },
    {
      title: "Build",
      detail:
        "Ship automations, APIs, and agents in sprints with automated testing, observability, and knowledge transfer.",
    },
    {
      title: "Operate",
      detail:
        "Monitor performance, report ROI, and maintain playbooks so your team can extend with confidence.",
    },
  ],
  techStack: [
    "n8n, Temporal, and custom orchestrators",
    "OpenAI, Anthropic, and local LLM strategies",
    "Node.js, Laravel, Go, and GraphQL APIs",
    "PostgreSQL, MySQL, BigQuery, Snowflake",
    "AWS, Azure, GCP, Vercel, and Fly.io",
    "Terraform, Docker, and GitHub Actions",
  ],
  impact: [
    {
      metric: "1.2M+",
      label: "Annual tasks automated",
      detail: "Automations spanning ops, finance, GTM, and product support.",
    },
    {
      metric: "35",
      label: "Connectors delivered",
      detail: "From enterprise ERPs to bespoke data warehouses.",
    },
    {
      metric: "96%",
      label: "Automations with audit logs",
      detail: "Security and compliance baked into every workflow.",
    },
    {
      metric: "48 hrs",
      label: "Discovery summary",
      detail: "Founders return roadmaps and costs within two business days.",
    },
  ],
  values: [
    "Automate with intent",
    "Design for trust",
    "Show the data",
    "Ship, learn, iterate",
  ],
  leadership: {
    heading: "Leadership & governance",
    copy:
      "You work with Pasan and Sunera end-to-end. They run delivery, track risk, and communicate progress in the tools your teams already use.",
    details: [
      "Weekly governance calls covering scope, blockers, and ROI",
      "Shared dashboards exposing automation health and adoption",
      "Executive briefs summarising impact for stakeholders",
    ],
  },
  assurance: {
    heading: "Assurance & controls",
    copy:
      "Automation only sticks when it feels safe. Every engagement ships with auditable controls, secure credential handling, and documented escalation paths.",
    commitments: [
      "Dedicated compliance workspace with access logs",
      "Secret rotation and vault-backed credential sharing",
      "Incident communication within 1 hour of detection",
      "Training for your teams on how to own the stack",
    ],
  },
  certifications: [
    "AWS Certified Solutions Architect — Professional",
    "Certified Information Systems Security Professional (CISSP)",
    "Offensive Security Certified Professional (OSCP)",
    "Google Cloud Professional Data Engineer",
  ],
  community: [
    "Host automation clinics for startups and operators",
    "Publish checklists for connecting AI agents to critical systems",
    "Mentor at accelerators on process intelligence and n8n",
    "Speak at meetups about API-first automation patterns",
  ],
  partners: [
    "n8n Enterprise Partner",
    "Vercel & Netlify deployment partners",
    "AWS Activate and Microsoft for Startups",
    "Security tool alliances with Snyk and Prisma Cloud",
  ],
  gallery: {
    copy:
      "Scenes from our remote-first studio where code reviews, automation diagrams, and AI experiments happen side by side.",
    items: [
      {
        title: "Process mapping wall",
        caption: "Every workflow starts with sticky notes, arrows, and data-exchange definitions.",
        img: "assets/img/about-story.png",
        alt: "Process diagrams on a wall",
      },
      {
        title: "Reliability pod",
        caption: "Monitoring automation runtimes, costs, and anomaly alerts.",
        img: "assets/img/about-ops.png",
        alt: "Dashboards showing automation metrics",
      },
      {
        title: "Experiment studio",
        caption: "Pairing engineers and designers to prototype new agent behaviors.",
        img: "assets/img/about-labs.png",
        alt: "Product team ideating",
      },
    ],
  },
  teamIntro:
    "Zyvrix stays intentionally small so every client collaborates directly with the founders building their automations.",
};
