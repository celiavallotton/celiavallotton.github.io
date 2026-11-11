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
    how: "I developed the chassis and roll cage in SolidWorks and conducted SolidWorks Simulation FEA to evaluate loading and stress concentrations from predicted impacts. I designed and fabricated chassis welding fixtures and developed tube-notching processes. I also led a collaborative team of SRJC Society of Women Engineers members through the design and fabrication of a full-scale PVC chassis prototype to evaluate seating geometry, pedal positioning, driver ergonomics, and egress. Current design work also considers firewall geometry, mounting locations, body-panel attachment, reinforcement, and gusset placement.",
    why: "A chassis has to satisfy competing needs at once: structural requirements, driver safety and ergonomics, weight, packaging, accessibility, manufacturability, and competition rules. Joint geometry and member placement affect both the design and the practical work of cutting, fitting, and assembling 4130 chromoly tubing.",
    results: "The team designed and fabricated a full-scale PVC chassis prototype to evaluate driver ergonomics. Chassis development remains in progress; this prototype does not represent final vehicle fabrication, competition, or technical inspection.",
    contribution: "I led chassis subsystem design, designed and fabricated welding fixtures, developed tube-notching processes, conducted SolidWorks Simulation FEA, and led a collaborative team through the PVC chassis prototype work. Chassis design is coordinated with other vehicle subteams.",
    tools: ["SolidWorks", "SolidWorks Simulation FEA", "4130 chromoly steel tubing", "PVC chassis prototype", "Welding fixtures", "Tube notching"],
    considerations: ["Roll cage geometry", "Primary and secondary structural members", "Tube notching and joint design", "Driver interface and ergonomics", "Component mounting and packaging", "Structural analysis", "Manufacturing and assembly", "Baja SAE technical requirements"],
    gallery: [
      { label: "Chassis side view", caption: "SolidWorks model of the Baja chassis frame in an angled side view.", alt: "Angled side view of a tubular Baja chassis frame in SolidWorks.", fit: "contain", folder: "assets/images/baja/", src: "assets/images/baja/chassis-side-view.webp" },
      { label: "Chassis fixture CAD", caption: "SolidWorks assembly showing the chassis welding fixtures.", alt: "CAD model of welding fixtures arranged around a tubular Baja chassis.", fit: "contain", folder: "assets/images/baja/", src: "assets/images/baja/full-fixtures-CAD.webp" },
      { label: "Ergonomics prototype", caption: "Full-scale PVC prototype used to assess seating and driver access.", alt: "Full-scale PVC chassis ergonomics prototype with a plywood floor panel.", folder: "assets/images/baja/", src: "assets/images/baja/plywood-ergo.webp" },
      { label: "Roll hoop weld fixture", caption: "Fixture prepared to hold the roll hoop during fabrication.", alt: "Roll hoop positioned in a wooden welding fixture in the workshop.", folder: "assets/images/baja/", src: "assets/images/baja/roll-hoop-fixturing.webp" }
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
    showInEngineering: false,
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
    id: "pedal-box",
    title: "Pedal Box & Driver Interface Design",
    shortTitle: "Pedal box & driver interface",
    category: "Mechanical Design",
    tags: ["Mechanical Design", "CAD / FEA", "Product Development"],
    status: "Concept Development",
    role: "Baja SAE chassis subsystem",
    cardSummary: "Developing brake, throttle, and driver-interface concepts within Baja chassis packaging and integration constraints.",
    intro: "This developing Baja SAE project focuses on the pedal box and driver interface as part of the chassis design. The work considers ergonomics, packaging, mounting, and coordination with other vehicle systems.",
    what: "Develop brake and throttle interface concepts that can integrate with the chassis and accommodate the vehicle's driver-interface needs.",
    how: "The concepts are considered alongside chassis geometry and require coordination with the steering and powertrain subteams. Design development is ongoing; final geometry and test results are not represented as complete.",
    why: "Pedal position and mounting affect driver ergonomics, available packaging, and integration with nearby chassis and vehicle components. Changes need to be considered in the context of the broader vehicle layout.",
    results: "Concept development is ongoing. Add the current design and integration status as the work progresses.",
    contribution: "This work is part of my Baja SAE chassis responsibilities. I am developing pedal-box and driver-interface concepts and considering their chassis integration in coordination with other subteams.",
    tools: ["SolidWorks", "Driver-interface concepts", "Chassis integration"],
    considerations: ["Brake and throttle interface", "Driver ergonomics", "Packaging constraints", "Mounting considerations", "Chassis integration", "Steering and powertrain coordination"],
    gallery: [
      { label: "Pedal box concept", caption: "Add a current CAD concept or layout.", alt: "Placeholder for pedal box CAD concept", folder: "assets/images/baja/" },
      { label: "Driver packaging", caption: "Add a layout view showing packaging and interface considerations.", alt: "Placeholder for driver interface packaging view", folder: "assets/images/baja/" }
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
  { title: "Manufacturing & fabrication", skills: [["CNC machining & programming", "Level to confirm"], ["Manual machining", "Level to confirm"], ["3D printing", "Level to confirm"], ["Rapid prototyping", "Level to confirm"], ["Tube notching", "Level to confirm"], ["Weld fixture design", "Level to confirm"]] },
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

window.FABRICATION_PROJECTS = [
  { title: "Chassis fixture CAD", summary: "SolidWorks assembly showing welding fixtures positioned around the Baja chassis.", src: "assets/images/baja/full-fixtures-CAD.webp", alt: "CAD model of welding fixtures arranged around a tubular Baja chassis.", fit: "contain" },
  { title: "Roll hoop fixture", summary: "Fixture used to hold the roll hoop during fabrication.", src: "assets/images/baja/roll-hoop-fixturing.webp", alt: "Roll hoop positioned in a workshop fixture." },
  { title: "Chassis fabrication setup", summary: "Workshop setup for chassis fabrication and assembly.", src: "assets/images/baja/welders-set-up.webp", alt: "Welding fixtures and chassis fabrication materials arranged on a workshop table." }
];

window.SMALL_ENGINEERING_PROJECTS = [
  { title: "Egg-drop device", summary: "An assembled mechanical frame developed for an egg-drop challenge.", src: "assets/images/small-eng-side-projects/eggdrop-assembled.webp", alt: "Assembled frame-based device for an egg-drop challenge." },
  { title: "Gear mechanism", summary: "A small mechanism showing a set of meshing gears and its support structure.", src: "assets/images/small-eng-side-projects/gears.webp", alt: "Compact gear mechanism mounted on a perforated support frame." },
  { title: "Grabber mechanism", summary: "A prototype grabber shown in its open position.", src: "assets/images/small-eng-side-projects/grabber-open.webp", alt: "Prototype grabber mechanism extended on a work surface." },
  { title: "Hydraulic prototype", summary: "A small hydraulic mechanism built as a hands-on engineering project.", src: "assets/images/small-eng-side-projects/hydraulic-1.webp", alt: "Small hydraulic prototype made from wood, tubing, and mechanical components." }
];
