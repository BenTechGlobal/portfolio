/**
 * ============================================================================
 * INTERACTIVE UI, ANIMATIONS & ACCESSIBILITY MODULE
 * ============================================================================
 */

const PortfolioInteractions = (() => {
  const prefersReducedMotion = () =>
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function initThemeToggle() {
    const toggleBtn = document.getElementById("theme-toggle");
    const htmlEl = document.documentElement;
    if (!toggleBtn) return;

    const savedTheme = localStorage.getItem("agf-portfolio-theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      htmlEl.setAttribute("data-theme", savedTheme);
    }

    const updateIcon = () => {
      const current = htmlEl.getAttribute("data-theme");
      const iconSpan = toggleBtn.querySelector(".theme-icon");
      if (iconSpan) {
        iconSpan.textContent = current === "dark" ? "\u2600" : "\u263E";
      }
    };

    updateIcon();

    toggleBtn.addEventListener("click", () => {
      const next = htmlEl.getAttribute("data-theme") === "dark" ? "light" : "dark";
      htmlEl.setAttribute("data-theme", next);
      localStorage.setItem("agf-portfolio-theme", next);
      updateIcon();
    });
  }

  function initMobileNav() {
    const menuBtn = document.getElementById("mobile-menu-toggle");
    const navEl = document.getElementById("main-nav");
    if (!menuBtn || !navEl) return;

    const closeMenu = () => {
      navEl.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    };

    menuBtn.addEventListener("click", () => {
      const isOpen = navEl.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(isOpen));
    });

    navEl.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && navEl.classList.contains("open")) {
        closeMenu();
        menuBtn.focus();
      }
    });
  }

  function initScrollTracking() {
    const progressBar = document.getElementById("scroll-progress");
    const navLinks = Array.from(document.querySelectorAll(".main-nav .nav-link"));
    const sections = navLinks
      .map((link) => {
        const href = link.getAttribute("href");
        if (!href || !href.startsWith("#")) return null;
        return document.querySelector(href);
      })
      .filter(Boolean);

    const onScroll = () => {
      if (progressBar) {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
        progressBar.style.width = `${pct}%`;
      }

      const scrollPos = window.scrollY + 140;
      let activeId = "";
      sections.forEach((sec) => {
        if (sec.offsetTop <= scrollPos && sec.offsetTop + sec.offsetHeight > scrollPos) {
          activeId = `#${sec.id}`;
        }
      });

      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === activeId);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function initScrollReveal() {
    const elements = document.querySelectorAll(".reveal-item");
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
  }

  function initLeftToRightMarquee(viewportId, trackId) {
    const viewport = document.getElementById(viewportId);
    const track = document.getElementById(trackId);
    if (!viewport || !track || track.children.length === 0) return;

    const originalItems = Array.from(track.children);
    originalItems.forEach((item) => {
      const clone = item.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      clone.querySelectorAll("a").forEach((a) => a.setAttribute("tabindex", "-1"));
      track.appendChild(clone);
    });

    if (prefersReducedMotion()) {
      viewport.style.overflowX = "auto";
      return;
    }

    let isPaused = false;
    let halfWidth = track.scrollWidth / 2;
    let offset = -halfWidth;
    const speedPxPerFrame = 0.65;

    const recalculateWidth = () => {
      halfWidth = track.scrollWidth / 2;
      if (offset < -halfWidth || offset > 0) {
        offset = -halfWidth;
      }
    };

    window.addEventListener("resize", recalculateWidth, { passive: true });

    viewport.addEventListener("mouseenter", () => { isPaused = true; });
    viewport.addEventListener("mouseleave", () => { isPaused = false; });
    viewport.addEventListener("focusin", () => { isPaused = true; });
    viewport.addEventListener("focusout", () => { isPaused = false; });
    viewport.addEventListener("touchstart", () => { isPaused = true; }, { passive: true });
    viewport.addEventListener("touchend", () => {
      setTimeout(() => { isPaused = false; }, 1200);
    }, { passive: true });

    const step = () => {
      if (!isPaused && halfWidth > 0) {
        offset += speedPxPerFrame;
        if (offset >= 0) {
          offset = -halfWidth;
        }
        track.style.transform = `translate3d(${offset}px, 0, 0)`;
      }
      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }

  function initProjectModal() {
    const modal = document.getElementById("project-modal");
    const closeBtn = document.getElementById("modal-close-btn");
    if (!modal || !closeBtn) return { open: () => {}, close: () => {} };

    let lastFocusedElement = null;

    const close = () => {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
      if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
        lastFocusedElement.focus();
      }
    };

    const open = (project, categoryName) => {
      lastFocusedElement = document.activeElement;

      const catEl = document.getElementById("modal-project-category");
      const statusEl = document.getElementById("modal-project-status");
      const titleEl = document.getElementById("modal-project-title");
      const idEl = document.getElementById("modal-project-id");
      const descEl = document.getElementById("modal-project-description");
      const techEl = document.getElementById("modal-project-tech");
      const linksEl = document.getElementById("modal-project-links");

      if (catEl) catEl.textContent = categoryName;
      if (titleEl) titleEl.textContent = project.title;
      if (idEl) idEl.textContent = `Project Reference ID: ${project.id.toUpperCase()}`;
      if (descEl) descEl.textContent = project.description;

      if (statusEl) {
        statusEl.className = `status-badge status-${project.status}`;
        statusEl.textContent = formatStatusText(project.status);
      }

      if (techEl) {
        techEl.replaceChildren();
        (project.technologies || []).forEach((tech) => {
          const span = document.createElement("span");
          span.className = "tech-chip";
          span.textContent = tech;
          techEl.appendChild(span);
        });
      }

      if (linksEl) {
        linksEl.replaceChildren();
        if (project.githubUrl) {
          const repoAnchor = document.createElement("a");
          repoAnchor.href = project.githubUrl;
          repoAnchor.target = "_blank";
          repoAnchor.rel = "noopener noreferrer";
          repoAnchor.className = "btn btn-primary";
          repoAnchor.textContent = "View GitHub Repository ↗";
          linksEl.appendChild(repoAnchor);
        } else {
          const placeholderNote = document.createElement("span");
          placeholderNote.className = "repo-placeholder";
          placeholderNote.textContent =
            "GitHub Repository: [Editable Placeholder — Repository pending creation]";
          linksEl.appendChild(placeholderNote);
        }
      }

      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
      closeBtn.focus();
    };

    closeBtn.addEventListener("click", close);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) close();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        close();
      }
    });

    return { open, close };
  }

  function formatStatusText(status) {
    if (status === "completed") return "Completed";
    if (status === "in-progress") return "In Progress";
    return "Planned";
  }

  return {
    initThemeToggle,
    initMobileNav,
    initScrollTracking,
    initScrollReveal,
    initLeftToRightMarquee,
    initProjectModal,
    formatStatusText
  };
})();
