/**
 * ============================================================================
 * MAIN APPLICATION CONTROLLER & CENTRALISED PROFILE DATA
 * ============================================================================
 */

const PROFILE_CONFIG = {
  fullName: "Adepoju Gbenga Festus",
  email: "adepojugbenga2017@gmail.com",
  phoneDisplay: "09078920214",
  whatsappNumber: "2349078920214",
  location: "Abeokuta, Ogun State, Nigeria",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/BenTechGlobal",
      handle: "BenTechGlobal",
      isPlaceholder: false
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/adepoju-gbenga-b75948203",
      handle: "Adepoju Gbenga",
      isPlaceholder: false
    },
    {
      name: "YouTube",
      url: "#contact-section",
      handle: "YouTube (Add Channel URL)",
      isPlaceholder: true
    },
    {
      name: "Facebook",
      url: "#contact-section",
      handle: "Facebook (Add Profile URL)",
      isPlaceholder: true
    },
    {
      name: "TikTok",
      url: "#contact-section",
      handle: "TikTok (Add Handle URL)",
      isPlaceholder: true
    }
  ]
};

const TIMELINE_DATA = [
  {
    date: "2026 – Present",
    category: "cybersecurity",
    tag: "Cybersecurity & GRC",
    title: "15-Domain Cybersecurity Project Roadmap & Certification Advancement",
    organisation: "Independent Security Lab & Continuous Study",
    description:
      "Earned the OPSWAT Industrial Cybersecurity Protection (ICIP) certification. Completed the CompTIA Security+ (SY0-701) syllabus and Microsoft AZ-500 / SC-100 courses and pre-assessments. Finalising CompTIA Network+ (N10-009) and ISC2 CC preparation while executing simulated GRC compliance and third-party risk projects."
  },
  {
    date: "November – December 2025",
    category: "cybersecurity",
    tag: "Strategic Pivot",
    title: "Transition into Cybersecurity & Social Engineering Foundations",
    organisation: "Self-Directed Research & Technical Reading",
    description:
      "Initiated structured transition from software development into cybersecurity in response to AI-driven industry shifts. Studied social engineering, human behaviour, and security awareness through foundational works by Christopher Hadnagy and Kevin D. Mitnick."
  },
  {
    date: "Last Week of October 2025",
    category: "experience",
    tag: "Field Data Operations",
    title: "Contract Customer Data Enumerator",
    organisation: "Ogun State Water Corporation (OGSWC WSSMP — Federal Government Initiative)",
    description:
      "Executed structured field customer data enumeration with high accuracy, integrity, and adherence to public-sector data collection standards."
  },
  {
    date: "Completed March 2025",
    category: "education",
    tag: "NYSC Service",
    title: "Mathematics, Further Mathematics & ICT Instructor",
    organisation: "Nigeria Police Force Education Unit — Police Secondary School, Igbo-Ora, Oyo State",
    description:
      "Delivered secondary-level instruction in Mathematics, Further Mathematics, and Information & Communication Technology during National Youth Service Corps deployment."
  },
  {
    date: "2023",
    category: "education",
    tag: "University Graduation",
    title: "Bachelor of Science (B.Sc.) in Mathematics",
    organisation: "Federal University of Agriculture, Abeokuta (FUNAAB)",
    description:
      "Graduated with a B.Sc. in Mathematics, completing a prerequisite final-year course in Data Science with Python libraries alongside independent web development projects."
  },
  {
    date: "2022 – Ongoing Craft",
    category: "experience",
    tag: "Craft & Entrepreneurship",
    title: "Bespoke Fashion Design & Tailoring Training",
    organisation: "Biola Zubair Clothings — Alogi, Obantoko, Abeokuta, Ogun State",
    description:
      "Trained during academic breaks in garment construction—crafting native attire (agbada, dansiki), trousers, shirts, blazers, and waistcoats—and operated an undergraduate tailoring brand with personal equipment."
  },
  {
    date: "January – June",
    category: "education",
    tag: "SIWES Placement",
    title: "Student Industrial Work Experience Scheme (SIWES) Instructor",
    organisation: "Foursquare Schools",
    description:
      "Taught Mathematics, Further Mathematics, and IT, translating abstract analytical topics into structured classroom lessons."
  },
  {
    date: "September 2017 – March 2018",
    category: "education",
    tag: "Academic Instruction",
    title: "Examination Preparatory Tutor",
    organisation: "Maths Theatre & Tutorial Centres, Abeokuta",
    description:
      "Prepared candidates for JAMB, SSCE, WAEC, NECO, GCE, A-Levels, IJMB, and JUPEB examinations across Abeokuta."
  }
];

const SKILLS_DATA = [
  {
    category: "Governance, Risk & Compliance (GRC)",
    depthClass: "level-project",
    depthLabel: "Demonstrated Project Experience",
    summary: "ISO/IEC 27001 & NIST CSF gap analysis, third-party vendor risk assessment, policy drafting, and audit readiness.",
    items: ["ISO/IEC 27001", "NIST CSF", "Third-Party Risk (TPRM)", "Risk Registers", "Policy Documentation"]
  },
  {
    category: "Cybersecurity & Information Assurance",
    depthClass: "level-ongoing",
    depthLabel: "Ongoing Lab & Study",
    summary: "Security+ (SY0-701) & ISC2 CC domains, CIA triad implementation, threat modeling, social engineering defense, and OT/ICS fundamentals.",
    items: ["OPSWAT ICIP", "Threat & Vulnerability Mgmt", "Social Engineering Defense", "Information Assurance", "Zero Trust Concepts"]
  },
  {
    category: "Network Security & Infrastructure",
    depthClass: "level-ongoing",
    depthLabel: "Ongoing Lab & Study",
    summary: "CompTIA Network+ (N10-009) architecture, TCP/IP subnetting, VLAN segmentation, firewall/IDS fundamentals, and traffic inspection.",
    items: ["TCP/IP & Subnetting", "Network+ (N10-009)", "Firewall & IDS Concepts", "VPN & Segmentation", "Packet Analysis"]
  },
  {
    category: "Software & Web Development",
    depthClass: "level-practical",
    depthLabel: "Practical Experience",
    summary: "Building and deploying semantic, responsive, dependency-free web applications and custom interactive exam simulators on GitHub.",
    items: ["HTML5", "CSS3", "Vanilla ES6+ JavaScript", "Git & GitHub Pages", "Responsive UI Architecture"]
  },
  {
    category: "Programming & Data Science Foundations",
    depthClass: "level-foundational",
    depthLabel: "Foundational Knowledge",
    summary: "Academic training in Data Science with Python libraries alongside JavaScript engineering principles from Eloquent JavaScript.",
    items: ["Python Data Libraries", "JavaScript (ES6+)", "Analytical Modelling", "Structured JSON/JS Schemas"]
  },
  {
    category: "AI Security & Governance",
    depthClass: "level-ongoing",
    depthLabel: "Ongoing Lab & Study",
    summary: "Exploring NIST AI RMF governance, OWASP Top 10 for LLMs, prompt injection risks, and human-in-the-loop oversight.",
    items: ["NIST AI RMF", "OWASP LLM Top 10", "AI Governance", "Prompt Security Concepts"]
  },
  {
    category: "Technical Research & Instructional Design",
    depthClass: "level-practical",
    depthLabel: "Practical Experience",
    summary: "Multi-year mathematics and ICT instruction, exam-item authoring, and translating complex technical frameworks into plain English.",
    items: ["Technical Documentation", "Curriculum & Lesson Design", "Analytical Problem Solving", "Stakeholder Communication"]
  },
  {
    category: "Graphics Design & Visual Communication",
    depthClass: "level-practical",
    depthLabel: "Practical Experience",
    summary: "Creating digital promotional graphics, brand layouts, and visual communication assets using mobile design suites and AI tools.",
    items: ["Digital Poster Design", "Visual Hierarchy", "AI-Assisted Design Workflows", "Brand Presentation"]
  }
];

const MULTIDISCIPLINARY_DATA = [
  {
    code: "MTH",
    title: "Mathematics & Quantitative Reasoning",
    description:
      "B.Sc. Mathematics graduate (FUNAAB, 2023) applying formal logic, probability, and structured abstraction to risk analysis, cryptography concepts, and anomaly detection."
  },
  {
    code: "EDU",
    title: "Teaching & Knowledge Transfer",
    description:
      "Extensive teaching record across Maths Theatre, SIWES at Foursquare Schools, and NYSC at Police Secondary School Igbo-Ora—demonstrating clear communication and mentorship."
  },
  {
    code: "IOT",
    title: "Automotive Fundamentals & Connected Vehicle IoT",
    description:
      "Raised alongside a father with 35+ years as an automobile technician, acquiring practical mechanical fundamentals, driving experience, and focused interest in modern automotive IoT security."
  },
  {
    code: "Bespoke",
    title: "Fashion Design, Tailoring & Entrepreneurship",
    description:
      "Trained at Biola Zubair Clothings (Abeokuta) in constructing agbada, dansiki, trousers, shirts, blazers, and waistcoats; operated a self-branded undergraduate tailoring enterprise."
  },
  {
    code: "DES",
    title: "Graphics Design & Digital Branding",
    description:
      "Producing clean promotional graphics and visual brand materials using smartphone creative suites and modern AI design tools."
  },
  {
    code: "DEV",
    title: "Independent Software Engineering",
    description:
      "Building practical web tools, institutional sites, and exam simulators from scratch with maintainable, framework-free code."
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("current-year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  PortfolioInteractions.initThemeToggle();
  PortfolioInteractions.initMobileNav();
  PortfolioInteractions.initScrollTracking();
  const modalController = PortfolioInteractions.initProjectModal();

  renderSocialLinks("hero-social-links");
  renderSocialLinks("footer-social-links");
  renderTimeline("all");
  renderSkills();
  renderCertifications("all");
  renderMultidisciplinary();
  renderSoftwareProjects();
  renderAffiliates();

  PortfolioInteractions.initLeftToRightMarquee(
    "affiliate-marquee-viewport",
    "affiliate-marquee-track"
  );

  initCybersecurityShowcase(modalController);
  initTimelineFilters();
  initCertificationFilters();
  initDirectComposer();
  initPortraitFallback();

  PortfolioInteractions.initScrollReveal();
});

function initPortraitFallback() {
  const img = document.getElementById("profile-portrait-img");
  if (!img) return;
  const customSrc = img.getAttribute("data-custom-photo");
  if (!customSrc) return;

  const probe = new Image();
  probe.onload = () => {
    img.src = customSrc;
    img.alt = `Portrait photograph of ${PROFILE_CONFIG.fullName}`;
  };
  probe.src = customSrc;
}

function renderSocialLinks(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.replaceChildren();

  PROFILE_CONFIG.socialLinks.forEach((item) => {
    const a = document.createElement("a");
    a.className = "social-pill";
    a.href = item.url;
    a.textContent = item.isPlaceholder ? `${item.name} [Placeholder]` : `${item.name} (${item.handle})`;
    if (!item.url.startsWith("#")) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
    container.appendChild(a);
  });
}

function renderTimeline(filterCategory) {
  const container = document.getElementById("timeline-container");
  if (!container) return;
  container.replaceChildren();

  const filtered =
    filterCategory === "all"
      ? TIMELINE_DATA
      : TIMELINE_DATA.filter((item) => item.category === filterCategory);

  filtered.forEach((item) => {
    const article = document.createElement("article");
    article.className = "timeline-item glass-card";

    const meta = document.createElement("div");
    meta.className = "timeline-meta";

    const dateSpan = document.createElement("span");
    dateSpan.className = "timeline-date";
    dateSpan.textContent = item.date;

    const tagSpan = document.createElement("span");
    tagSpan.className = "timeline-tag";
    tagSpan.textContent = item.tag;

    meta.append(dateSpan, tagSpan);

    const h3 = document.createElement("h3");
    h3.textContent = item.title;

    const org = document.createElement("p");
    org.className = "timeline-org";
    org.textContent = item.organisation;

    const desc = document.createElement("p");
    desc.className = "timeline-desc";
    desc.textContent = item.description;

    article.append(meta, h3, org, desc);
    container.appendChild(article);
  });
}

function initTimelineFilters() {
  const buttons = document.querySelectorAll("[data-timeline-filter]");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      renderTimeline(btn.getAttribute("data-timeline-filter"));
    });
  });
}

function renderSkills() {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;
  grid.replaceChildren();

  SKILLS_DATA.forEach((skill) => {
    const card = document.createElement("article");
    card.className = "skill-card glass-card reveal-item";

    const header = document.createElement("div");
    header.className = "skill-card-header";

    const h3 = document.createElement("h3");
    h3.textContent = skill.category;

    const badge = document.createElement("span");
    badge.className = `depth-badge ${skill.depthClass}`;
    badge.textContent = skill.depthLabel;

    header.append(h3, badge);

    const summary = document.createElement("p");
    summary.className = "skill-summary";
    summary.textContent = skill.summary;

    const tags = document.createElement("div");
    tags.className = "skill-tags";
    skill.items.forEach((t) => {
      const span = document.createElement("span");
      span.className = "skill-tag";
      span.textContent = t;
      tags.appendChild(span);
    });

    card.append(header, summary, tags);
    grid.appendChild(card);
  });
}

function renderCertifications(statusFilter) {
  const grid = document.getElementById("certifications-grid");
  if (!grid || typeof CERTIFICATIONS_DATA === "undefined") return;
  grid.replaceChildren();

  const filtered =
    statusFilter === "all"
      ? CERTIFICATIONS_DATA
      : CERTIFICATIONS_DATA.filter((cert) => cert.status === statusFilter);

  filtered.forEach((cert) => {
    const card = document.createElement("article");
    card.className = "cert-card glass-card";

    const topBlock = document.createElement("div");

    const topRow = document.createElement("div");
    topRow.className = "cert-top";

    const issuer = document.createElement("span");
    issuer.className = "cert-issuer";
    issuer.textContent = `${cert.issuer} • ${cert.date}`;

    const badge = document.createElement("span");
    badge.className = `status-badge status-${cert.status}`;
    badge.textContent = cert.statusLabel;

    topRow.append(issuer, badge);

    const h3 = document.createElement("h3");
    h3.textContent = cert.title;

    const desc = document.createElement("p");
    desc.className = "cert-desc";
    desc.textContent = cert.description;

    topBlock.append(topRow, h3, desc);

    const meta = document.createElement("p");
    meta.className = "cert-meta";
    meta.textContent = cert.verificationNote;

    card.append(topBlock, meta);
    grid.appendChild(card);
  });
}

function initCertificationFilters() {
  const buttons = document.querySelectorAll("[data-cert-filter]");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderCertifications(btn.getAttribute("data-cert-filter"));
    });
  });
}

function renderMultidisciplinary() {
  const grid = document.getElementById("multidisciplinary-grid");
  if (!grid) return;
  grid.replaceChildren();

  MULTIDISCIPLINARY_DATA.forEach((item) => {
    const card = document.createElement("article");
    card.className = "multi-card glass-card reveal-item";

    const icon = document.createElement("div");
    icon.className = "multi-icon";
    icon.textContent = item.code;

    const h3 = document.createElement("h3");
    h3.textContent = item.title;

    const p = document.createElement("p");
    p.textContent = item.description;

    card.append(icon, h3, p);
    grid.appendChild(card);
  });
}

function renderSoftwareProjects() {
  const grid = document.getElementById("software-projects-grid");
  if (!grid || typeof SOFTWARE_PROJECTS === "undefined") return;
  grid.replaceChildren();

  SOFTWARE_PROJECTS.forEach((proj) => {
    const card = document.createElement("article");
    card.className = "software-card glass-card reveal-item";

    const preview = document.createElement("div");
    preview.className = "software-preview";

    const tag = document.createElement("span");
    tag.className = "software-preview-tag";
    tag.textContent = proj.tag;

    const previewTitle = document.createElement("span");
    previewTitle.className = "software-preview-title";
    previewTitle.textContent = proj.title;

    preview.append(tag, previewTitle);

    const body = document.createElement("div");
    body.className = "software-body";

    const h3 = document.createElement("h3");
    h3.textContent = proj.title;

    const p = document.createElement("p");
    p.textContent = proj.description;

    const techList = document.createElement("div");
    techList.className = "project-tech-list";
    proj.technologies.forEach((t) => {
      const chip = document.createElement("span");
      chip.className = "tech-chip";
      chip.textContent = t;
      techList.appendChild(chip);
    });

    const links = document.createElement("div");
    links.className = "software-links";

    const ghLink = document.createElement("a");
    ghLink.href = proj.githubUrl;
    ghLink.target = "_blank";
    ghLink.rel = "noopener noreferrer";
    ghLink.className = "repo-link";
    ghLink.textContent = "GitHub Profile / Repo ↗";

    links.appendChild(ghLink);

    if (proj.liveUrl && proj.liveUrl !== proj.githubUrl) {
      const liveLink = document.createElement("a");
      liveLink.href = proj.liveUrl;
      liveLink.className = "repo-link";
      liveLink.textContent = "View Live →";
      if (!proj.liveUrl.startsWith("#")) {
        liveLink.target = "_blank";
        liveLink.rel = "noopener noreferrer";
      }
      links.appendChild(liveLink);
    }

    body.append(h3, p, techList, links);
    card.append(preview, body);
    grid.appendChild(card);
  });
}

function renderAffiliates() {
  const track = document.getElementById("affiliate-marquee-track");
  if (!track || typeof AFFILIATE_BRANDS === "undefined") return;
  track.replaceChildren();

  AFFILIATE_BRANDS.forEach((brand) => {
    const card = document.createElement("a");
    card.className = "affiliate-card";
    card.href = brand.url;
    if (!brand.url.startsWith("#")) {
      card.target = "_blank";
      card.rel = "noopener noreferrer";
    }

    const badge = document.createElement("span");
    badge.className = "affiliate-badge";
    badge.textContent = brand.category;

    const name = document.createElement("span");
    name.className = "affiliate-name";
    name.textContent = brand.name;

    const desc = document.createElement("span");
    desc.className = "affiliate-desc";
    desc.textContent = brand.description;

    const cta = document.createElement("span");
    cta.className = "affiliate-cta";
    cta.textContent = brand.ctaText;

    card.append(badge, name, desc, cta);
    track.appendChild(card);
  });
}

function initCybersecurityShowcase(modalController) {
  if (typeof CYBERSECURITY_CATEGORIES === "undefined") return;

  const state = {
    selectedCategoryId: "cat-01",
    statusFilter: "all",
    searchQuery: ""
  };

  const pillsContainer = document.getElementById("category-pills");
  const overviewBanner = document.getElementById("category-overview-banner");
  const projectsGrid = document.getElementById("cyber-projects-grid");
  const emptyState = document.getElementById("projects-empty-state");
  const searchInput = document.getElementById("project-search-input");
  const statusButtons = document.querySelectorAll("[data-status-filter]");
  const viewAllBtn = document.getElementById("view-all-categories-btn");
  const resetBtn = document.getElementById("reset-project-filters");

  const updateLiveCounters = () => {
    let total = 0;
    let completed = 0;
    let inProgress = 0;
    let planned = 0;

    CYBERSECURITY_CATEGORIES.forEach((cat) => {
      cat.projects.forEach((p) => {
        total += 1;
        if (p.status === "completed") completed += 1;
        else if (p.status === "in-progress") inProgress += 1;
        else planned += 1;
      });
    });

    const setVal = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = String(val);
    };

    setVal("count-total", total);
    setVal("count-completed", completed);
    setVal("count-in-progress", inProgress);
    setVal("count-planned", planned);
  };

  const renderCategoryPills = () => {
    if (!pillsContainer) return;
    pillsContainer.replaceChildren();

    CYBERSECURITY_CATEGORIES.forEach((cat) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "category-pill";
      if (state.selectedCategoryId === cat.id && !state.searchQuery) {
        btn.classList.add("active");
      }
      btn.textContent = `${cat.code}. ${cat.shortName} (${cat.projects.length})`;
      btn.addEventListener("click", () => {
        state.selectedCategoryId = cat.id;
        state.searchQuery = "";
        if (searchInput) searchInput.value = "";
        renderAll();
      });
      pillsContainer.appendChild(btn);
    });
  };

  const renderAll = () => {
    renderCategoryPills();

    const query = state.searchQuery.trim().toLowerCase();
    const isGlobalView = state.selectedCategoryId === "all" || query.length > 0;

    if (overviewBanner) {
      overviewBanner.replaceChildren();
      const h3 = document.createElement("h3");
      const p = document.createElement("p");

      if (isGlobalView) {
        h3.textContent = query
          ? `Search Results Across All 15 Categories for "${state.searchQuery}"`
          : "All 15 Cybersecurity Specialisation Categories (150 Projects)";
        p.textContent =
          "Click any project card to inspect full scope, technologies, and repository status. Update statuses anytime in js/projects.js.";
      } else {
        const activeCat = CYBERSECURITY_CATEGORIES.find((c) => c.id === state.selectedCategoryId);
        if (activeCat) {
          h3.textContent = `Category ${activeCat.code}: ${activeCat.name}`;
          p.textContent = activeCat.description;
        }
      }
      overviewBanner.append(h3, p);
    }

    const matchingEntries = [];
    CYBERSECURITY_CATEGORIES.forEach((cat) => {
      if (!isGlobalView && cat.id !== state.selectedCategoryId) return;

      cat.projects.forEach((proj) => {
        const matchesStatus =
          state.statusFilter === "all" || proj.status === state.statusFilter;

        const haystack = `${proj.title} ${proj.description} ${cat.name} ${(proj.technologies || []).join(" ")}`.toLowerCase();
        const matchesQuery = !query || haystack.includes(query);

        if (matchesStatus && matchesQuery) {
          matchingEntries.push({ project: proj, categoryName: cat.name });
        }
      });
    });

    if (!projectsGrid || !emptyState) return;
    projectsGrid.replaceChildren();

    if (matchingEntries.length === 0) {
      projectsGrid.classList.add("hidden");
      emptyState.classList.remove("hidden");
      return;
    }

    projectsGrid.classList.remove("hidden");
    emptyState.classList.add("hidden");

    matchingEntries.forEach(({ project, categoryName }) => {
      const card = document.createElement("article");
      card.className = "project-card glass-card";
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `Open details for ${project.title}`);

      const topSection = document.createElement("div");

      const topMeta = document.createElement("div");
      topMeta.className = "project-card-top";

      const codeSpan = document.createElement("span");
      codeSpan.className = "project-code";
      codeSpan.textContent = project.id.toUpperCase();

      const statusSpan = document.createElement("span");
      statusSpan.className = `status-badge status-${project.status}`;
      statusSpan.textContent = PortfolioInteractions.formatStatusText(project.status);

      topMeta.append(codeSpan, statusSpan);

      const h3 = document.createElement("h3");
      h3.textContent = project.title;

      const catLabel = document.createElement("p");
      catLabel.className = "project-cat-label";
      catLabel.textContent = categoryName;

      const desc = document.createElement("p");
      desc.className = "project-desc";
      desc.textContent = project.description;

      topSection.append(topMeta, h3, catLabel, desc);

      const bottomSection = document.createElement("div");

      const techList = document.createElement("div");
      techList.className = "project-tech-list";
      (project.technologies || []).forEach((t) => {
        const chip = document.createElement("span");
        chip.className = "tech-chip";
        chip.textContent = t;
        techList.appendChild(chip);
      });

      const footer = document.createElement("div");
      footer.className = "project-card-footer";
      footer.style.marginTop = "12px";

      if (project.githubUrl) {
        const repoA = document.createElement("a");
        repoA.className = "repo-link";
        repoA.href = project.githubUrl;
        repoA.target = "_blank";
        repoA.rel = "noopener noreferrer";
        repoA.textContent = "GitHub Repo ↗";
        repoA.addEventListener("click", (e) => e.stopPropagation());
        footer.appendChild(repoA);
      } else {
        const placeholder = document.createElement("span");
        placeholder.className = "repo-placeholder";
        placeholder.textContent = "Repo: [Editable Placeholder]";
        footer.appendChild(placeholder);
      }

      const detailsHint = document.createElement("span");
      detailsHint.className = "repo-link";
      detailsHint.textContent = "Inspect →";
      footer.appendChild(detailsHint);

      bottomSection.append(techList, footer);
      card.append(topSection, bottomSection);

      card.addEventListener("click", () => modalController.open(project, categoryName));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          modalController.open(project, categoryName);
        }
      });

      projectsGrid.appendChild(card);
    });
  };

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      renderAll();
    });
  }

  statusButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      statusButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.statusFilter = btn.getAttribute("data-status-filter");
      renderAll();
    });
  });

  if (viewAllBtn) {
    viewAllBtn.addEventListener("click", () => {
      state.selectedCategoryId = "all";
      state.searchQuery = "";
      if (searchInput) searchInput.value = "";
      renderAll();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      state.selectedCategoryId = "cat-01";
      state.statusFilter = "all";
      state.searchQuery = "";
      if (searchInput) searchInput.value = "";
      statusButtons.forEach((b) => {
        b.classList.toggle("active", b.getAttribute("data-status-filter") === "all");
      });
      renderAll();
    });
  }

  updateLiveCounters();
  renderAll();
}

function initDirectComposer() {
  const form = document.getElementById("direct-message-form");
  const whatsappBtn = document.getElementById("send-whatsapp-btn");
  const feedback = document.getElementById("composer-feedback");
  if (!form || !feedback) return;

  const getValidatedPayload = () => {
    const name = document.getElementById("sender-name").value.trim();
    const topic = document.getElementById("inquiry-topic").value.trim();
    const message = document.getElementById("sender-message").value.trim();

    if (!name || !message) {
      feedback.textContent = "Please enter your name/organisation and message before continuing.";
      return null;
    }

    feedback.textContent = "";
    return { name, topic, message };
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const payload = getValidatedPayload();
    if (!payload) return;

    const subject = encodeURIComponent(`[Portfolio Inquiry: ${payload.topic}] from ${payload.name}`);
    const body = encodeURIComponent(
      `Hello Adepoju Gbenga Festus,\n\nName/Organisation: ${payload.name}\nTopic: ${payload.topic}\n\n${payload.message}`
    );

    feedback.textContent = "Opening your default email application...";
    window.location.href = `mailto:${PROFILE_CONFIG.email}?subject=${subject}&body=${body}`;
  });

  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", () => {
      const payload = getValidatedPayload();
      if (!payload) return;

      const text = encodeURIComponent(
        `Hello Adepoju Gbenga Festus,\nName/Organisation: ${payload.name}\nTopic: ${payload.topic}\n\n${payload.message}`
      );
      feedback.textContent = "Opening WhatsApp chat...";
      window.open(
        `https://wa.me/${PROFILE_CONFIG.whatsappNumber}?text=${text}`,
        "_blank",
        "noopener,noreferrer"
      );
    });
  }
}
