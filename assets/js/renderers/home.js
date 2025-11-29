import { byId } from "../core/utils.js";
import { renderTeamSpotlight, renderFaqs } from "./shared.js";
import { isEcommerceEnabled } from "../core/siteMode.js";

export function renderHomePage(data) {
  const page = data.pages?.home;
  if (!page) return;
  const ecommerceEnabled = isEcommerceEnabled();
  const hero = page.hero || {};
  const heroEyebrow = byId("heroEyebrow");
  const heroTitle = byId("heroTitle");
  const heroSubtitle = byId("heroSubtitle");
  const heroPrimary = byId("heroPrimary");
  const heroSecondary = byId("heroSecondary");
  const heroImage = byId("heroImage");
  if (heroEyebrow) heroEyebrow.textContent = hero.eyebrow || "";
  if (heroTitle) heroTitle.textContent = hero.title || "";
  if (heroSubtitle) heroSubtitle.textContent = hero.subtitle || "";
  if (heroPrimary) {
    const label = hero.primaryCta?.label;
    heroPrimary.textContent = label || "";
    heroPrimary.href = hero.primaryCta?.href || "#";
    heroPrimary.toggleAttribute("hidden", !label);
  }
  if (heroSecondary) {
    heroSecondary.textContent = hero.secondaryCta?.label || "";
    heroSecondary.href = hero.secondaryCta?.href || "#";
    heroSecondary.toggleAttribute("hidden", !hero.secondaryCta?.label);
  }
  if (heroImage) {
    if (hero.image) {
      heroImage.src = hero.image;
      heroImage.alt = hero.imageAlt || "Automation collage";
      heroImage.removeAttribute("hidden");
    } else {
      heroImage.setAttribute("hidden", "hidden");
    }
  }
  const heroMetrics = byId("heroMetrics");
  if (heroMetrics) {
    heroMetrics.innerHTML = "";
    // Metrics are data-driven so marketing can refresh proof points without touching HTML.
    (hero.metrics || []).forEach((metric) => {
      const div = document.createElement("div");
      div.innerHTML = `
        <strong>${metric.value}</strong>
        <span>${metric.label}</span>
      `;
      heroMetrics.appendChild(div);
    });
  }

  const servicesHeading = byId("servicesHeading");
  if (servicesHeading)
    servicesHeading.textContent = page.services?.heading || "";
  const servicesCards = byId("servicesCards");
  if (servicesCards) {
    servicesCards.innerHTML = "";
    (page.services?.cards || []).forEach((card) => {
      const article = document.createElement("article");
      article.className = "service-card js-reveal";
      const icon = card.icon
        ? `<span class="service-card__icon">${card.icon}</span>`
        : "";
      const highlights = (card.highlights || [])
        .map((item) => `<li>${item}</li>`)
        .join("");
      article.innerHTML = `
        ${icon}
        <div class="service-card__body">
          <h3>${card.title}</h3>
          <p>${card.description}</p>
          ${highlights ? `<ul>${highlights}</ul>` : ""}
        </div>
      `;
      servicesCards.appendChild(article);
    });
  }

  const logosEyebrow = byId("logosEyebrow");
  if (logosEyebrow) logosEyebrow.textContent = page.logos?.eyebrow || "";
  const logosList = byId("logosList");
  if (logosList) {
    logosList.innerHTML = "";
    (page.logos?.items || []).forEach((logo) => {
      const span = document.createElement("span");
      span.className = "js-reveal";
      span.textContent = logo;
      logosList.appendChild(span);
    });
  }

  const overviewCard = byId("overviewCard");
  if (overviewCard) {
    const overview = page.overview || {};
    const bullets = (overview.points || [])
      .map((point) => `<li>${point}</li>`)
      .join("");
    overviewCard.innerHTML = `
      <p class="eyebrow">${overview.eyebrow || ""}</p>
      <h2 id="overviewHeading">${overview.heading || ""}</h2>
      <p>${overview.copy || ""}</p>
      ${bullets ? `<ul>${bullets}</ul>` : ""}
    `;
  }

  const visionCard = byId("visionCard");
  const missionCard = byId("missionCard");
  if (visionCard || missionCard) {
    const missionVision = page.missionVision || {};
    if (visionCard) {
      visionCard.innerHTML = `
        <p class="eyebrow">${missionVision.visionEyebrow || "Vision"}</p>
        <h3>${missionVision.visionHeading || "Vision"}</h3>
        <p>${missionVision.visionCopy || ""}</p>
      `;
    }
    if (missionCard) {
      missionCard.innerHTML = `
        <p class="eyebrow">${missionVision.missionEyebrow || "Mission"}</p>
        <h3>${missionVision.missionHeading || "Mission"}</h3>
        <p>${missionVision.missionCopy || ""}</p>
      `;
    }
  }

  const valuesEyebrow = byId("valuesEyebrow");
  if (valuesEyebrow) valuesEyebrow.textContent = page.values?.eyebrow || "";
  const valuesHeading = byId("valuesHeading");
  if (valuesHeading) valuesHeading.textContent = page.values?.heading || "";
  const valuesCopy = byId("valuesCopy");
  if (valuesCopy) valuesCopy.textContent = page.values?.copy || "";
  const valuesGrid = byId("valuesGrid");
  if (valuesGrid) {
    valuesGrid.innerHTML = "";
    (page.values?.items || []).forEach((value) => {
      const card = document.createElement("article");
      card.className = "value-card js-reveal";
      card.innerHTML = `
        <h3>${value.title || ""}</h3>
        <p>${value.copy || ""}</p>
      `;
      valuesGrid.appendChild(card);
    });
  }

  const capabilities = page.capabilities || {};
  const capabilitiesEyebrow = byId("capabilitiesEyebrow");
  if (capabilitiesEyebrow) capabilitiesEyebrow.textContent = capabilities.eyebrow || "";
  const capabilitiesHeading = byId("capabilitiesHeading");
  if (capabilitiesHeading) capabilitiesHeading.textContent = capabilities.heading || "";
  const capabilitiesCopy = byId("capabilitiesCopy");
  if (capabilitiesCopy) capabilitiesCopy.textContent = capabilities.copy || "";
  const capabilitiesGrid = byId("capabilitiesGrid");
  if (capabilitiesGrid) {
    capabilitiesGrid.innerHTML = "";
    (capabilities.groups || []).forEach((group) => {
      const article = document.createElement("article");
      article.className = "capability-card js-reveal";
      const list = (group.items || [])
        .map((item) => `<li>${item}</li>`)
        .join("");
      article.innerHTML = `
        <h3>${group.title || ""}</h3>
        <p>${group.copy || ""}</p>
        ${list ? `<ul>${list}</ul>` : ""}
      `;
      capabilitiesGrid.appendChild(article);
    });
  }

  const addOns = page.addOns || {};
  const addOnsEyebrow = byId("addOnsEyebrow");
  if (addOnsEyebrow) addOnsEyebrow.textContent = addOns.eyebrow || "";
  const addOnsHeading = byId("addOnsHeading");
  if (addOnsHeading) addOnsHeading.textContent = addOns.heading || "";
  const addOnsCopy = byId("addOnsCopy");
  if (addOnsCopy) addOnsCopy.textContent = addOns.copy || "";
  const addOnsCards = byId("addOnsCards");
  if (addOnsCards) {
    addOnsCards.innerHTML = "";
    (addOns.cards || []).forEach((card) => {
      const article = document.createElement("article");
      article.className = "add-on-card js-reveal";
      const highlights = (card.highlights || [])
        .map((item) => `<li>${item}</li>`)
        .join("");
      const image = card.image
        ? `<figure class="add-on-figure"><img src="${card.image}" alt="${card.title}" /></figure>`
        : "";
      article.innerHTML = `
        ${image}
        <div class="add-on-body">
          <h3>${card.title}</h3>
          <p class="price">${card.price || ""}</p>
          <p>${card.description || ""}</p>
          <ul>${highlights}</ul>
        </div>
      `;
      addOnsCards.appendChild(article);
    });
  }

  const marketsEyebrow = byId("marketsEyebrow");
  if (marketsEyebrow) marketsEyebrow.textContent = page.markets?.eyebrow || "";
  const marketsHeading = byId("marketsHeading");
  if (marketsHeading) marketsHeading.textContent = page.markets?.heading || "";
  const marketsCopy = byId("marketsCopy");
  if (marketsCopy) marketsCopy.textContent = page.markets?.copy || "";
  const marketsGrid = byId("marketsGrid");
  if (marketsGrid) {
    marketsGrid.innerHTML = "";
    (page.markets?.items || []).forEach((item) => {
      const card = document.createElement("article");
      card.className = "market-card js-reveal";
      const bullets = (item.points || [])
        .map((point) => `<li>${point}</li>`)
        .join("");
      card.innerHTML = `
        <h3>${item.title || ""}</h3>
        <p>${item.copy || ""}</p>
        ${bullets ? `<ul>${bullets}</ul>` : ""}
      `;
      marketsGrid.appendChild(card);
    });
  }

  const strengthsEyebrow = byId("strengthsEyebrow");
  if (strengthsEyebrow) strengthsEyebrow.textContent = page.strengths?.eyebrow || "";
  const strengthsHeading = byId("strengthsHeading");
  if (strengthsHeading) strengthsHeading.textContent = page.strengths?.heading || "";
  const strengthsCopy = byId("strengthsCopy");
  if (strengthsCopy) strengthsCopy.textContent = page.strengths?.copy || "";
  const strengthsGrid = byId("strengthsGrid");
  if (strengthsGrid) {
    strengthsGrid.innerHTML = "";
    (page.strengths?.items || []).forEach((item) => {
      const card = document.createElement("article");
      card.className = "strength-card js-reveal";
      const bullets = (item.points || [])
        .map((point) => `<li>${point}</li>`)
        .join("");
      card.innerHTML = `
        <h3>${item.title || ""}</h3>
        <p>${item.copy || ""}</p>
        ${bullets ? `<ul>${bullets}</ul>` : ""}
      `;
      strengthsGrid.appendChild(card);
    });
  }

  const identityGrid = byId("identityGrid");
  if (identityGrid) {
    identityGrid.innerHTML = "";
    (page.identity?.cards || []).forEach((cardData) => {
      const card = document.createElement("article");
      card.className = "identity-card js-reveal";
      const tags = (cardData.tags || [])
        .map((tag) => `<span class="tag">${tag}</span>`)
        .join("");
      const list = (cardData.points || [])
        .map((point) => `<li>${point}</li>`)
        .join("");
      card.innerHTML = `
        <p class="eyebrow">${cardData.eyebrow || ""}</p>
        <h3>${cardData.title || ""}</h3>
        <p>${cardData.copy || ""}</p>
        ${tags ? `<div class="tags">${tags}</div>` : ""}
        ${list ? `<ul>${list}</ul>` : ""}
      `;
      identityGrid.appendChild(card);
    });
  }

  const techEyebrow = byId("techEyebrow");
  if (techEyebrow) techEyebrow.textContent = page.tech?.eyebrow || "";
  const techHeading = byId("techHeading");
  if (techHeading) techHeading.textContent = page.tech?.heading || "";
  const techCopy = byId("techCopy");
  if (techCopy) techCopy.textContent = page.tech?.copy || "";
  const techGrid = byId("techGrid");
  if (techGrid) {
    techGrid.innerHTML = "";
    (page.tech?.categories || []).forEach((category) => {
      const card = document.createElement("article");
      card.className = "tech-card js-reveal";
      const tags = (category.items || [])
        .map((stack) => `<span class="tag">${stack}</span>`)
        .join("");
      card.innerHTML = `
        <h3>${category.title || ""}</h3>
        <p>${category.copy || ""}</p>
        ${category.items ? `<div class="tags">${tags}</div>` : ""}
      `;
      techGrid.appendChild(card);
    });
  }

  const goalsEyebrow = byId("goalsEyebrow");
  if (goalsEyebrow) goalsEyebrow.textContent = page.goals?.eyebrow || "";
  const goalsHeading = byId("goalsHeading");
  if (goalsHeading) goalsHeading.textContent = page.goals?.heading || "";
  const goalsCopy = byId("goalsCopy");
  if (goalsCopy) goalsCopy.textContent = page.goals?.copy || "";
  const goalsTimeline = byId("goalsTimeline");
  if (goalsTimeline) {
    goalsTimeline.innerHTML = "";
    (page.goals?.items || []).forEach((goal) => {
      const div = document.createElement("div");
      div.className = "timeline-item js-reveal";
      div.innerHTML = `
        <h4>${goal.title || goal.year || ""}</h4>
        <p>${goal.detail || ""}</p>
      `;
      goalsTimeline.appendChild(div);
    });
  }

  const highlightsHeading = byId("highlightsHeading");
  if (highlightsHeading)
    highlightsHeading.textContent = page.highlights?.heading || "";
  const highlightsGrid = byId("highlightsGrid");
  if (highlightsGrid) {
    highlightsGrid.innerHTML = "";
    (page.highlights?.items || []).forEach((item) => {
      const card = document.createElement("article");
      card.className = "outcome-card js-reveal";
      card.innerHTML = `
        <figure>
          <img src="${item.img}" alt="${item.alt}" />
        </figure>
        <div class="outcome-card__body">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          ${(item.metrics || [])
            .map(
              (metric) => `
                <span class="metric">
                  <strong>${metric.value}</strong>
                  <small>${metric.label}</small>
                </span>
              `
            )
            .join("")}
        </div>
      `;
      highlightsGrid.appendChild(card);
    });
  }

  const galleryHeading = byId("galleryHeading");
  if (galleryHeading) galleryHeading.textContent = page.gallery?.heading || "";
  const galleryCopy = byId("galleryCopy");
  if (galleryCopy) galleryCopy.textContent = page.gallery?.copy || "";
  const galleryGrid = byId("galleryGrid");
  if (galleryGrid) {
    galleryGrid.innerHTML = "";
    (page.gallery?.items || []).forEach((item) => {
      const figure = document.createElement("figure");
      figure.className = "gallery-card js-reveal";
      figure.innerHTML = `
        <img src="${item.img}" alt="${item.alt}" />
        <figcaption>
          <strong>${item.title}</strong>
          <span>${item.caption || ""}</span>
        </figcaption>
      `;
      galleryGrid.appendChild(figure);
    });
  }

  const testimonialsHeading = byId("testimonialsHeading");
  if (testimonialsHeading)
    testimonialsHeading.textContent = page.testimonials?.heading || "";
  const testimonialList = byId("testimonialsList");
  if (testimonialList) {
    testimonialList.innerHTML = "";
    (page.testimonials?.items || []).forEach((item) => {
      const block = document.createElement("blockquote");
      block.className = "quote-card js-reveal";
      block.innerHTML = `“${item.quote}”<cite>— ${item.author}</cite>`;
      testimonialList.appendChild(block);
    });
  }

  renderTeamSpotlight(page.spotlight, data.team, data.socials);
  renderFaqs(byId("faqsContainer"), data.faqs);

  const contactConfig = page.contact || {};
  const contactHeading = byId("homeContactHeading");
  if (contactHeading) {
    contactHeading.textContent = ecommerceEnabled
      ? contactConfig.heading || ""
      : contactConfig.basicHeading || contactConfig.heading || "";
  }
  const contactPoints = byId("homeContactPoints");
  if (contactPoints) {
    contactPoints.innerHTML = "";
    const points = ecommerceEnabled
      ? contactConfig.points || []
      : contactConfig.basicPoints || contactConfig.points || [];
    points.forEach((point) => {
      const li = document.createElement("li");
      li.textContent = point;
      contactPoints.appendChild(li);
    });
  }
  const contactCopy = byId("contactCopy");
  if (contactCopy) {
    contactCopy.textContent = ecommerceEnabled
      ? data.contact?.copy || ""
      : data.contact?.basicCopy || data.contact?.copy || "";
  }
  const homeForm = document.getElementById("contactForm");
  if (homeForm) {
    homeForm.dataset.formKey = ecommerceEnabled ? "contact" : "basicContact";
    const hiddenField = homeForm.querySelector("input[name='form']");
    if (hiddenField) {
      hiddenField.value = ecommerceEnabled
        ? "Home contact"
        : "Home contact (basic site)";
    }
  }
}
