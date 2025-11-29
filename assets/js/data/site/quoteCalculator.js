export const quoteCalculator = {
  projects: {
    automation: {
      label: "Workflow automation",
      tiers: {
        small: { title: "Launch workflows", base: 5200, currency: "USD" },
        medium: { title: "Growth program", base: 9200, currency: "USD" },
        large: { title: "Enterprise orchestration", base: 14800, currency: "USD" },
      },
    },
    agents: {
      label: "AI agents",
      tiers: {
        small: { title: "Pilot agent", base: 5600, currency: "USD" },
        medium: { title: "Agent pod", base: 10400, currency: "USD" },
        large: { title: "Agent mesh", base: 17600, currency: "USD" },
      },
    },
    integrations: {
      label: "Integrations & data mesh",
      tiers: {
        small: { title: "Core sync", base: 6400, currency: "USD" },
        medium: { title: "Unified fabric", base: 11800, currency: "USD" },
        large: { title: "Global data mesh", base: 19200, currency: "USD" },
      },
    },
    platforms: {
      label: "Custom platform",
      tiers: {
        small: { title: "Ops portal", base: 7800, currency: "USD" },
        medium: { title: "Control room", base: 14800, currency: "USD" },
        large: { title: "Enterprise platform", base: 23800, currency: "USD" },
      },
    },
  },
  timelines: {
    standard: { label: "6–10 weeks", adjustment: 0 },
    accelerated: { label: "3–5 weeks", adjustment: 1800 },
    rush: { label: "Under 3 weeks", adjustment: 3600 },
  },
  compliance: {
    standard: { label: "General best practice", adjustment: 0 },
    regulated: { label: "Regulated data or finance", adjustment: 2200 },
    critical: { label: "Mission critical / audited", adjustment: 4200 },
  },
  support: {
    0: { label: "No ongoing support", multiplier: 0 },
    "0.1": {
      label: "Automation care plan (10% of build)",
      multiplier: 0.1,
    },
    "0.18": {
      label: "Embedded optimisation squad (18% of build)",
      multiplier: 0.18,
    },
  },
};
