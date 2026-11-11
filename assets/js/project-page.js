(function () {
  const root = document.getElementById("project-content");
  const projects = window.PORTFOLIO_PROJECTS || [];
  const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
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
      if (!event.target.closest("a")) return;
      menuButton.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    });
  }

  if (!project) {
    document.title = "Project not found | Celia Vallotton";
    root.innerHTML = '<section class="project-missing section-wrap"><p class="eyebrow">ENGINEERING PROJECT</p><h1>Project not found</h1><p>Return to the engineering project list to choose a case study.</p><a class="button button-primary" href="index.html#engineering-projects">Engineering Projects</a></section>';
    return;
  }

  const imageSlots = (project.gallery || []).map((item) => {
    const fitClass = item.fit === "contain" ? " image-fit-contain" : "";
    const image = item.src
      ? '<button class="gallery-open" type="button" data-caption="' + esc(item.caption) + '" data-alt="' + esc(item.alt) + '" aria-label="Open image: ' + esc(item.label) + '">' +
          '<img class="gallery-source' + fitClass + '" src="' + esc(item.src) + '" alt="' + esc(item.alt) + '" loading="lazy">' +
          '<span class="sr-only">Expand image</span>' +
        '</button>'
      : '<div class="gallery-placeholder"><span>Image not added</span></div>';
    return '<figure class="gallery-item"><div class="gallery-frame">' + image + '</div><figcaption><strong>' + esc(item.label) + '</strong><span>' + esc(item.caption) + '</span></figcaption></figure>';
  }).join("");

  const facts = [];
  if (project.role) facts.push('<div><dt>Role</dt><dd>' + esc(project.role) + '</dd></div>');
  if (project.dates) facts.push('<div><dt>Dates</dt><dd>' + esc(project.dates) + '</dd></div>');
  facts.push('<div><dt>Status</dt><dd>' + esc(project.status) + '</dd></div>');
  facts.push('<div><dt>Discipline</dt><dd>' + esc(project.category) + '</dd></div>');
  facts.push('<div><dt>Documentation</dt><dd>' + String((project.gallery || []).length) + ' image slots</dd></div>');

  const considerations = project.considerations?.length
    ? '<ul>' + project.considerations.map((item) => '<li>' + esc(item) + '</li>').join("") + '</ul>'
    : "";
  const tools = project.tools?.length
    ? '<ul>' + project.tools.map((item) => '<li>' + esc(item) + '</li>').join("") + '</ul>'
    : "";
  const projectPriority = ["tensile-tester", "weld-fixture", "baja-chassis", "tube-notching", "wave-energy", "rube-goldberg"];
  const sequence = projects.filter((item) => item.showInEngineering !== false).sort((a, b) => {
    const ai = projectPriority.indexOf(a.id);
    const bi = projectPriority.indexOf(b.id);
    return (ai < 0 ? projectPriority.length : ai) - (bi < 0 ? projectPriority.length : bi);
  });
  const index = sequence.indexOf(project);
  let navigation = "";
  if (index >= 0 && sequence.length > 1) {
    const previous = sequence[(index - 1 + sequence.length) % sequence.length];
    const next = sequence[(index + 1) % sequence.length];
    navigation = '<nav class="project-next" aria-label="Other engineering projects">' +
      '<a href="project.html?id=' + encodeURIComponent(previous.id) + '">Previous: ' + esc(previous.shortTitle || previous.title) + '</a>' +
      '<a class="back-projects" href="index.html#engineering-projects">All Engineering Projects</a>' +
      '<a href="project.html?id=' + encodeURIComponent(next.id) + '">Next: ' + esc(next.shortTitle || next.title) + '</a>' +
    '</nav>';
  }

  document.title = project.title + " | Celia Vallotton";
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = String(project.intro || project.what || "").slice(0, 155);

  root.innerHTML =
    '<section class="project-detail-header">' +
      '<div class="section-wrap">' +
        '<p class="breadcrumbs"><a href="index.html#engineering-projects">Engineering Projects</a><span>/</span><span>' + esc(project.category) + '</span></p>' +
        '<p class="eyebrow">' + esc(project.status) + '</p>' +
        '<h1>' + esc(project.title) + '</h1>' +
        '<p class="project-lede">' + esc(project.intro) + '</p>' +
        '<dl class="project-facts">' + facts.join("") + '</dl>' +
      '</div>' +
    '</section>' +
    '<div class="section-wrap detail-layout">' +
      '<main class="case-study">' +
        '<section class="case-section"><h2>Project overview</h2><p>' + esc(project.what) + '</p></section>' +
        '<section class="case-section"><h2>Design &amp; implementation</h2><p>' + esc(project.how) + '</p></section>' +
        '<section class="case-section"><h2>Technical considerations</h2><p>' + esc(project.why) + '</p>' + considerations + '</section>' +
        '<section class="case-section documentation-section"><h2>CAD &amp; project documentation</h2><div class="gallery-grid">' + imageSlots + '</div></section>' +
        '<section class="case-section"><h2>Results &amp; current status</h2><p>' + esc(project.results) + '</p></section>' +
        '<section class="case-section contribution-section"><h2>Role &amp; contribution</h2><p>' + esc(project.contribution) + '</p></section>' +
        navigation +
      '</main>' +
      '<aside class="detail-sidebar"><h2>Tools &amp; methods</h2>' + tools + '</aside>' +
    '</div>';

  const dialog = document.querySelector(".lightbox");
  const lightboxImage = dialog?.querySelector("img");
  const lightboxCaption = dialog?.querySelector("p");
  root.querySelectorAll(".gallery-source").forEach((image) => image.addEventListener("error", () => {
    const button = image.closest(".gallery-open");
    if (!button) return;
    const fallback = document.createElement("div");
    fallback.className = "gallery-placeholder";
    fallback.innerHTML = "<span>Image unavailable</span>";
    button.replaceWith(fallback);
  }));
  root.addEventListener("click", (event) => {
    const button = event.target.closest(".gallery-open");
    if (!button || !dialog || !lightboxImage || typeof dialog.showModal !== "function") return;
    const image = button.querySelector("img");
    lightboxImage.src = image.src;
    lightboxImage.alt = button.dataset.alt || image.alt;
    if (lightboxCaption) lightboxCaption.textContent = button.dataset.caption || "";
    dialog.showModal();
  });
})();
