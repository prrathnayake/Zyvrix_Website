import { seoContent } from "../site/seo.js";

export const legalPage = {
  meta: seoContent.legal,
  heading: "Privacy, terms, and data protection",
  intro:
    "Automation touches your systems, data, and customers. These policies explain how we safeguard information, govern AI agents, and respond when you need support.",
  sections: [
    {
      id: "privacy",
      title: "Privacy policy",
      body: [
        "We collect only the details required to scope automation engagements and deliver agreed work. Access to personal data is restricted to senior staff under signed confidentiality agreements.",
        "Operational data, workflow logs, and agent transcripts are encrypted at rest and in transit, monitored with audit trails, and removed when projects conclude unless ongoing services require retention.",
      ],
      bullets: [
        "Form submissions, automation credentials, and API keys are stored using AES-256 encryption with time-bound keys.",
        "Third-party processors (cloud hosting, AI providers, analytics) are vetted for SOC2 or ISO 27001 compliance.",
        "You can request data removal or export at any time by emailing privacy@secureitdevelopers.com.",
      ],
    },
    {
      id: "terms",
      title: "Terms of service",
      body: [
        "Every engagement begins with a mutually signed statement of work covering automation scope, deliverables, and payment schedule. We work transparently in shared tooling so you can see progress and review artefacts early.",
        "Intellectual property transfers once invoices are settled, and we guarantee remediation for 30 days after launch unless otherwise specified in a managed-services agreement.",
      ],
      bullets: [
        "Change requests are captured through agreed backlog tools and priced before implementation.",
        "Invoices follow project milestones or monthly retainers with NET 14 terms.",
        "Either party may terminate with 14 days notice; completed work and in-progress deliverables are billed proportionally.",
      ],
    },
    {
      id: "data-protection",
      title: "Data protection & incident response",
      body: [
        "We operate a defense-in-depth approach across workflows, AI agents, infrastructure, and continuous delivery. Secrets are stored in managed vaults and rotated automatically with environment-table auditing.",
        "If an incident impacts your environment, you receive an initial notification within 24 hours, followed by containment updates and a remediation report with lessons learned.",
      ],
      bullets: [
        "Automation and agent logging uses environment-bound tables keyed by deployment secrets.",
        "Penetration testing, prompt reviews, and dependency checks are scheduled quarterly for retainers.",
        "Disaster-recovery drills validate restore points, access controls, and communications workflows.",
      ],
    },
  ],
  contact: {
    heading: "Need bespoke terms?",
    copy:
      "We can supply NDAs, automation security schedules, and compliance evidence tailored to your procurement team—just let us know what you need.",
    email: "privacy@zyvrix.com",
    phone: "+61 434 438 494",
  },
};
