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
index.html                 Home, About, Projects, Woodworking, Ceramics, Coffee Business, Machining, Side Projects, Skills, Experience, Resume, Contact
project.html               Reusable individual project detail page
assets/
  css/site.css             Visual system, responsive layouts, and print styles
  js/projects.js           Editable project, gallery, and skill data
  js/site.js               Home page rendering and navigation
  js/project-page.js       Project detail rendering and image lightbox
  icons/mark.svg           Browser tab icon
  images/                  Project image folders (see below)
  documents/resume.pdf     Current resume PDF, shown in the Resume section
```

## Add or edit a project

1. Open `assets/js/projects.js` and add an object to `window.PORTFOLIO_PROJECTS` (or edit an existing one).
2. Give it a unique `id`, a `title`, `shortTitle`, `category`, `tags`, `status`, and `cardSummary`.
3. Fill in `intro`, `what`, `how`, `why`, `results`, and `contribution`. Keep results and personal contributions specific to what happened.
4. Add `tools` and `considerations` arrays for the technical highlights.
5. Add a `gallery` array for image slots. Each item can include a `label`, `caption`, `alt`, and `folder`. Add `src` with the image path to display a photo. Entries appear in the order listed.

Project cards are created from this data, and `project.html?id=your-project-id` renders the matching detail page. Use one or more exact filter tags: `Mechanical Design`, `CAD / FEA`, `Manufacturing`, `Renewable Energy`, `Product Development`, or `Engineering Outreach`.

## Image privacy and publishing policy

Images below `assets/images/` must be `.webp` files with no embedded EXIF, XMP, or ICC profile chunks. This removes common camera details such as GPS location, device data, timestamps, and author fields. It does not remove information that is visible in the image itself.

Original `.JPG`, `.JPEG`, `.PNG`, and `.HEIC` files are kept locally under `.image-sources/`, which is ignored by Git. Only the converted WebP copies are included in the published image folders. `.MOV` and `.MP4` videos stay in their folders on your computer and are ignored by Git and the image check.

The repository includes an automated policy check at `.github/workflows/image-policy.yml`. It runs whenever changes are pushed or proposed for `main`, and rejects non-WebP images or files with the blocked metadata chunks. `.MOV` and `.MP4` video files are ignored by the image check. GitHub branch protection can make this check required before a pull request is merged; it cannot prevent someone from committing a file locally.

To prepare a photo with ImageMagick, make a published copy rather than overwriting your original:

```powershell
magick "original-photo.jpg" -auto-orient -resize "2000x2000>" -strip -quality 82 "assets/images/baja/chassis-overview.webp"
```

If PowerShell does not recognize `magick`, call the executable directly at `C:\Program Files\ImageMagick-7.1.2-Q16-HDRI\magick.exe` on this computer.

Run the same audit locally when Node.js is installed:

```powershell
node scripts/audit-images.mjs
```

`robots.txt` asks cooperative AI-training crawlers not to crawl the public site. It includes both individual crawler rules and the emerging `__usage_ai-training` preference signal. It is a request, not a technical barrier, and does not prevent copying by crawlers that ignore it.

## Add or replace project photographs

Use this example to add a photo to the Baja chassis project:

1. Convert your original photo to WebP and save the copy as `assets/images/baja/chassis-side-view.webp`:

   ```powershell
   magick "my-chassis-photo.jpg" -auto-orient -strip -quality 82 "assets/images/baja/chassis-side-view.webp"
   ```

   Keep your original photo; the command writes a separate WebP copy. Replace `my-chassis-photo.jpg` with the name and path of your own photo.
2. Open `assets/js/projects.js` and find the `baja-chassis` project's `gallery` list.
3. In the gallery slot you want to use, add a `src` line with the path to the WebP file. For example, change the first slot to:

   ```js
   {
     label: "Full chassis CAD assembly",
     caption: "SolidWorks assembly of the Baja chassis.",
     alt: "SolidWorks model showing the Baja chassis frame from an angled view",
     folder: "assets/images/baja/",
     src: "assets/images/baja/chassis-side-view.webp"
   }
   ```

   Keep the `src` path and filename exactly the same as the file you saved. Write `alt` as a short description of what someone can see in the image. The `folder` line only labels the placeholder; `src` is what displays the photo.
4. Save `projects.js` and refresh the project page. The gallery slot will show the photo and open a larger view when clicked.

Use the matching folder for other projects: for example, `assets/images/ceramics/` for ceramics or `assets/images/personal-woodworking/` for personal woodworking. Move gallery entries in the array to change their order; add or remove entries to change the number of slots.

Available folders: `profile`, `baja`, `wave-energy`, `tensile-tester`, `sonoma-millworks`, `personal-woodworking`, `ceramics`, `rube-goldberg`, `coffee-business`, `machining`, `small-eng-side-projects`, and `general`. No stock project photos are included. Before publishing classroom photos, confirm that publication is appropriate and avoid identifiable student images without permission.

The About section also has a portrait slot. Add a portrait to `assets/images/profile/`, then replace the inline illustration in `index.html` with an `<img>` element and descriptive `alt` text.

## Add personal woodworking projects

The separate **Woodworking** section is for personal builds; Sonoma Millworks stays listed under Experience. Add entries to `window.PERSONAL_WOODWORKING_PROJECTS` in `assets/js/projects.js`:

```js
window.PERSONAL_WOODWORKING_PROJECTS = [
  {
    title: "Project title",
    summary: "What you made and the choices or process you want to document.",
    materials: "Materials to list",
    src: "assets/images/personal-woodworking/project-photo.webp",
    alt: "Describe what is shown in the photograph"
  }
];
```

Add photos to `assets/images/personal-woodworking/`. The `src` field is optional; without it, the project card uses an illustrative graphic. Add another object to the array for each build. The section displays a setup message until the first project is added.

## Add ceramics work

The **Ceramics** section is a separate portfolio collection from the Sonoma Art School workshop-assistant experience. Add each piece to `window.CERAMICS_PROJECTS` in `assets/js/projects.js`:

```js
window.CERAMICS_PROJECTS = [
  {
    title: "Piece title",
    summary: "A short description of the piece.",
    technique: "Technique or materials to note",
    src: "assets/images/ceramics/piece-photo.webp",
    alt: "Describe what is shown in the photograph"
  }
];
```

Add photos to `assets/images/ceramics/`. The `src` field is optional; without it, the card uses an illustrative graphic. Add another object for each piece. The section displays a setup message until a piece is added.

## Update skills, experience, and contact information

- Edit `window.PORTFOLIO_SKILLS` in `assets/js/projects.js`. SolidWorks is currently listed as “Advanced student use”; other levels are marked for confirmation.
- Edit the About, Education, Experience, and Contact sections directly in `index.html`.
- Replace the email and LinkedIn placeholders in the Contact section only after confirming which public details to use. The GitHub link is already set to `github.com/celiavallotton`.
- Keep dates, qualifications, technical results, and project status current and verified.

## Replace the resume PDF

The current resume appears in the embedded preview and has a download link. Replace `assets/documents/resume.pdf` to update it; no page or code edits are needed. The resume PDF is publicly accessible when the site is published.

## Publish with GitHub Pages

This repository is named `celiavallotton.github.io`, so the website files belong at the repository root. In the GitHub repository, open **Settings → Pages**, choose **Deploy from a branch**, select the `main` branch and `/(root)` folder, then save. GitHub Pages will serve `index.html` from the repository root. All internal links and assets use relative paths for static hosting.

Publishing, committing, and pushing are manual actions; this project setup does not perform them.
