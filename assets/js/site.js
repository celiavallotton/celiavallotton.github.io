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

  const woodworkingGrid = document.getElementById("woodworking-grid");
  const woodworkingProjects = window.PERSONAL_WOODWORKING_PROJECTS || [];
  if (woodworkingGrid && woodworkingProjects.length) {
    woodworkingGrid.innerHTML = woodworkingProjects.map((project, index) => `
      <article class="woodworking-card">
        <div class="woodworking-art">
          ${project.src ? `<img src="${escapeHtml(project.src)}" alt="${escapeHtml(project.alt || project.title)}" loading="lazy">` : '<svg viewBox="0 0 420 230" aria-hidden="true"><path d="M54 167 106 58l102 31 60-43 104 61-41 75-108-31-69 34Z"/><path d="m106 58 55 127m47-96 45 106m15-149-11 118m115-57-45 88M65 145l256 27M84 107l257 42"/><circle cx="106" cy="58" r="3"/><circle cx="268" cy="46" r="3"/></svg>'}
          <span class="woodworking-art-label">PERSONAL BUILD · ${String(index + 1).padStart(2, "0")}</span>
        </div>
        <div class="woodworking-card-copy"><h3>${escapeHtml(project.title)}</h3><p>${escapeHtml(project.summary)}</p>${project.materials ? `<span class="woodworking-materials">Materials · ${escapeHtml(project.materials)}</span>` : ""}</div>
      </article>`).join("");
  } else if (woodworkingGrid) {
    woodworkingGrid.innerHTML = `<article class="woodworking-empty"><div class="woodworking-art woodworking-art-empty"><svg viewBox="0 0 420 230" aria-hidden="true"><path d="m62 163 48-96 116 31-44 101Zm116 36 45-101 123 35-42 83ZM94 57l116 31 15-34-115-31Zm137 32 123 35 15-35-125-34Z"/><path d="m110 67 72 19m-85-36 70 18m64 32 83 23m-69-44 82 22M81 125l111 29m52-35 94 27"/><path d="M110 67 62 163m116 36 45-101m-12-10 123 35m-28-69-11 35"/></svg><span class="woodworking-art-label">PERSONAL WOODWORKING · IMAGE SLOT</span></div><div class="woodworking-empty-copy"><p class="eyebrow">INDEPENDENT BUILDS <span class="eyebrow-rule"></span></p><h3>A place for personal projects.</h3><p>This collection is separate from my Sonoma Millworks experience. Add personal builds here with a short description, materials, and project photos when ready.</p><p class="small-note">Project entries and image paths are managed in <code>assets/js/projects.js</code> and <code>assets/images/personal-woodworking/</code>.</p></div></article>`;
  }

  const ceramicsGrid = document.getElementById("ceramics-grid");
  const ceramicsProjects = window.CERAMICS_PROJECTS || [];
  if (ceramicsGrid && ceramicsProjects.length) {
    ceramicsGrid.innerHTML = ceramicsProjects.map((project, index) => `
      <article class="woodworking-card ceramics-card">
        <div class="woodworking-art ceramics-art">
          ${project.src ? `<img src="${escapeHtml(project.src)}" alt="${escapeHtml(project.alt || project.title)}" loading="lazy">` : '<svg viewBox="0 0 420 230" aria-hidden="true"><path d="M158 44c4 20-3 31-17 45-12 13-16 27-12 51 5 32 28 49 81 49s76-17 81-49c4-24 0-38-12-51-14-14-21-25-17-45"/><path d="M158 44c34 11 70 11 104 0M131 108c52 16 106 16 158 0m-163 36c56 16 112 16 168 0M210 74v108m-53-83c22 12 41 17 53 17s31-5 53-17"/><path d="M184 187c13 6 39 6 52 0"/></svg>'}
          <span class="woodworking-art-label">CERAMICS · ${String(index + 1).padStart(2, "0")}${project.src ? "" : " · ADD PHOTO"}</span>
        </div>
        <div class="woodworking-card-copy"><h3>${escapeHtml(project.title)}</h3><p>${escapeHtml(project.summary)}</p>${project.technique ? `<span class="woodworking-materials">Technique / materials · ${escapeHtml(project.technique)}</span>` : ""}</div>
      </article>`).join("");
  } else if (ceramicsGrid) {
    ceramicsGrid.innerHTML = `<article class="woodworking-empty ceramics-empty"><div class="woodworking-art woodworking-art-empty ceramics-art"><svg viewBox="0 0 420 230" aria-hidden="true"><path d="M158 44c4 20-3 31-17 45-12 13-16 27-12 51 5 32 28 49 81 49s76-17 81-49c4-24 0-38-12-51-14-14-21-25-17-45"/><path d="M158 44c34 11 70 11 104 0M131 108c52 16 106 16 158 0m-163 36c56 16 112 16 168 0M210 74v108m-53-83c22 12 41 17 53 17s31-5 53-17"/><path d="M184 187c13 6 39 6 52 0"/></svg><span class="woodworking-art-label">CERAMICS · PHOTO SLOT</span></div><div class="woodworking-empty-copy"><p class="eyebrow">CERAMICS COLLECTION <span class="eyebrow-rule"></span></p><h3>A space for ceramics work.</h3><p>Add pieces with a short description, process or technique notes, and photographs. This collection is for ceramics work; Sonoma Art School workshop assistance stays under Experience.</p><p class="small-note">Entries and image paths are managed in <code>assets/js/projects.js</code> and <code>assets/images/ceramics/</code>.</p></div></article>`;
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
      if (label) label.textContent = "Download PDF";
    }).catch(() => {});
  }
})();
