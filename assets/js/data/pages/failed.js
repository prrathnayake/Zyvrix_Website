import { seoContent } from "../site/seo.js";

export const failedPage = {
  meta: seoContent.failed,
  heading: "Payment unsuccessful",
  body:
    "Your automation engagement payment did not complete. No charges were made. Retry below or contact us for manual invoicing or procurement support.",
  actions: [
    { label: "Try again", href: "payment.html" },
    { label: "Contact support", href: "contact.html", variant: "ghost" },
  ],
};
