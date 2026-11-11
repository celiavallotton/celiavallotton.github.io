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
index.html                 Home, Projects, Manufacturing & Fabrication, Technical Skills, Education & Experience, Resume, Contact
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
3. Fill in `intro`, `what`, `how`, `why`, `results`, and `contribution`. Keep results and personal contributions specific to what happened. For room to expand a case study, add a `documentationTopics` array; its entries appear below the project gallery as a reminder of useful records to add.
4. Add `tools` and `considerations` arrays for the technical highlights.
5. Add a `gallery` array for image slots. Each item can include a `label`, `caption`, `alt`, and `folder`. Add `src` with the image path to display a photo. Entries appear in the order listed.

Project cards are created from this data, and `project.html?id=your-project-id` renders the matching detail page. Use one or more exact filter tags: `Mechanical Design`, `CAD / FEA`, `Manufacturing`, `Quality Inspection`, `Renewable Energy`, `Product Development`, `Engineering Outreach`, `Small Engineering`, `Woodworking`, `Ceramics`, or `Personal Projects`.

## Image privacy and publishing policy

Images below `assets/images/` must be `.webp` files with no embedded EXIF, XMP, or ICC profile chunks. This removes common camera details such as GPS location, device data, timestamps, and author fields. It does not remove information that is visible in the image itself.

Original `.JPG`, `.JPEG`, `.PNG`, and `.HEIC` files are kept locally under `.image-sources/`, which is ignored by Git. Published project photos are WebP. The tensile tester recording `assets/images/tensile-tester/TT-recording.MP4` is included as a video exception; other `.MOV` and `.MP4` videos stay local and are ignored by Git.

The repository includes an automated policy check at `.github/workflows/image-policy.yml`. It runs whenever changes are pushed or proposed for `main`, and rejects non-WebP images or files with the blocked metadata chunks. Video files are skipped by the image check.

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
2. Open `assets/js/projects.js` and find the matching Chassis timeline stage and photo group.
3. Add a row to that group's `images("baja", [...])` list. For example:

   ```js
   ["chassis-side-view.webp", "Chassis side view", "SolidWorks chassis model shown from an angled side view.", "contain", true]
   ```

   Use the exact filename, a short label, and a caption describing the image. The caption is also used as its alt text. `"contain"` keeps drawings fully visible, and the final `true` highlights an important image. Omit the last two values when they are not needed.
4. Save `projects.js` and refresh the project page. Images appear in the selected timeline stage and open at full size when clicked.

For project galleries, edit the matching `mediaGroup(...)` near the bottom of `assets/js/projects.js`. Each photo row contains its filename, label, caption, optional fit (`"contain"` for drawings), and optional featured flag. For example:

```js
["new-chassis-view.webp", "Chassis view", "Describe what this drawing or photo shows.", "contain", true]
```

Chassis images are organized under `chassis.timelineStages` in chronological order. Add a new `mediaGroup` to a stage or collection to make a separate gallery; add photos to an existing group's `images(...)` list to extend it. Captions are also used as image alt text. Use the matching asset folder name in the `images("baja", [...])` call.

Available folders: `profile`, `baja`, `wave-energy`, `tensile-tester`, `sonoma-millworks`, `personal-woodworking`, `ceramics`, `rube-goldberg`, `coffee-business`, `machining`, `small-eng-side-projects`, and `general`. No stock project photos are included. Before publishing classroom photos, confirm that publication is appropriate and avoid identifiable student images without permission.

The Home section uses the Baja chassis side-view image as its featured image. To change it, update the image `src` in the Home section of `index.html`.

## Personal project pages

The Projects list includes detailed pages for small engineering projects, personal woodworking, ceramics, the Cequin Coffee kiosk, machining, and the tensile tester. Their photo groups are under `projectById[...]` near the bottom of `assets/js/projects.js`; ceramics entries are in `window.CERAMICS_PROJECTS`. The Chassis page groups Baja images into a four-step timeline. Each case study also has prompts for future documentation.

Sonoma Millworks remains under Manufacturing & Fabrication and Education & Experience. Sonoma Art School workshop-assistant experience remains under Education & Experience.


## Update skills, experience, and contact information

- Edit `window.PORTFOLIO_SKILLS` in `assets/js/projects.js`. SolidWorks is currently listed as “Advanced student use”; other levels are marked for confirmation.
- Edit the Home, Education & Experience, and Contact sections directly in `index.html`.
- The Contact section uses the current email address, GitHub profile, and Santa Rosa location. Update these directly in `index.html` if they change.
- Keep dates, qualifications, technical results, and project status current and verified.

## Replace the resume PDF

The current resume appears in the embedded preview and has a download link. Replace `assets/documents/resume.pdf` to update it; no page or code edits are needed. The resume PDF is publicly accessible when the site is published.

## Publish with GitHub Pages

This repository is named `celiavallotton.github.io`, so the website files belong at the repository root. In the GitHub repository, open **Settings → Pages**, choose **Deploy from a branch**, select the `main` branch and `/(root)` folder, then save. GitHub Pages will serve `index.html` from the repository root. All internal links and assets use relative paths for static hosting.

Publishing, committing, and pushing are manual actions; this project setup does not perform them.
