(function () {
  const root = document.getElementById("project-content");
  const projects = window.PORTFOLIO_PROJECTS || [];
  const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  const requestedId = new URLSearchParams(window.location.search).get("id");
  const project = projects.find((item) => item.id === requestedId);
  const year = document.getElementById("current-year");
  if (year) year.textContent = new Date().getFullYear();

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

  if (!project) {
    document.title = "Project not found | Celia Vallotton";
    root.innerHTML = '<section class="project-missing section-wrap"><div><p class="eyebrow">PORTFOLIO / PROJECT</p><h1>Project not found.</h1><p>Choose a project from the portfolio index.</p><a class="button button-dark" href="index.html#projects">Back to projects <span aria-hidden="true">↗</span></a></div></section>';
    return;
  }

  const list = (items) => `<ul>${items.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>`;
  const gallery = (project.gallery || []).map((item, index) => {
    const image = item.src
      ? `<button class="gallery-open" type="button" data-caption="${esc(item.caption)}" data-alt="${esc(item.alt)}" aria-label="Open image: ${esc(item.label)}"><img class="gallery-source" src="${esc(item.src)}" alt="${esc(item.alt)}" loading="lazy"><span class="sr-only">Expand image</span></button>`
      : `<div class="gallery-placeholder"><b aria-hidden="true">+</b>${esc(item.label)}<br>Image slot</div>`;
    return `<figure class="gallery-item"><div class="gallery-frame">${image}</div><figcaption><strong>${esc(item.label)}.</strong> ${esc(item.caption)}${item.src ? "" : ` <span class="gallery-path">Add to <code>${esc(item.folder)}</code>, then set its <code>src</code> in <code>assets/js/projects.js</code>.</span>`}</figcaption></figure>`;
  }).join("");

  const index = projects.indexOf(project);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const context = project.id === "wave-energy" ? "Three-person SkillsUSA team" : project.id === "baja-chassis" || project.id === "pedal-box" ? "SRJC Baja SAE team" : project.id === "rube-goldberg" ? "Collaborative outreach" : "Individual project";

  document.title = `${project.title} | Celia Vallotton`;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = project.intro.slice(0, 155);
  root.innerHTML = `
    <section class="project-hero">
      <div class="section-wrap">
        <div class="breadcrumbs"><a href="index.html#home">HOME</a><span>/</span><a href="index.html#projects">PROJECTS</a><span>/</span><span>${esc(project.category)}</span></div>
        <div class="project-hero-grid">
          <div><p class="eyebrow">${esc(project.category)} <span class="eyebrow-rule"></span></p><h1>${esc(project.title)}</h1><p class="project-hero-intro">${esc(project.intro)}</p></div>
          <div class="project-facts" aria-label="Project summary"><div class="project-fact"><span>Status</span><strong>${esc(project.status)}</strong></div><div class="project-fact"><span>Discipline</span><strong>${esc(project.category)}</strong></div><div class="project-fact"><span>Context</span><strong>${esc(context)}</strong></div><div class="project-fact"><span>Documentation</span><strong>${project.gallery.length} image slots</strong></div></div>
        </div>
      </div>
    </section>
    <div class="section-wrap detail-layout">
      <div class="detail-main">
        <section><h2>Project overview</h2><p>${esc(project.what)}</p></section>
        <section><h2>How</h2><p>${esc(project.how)}</p></section>
        <section><h2>Why</h2><p>${esc(project.why)}</p></section>
        ${project.considerations?.length ? `<section><h2>Design &amp; engineering considerations</h2><p>Key factors considered in the work include:</p>${list(project.considerations)}</section>` : ""}
        <section><h2>Results</h2><p>${esc(project.results)}</p></section>
        <section class="contribution-box"><h2>My contributions</h2><p>${esc(project.contribution)}</p></section>
        <section><h2>Images &amp; technical documentation</h2><p>Replace a slot with project documentation by adding an image path in the project data. The gallery order follows the list in <code>assets/js/projects.js</code>; move entries there to rearrange the images.</p><div class="gallery-grid">${gallery}</div></section>
        <div class="project-next"><a href="project.html?id=${encodeURIComponent(previous.id)}">← ${esc(previous.shortTitle || previous.title)}</a><a class="back-projects" href="index.html#projects">All projects ↗</a><a href="project.html?id=${encodeURIComponent(next.id)}">${esc(next.shortTitle || next.title)} →</a></div>
      </div>
      <aside class="detail-sidebar"><h2>Technical highlights</h2><ul>${project.tools.map((tool) => `<li>${esc(tool)}</li>`).join("")}</ul><p>Project status and contributions are described as provided; unconfirmed performance details are left out.</p></aside>
    </div>`;

  const dialog = document.querySelector(".lightbox");
  const lightboxImage = dialog?.querySelector("img");
  const lightboxCaption = dialog?.querySelector("p");
  root.querySelectorAll(".gallery-source").forEach((image) => image.addEventListener("error", () => {
    const button = image.closest(".gallery-open");
    if (!button) return;
    const fallback = document.createElement("div");
    fallback.className = "gallery-placeholder";
    fallback.innerHTML = `<b aria-hidden="true">+</b>${esc(image.alt)}<br>Image file not found`;
    button.replaceWith(fallback);
  }));
  root.addEventListener("click", (event) => {
    const button = event.target.closest(".gallery-open");
    if (!button || !dialog || !lightboxImage || typeof dialog.showModal !== "function") return;
    const image = button.querySelector("img");
    lightboxImage.src = image.src;
    lightboxImage.alt = button.dataset.alt || image.alt;
    lightboxCaption.textContent = button.dataset.caption || "";
    dialog.showModal();
  });
})();
