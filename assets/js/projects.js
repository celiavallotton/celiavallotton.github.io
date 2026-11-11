/*
 * Portfolio content lives here so projects and skills can be edited without
 * changing the page layout. Gallery images are optional: add a relative `src`
 * such as "assets/images/baja/chassis-side-view.webp" to replace a placeholder.
 */
window.PORTFOLIO_PROJECTS = [
  {
    id: "baja-chassis",
    title: "SRJC Baja SAE â€” Chassis Design & Development",
    shortTitle: "Baja SAE chassis",
    category: "Mechanical Design",
    tags: ["Mechanical Design", "CAD / FEA", "Manufacturing", "Product Development"],
    status: "In Progress",
    role: "Chassis Lead",
    dates: "August 2025â€“Present",
    cardSummary: "Chassis and roll cage development for the SRJC Baja SAE vehicle, balancing structural design, driver needs, packaging, and fabrication constraints.",
    intro: "Since August 2025, I have served as Chassis Lead for the Santa Rosa Junior College Baja SAE team. The work brings together structural geometry, driver safety and ergonomics, component packaging, manufacturing, and competition requirements.",
    what: "Develop a tubular vehicle chassis and roll cage intended to meet Baja SAE technical requirements while integrating with the team's vehicle systems. Chassis design and vehicle development are ongoing; no competition result or technical inspection outcome is claimed here.",
    how: "I developed the chassis and roll cage in SolidWorks and conducted SolidWorks Simulation FEA to evaluate loading and stress concentrations from predicted impacts. I also led a collaborative SRJC Society of Women Engineers team through the design and fabrication of a full-scale PVC chassis prototype to evaluate seating geometry, driver ergonomics, and egress. Current design work considers firewall geometry, mounting locations, body-panel attachment, reinforcement, and gusset placement. The timeline below groups chassis design, PVC prototyping, welding fixtures, and tube preparation into one project sequence.",
    why: "A chassis has to satisfy competing needs at once: structural requirements, driver safety and ergonomics, weight, packaging, accessibility, manufacturability, and competition rules. Joint geometry and member placement affect both the design and the practical work of cutting, fitting, and assembling 4130 chromoly tubing.",
    results: "The team designed and fabricated a full-scale PVC chassis prototype to evaluate driver ergonomics. Chassis development remains in progress; this prototype does not represent final vehicle fabrication, competition, or technical inspection.",
    contribution: "I lead chassis subsystem design and conduct SolidWorks Simulation FEA. I also designed and fabricated welding fixtures, developed tube-notching processes, and led a collaborative team through PVC chassis prototype work. Chassis design is coordinated with other vehicle subteams.",
    tools: ["SolidWorks", "SolidWorks Simulation FEA", "4130 chromoly steel tubing", "PVC chassis prototype"],
    considerations: ["Roll cage geometry", "Primary and secondary structural members", "Driver ergonomics", "Component mounting and packaging", "Structural analysis", "Manufacturing and assembly", "Baja SAE technical requirements"],
    gallery: [
      { label: "Chassis side view", caption: "SolidWorks model of the Baja chassis frame in an angled side view.", alt: "Angled side view of a tubular Baja chassis frame in SolidWorks.", fit: "contain", folder: "assets/images/baja/", src: "assets/images/baja/chassis-side-view.webp" },
      { label: "Ergonomics prototype", caption: "Full-scale PVC prototype used to assess seating and driver access.", alt: "Full-scale PVC chassis ergonomics prototype with a plywood floor panel.", folder: "assets/images/baja/", src: "assets/images/baja/plywood-ergo.webp" },
      { label: "Chassis angles", caption: "Drawing views used during chassis design.", alt: "Engineering drawing views of chassis tube angles.", fit: "contain", folder: "assets/images/baja/", src: "assets/images/baja/chassis-angles-dwg-1.webp" }
    ]
  },
  {
    id: "wave-energy",
    title: "Ocean Wave Energy Generator",
    shortTitle: "Wave energy generator",
    category: "Renewable Energy",
    tags: ["Renewable Energy", "Mechanical Design", "Manufacturing"],
    status: "Prototype",
    role: "Mechanical design, fabrication, and assembly",
    dates: "August 2024â€“June 2025",
    cardSummary: "A three-person SkillsUSA project that earned third place at the California State Conference and demonstrated a wave-powered prototype in ocean testing.",
    intro: "From August 2024 to June 2025, I worked with a three-person SkillsUSA team to develop a small ocean wave energy generator. The project earned third place at the SkillsUSA California State Conference. The prototype was tested in an ocean environment and generated enough electrical output to illuminate two LEDs.",
    what: "Create a small physical prototype intended to harness ocean wave motion and demonstrate conversion of that motion into electrical output.",
    how: "My primary responsibility was mechanical design, fabrication, and assembly. The team sourced materials with environmental impact, marine exposure, watertight solutions, and cost in mind. We used rapid prototyping, including 3D printing and modular 80/20 aluminum framing, to support assembly and iterative design changes before ocean testing.",
    why: "The project needed to move beyond a concept and work as a physical system in a wave environment. Building and assembling a prototype made it possible to try the mechanical approach under real conditions.",
    results: "The prototype was tested in an ocean environment and generated enough electrical output to illuminate two LEDs. The team earned third place at the SkillsUSA California State Conference. No power, efficiency, or other measured performance values are available to report.",
    contribution: "My primary contribution was mechanical design, fabrication, and assembly. This was a three-person team project; the outcome reflects collaborative work.",
    tools: ["3D printing", "Modular 80/20 aluminum framing", "Rapid prototyping", "Mechanical fabrication and assembly", "Ocean testing"],
    considerations: ["Translating wave motion into prototype movement", "Mechanical layout and assembly", "Outdoor ocean testing", "Working as a three-person engineering team"],
    gallery: [
      { label: "Prototype overview", caption: "Assembled prototype used for the ocean wave energy demonstration.", alt: "Assembled cylindrical wave energy prototype with its float and support frame.", folder: "assets/images/wave-energy/", src: "assets/images/wave-energy/htg-full-assy.webp" },
      { label: "Internal mechanism", caption: "The internal mechanical arrangement of the prototype.", alt: "Internal view of the wave energy generator showing its mechanical components.", folder: "assets/images/wave-energy/", src: "assets/images/wave-energy/htg-inside.webp" },
      { label: "Ocean test", caption: "Prototype being tested in moving water.", alt: "Wave energy prototype held in ocean water during a field test.", folder: "assets/images/wave-energy/", src: "assets/images/wave-energy/htg-working-in-ocean.webp" },
      { label: "Prototype base", caption: "The welded support base used for the generator prototype.", alt: "Round welded frame supporting a vertical cylindrical wave energy prototype.", folder: "assets/images/wave-energy/", src: "assets/images/wave-energy/htg-welded-base.webp" }
    ]
  },
  {
    id: "sonoma-millworks",
    title: "Sonoma Millworks â€” Woodworking & Product Development",
    shortTitle: "Woodworking & product development",
    category: "Manufacturing",
    tags: ["Manufacturing", "Product Development"],
    status: "Work Experience",
    role: "Part-time manufacturing experience",
    dates: "June 2025â€“Present",
    cardSummary: "Hands-on woodworking and manufacturing experience with physical materials, fabrication, framing, and product development.",
    intro: "Since June 2025, I have worked part-time at Sonoma Millworks, assisting with fabrication and finishing custom wood products, product development, showroom work, and preparation for retail and wholesale distribution.",
    what: "Support the fabrication and finishing of custom wood products. I also contributed to product development and production of VinoPlank Sprig Vases made from reclaimed wood.",
    how: "My work has included using table saws, chop saws, belt sanders, drill presses, branders, and finishing products. I have also supported showroom organization, product display, and preparation of custom products for retail and wholesale distribution.",
    why: "A design has to account for materials, measurement, assembly, and the steps required to make a physical product. Hands-on work helps me consider those factors while developing engineering concepts.",
    results: "Ongoing part-time experience in custom wood-product fabrication, finishing, and product development.",
    contribution: "I assist with fabrication and finishing, contributed to production of VinoPlank Sprig Vases using reclaimed wood, and support showroom and product-preparation work.",
    tools: ["Table saws", "Chop saws", "Belt sanders", "Drill presses", "Branders", "Finishing products", "Reclaimed wood"],
    considerations: ["Material properties", "Precision measurement", "Fabrication and assembly", "Design for practical production", "Problem-solving with physical materials"],
    gallery: [
      { label: "VinoPlank Sprig Vases", caption: "Sprig vases made from reclaimed wood.", alt: "Sprig vases made from reclaimed wood.", folder: "assets/images/sonoma-millworks/", src: "assets/images/sonoma-millworks/vino-plank-sprig-vases.webp" },
      { label: "Showroom display", caption: "Custom wood products arranged in the Sonoma Millworks showroom.", alt: "Custom wood products displayed on tables and shelves in a showroom.", folder: "assets/images/sonoma-millworks/", src: "assets/images/sonoma-millworks/smw-showroom.webp" }
    ]
  },
  {
    id: "tensile-tester",
    title: "Tensile Tester â€” Design & Fabrication",
    shortTitle: "Tensile tester",
    category: "Mechanical Design",
    tags: ["Mechanical Design", "Manufacturing", "CAD / FEA"],
    status: "Prototype",
    role: "Designer and builder",
    cardSummary: "A tensile testing machine I designed and built, with room to document its structure, setup, and future results.",
    intro: "I designed and built a tensile testing machine. This project brings together mechanical design, structural considerations, fabrication, and assembly.",
    what: "Design and build a machine for tensile testing and material characterization. Machine capacity, accuracy, specifications, and test results have not been provided and are not claimed here.",
    how: "I worked through the mechanical design and fabricated and assembled the machine. The page is ready for CAD, build documentation, testing setup, and results once those materials are available.",
    why: "A tensile tester needs a load path and structure suited to the forces involved, along with a practical way to mount and test a specimen. Design and structural decisions should be documented alongside the actual machine and test method.",
    results: "The machine has been designed and built. No load capacity, accuracy, or example material-test results are stated here.",
    contribution: "I designed and built the tensile testing machine. Add more detail about analysis, fabrication steps, and test procedures when available.",
    tools: ["Mechanical design", "Fabrication", "Mechanical assembly", "Material testing â€” add method and results when documented"],
    considerations: ["Machine structure and load path", "Specimen mounting", "Fabrication and assembly", "Testing setup and documentation"],
    gallery: [
      { label: "Machine CAD model", caption: "SolidWorks assembly of the tensile tester.", alt: "CAD assembly of a vertical tensile tester with its frame, grips, and drive components.", fit: "contain", folder: "assets/images/tensile-tester/", src: "assets/images/tensile-tester/TT-full-assembly-CAD.webp" },
      { label: "FEA study", caption: "Finite element analysis view from the machine design process.", alt: "FEA visualization of stress distribution in a tensile tester component.", fit: "contain", folder: "assets/images/tensile-tester/", src: "assets/images/tensile-tester/TT-FEA-2.webp" },
      { label: "Component layout", caption: "Components arranged for inspection during machine development.", alt: "Tensile tester components laid out on a work surface for inspection.", folder: "assets/images/tensile-tester/", src: "assets/images/tensile-tester/TT-all-components.webp" }
    ]
  },
  {
    id: "rube-goldberg",
    title: "Rube Goldberg Engineering Education Project",
    shortTitle: "Rube Goldberg outreach",
    category: "Engineering Outreach",
    tags: ["Engineering Outreach", "Product Development"],
    status: "In Progress",
    role: "Co-developer and instructor",
    dates: "November 2025â€“Present",
    cardSummary: "An ongoing local STEM outreach effort that has delivered a two-day Rube Goldberg lesson for a fourth-grade class.",
    intro: "Since November 2025, I have collaborated with a local school to help reintroduce hands-on Rube Goldberg engineering projects in the community. With a classmate, I co-developed and carried out a two-day instructional program for a fourth-grade class.",
    what: "Plan an engaging introduction to simple machines that gives elementary students a chance to build their own Rube Goldberg machines.",
    how: "I worked with a classmate and the local school to co-develop and carry out the two-day lesson. It covered simple machines and gave students instruction and time to build their own Rube Goldberg machines.",
    why: "A chain-reaction project gives students a hands-on way to explore mechanical interactions, sequencing, and creative problem-solving while communicating engineering ideas in an accessible way.",
    results: "A two-day instructional program was delivered to a fourth-grade class. The broader community outreach effort is ongoing. No student identities or individual project outcomes are included here.",
    contribution: "I co-developed and carried out the two-day program with a classmate and collaborated with the local school to reintroduce hands-on Rube Goldberg projects.",
    tools: ["Simple machines", "Lesson planning", "Collaborative project development", "Engineering communication"],
    considerations: ["Age-appropriate engineering concepts", "Hands-on construction", "Clear instructions", "Student privacy in any published photographs"],
    gallery: [
      { label: "Classroom setup", caption: "Add a classroom image only when publication permission is in place.", alt: "Placeholder for an approved classroom setup photograph", folder: "assets/images/rube-goldberg/" },
      { label: "Student-built machines", caption: "Use a non-identifying project photograph or diagram unless photo permissions are confirmed.", alt: "Placeholder for a non-identifying student project example", folder: "assets/images/rube-goldberg/" }
    ]
  }
];

window.PORTFOLIO_SKILLS = [
  { title: "CAD & mechanical design", skills: [["SolidWorks", "Advanced student use"], ["Autodesk Inventor", "Level to confirm"], ["Engineering design", "Level to confirm"], ["Driver ergonomics", "Level to confirm"]] },
  { title: "Engineering analysis", skills: [["SolidWorks Simulation FEA", "Level to confirm"], ["Statics", "Coursework"], ["Material properties", "Level to confirm"], ["Metallurgy", "Level to confirm"]] },
  { title: "Manufacturing & fabrication", skills: [["CNC machining & programming", "Level to confirm"], ["Manual machining", "Level to confirm"], ["Quality inspection", "Level to confirm"], ["3D printing", "Level to confirm"], ["Rapid prototyping", "Level to confirm"], ["Tube notching", "Level to confirm"], ["Weld fixture design", "Level to confirm"]] },
  { title: "Software", skills: [["FeatureCAM", "Level to confirm"], ["MATLAB", "Level to confirm"], ["Excel", "Level to confirm"]] },
  { title: "Communication & languages", skills: [["Project coordination", "Level to confirm"], ["Team collaboration", "Level to confirm"], ["Engineering outreach", "Experience"], ["English", "Fluent"], ["Spanish", "Intermediate"]] }
];

/* Independent woodworking builds belong here, not under Sonoma Millworks. */
window.PERSONAL_WOODWORKING_PROJECTS = [
  { title: "Birdhouse", summary: "A small wooden birdhouse with a layered roof and slatted side details.", src: "assets/images/personal-woodworking/birdbox-2.webp", alt: "Finished wooden birdhouse with a layered roof, photographed on a workshop bench." },
  { title: "Live-edge coffee table", summary: "A low coffee table built around a naturally shaped wood slab.", src: "assets/images/personal-woodworking/coffee-table-11.webp", alt: "Finished live-edge coffee table with a broad natural wood top." },
  { title: "Wooden floor lamp", summary: "A tall wooden lamp with a warm finish and a perforated front panel.", src: "assets/images/personal-woodworking/lamp-1.webp", alt: "Tall finished wooden floor lamp with a patterned front panel." }
];

/* Ceramics work is documented separately from workshop-assistant experience. */
window.CERAMICS_PROJECTS = [];

window.COFFEE_BUSINESS_PROJECTS = [
  { title: "Coffee kiosk CAD concept", summary: "A CAD concept for a portable service kiosk used by Cequin Coffee Company.", src: "assets/images/coffee-business/cq-box-cad.webp", alt: "CAD view of the coffee kiosk enclosure concept." },
  { title: "Kiosk fabrication", summary: "The kiosk enclosure taking shape in the workshop.", src: "assets/images/coffee-business/cq-box-in-shop.webp", alt: "Wooden coffee kiosk enclosure under construction in the workshop." },
  { title: "Completed coffee kiosk", summary: "The finished kiosk ready for use at events.", src: "assets/images/coffee-business/cq-box-done.webp", alt: "Completed wooden coffee kiosk standing outdoors." }
];

window.MACHINING_PROJECTS = [
  { title: "CNC milling", summary: "Operating a CNC mill during a machining project.", src: "assets/images/machining/on-cnc.webp", alt: "Student operating a CNC milling machine." },
  { title: "Drilled plate", summary: "A machined plate with a repeated hole pattern.", src: "assets/images/machining/manual-plates-holes.webp", alt: "Machined metal plate with a pattern of drilled holes." },
  { title: "Tapping operation", summary: "A close view of a tapping setup at the machine.", src: "assets/images/machining/tapping.webp", alt: "Tapping tool positioned over a workpiece in a machine setup." }
];

window.CEQUIN_ROASTING_PHOTOS = [
  { title: "Roasting setup", summary: "Add a photo and notes about the roasting setup.", alt: "Placeholder for a Cequin Coffee roasting setup photo.", folder: "assets/images/coffee-business/", src: "" },
  { title: "Roasting process", summary: "Add a photo and notes about a roasting step.", alt: "Placeholder for a Cequin Coffee roasting process photo.", folder: "assets/images/coffee-business/", src: "" },
  { title: "Roasted coffee", summary: "Add a photo and notes about the roasted coffee or production stage.", alt: "Placeholder for a Cequin Coffee roasted coffee photo.", folder: "assets/images/coffee-business/", src: "" }
];

window.SMALL_ENGINEERING_PROJECTS = [
  { title: "Egg-drop device", summary: "An assembled mechanical frame developed for an egg-drop challenge.", src: "assets/images/small-eng-side-projects/eggdrop-assembled.webp", alt: "Assembled frame-based device for an egg-drop challenge." },
  { title: "Gear mechanism", summary: "A small mechanism showing a set of meshing gears and its support structure.", src: "assets/images/small-eng-side-projects/gears.webp", alt: "Compact gear mechanism mounted on a perforated support frame." },
  { title: "Grabber mechanism", summary: "A prototype grabber shown in its open position.", src: "assets/images/small-eng-side-projects/grabber-open.webp", alt: "Prototype grabber mechanism extended on a work surface." },
  { title: "Hydraulic prototype", summary: "A small hydraulic mechanism built as a hands-on engineering project.", src: "assets/images/small-eng-side-projects/hydraulic-1.webp", alt: "Small hydraulic prototype made from wood, tubing, and mechanical components." }
];

/* Personal collections are full project pages, with prompts for future documentation. */
const collectionCaseStudies = [
  {
    id: "machining",
    title: "Machining & Quality Inspection",
    shortTitle: "Machining",
    category: "Manufacturing",
    tags: ["Manufacturing", "Quality Inspection"],
    status: "Selected machining work",
    cardSummary: "Selected CNC and manual machining photographs, with space to document inspection methods and measured features.",
    intro: "This page brings together selected machining work, including a CNC milling setup, a drilled plate, and a tapping operation. It also provides a place to document quality inspection methods alongside machined parts.",
    what: "Present selected machining examples and document how part features are checked against their design requirements.",
    how: "The current gallery shows selected machining setups and a machined plate. Add the part drawing, inspection plan, instruments, and measurement records when specific examples are available.",
    why: "Machining and inspection work together: measurements can be compared with drawing requirements to assess whether a part meets its intended dimensions and features.",
    results: "Selected machining images are included. No inspection results or part tolerances are claimed until documented.",
    contribution: "Add the specific machining and inspection tasks performed for each part as those project records are collected.",
    tools: ["CNC machining", "Manual machining", "Quality inspection"],
    considerations: ["Drawing requirements", "Feature identification", "Measurement method", "Recording and comparing results"],
    images: window.MACHINING_PROJECTS,
    practiceSections: [
      { title: "Quality inspection", body: "Use this section to document the part features inspected, applicable drawing requirements, measurement instruments and methods, recorded results, and any follow-up work. Add only methods and results confirmed for a specific part." }
    ],
    documentationTopics: ["Part drawings and critical features", "CNC or manual machining setup", "Inspection plan and instrument selection", "Measurements, tolerances, and corrective actions"]
  },
  {
    id: "small-engineering",
    title: "Small Engineering Projects",
    shortTitle: "Small engineering projects",
    category: "Small Engineering",
    tags: ["Small Engineering", "Mechanical Design", "Manufacturing"],
    status: "Selected prototypes",
    role: "Designer and builder",
    cardSummary: "A selection of compact mechanisms, prototypes, and engineering builds.",
    intro: "This collection brings together smaller engineering builds and prototypes, including an egg-drop device, gear mechanism, grabber, and hydraulic prototype.",
    what: "Explore smaller mechanisms and prototypes that demonstrate hands-on engineering work across different scales and project contexts.",
    how: "The selected photographs show the assembled mechanisms and prototypes. Individual project goals, design iterations, build steps, and test observations can be added as each project is documented.",
    why: "Small builds provide a practical setting to explore mechanisms, assembly, and design choices. This page groups related projects while leaving room for each build to be documented in more depth.",
    results: "Selected projects are shown below. Add project-specific outcomes only when they are documented.",
    contribution: "These are selected personal and course or club engineering builds. Add individual roles and collaborators with each project record.",
    tools: ["Mechanical design", "Prototyping", "Fabrication", "Assembly"],
    considerations: ["Project objective", "Mechanism and motion", "Material and component choices", "Assembly and testing"],
    images: window.SMALL_ENGINEERING_PROJECTS,
    documentationTopics: ["Project objective and constraints", "CAD, sketches, or mechanism layout", "Build sequence and material choices", "Test setup and observations"]
  },
  {
    id: "woodworking",
    title: "Personal Woodworking Projects",
    shortTitle: "Woodworking",
    category: "Woodworking",
    tags: ["Woodworking", "Manufacturing", "Personal Projects"],
    status: "Selected builds",
    role: "Independent projects",
    cardSummary: "Selected personal builds, including a birdhouse, live-edge coffee table, and floor lamp.",
    intro: "This collection presents selected independent woodworking builds. The photos show a birdhouse, a live-edge coffee table, and a wooden floor lamp.",
    what: "Document personal woodworking projects and the decisions involved in making functional objects from wood.",
    how: "The current gallery highlights completed pieces. Add drawings, dimensions, material details, process photographs, and finishing notes as those records are available.",
    why: "Woodworking combines design decisions with material selection, measurement, fabrication, and finishing. This page provides space to document those choices for each build.",
    results: "Three selected builds are pictured. Additional project details can be added below as they are documented.",
    contribution: "Independent personal builds. Add project-specific responsibilities or collaborators alongside future documentation.",
    tools: ["Woodworking", "Measurement", "Fabrication", "Finishing"],
    considerations: ["Material selection", "Dimensions and fit", "Joinery and assembly", "Surface preparation and finish"],
    images: window.PERSONAL_WOODWORKING_PROJECTS,
    documentationTopics: ["Sketches, dimensions, or plans", "Wood species and material selection", "Build process and joinery", "Finishing details and final photographs"]
  },
  {
    id: "ceramics",
    title: "Ceramics Projects",
    shortTitle: "Ceramics",
    category: "Ceramics",
    tags: ["Ceramics", "Personal Projects"],
    status: "Documentation to add",
    role: "Personal projects",
    cardSummary: "A dedicated space for ceramic pieces, process photographs, and technique notes.",
    intro: "This page is reserved for ceramic pieces and process documentation. Sonoma Art School workshop-assistant experience is listed separately under Education and Professional Experience.",
    what: "Build a visual record of selected ceramic pieces and the processes used to make them.",
    how: "Add photographs and a short note for each piece as documentation becomes available. The prompts below provide a structure for recording the work.",
    why: "A consistent record of form, technique, and finish makes it easier to present each piece and its making process.",
    results: "Ceramics photographs and piece descriptions have not yet been added.",
    contribution: "Add the maker's role and any collaborators or workshop context with each piece.",
    tools: ["Ceramics", "Hands-on making"],
    considerations: ["Form and intended use", "Technique and materials", "Surface and finish", "Photographs of the finished piece and process"],
    images: window.CERAMICS_PROJECTS?.length ? window.CERAMICS_PROJECTS : [
      { title: "Piece photographs", summary: "Add a finished-piece photograph and a brief description." },
      { title: "Process documentation", summary: "Add process photographs and technique notes." },
      { title: "Material and finish", summary: "Add material, surface, and finish details." }
    ],
    documentationTopics: ["Piece title and description", "Forming technique and materials", "Surface treatment and finish", "Finished-piece and process photographs"]
  },
  {
    id: "coffee-kiosk",
    title: "Cequin Coffee Company: Kiosk & Roasting Operations",
    shortTitle: "Cequin Coffee",
    category: "Product Development",
    tags: ["Product Development", "Woodworking", "Manufacturing", "Personal Projects"],
    status: "Built",
    role: "Co-owner and project contributor",
    cardSummary: "Coffee kiosk design and fabrication, with space for roasting operations documentation.",
    intro: "This project documents work for Cequin Coffee Company, including the portable service kiosk from CAD concept through fabrication and a dedicated gallery for coffee roasting operations.",
    what: "Develop and build a portable service kiosk for use by Cequin Coffee Company.",
    how: "The selected images show the CAD concept, enclosure during fabrication, and completed kiosk. The roasting operations gallery is ready for process photographs and notes. Add dimensions, design revisions, material choices, and setup details as they are documented.",
    why: "The kiosk needed to serve a practical business use while being designed and built as a physical enclosure. This page leaves room to document its design and fabrication decisions.",
    results: "A kiosk enclosure was built. Further specifications and operating details can be added when available.",
    contribution: "This work was completed in the context of Cequin Coffee Company. Add specific individual and collaborator contributions with the process documentation.",
    tools: ["CAD", "Woodworking", "Fabrication", "Product development"],
    considerations: ["Service and event use", "Enclosure design", "Materials and fabrication", "Transport and setup"],
    images: window.COFFEE_BUSINESS_PROJECTS,
    documentationTopics: ["Design sketches and CAD iterations", "Dimensions and material choices", "Fabrication sequence", "Transport, setup, and use"],
    instagramProfile: "https://www.instagram.com/cequincoffee/"
  }
];

collectionCaseStudies.forEach((project) => {
  project.gallery = (project.images || []).map((image) => ({
    label: image.title,
    caption: image.summary,
    alt: image.alt || image.title,
    src: image.src,
    fit: image.fit
  }));
  delete project.images;
  window.PORTFOLIO_PROJECTS.push(project);
});

const documentationTopics = {
  "baja-chassis": ["Frame layout and design documentation", "PVC prototype evaluation", "Fixture design and fabrication records", "Tube layout, notching, and fit-up observations"],
  "tensile-tester": ["Part drawings and assembly", "Fabrication and instrumentation", "Test method and calibration", "Material test records and results"],
  "wave-energy": ["System layout and design revisions", "Mechanical and electrical integration", "Ocean test setup", "Recorded observations and measurements"],
  "rube-goldberg": ["Lesson plan and simple-machine materials", "Activity sequence and build guidance", "Non-identifying photographs", "Reflection and future lesson revisions"]
};
window.PORTFOLIO_PROJECTS.forEach((project) => {
  if (documentationTopics[project.id]) project.documentationTopics = documentationTopics[project.id];
});

/* Add photos to the matching media group below. Captions also provide alt text. */
const mediaPhoto = (folder, file, label, caption, fit = "cover", featured = false) => ({
  label, caption, alt: caption, src: "assets/images/" + folder + "/" + file, fit, featured
});
const mediaGroup = (title, summary, gallery) => ({ title, summary, gallery });
const images = (folder, rows) => rows.map(([file, label, caption, fit, featured]) => mediaPhoto(folder, file, label, caption, fit || "cover", Boolean(featured)));
const projectById = Object.fromEntries(window.PORTFOLIO_PROJECTS.map((project) => [project.id, project]));

const chassis = projectById["baja-chassis"];
chassis.timelineStages = [
  {
    title: "Chassis design",
    description: "Frame layout and design documentation establish the geometry and member arrangement for the Baja chassis.",
    collections: [
      mediaGroup("Frame layout and drawings", "CAD views and drawing references for the chassis design.", images("baja", [
        ["chassis-side-view.webp", "Chassis side view", "SolidWorks chassis model shown from an angled side view.", "contain", true],
        ["chassis-angles-dwg-1.webp", "Chassis angle drawing 1", "Engineering drawing documenting chassis tube angles.", "contain"],
        ["chassis-angles-dwg-2.webp", "Chassis angle drawing 2", "Additional drawing views of chassis tube angles.", "contain"]
      ])),
    ]
  },
  {
    title: "PVC ergonomics prototypes",
    description: "Full-scale PVC mock-ups let the team review seating geometry, driver ergonomics, and egress before final chassis fabrication.",
    collections: [mediaGroup("Prototype review", "Photos of the collaborative prototype work.", images("baja", [
      ["pvc-group.webp", "PVC prototype team", "Team members gathered around the full-scale PVC chassis prototype.", "cover", true],
      ["swe-pvc-2.webp", "PVC prototype 2", "A view of the SRJC SWE PVC chassis prototype work."],
      ["swe-pvc-3.webp", "PVC prototype 3", "A second view of the SRJC SWE PVC chassis prototype work."],
      ["swe-pvc-4.webp", "PVC prototype 4", "A third view of the SRJC SWE PVC chassis prototype work."]
    ]))]
  },
  {
    title: "Weld fixtures",
    description: "Fixture design and fabrication support the positioning and assembly of chassis members.",
    collections: [
      mediaGroup("Fixture design and documentation", "CAD, part references, and fixture documentation.", images("baja", [
        ["full-fixtures-CAD.webp", "Full fixture CAD assembly", "SolidWorks assembly of the chassis welding fixtures.", "contain", true],
        ["fixtures-bom-1.webp", "Fixture bill of materials 1", "Fixture assembly component documentation, sheet 1.", "contain"],
        ["fixtures-bom-2.webp", "Fixture bill of materials 2", "Fixture assembly component documentation, sheet 2.", "contain"],
        ["fixtures-bom-3.webp", "Fixture bill of materials 3", "Fixture assembly component documentation, sheet 3.", "contain"],
        ["fixtures-dxf.webp", "Fixture DXF", "DXF drawing used in fixture fabrication.", "contain"]
      ])),
      mediaGroup("Fixture fabrication and fit-up", "Workshop images show fixture setup and chassis component fit-up.", images("baja", [
        ["cnc-mdf-2.webp", "CNC MDF fixture part", "CNC-cut MDF part used in chassis fixture work.", "contain"],
        ["nose-box-fixtures-me.webp", "Nose box fixture", "Fixture setup for fitting the chassis nose box."],
        ["nose-box-fitting.webp", "Nose box fit-up", "Chassis nose box being fitted during assembly."],
        ["roll-hoop-fixturing.webp", "Roll hoop fixturing", "Roll hoop positioned in a workshop fixture."],
        ["welders-set-up.webp", "Welding setup", "Workshop setup for chassis welding."],
        ["welders-set-up-2.webp", "Welding setup 2", "Additional view of the chassis welding setup."]
      ]))
    ]
  },
  {
    title: "Tube notching process",
    description: "Tube identification, layout, and preparation support repeatable fit-up of chassis joints.",
    collections: [
      mediaGroup("Tube identification and layout", "Tube naming and unrolled layout records for chassis members.", images("baja", [
        ["tube-naming-1.webp", "Tube naming 1", "Chassis tube naming reference, sheet 1.", "contain", true],
        ["tube-naming-2.webp", "Tube naming 2", "Chassis tube naming reference, sheet 2.", "contain"],
        ["tube-naming-3.webp", "Tube naming 3", "Chassis tube naming reference, sheet 3.", "contain"],
        ["tube-naming-4.webp", "Tube naming 4", "Chassis tube naming reference, sheet 4.", "contain"],
        ["tube-naming-5.webp", "Tube naming 5", "Chassis tube naming reference, sheet 5.", "contain"],
        ["unrolled-tube-temp.webp", "Unrolled tube layout", "Unrolled layout template for a chassis tube.", "contain"]
      ])),
      mediaGroup("Tube preparation", "Workshop preparation of chassis tubing before fit-up.", images("baja", [
        ["grinding-tubes.webp", "Tube grinding", "Chassis tubes being ground during preparation.", "cover", true]
      ]))
    ]
  }
];

const machining = projectById["machining"];
machining.mediaGroups = [
  mediaGroup("CNC setup and CAD", "Machine operation and a CAD model from machining work.", images("machining", [
    ["on-cnc.webp", "CNC mill", "A CNC milling machine during a machining project.", "cover", true],
    ["candle-cad.webp", "Candle CAD model", "CAD model of a candle-shaped machined part.", "contain"]
  ])),
  mediaGroup("Machined features and operations", "Selected part features and a tapping setup.", images("machining", [
    ["manual-plates-holes.webp", "Drilled plate", "Machined plate with a repeated hole pattern.", "cover", true],
    ["tapping.webp", "Tapping operation", "Tapping tool positioned over a workpiece in a machine setup."]
  ]))
];

projectById["coffee-kiosk"].mediaGroups = [
  mediaGroup("Design concept", "CAD documentation for the Cequin Coffee kiosk.", images("coffee-business", [
    ["cq-box-cad.webp", "Kiosk CAD", "CAD view of the Cequin Coffee service kiosk enclosure.", "contain", true]
  ])),
  mediaGroup("Fabrication", "The kiosk enclosure during workshop fabrication.", images("coffee-business", [
    ["cq-box-in-shop.webp", "Kiosk in the shop", "Coffee kiosk enclosure during fabrication."],
    ["cq-box-weld.webp", "Kiosk weld detail", "Welded detail from the coffee kiosk build."]
  ])),
  mediaGroup("Completed kiosk", "The finished coffee kiosk.", images("coffee-business", [
    ["cq-box-done.webp", "Completed kiosk", "Completed wooden coffee kiosk ready for use.", "cover", true]
  ])),
  mediaGroup("Coffee roasting operations", "Add photographs and notes documenting coffee roasting and production.", window.CEQUIN_ROASTING_PHOTOS.map((photo) => ({
    label: photo.title, caption: photo.summary, alt: photo.alt, src: photo.src
  })))
];

projectById["small-engineering"].mediaGroups = [
  mediaGroup("Egg-drop device", "CAD, fabrication, and assembled views of the egg-drop build.", images("small-eng-side-projects", [
    ["eggdrop-cad.webp", "Egg-drop CAD", "CAD model of the egg-drop device.", "contain"],
    ["eggdrop-printing.webp", "Printing the egg-drop parts", "3D printing components for the egg-drop device."],
    ["eggdrop-printed.webp", "Printed egg-drop parts", "Printed components for the egg-drop device."],
    ["eggdrop-assembled.webp", "Assembled egg-drop device", "Assembled frame-based device for an egg-drop challenge.", "cover", true]
  ])),
  mediaGroup("Gear mechanism", "A compact mechanism and its support structure.", images("small-eng-side-projects", [
    ["gears.webp", "Gear mechanism", "Compact gear mechanism mounted on a perforated support frame.", "cover", true]
  ])),
  mediaGroup("Grabber mechanism", "Open and closed views of the prototype grabber.", images("small-eng-side-projects", [
    ["grabber-closed.webp", "Grabber closed", "Prototype grabber mechanism in the closed position."],
    ["grabber-open.webp", "Grabber open", "Prototype grabber mechanism in the open position.", "cover", true]
  ])),
  mediaGroup("Hydraulic prototype", "A small hands-on hydraulic mechanism.", images("small-eng-side-projects", [
    ["hydraulic-1.webp", "Hydraulic prototype", "Small hydraulic prototype made from wood, tubing, and mechanical components.", "cover", true]
  ]))
];

projectById["woodworking"].mediaGroups = [
  mediaGroup("Birdhouse", "Selected view of the completed birdhouse.", images("personal-woodworking", [
    ["birdbox-3.webp", "Birdhouse", "Finished wooden birdhouse with a layered roof and slatted side details.", "cover", true]
  ])),
  mediaGroup("Buret", "Process and completed views of the buret project.", images("personal-woodworking", [
    ["buret-proccess.webp", "Buret process", "Buret project during construction."],
    ["buret-finished.webp", "Finished buret", "Completed wooden buret project.", "cover", true],
    ["buret-on-wall.webp", "Buret on wall", "Completed buret shown mounted on a wall."]
  ])),
  mediaGroup("Coffee table", "Selected process and completed views of the live-edge coffee table.", images("personal-woodworking", [
    ["coffee-table-1.webp", "Coffee table 1", "Early view of the live-edge coffee table build."],
    ["coffee-table-5.webp", "Coffee table 5", "Progress view of the live-edge coffee table."],
    ["coffee-table-9.webp", "Coffee table 9", "Later view of the live-edge coffee table build."],
    ["coffee-table-11.webp", "Finished coffee table", "Finished live-edge coffee table with a broad natural wood top.", "cover", true],
    ["coffee-table-win.webp", "Coffee table in use", "Live-edge coffee table shown in its finished setting."]
  ])),
  mediaGroup("Coffin build", "Construction stages and a fitting check for the coffin project.", images("personal-woodworking", [
    ["coffin-process-1.webp", "Coffin process 1", "Early construction stage of the coffin project."],
    ["coffin-process-2.webp", "Coffin process 2", "Intermediate construction stage of the coffin project."],
    ["coffin-process-3.webp", "Coffin process 3", "Later construction stage of the coffin project."],
    ["coffin-in-hearse-measure.webp", "Coffin fitting check", "Coffin measured in a hearse.", "cover", true]
  ])),
  mediaGroup("Floor lamp", "The wooden lamp and its finished setting.", images("personal-woodworking", [
    ["lamp-1.webp", "Floor lamp", "Wooden floor lamp with a patterned front panel.", "cover", true],
    ["lamp-win.webp", "Floor lamp in use", "Wooden floor lamp shown in its finished setting."]
  ]))
];

projectById["sonoma-millworks"].mediaGroups = [
  mediaGroup("Shop and team", "Selected photos from shop work and collaboration.", images("sonoma-millworks", [
    ["smw-1.webp", "Sonoma Millworks 1", "Workshop photograph from Sonoma Millworks."],
    ["smw-at-montage-me.webp", "At the montage", "Working on a montage project at Sonoma Millworks."],
    ["smw-at-montage-working.webp", "Montage work", "Montage work in progress at Sonoma Millworks."],
    ["smw-with-jennifer.webp", "Team photo", "Sonoma Millworks team members together.", "cover", true]
  ])),
  mediaGroup("Products and fabrication", "Selected custom wood products, showroom, and fabrication images.", images("sonoma-millworks", [
    ["smw-at-montage-book.webp", "Montage book", "Book detail from a Sonoma Millworks montage project."],
    ["smw-at-montage-leather.webp", "Montage leather", "Leather detail from a Sonoma Millworks montage project."],
    ["smw-framing.webp", "Framing", "Framing work at Sonoma Millworks."],
    ["smw-showroom.webp", "Showroom", "Custom wood products displayed in the Sonoma Millworks showroom."],
    ["vino-plank-sprig-vases.webp", "VinoPlank Sprig Vases", "Sprig vases made from reclaimed wood.", "cover", true]
  ]))
];

projectById["tensile-tester"].mediaGroups = [
  mediaGroup("CAD assemblies and design records", "Assembly models and product data from the tensile tester design.", images("tensile-tester", [
    ["TT-full-assembly-CAD.webp", "Full assembly CAD", "SolidWorks assembly of the tensile tester.", "contain", true],
    ["TT-exploded-CAD.webp", "Exploded CAD view", "Exploded view of the tensile tester assembly.", "contain"],
    ["TT-PDM.webp", "Product data management", "Product data management view for the tensile tester project.", "contain"],
    ["top-plate-rev1-CAD.webp", "Top plate revision 1", "CAD model of the first top plate revision.", "contain"],
    ["TT-pin-CAD.webp", "Pin CAD", "CAD model of a tensile tester pin.", "contain"],
    ["TT-welded-top-plate-CAD.webp", "Welded top plate CAD", "CAD model of the welded tensile tester top plate.", "contain"]
  ])),
  mediaGroup("Part drawings", "Selected detail and assembly drawings.", images("tensile-tester", [
    ["TT-base-dwg.webp", "Base drawing", "Engineering drawing of the tensile tester base.", "contain"],
    ["TT-cap-plate-dwg.webp", "Cap plate drawing", "Engineering drawing of the cap plate.", "contain"],
    ["TT-full-assembly-dwg.webp", "Assembly drawing", "Engineering drawing of the full tensile tester assembly.", "contain"],
    ["TT-pin-dwg.webp", "Pin drawing", "Engineering drawing of a tensile tester pin.", "contain"],
    ["TT-rod-dwg.webp", "Rod drawing", "Engineering drawing of a tensile tester rod.", "contain"],
    ["TT-subassembly-dwg.webp", "Subassembly drawing", "Engineering drawing of a tensile tester subassembly.", "contain"],
    ["TT-top-plate-dwg.webp", "Top plate drawing", "Engineering drawing of the tensile tester top plate.", "contain"]
  ])),
  mediaGroup("FEA studies", "Finite element analysis images from the design process.", images("tensile-tester", [
    ["TT-FEA-1.webp", "FEA study 1", "Finite element analysis view from the tensile tester design."],
    ["TT-FEA-2.webp", "FEA study 2", "Finite element analysis view from the tensile tester design.", "cover", true],
    ["TT-FEA-3.webp", "FEA study 3", "Finite element analysis view from the tensile tester design."],
    ["TT-FEA-4.webp", "FEA study 4", "Finite element analysis view from the tensile tester design."],
    ["TT-FEA-5.webp", "FEA study 5", "Finite element analysis view from the tensile tester design."]
  ])),
  mediaGroup("Components and inspection", "Photos of components and inspection during development.", images("tensile-tester", [
    ["TT-all-components.webp", "All components", "Tensile tester components laid out for inspection.", "cover", true],
    ["TT-inspection.webp", "Inspection", "Tensile tester component inspection during development."],
    ["TT-team-photo.webp", "Project team", "Team photograph from the tensile tester project."]
  ]))
];
projectById["tensile-tester"].video = {
  src: "assets/images/tensile-tester/TT-recording.MP4",
  title: "Tensile tester recording",
  caption: "Video documentation of the tensile tester. Add a description of the setup and observed operation when ready."
};

projectById["wave-energy"].mediaGroups = [
  mediaGroup("CAD and design", "CAD assemblies, mechanism details, and design drawings.", images("wave-energy", [
    ["htg-cad-1.webp", "Generator CAD", "CAD view of the wave energy generator.", "contain", true],
    ["htg-assy-view-inside.webp", "Assembly interior CAD", "CAD view into the wave energy generator assembly.", "contain"],
    ["htg-axle-cad.webp", "Axle CAD", "CAD model of the generator axle.", "contain"],
    ["htg-cad-gears.webp", "Gear CAD", "CAD view of the wave energy gear arrangement.", "contain"],
    ["htg-dimensions-cad.webp", "Dimensioned CAD", "Dimensioned CAD view of the wave energy generator.", "contain"],
    ["htg-exploded-view.webp", "Exploded view", "Exploded CAD view of the generator assembly.", "contain"],
    ["htg-motor-and-axle-cad.webp", "Motor and axle CAD", "CAD view of the motor and axle arrangement.", "contain"],
    ["htg-spacer-cad.webp", "Spacer CAD 1", "CAD model of a wave energy generator spacer.", "contain"],
    ["htg-spacer-cad-2.webp", "Spacer CAD 2", "Additional CAD view of a wave energy generator spacer.", "contain"]
  ])),
  mediaGroup("Prototype and mechanism", "Interior views and the welded support base.", images("wave-energy", [
    ["htg-inside.webp", "Interior mechanism", "Internal view of the wave energy generator showing its mechanical components.", "cover", true],
    ["htg-inside-side.webp", "Interior side view", "Side view of the generator interior and mechanism."],
    ["htg-welded-base.webp", "Welded base", "Round welded frame supporting the wave energy prototype."]
  ])),
  mediaGroup("Ocean test and competition", "Field testing and competition documentation.", images("wave-energy", [
    ["htg-working-in-ocean.webp", "Ocean test", "Wave energy prototype held in ocean water during a field test.", "cover", true],
    ["htg-group-at-comp.webp", "Competition team", "Team group photograph at the competition."],
    ["htg-podium.webp", "Competition podium", "Team members at the SkillsUSA California State Conference podium."],
    ["htg-medals.webp", "Competition medals", "Medals from the SkillsUSA California State Conference."]
  ]))
];

window.PORTFOLIO_PROJECTS.forEach((project) => {
  if (project.timelineStages) {
    project.timelineStages.forEach((stage) => {
      stage.gallery = (stage.collections || []).flatMap((collection) => collection.gallery || []);
    });
    project.gallery = project.timelineStages.flatMap((stage) => stage.gallery);
  } else if (project.mediaGroups) {
    project.gallery = project.mediaGroups.flatMap((group) => group.gallery || []);
  }
});
