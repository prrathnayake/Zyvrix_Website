import { seoContent } from "../../site/seo.js";

export const pricingPage = {
  meta: seoContent.pricing,
  intro:
    "Choose the automation stream that fits your roadmap—workflows, AI agents, integrations, or custom platforms—then select the tier that matches your ambition.",
  addOns: {
    eyebrow: "Extend your engagement",
    heading: "Recurring services for continuous gains",
    copy:
      "Layer proactive monitoring, optimisation, and compliance so automations stay trustworthy long after handover.",
    cards: [
      {
        title: "Automation care plan",
        price: "From $3.5k/qtr",
        description:
          "Reliability checks, runbook refreshes, and incident-ready support for every workflow and agent.",
        highlights: [
          "Health scoring across all automations",
          "Alert routing with on-call escalation",
          "Sandbox verification for every change",
        ],
      },
      {
        title: "Insights & optimisation",
        price: "From $2.5k/qtr",
        description:
          "Dashboards, experimentation, and backlog grooming focused on hours saved, accuracy, and adoption.",
        highlights: [
          "ROI and utilisation dashboards",
          "Quarterly optimisation roadmap",
          "Leadership-ready reporting packs",
        ],
      },
      {
        title: "Compliance & governance",
        price: "From $180/hr",
        description:
          "Reviews covering credential access, AI guardrails, and regulated data handling.",
        highlights: [
          "Zero Trust policy updates",
          "Incident tabletop exercises",
          "Procurement-friendly evidence bundles",
        ],
      },
    ],
  },
  deepDive: {
    eyebrow: "Smart support pairings",
    heading: "Recommended services by focus area",
    copy:
      "Toggle between automation types to explore the specialist services that keep each engagement reliable and measurable.",
    empty: "Service recommendations are being finalised. Check back shortly.",
    linkLabel: "Explore service details",
  },
  customEngagement: {
    eyebrow: "Bespoke programs",
    heading: "Design a custom automation program",
    copy:
      "Mix retainers, discovery sprints, and governance packages. We assemble the right specialists to eliminate manual work while protecting every integration.",
    highlights: [
      "Dedicated engagement lead and security steward",
      "Fortnightly ROI reporting with KPI commitments",
      "Shared delivery board with budget and adoption stats",
    ],
    primaryCta: { label: "Schedule a planning session", href: "contact.html" },
    secondaryCta: {
      label: "Browse delivery approach",
      href: "about.html#aboutApproach",
    },
    invoice: {
      label: "Sample program",
      reference: "INV-2407-AUTO",
      issued: "02 Oct 2025",
      due: "Valid for 30 days",
      turnaround: "12-week automation runway",
      paymentTerms: "50% deposit, balance on delivery",
      billTo: {
        company: "Your organisation",
        contact: "Automation sponsor",
      },
      currency: "USD",
      lineItems: [
        {
          description: "Workflow & agent discovery sprint",
          quantity: 1,
          unit: "sprint",
          rate: 5800,
          total: 5800,
        },
        {
          description: "Automation squad (8 weeks)",
          quantity: 2,
          unit: "month",
          rate: 7200,
          total: 14400,
        },
        {
          description: "Compliance & telemetry setup",
          quantity: 1,
          unit: "package",
          rate: 3200,
          total: 3200,
        },
      ],
      subtotal: 23400,
      tax: 0,
      total: 23400,
      note: "Figures reflect a blended senior squad. We'll refine the breakdown with your stakeholders before signature.",
      downloadLabel: "Download invoice PDF",
    },
    aside: {
      title: "What to expect",
      metrics: [
        { label: "Average payback", value: "<5 months" },
        { label: "Manual work removed", value: "60–80%" },
        { label: "Client NPS", value: "+76" },
      ],
    },
  },
  standalone: {
    eyebrow: "Need help without a package?",
    heading: "Book standalone services",
    copy:
      "Grab focused sprints—workflow diagnostics, AI agent audits, or integration reviews—and plug them into your roadmap.",
    note: "Every service includes discovery, a scoped roadmap, and documented next steps.",
  },
  compare: {
    heading: "Compare automation tiers",
    copy:
      "See how scope, governance, and measurement evolve across automation types so you can pick the right investment level.",
    categories: [
      {
        id: "automation",
        label: "Workflow automation",
        summary:
          "From tactical wins to enterprise orchestration across departments.",
        columns: [
          { planId: "automation-launch", label: "Launch" },
          { planId: "automation-growth", label: "Growth" },
          { planId: "automation-scale", label: "Scale" },
        ],
        rows: [
          {
            label: "Ideal for",
            values: [
              "Teams automating a single process",
              "Ops leaders scaling automation programs",
              "Enterprises replacing ops centres",
            ],
          },
          {
            label: "Scope",
            values: [
              "Up to 6 workflows + custom nodes",
              "10–15 workflows with approvals",
              "Unlimited workflows with multi-region infra",
            ],
          },
          {
            label: "Governance",
            values: [
              "Credential vault + audit basics",
              "Role-based controls + SLA tracking",
              "Full compliance packs + SOC-ready logging",
            ],
          },
          {
            label: "Measurement",
            values: [
              "Time-saved dashboard",
              "ROI + adoption analytics",
              "Executive telemetry + cost attribution",
            ],
          },
        ],
      },
      {
        id: "agents",
        label: "AI agents",
        summary:
          "Spin up trusted AI teammates with the right level of control and oversight.",
        columns: [
          { planId: "agents-launch", label: "Launch" },
          { planId: "agents-growth", label: "Growth" },
          { planId: "agents-scale", label: "Scale" },
        ],
        rows: [
          {
            label: "Ideal for",
            values: [
              "Piloting one AI assistant",
              "Rolling out multi-agent pods",
              "Regulated teams needing enterprise guardrails",
            ],
          },
          {
            label: "Capabilities",
            values: [
              "Document reading + SOP execution",
              "Agent swarms with shared context",
              "Mesh of agents + toolchains across business units",
            ],
          },
          {
            label: "Controls",
            values: [
              "Prompt logging + manual approvals",
              "Policy engine + bias monitoring",
              "In-flight guardrails + compliance evidence",
            ],
          },
          {
            label: "Analytics",
            values: [
              "Accuracy + escalation tracking",
              "Cost + performance dashboards",
              "Enterprise telemetry with FinOps insights",
            ],
          },
        ],
      },
      {
        id: "integrations",
        label: "Integrations & data mesh",
        summary:
          "Connect CRMs, ERPs, warehouses, and SaaS apps with the right level of governance.",
        columns: [
          { planId: "integrations-launch", label: "Launch" },
          { planId: "integrations-growth", label: "Growth" },
          { planId: "integrations-scale", label: "Scale" },
        ],
        rows: [
          {
            label: "Ideal for",
            values: [
              "Syncing two business-critical systems",
              "Centralising data pipelines",
              "Global data mesh + partner APIs",
            ],
          },
          {
            label: "Data ops",
            values: [
              "Schema mapping + validation",
              "Event-driven flows + CDC",
              "Lineage, catalog, and governance",
            ],
          },
          {
            label: "Reliability",
            values: [
              "Retries + alerting",
              "Runbook automation + cost tuning",
              "Multi-region failover + rollback drills",
            ],
          },
          {
            label: "Enablement",
            values: [
              "Ops handbook",
              "Shared dashboards + training",
              "Self-serve connector marketplace",
            ],
          },
        ],
      },
      {
        id: "platforms",
        label: "Custom platforms",
        summary:
          "Give teams automation-ready portals, APIs, and control rooms tailored to your business.",
        columns: [
          { planId: "platforms-launch", label: "Launch" },
          { planId: "platforms-growth", label: "Growth" },
          { planId: "platforms-scale", label: "Scale" },
        ],
        rows: [
          {
            label: "Ideal for",
            values: [
              "Internal tooling tied to automations",
              "Ops hubs and analytics portals",
              "Enterprise control rooms spanning teams",
            ],
          },
          {
            label: "Architecture",
            values: [
              "API-first monolith with secure auth",
              "Modular services + automation console",
              "Multi-tenant platform with event streams",
            ],
          },
          {
            label: "Automation depth",
            values: [
              "Surface workflow triggers + statuses",
              "Approval + override experiences",
              "Automation marketplace + AI agent panels",
            ],
          },
          {
            label: "Operations",
            values: [
              "Release training + documentation",
              "CI/CD + reliability reviews",
              "Dedicated enablement + success team",
            ],
          },
        ],
      },
    ],
  },
};
