(function () {
  const themeToggles = document.querySelectorAll(".theme-toggle");
  let savedTheme = "light";
  try {
    savedTheme = localStorage.getItem("portfolio-theme") || "light";
  } catch (_) {}
  function setTheme(theme) {
    const isDark = theme === "dark";
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
    themeToggles.forEach((button) => {
      button.setAttribute("aria-pressed", String(isDark));
      button.setAttribute("aria-label", "Switch to " + (isDark ? "light" : "dark") + " mode");
      const icon = button.querySelector(".theme-toggle-icon");
      const label = button.querySelector(".theme-toggle-label");
      if (icon) icon.textContent = isDark ? "☀" : "☾";
      if (label) label.textContent = isDark ? "Light mode" : "Dark mode";
    });
  }
  setTheme(savedTheme === "dark" ? "dark" : "light");
  themeToggles.forEach((button) => button.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("portfolio-theme", nextTheme);
    } catch (_) {}
    setTheme(nextTheme);
  }));

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
    root.innerHTML = '<section class="project-missing section-wrap"><p class="eyebrow">PROJECT</p><h1>Project not found</h1><p>Return to the project list to choose a case study.</p><a class="button button-primary" href="index.html#projects">Projects</a></section>';
    return;
  }

  const renderGallery = (gallery) => (gallery || []).map((item) => {
    const fitClass = item.fit === "contain" ? " image-fit-contain" : "";
    const featuredClass = item.featured ? " gallery-item-featured" : "";
    const image = item.src
      ? '<button class="gallery-open" type="button" data-caption="' + esc(item.caption) + '" data-alt="' + esc(item.alt) + '" aria-label="Open image: ' + esc(item.label) + '">' +
          '<img class="gallery-source' + fitClass + '" src="' + esc(item.src) + '" alt="' + esc(item.alt) + '" loading="lazy">' +
          '<span class="sr-only">Expand image</span>' +
        '</button>'
      : '<div class="gallery-placeholder"><span>Add photo: ' + esc(item.label) + '</span></div>';
    return '<figure class="gallery-item' + featuredClass + '"><div class="gallery-frame">' + image + '</div><figcaption><strong>' + esc(item.label) + '</strong><span>' + esc(item.caption) + '</span></figcaption></figure>';
  }).join("");

  const galleryCount = (project.gallery || []).filter((item) => item.src).length;
  const documentationBody = project.timelineStages?.length
    ? '<ol class="project-timeline">' + project.timelineStages.map((stage, stageIndex) =>
        '<li class="timeline-stage"><span class="timeline-marker" aria-hidden="true">' + String(stageIndex + 1).padStart(2, "0") + '</span>' +
          '<div class="timeline-stage-content"><h2>' + esc(stage.title) + '</h2><p>' + esc(stage.description) + '</p>' +
            (stage.collections || []).map((collection) =>
              '<section class="media-collection"><h3>' + esc(collection.title) + '</h3><p>' + esc(collection.summary) + '</p><div class="gallery-grid">' + renderGallery(collection.gallery) + '</div></section>'
            ).join("") +
          '</div></li>'
      ).join("") + '</ol>'
    : project.mediaGroups?.length
      ? project.mediaGroups.map((group) =>
          '<section class="media-collection"><h2>' + esc(group.title) + '</h2><p>' + esc(group.summary) + '</p><div class="gallery-grid">' + renderGallery(group.gallery) + '</div></section>'
        ).join("")
      : '<div class="gallery-grid">' + renderGallery(project.gallery) + '</div>';
  const videoSection = project.video
    ? '<section class="case-section project-video"><h2>' + esc(project.video.title || "Project video") + '</h2><video controls preload="metadata" playsinline><source src="' + esc(project.video.src) + '" type="video/mp4">Your browser does not support embedded video. <a href="' + esc(project.video.src) + '">Open the video file</a>.</video><p>' + esc(project.video.caption || "") + '</p></section>'
    : "";
  const instagramSection = project.instagramProfile
    ? '<section class="case-section instagram-reel"><h2>Instagram photo &amp; video reel</h2><p>Recent public posts and reels from Cequin Coffee Company. Instagram controls this embed; use the profile link if it does not load.</p><blockquote class="instagram-media" data-instgrm-permalink="' + esc(project.instagramProfile) + '" data-instgrm-version="14"><a href="' + esc(project.instagramProfile) + '" target="_blank" rel="noreferrer">View @cequincoffee on Instagram</a></blockquote></section>'
    : "";

  const facts = [];
  if (project.role) facts.push('<div><dt>Role</dt><dd>' + esc(project.role) + '</dd></div>');
  if (project.dates) facts.push('<div><dt>Dates</dt><dd>' + esc(project.dates) + '</dd></div>');
  facts.push('<div><dt>Status</dt><dd>' + esc(project.status) + '</dd></div>');
  facts.push('<div><dt>Discipline</dt><dd>' + esc(project.category) + '</dd></div>');
  facts.push('<div><dt>Documentation</dt><dd>' + String(galleryCount) + (galleryCount === 1 ? ' photo' : ' photos') + '</dd></div>');

  const considerations = project.considerations?.length
    ? '<ul>' + project.considerations.map((item) => '<li>' + esc(item) + '</li>').join("") + '</ul>'
    : "";
  const documentationTopics = project.documentationTopics?.length
    ? '<section class="case-section documentation-topics"><h2>Further documentation</h2><p>This case study can be expanded with records such as:</p><ul>' + project.documentationTopics.map((item) => '<li>' + esc(item) + '</li>').join("") + '</ul></section>'
    : "";
  const practiceSections = (project.practiceSections || []).map((section) =>
    '<section class="case-section"><h2>' + esc(section.title) + '</h2><p>' + esc(section.body) + '</p></section>'
  ).join("");
  const tools = project.tools?.length
    ? '<ul>' + project.tools.map((item) => '<li>' + esc(item) + '</li>').join("") + '</ul>'
    : "";
  const projectPriority = ["baja-chassis", "tensile-tester", "machining", "small-engineering", "ceramics", "woodworking", "coffee-kiosk", "wave-energy", "rube-goldberg"];
  const sequence = projects.filter((item) => item.showInEngineering !== false && item.id !== "sonoma-millworks").sort((a, b) => {
    const ai = projectPriority.indexOf(a.id);
    const bi = projectPriority.indexOf(b.id);
    return (ai < 0 ? projectPriority.length : ai) - (bi < 0 ? projectPriority.length : bi);
  });
  const index = sequence.indexOf(project);
  let navigation = "";
  if (index >= 0 && sequence.length > 1) {
    const previous = sequence[(index - 1 + sequence.length) % sequence.length];
    const next = sequence[(index + 1) % sequence.length];
    navigation = '<nav class="project-next" aria-label="Other projects">' +
      '<a href="project.html?id=' + encodeURIComponent(previous.id) + '">Previous: ' + esc(previous.shortTitle || previous.title) + '</a>' +
      '<a class="back-projects" href="index.html#projects">All Projects</a>' +
      '<a href="project.html?id=' + encodeURIComponent(next.id) + '">Next: ' + esc(next.shortTitle || next.title) + '</a>' +
    '</nav>';
  }

  document.title = project.title + " | Celia Vallotton";
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = String(project.intro || project.what || "").slice(0, 155);

  root.innerHTML =
    '<section class="project-detail-header">' +
      '<div class="section-wrap">' +
      '<p class="breadcrumbs"><a href="index.html#projects">Projects</a><span>/</span><span>' + esc(project.category) + '</span></p>' +
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
        practiceSections +
        '<section class="case-section"><h2>Technical considerations</h2><p>' + esc(project.why) + '</p>' + considerations + '</section>' +
        '<section class="case-section documentation-section"><h2>' + (project.timelineStages?.length ? 'Project timeline' : 'Project documentation') + '</h2>' + documentationBody + '</section>' +
        documentationTopics +
        instagramSection +
        videoSection +
        '<section class="case-section"><h2>Results &amp; current status</h2><p>' + esc(project.results) + '</p></section>' +
        '<section class="case-section contribution-section"><h2>Role &amp; contribution</h2><p>' + esc(project.contribution) + '</p></section>' +
        navigation +
      '</main>' +
      '<aside class="detail-sidebar"><h2>Tools &amp; methods</h2>' + tools + '</aside>' +
    '</div>';

  if (project.instagramProfile) {
    const instagramScript = document.createElement("script");
    instagramScript.async = true;
    instagramScript.src = "https://www.instagram.com/embed.js";
    document.body.appendChild(instagramScript);
  }

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
