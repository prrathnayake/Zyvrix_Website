export const pricingGroups = [
  {
    id: "automation",
    label: "Workflow automation",
    tagline: "n8n workflows that move work on autopilot",
    plans: [
      {
        id: "launch",
        label: "Launch",
        price: 4800,
        currency: "USD",
        summary:
          "Automate a single end-to-end journey (ex: lead enrichment, onboarding, or quote-to-cash).",
        features: [
          "Discovery sprint with ROI model",
          "Up to 6 workflow paths + custom connectors",
          "Encrypted credential vault + role-based access",
          "Monitoring dashboard with run metrics",
          "Knowledge transfer session",
        ],
        recommendedServices: [
          "workflow-orchestration",
          "process-intel",
        ],
      },
      {
        id: "growth",
        label: "Growth",
        price: 8200,
        currency: "USD",
        summary:
          "Layer multiple automations, branching logic, and approvals across teams.",
        features: [
          "10–15 workflows spanning 3+ systems",
          "Advanced scheduling, retries, and error handling",
          "Human-in-the-loop approvals & SLA tracking",
          "Observability with alert routing",
          "Quarterly optimisation roadmap",
        ],
        recommendedServices: [
          "workflow-orchestration",
          "automation-ops",
          "process-intel",
        ],
      },
      {
        id: "scale",
        label: "Scale",
        price: 13500,
        currency: "USD",
        summary:
          "Enterprise-grade orchestration with compliance, cost controls, and expansion support.",
        features: [
          "Unlimited workflows & environments",
          "Multi-region infrastructure + GitOps",
          "Zero Trust access with audit-ready logging",
          "BI dashboards showing hours saved",
          "Dedicated automation care plan",
        ],
        recommendedServices: [
          "workflow-orchestration",
          "automation-ops",
          "process-intel",
        ],
      },
    ],
  },
  {
    id: "agents",
    label: "AI agents",
    tagline: "Autonomous teammates with enterprise guardrails",
    plans: [
      {
        id: "launch",
        label: "Launch",
        price: 5200,
        currency: "USD",
        summary:
          "Pilot one agent that reads documents, executes SOPs, and escalates edge cases.",
        features: [
          "Agent design workshop",
          "Prompt, retrieval, and toolchain setup",
          "Human review queue with Slack/Teams handoff",
          "Metrics for accuracy & time saved",
          "Security review + policy pack",
        ],
        recommendedServices: [
          "ai-agent-lab",
          "process-intel",
        ],
      },
      {
        id: "growth",
        label: "Growth",
        price: 9800,
        currency: "USD",
        summary:
          "Deploy agent swarms working across sales, finance, or support pipelines.",
        features: [
          "3–4 agents sharing context via secure memory",
          "Decision trees tied to SOPs",
          "PII redaction + guardrails",
          "CI for prompts and regression suites",
          "Executive dashboards & runbooks",
        ],
        recommendedServices: [
          "ai-agent-lab",
          "automation-ops",
          "process-intel",
        ],
      },
      {
        id: "scale",
        label: "Scale",
        price: 16800,
        currency: "USD",
        summary:
          "Regulated-ready agent mesh with compliance, custom tooling, and dedicated support.",
        features: [
          "Unlimited agents across teams",
          "Retrieval mesh spanning KGs, CRMs, ERPs",
          "In-flight policy enforcement & audit logging",
          "FinOps & usage optimisation",
          "24/7 monitoring with incident response",
        ],
        recommendedServices: [
          "ai-agent-lab",
          "automation-ops",
          "process-intel",
        ],
      },
    ],
  },
  {
    id: "integrations",
    label: "Integrations & data mesh",
    tagline: "Keep every system in lockstep",
    plans: [
      {
        id: "launch",
        label: "Launch",
        price: 6100,
        currency: "USD",
        summary:
          "Connect two core platforms with secure syncing, transformations, and logging.",
        features: [
          "Enterprise connector audit",
          "Webhook + polling strategies",
          "Schema mapping + validation",
          "Automated retries and dedupe",
          "Ops handbook for your team",
        ],
        recommendedServices: [
          "integration-hub",
          "automation-ops",
        ],
      },
      {
        id: "growth",
        label: "Growth",
        price: 11200,
        currency: "USD",
        summary:
          "Unify CRMs, ERPs, data warehouses, and third-party APIs with shared contracts.",
        features: [
          "5+ system integrations with data quality rules",
          "Event-driven pipelines and CDC",
          "Observability with tracing + alerting",
          "Cost & performance optimisation",
          "Quarterly compliance evidence",
        ],
        recommendedServices: [
          "integration-hub",
          "automation-ops",
          "process-intel",
        ],
      },
      {
        id: "scale",
        label: "Scale",
        price: 17800,
        currency: "USD",
        summary:
          "Global data mesh with governance, cataloguing, and partner APIs.",
        features: [
          "Multi-region integration fabric",
          "Self-serve connector toolkit",
          "Lineage, catalog, and access governance",
          "Disaster recovery + rollback playbooks",
          "Executive reporting & enablement",
        ],
        recommendedServices: [
          "integration-hub",
          "automation-ops",
          "process-intel",
        ],
      },
    ],
  },
  {
    id: "platforms",
    label: "Custom software",
    tagline: "Automation-ready portals, APIs, and ops hubs",
    plans: [
      {
        id: "launch",
        label: "Launch",
        price: 7600,
        currency: "USD",
        summary:
          "Ship a tailored internal tool or lightweight SaaS that plugs directly into your automations.",
        features: [
          "Design system + component library",
          "Role-based access + SSO",
          "API-first backend with documentation",
          "Core dashboards & audit logs",
          "Handover + ops training",
        ],
        recommendedServices: [
          "api-platform",
          "workflow-orchestration",
        ],
      },
      {
        id: "growth",
        label: "Growth",
        price: 13800,
        currency: "USD",
        summary:
          "Expand into multi-team portals, analytics layers, and automation control rooms.",
        features: [
          "Modular architecture ready for squads",
          "Extensible API gateway + SDKs",
          "Automation console for approvals & overrides",
          "Performance & accessibility hardening",
          "Release management + CI/CD",
        ],
        recommendedServices: [
          "api-platform",
          "workflow-orchestration",
          "automation-ops",
        ],
      },
      {
        id: "scale",
        label: "Scale",
        price: 22800,
        currency: "USD",
        summary:
          "Enterprise platforms combining AI agents, APIs, and automations under one governance model.",
        features: [
          "Multi-tenant architecture with compliance",
          "Event streams + data lake integrations",
          "Extensible automation marketplace",
          "Quarterly threat modelling + audits",
          "Dedicated enablement + success team",
        ],
        recommendedServices: [
          "api-platform",
          "workflow-orchestration",
          "automation-ops",
          "process-intel",
        ],
      },
    ],
  },
];
