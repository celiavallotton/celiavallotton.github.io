(function () {
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  const projectList = window.PORTFOLIO_PROJECTS || [];
  const categories = ["Mechanical Design", "CAD / FEA", "Manufacturing", "Renewable Energy", "Product Development", "Engineering Outreach"];
  const grid = document.getElementById("project-grid");
  const filters = document.getElementById("project-filters");

  function cardArt() {
    return '<div class="project-art" aria-hidden="true"><svg class="art-motif" viewBox="0 0 260 160"><path d="M30 128 59 37l42-18 63 21 45 87H30Z"/><path d="m59 37 70 33 35-30M101 19l28 51 63-30M59 37l9 63 61 12 89-8M30 128l38-28m61 12-4-42m4 42 78 16m-78-16 24-41"/><path class="light" d="M30 128h179m-141-28 33-27m29 56 43-43"/><circle class="accent" cx="59" cy="37" r="4"/><circle class="accent" cx="101" cy="19" r="4"/><circle class="accent" cx="164" cy="40" r="4"/><circle class="accent" cx="209" cy="127" r="4"/><line class="accent" x1="209" y1="127" x2="238" y2="145"/></svg><span class="project-art-note">Illustrative graphic · add project image</span></div>';
  }

  function renderCards(activeCategory) {
    if (!grid) return;
    const visibleProjects = projectList.filter((project) => activeCategory === "All" || project.tags.includes(activeCategory));
    grid.innerHTML = visibleProjects.map((project, index) => `
      <article class="project-card">
        <a class="project-card-link" href="project.html?id=${encodeURIComponent(project.id)}" aria-label="View ${escapeHtml(project.title)} project details">
          ${cardArt()}
          <div class="project-card-body">
            <div class="project-card-top"><span class="project-category">${escapeHtml(project.category)}</span><span class="project-status">${escapeHtml(project.status)}</span></div>
            <h3>${escapeHtml(project.shortTitle || project.title)}</h3>
            <p>${escapeHtml(project.cardSummary)}</p>
            <div class="project-card-bottom"><span>PROJECT ${String(index + 1).padStart(2, "0")} · VIEW DETAILS</span><b aria-hidden="true">↗</b></div>
          </div>
        </a>
      </article>`).join("") || '<p class="empty-state">No projects are tagged in this category yet.</p>';
  }

  if (filters && grid) {
    const allCategories = ["All", ...categories];
    filters.innerHTML = allCategories.map((category, index) => `<button type="button" class="filter-button" data-filter="${escapeHtml(category)}" aria-pressed="${index === 0}">${escapeHtml(category)}</button>`).join("");
    renderCards("All");
    filters.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-filter]");
      if (!button) return;
      filters.querySelectorAll("button").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      renderCards(button.dataset.filter);
    });
  }

  const skillsRoot = document.getElementById("skill-groups");
  if (skillsRoot && window.PORTFOLIO_SKILLS) {
    skillsRoot.innerHTML = window.PORTFOLIO_SKILLS.map((group) => `<section class="skill-group"><h3>${escapeHtml(group.title)}</h3><ul>${group.skills.map(([name, level]) => `<li><span>${escapeHtml(name)}</span><span class="skill-level">${escapeHtml(level)}</span></li>`).join("")}</ul></section>`).join("");
  }

  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.getElementById("primary-nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = menuButton.getAttribute("aria-expanded") !== "true";
      menuButton.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    });
    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        menuButton.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      }
    });
  }

  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...document.querySelectorAll('.primary-nav a[href^="#"]')];
  if ("IntersectionObserver" in window && sections.length && navLinks.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${entry.target.id}`) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-20% 0px -68% 0px" });
    sections.forEach((section) => observer.observe(section));
  }

  const year = document.getElementById("current-year");
  if (year) year.textContent = new Date().getFullYear();

  const resumeLink = document.getElementById("resume-download");
  if (resumeLink) {
    fetch("assets/documents/resume.pdf", { method: "HEAD" }).then((response) => {
      if (!response.ok) return;
      resumeLink.href = "assets/documents/resume.pdf";
      resumeLink.setAttribute("download", "Celia-Vallotton-Resume.pdf");
      resumeLink.removeAttribute("aria-disabled");
      resumeLink.removeAttribute("tabindex");
      resumeLink.classList.remove("is-disabled");
      const label = resumeLink.querySelector(".resume-button-label");
      if (label) label.textContent = "Download";
    }).catch(() => {});
  }
})();
