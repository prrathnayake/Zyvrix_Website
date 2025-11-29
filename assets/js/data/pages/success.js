import { seoContent } from "../site/seo.js";

export const successPage = {
  meta: seoContent.success,
  heading: "Automation kickoff confirmed",
  body:
    "Thanks for partnering with Zyvrix. Your onboarding pack with workflow access, agent credentials, and milestone dates is on the way.",
  actions: [
    { label: "Back to home", href: "index.html" },
    { label: "View pricing", href: "pricing.html", variant: "ghost" },
  ],
};
