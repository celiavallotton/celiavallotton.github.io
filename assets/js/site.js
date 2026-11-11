(function () {
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
  const projectList = window.PORTFOLIO_PROJECTS || [];
  const priority = ["baja-chassis", "tensile-tester", "machining", "small-engineering", "ceramics", "woodworking", "coffee-kiosk", "wave-energy", "rube-goldberg"];
  const projects = projectList.filter((project) => project.showInEngineering !== false).sort((a, b) => {
    const ai = priority.indexOf(a.id);
    const bi = priority.indexOf(b.id);
    return (ai < 0 ? priority.length : ai) - (bi < 0 ? priority.length : bi);
  });
  const categories = ["Mechanical Design", "CAD / FEA", "Manufacturing", "Quality Inspection", "Renewable Energy", "Product Development", "Engineering Outreach", "Small Engineering", "Woodworking", "Ceramics", "Personal Projects"];
  const grid = document.getElementById("project-grid");
  const filters = document.getElementById("project-filters");

  function cardMedia(project) {
    const featuredImage = project.gallery?.find((image) => image.src);
    if (!featuredImage) return '<div class="project-card-media image-placeholder">No public image added</div>';
    const fitClass = featuredImage.fit === "contain" ? " image-fit-contain" : "";
    return '<div class="project-card-media"><img class="' + fitClass.trim() + '" src="' + escapeHtml(featuredImage.src) + '" alt="" aria-hidden="true" loading="lazy"></div>';
  }

  function renderCards(activeCategory) {
    if (!grid) return;
    const visibleProjects = projects.filter((project) => activeCategory === "All" || project.tags.includes(activeCategory));
    grid.innerHTML = visibleProjects.map((project) =>
      '<article class="project-card">' +
        '<a class="project-card-link" href="project.html?id=' + encodeURIComponent(project.id) + '" aria-label="View ' + escapeHtml(project.title) + ' project details">' +
          cardMedia(project) +
          '<div class="project-card-body">' +
            '<div class="project-card-meta"><span>' + escapeHtml(project.category) + '</span><span>' + escapeHtml(project.status) + '</span></div>' +
            '<h3>' + escapeHtml(project.shortTitle || project.title) + '</h3>' +
            '<p>' + escapeHtml(project.cardSummary) + '</p>' +
            '<span class="card-link-label">Project details</span>' +
          '</div>' +
        '</a>' +
      '</article>'
    ).join("") || '<p class="empty-state">No projects are tagged in this category.</p>';
  }

  if (filters && grid) {
    const allCategories = ["All", ...categories];
    filters.innerHTML = allCategories.map((category, index) =>
      '<button type="button" class="filter-button" data-filter="' + escapeHtml(category) + '" aria-pressed="' + String(index === 0) + '">' + escapeHtml(category) + '</button>'
    ).join("");
    renderCards("All");
    filters.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-filter]");
      if (!button) return;
      filters.querySelectorAll("button").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      renderCards(button.dataset.filter);
    });
  }

  const skillsRoot = document.getElementById("skill-groups");
  if (skillsRoot) {
    skillsRoot.innerHTML = (window.PORTFOLIO_SKILLS || []).map((group) =>
      '<section class="skill-group">' +
        '<h3>' + escapeHtml(group.title) + '</h3>' +
        '<ul>' + group.skills.map(([name, level]) =>
          '<li><span>' + escapeHtml(name) + '</span><span class="skill-level">' + escapeHtml(level) + '</span></li>'
        ).join("") + '</ul>' +
      '</section>'
    ).join("");
  }

  function renderCollection(gridId, projects) {
    const root = document.getElementById(gridId);
    if (!root) return;
    root.innerHTML = projects.map((project) => {
      const title = project.title || project.label || "Project image";
      const summary = project.summary || project.caption || "";
      const fitClass = project.fit === "contain" ? " image-fit-contain" : "";
      return '<article class="collection-card">' +
        '<img class="collection-image' + fitClass + '" src="' + escapeHtml(project.src) + '" alt="' + escapeHtml(project.alt || title) + '" loading="lazy">' +
        '<div class="collection-card-copy"><h4>' + escapeHtml(title) + '</h4><p>' + escapeHtml(summary) + '</p></div>' +
      '</article>';
    }).join("");
    root.querySelectorAll("img").forEach((image) => image.addEventListener("error", () => {
      const fallback = document.createElement("div");
      fallback.className = "collection-image image-placeholder";
      fallback.textContent = "Image unavailable";
      image.replaceWith(fallback);
    }));
  }

  const sonoma = projectList.find((project) => project.id === "sonoma-millworks");
  renderCollection("sonoma-grid", (sonoma?.gallery || []).map((image) => ({
    title: image.label, summary: image.caption, src: image.src, alt: image.alt, fit: image.fit
  })));
  renderCollection("machining-grid", window.MACHINING_PROJECTS || []);
  renderCollection("fabrication-grid", window.FABRICATION_PROJECTS || []);
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.getElementById("primary-nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = menuButton.getAttribute("aria-expanded") !== "true";
      menuButton.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    });
    nav.addEventListener("click", (event) => {
      if (!event.target.closest("a")) return;
      menuButton.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    });
  }

  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...document.querySelectorAll('.primary-nav a[href^="#"]')];
  if ("IntersectionObserver" in window && sections.length && navLinks.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === "#" + entry.target.id) link.setAttribute("aria-current", "location");
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
      const label = resumeLink.querySelector(".resume-button-label");
      if (label) label.textContent = "Download PDF";
    }).catch(() => {});
  }
})();
