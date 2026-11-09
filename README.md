# Celia Vallotton — Mechanical Engineering Portfolio

A responsive static portfolio built with HTML, CSS, and vanilla JavaScript. It is designed for GitHub Pages and works from the repository root without a build step, backend, or package installation.

## Run locally

From this project folder in PowerShell, start Python's built-in web server:

```powershell
py -m http.server 8000
```

Then open <http://localhost:8000>. Press `Ctrl+C` in PowerShell to stop the server. Serving the files locally also lets the resume link check whether the PDF exists. You can open `index.html` directly for a quick preview, but some browser features work best from a local server.

## Project layout

```text
index.html                 Home, About, Projects, Skills, Experience, Resume, Contact
project.html               Reusable individual project detail page
assets/
  css/site.css             Visual system, responsive layouts, and print styles
  js/projects.js           Editable project, gallery, and skill data
  js/site.js               Home page rendering and navigation
  js/project-page.js       Project detail rendering and image lightbox
  icons/mark.svg           Browser tab icon
  images/                  Project image folders (see below)
  documents/resume.pdf     Add your resume PDF here
```

## Add or edit a project

1. Open `assets/js/projects.js` and add an object to `window.PORTFOLIO_PROJECTS` (or edit an existing one).
2. Give it a unique `id`, a `title`, `shortTitle`, `category`, `tags`, `status`, and `cardSummary`.
3. Fill in `intro`, `what`, `how`, `why`, `results`, and `contribution`. Keep results and personal contributions specific to what happened.
4. Add `tools` and `considerations` arrays for the technical highlights.
5. Add a `gallery` array for image slots. Each item can include a `label`, `caption`, `alt`, and `folder`. Entries appear in the order listed.

Project cards are created from this data, and `project.html?id=your-project-id` renders the matching detail page. Use one or more exact filter tags: `Mechanical Design`, `CAD / FEA`, `Manufacturing`, `Renewable Energy`, `Product Development`, or `Engineering Outreach`.

## Add or replace project photographs

Put images in the matching folder under `assets/images/` (JPEG, PNG, WebP, or SVG). For example, add `chassis-side-view.jpg` to `assets/images/baja/`, then set that gallery item's `src` to `assets/images/baja/chassis-side-view.jpg` in `projects.js`. Keep the accompanying `alt` text accurate and descriptive. Move gallery entries in the array to change their order; add or remove entries to change the number of slots. The project detail page includes an optional click-to-expand image view.

Available folders: `profile`, `baja`, `wave-energy`, `tensile-tester`, `sonoma-millworks`, `rube-goldberg`, and `general`. No stock or placeholder project photos are included. Before publishing classroom photos, confirm that publication is appropriate and avoid identifiable student images without permission.

The About section also has a portrait slot. Add a portrait to `assets/images/profile/`, then replace the inline illustration in `index.html` with an `<img>` element and descriptive `alt` text.

## Update skills, experience, and contact information

- Edit `window.PORTFOLIO_SKILLS` in `assets/js/projects.js`. SolidWorks is currently listed as “Advanced student use”; other levels are marked for confirmation.
- Edit the About, Education, Experience, and Contact sections directly in `index.html`.
- Replace the email and LinkedIn placeholders in the Contact section only after confirming which public details to use. The GitHub link is already set to `github.com/celiavallotton`.
- Keep dates, qualifications, technical results, and project status current and verified.

## Replace the resume PDF

Add or replace the file at `assets/documents/resume.pdf`. The site checks for that file and enables the download link when it is present. No page or code edits are needed to replace the PDF.

## Publish with GitHub Pages

This repository is named `celiavallotton.github.io`, so the website files belong at the repository root. In the GitHub repository, open **Settings → Pages**, choose **Deploy from a branch**, select the `main` branch and `/(root)` folder, then save. GitHub Pages will serve `index.html` from the repository root. All internal links and assets use relative paths for static hosting.

Publishing, committing, and pushing are manual actions; this project setup does not perform them.
