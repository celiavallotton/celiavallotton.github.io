/*
 * Portfolio content lives here so projects and skills can be edited without
 * changing the page layout. Gallery images are optional: add a relative `src`
 * such as "assets/images/baja/chassis-side-view.jpg" to replace a placeholder.
 */
window.PORTFOLIO_PROJECTS = [
  {
    id: "baja-chassis",
    title: "SRJC Baja SAE — Chassis Design & Development",
    shortTitle: "Baja SAE chassis",
    category: "Mechanical Design",
    tags: ["Mechanical Design", "CAD / FEA", "Manufacturing", "Product Development"],
    status: "In Progress",
    cardSummary: "Chassis and roll cage development for the SRJC Baja SAE vehicle, balancing structural design, driver needs, packaging, and fabrication constraints.",
    intro: "As Chassis Lead / Chassis Manager for the Santa Rosa Junior College Baja SAE team, I lead chassis design and development. The work brings together structural geometry, driver safety and ergonomics, component packaging, manufacturing, and competition requirements.",
    what: "Develop a tubular vehicle chassis and roll cage that can integrate with the team's vehicle systems and be designed with Baja SAE technical requirements in mind. This is ongoing design work; no competition, technical inspection, or vehicle testing outcome is claimed here.",
    how: "I use SolidWorks to develop the chassis, roll cage, and individual tubular members, including tube intersections and notching geometry. I coordinate the chassis design with other engineering subteams and explore FEA to assess loading and structural behavior. Current design work also considers pedal-box and driver-interface concepts, firewall geometry, mounting locations, body-panel attachment, reinforcement, and gusset placement.",
    why: "A chassis has to satisfy competing needs at once: structural requirements, driver safety and ergonomics, weight, packaging, accessibility, manufacturability, and competition rules. Joint geometry and member placement affect both the design and the practical work of cutting, fitting, and assembling 4130 chromoly tubing.",
    results: "Chassis design and development are in progress. SolidWorks models and structural-analysis exploration support iteration; final fabrication, validation, and competition outcomes are not represented as complete.",
    contribution: "I lead chassis design and development, model the chassis and roll cage in SolidWorks, develop tubular members and joint geometry, coordinate with subteams, and work through driver-interface and manufacturing considerations. Team-wide vehicle outcomes remain shared work.",
    tools: ["SolidWorks", "4130 chromoly steel tubing", "Tubular member and joint design", "FEA exploration"],
    considerations: ["Roll cage geometry", "Primary and secondary structural members", "Tube notching and joint design", "Driver interface and ergonomics", "Component mounting and packaging", "Structural analysis", "Manufacturing and assembly", "Baja SAE technical requirements"],
    gallery: [
      { label: "Full chassis CAD assembly", caption: "Add a current SolidWorks chassis assembly screenshot.", alt: "Placeholder for the SRJC Baja SAE chassis CAD assembly", folder: "assets/images/baja/" },
      { label: "Chassis side and top views", caption: "Add orthographic views when ready to share.", alt: "Placeholder for Baja SAE chassis side and top views", folder: "assets/images/baja/" },
      { label: "Tube joint detail", caption: "Add a tube intersection or notching detail.", alt: "Placeholder for a Baja SAE chassis tube joint detail", folder: "assets/images/baja/" },
      { label: "Analysis or fabrication", caption: "Add an FEA study or physical build photograph when available.", alt: "Placeholder for Baja SAE analysis or fabrication documentation", folder: "assets/images/baja/" }
    ]
  },
  {
    id: "wave-energy",
    title: "Ocean Wave Energy Generator",
    shortTitle: "Wave energy generator",
    category: "Renewable Energy",
    tags: ["Renewable Energy", "Mechanical Design", "Manufacturing"],
    status: "Prototype",
    cardSummary: "A three-person SkillsUSA engineering project to design, fabricate, and test a small wave-powered generator prototype.",
    intro: "During my senior year of high school, I worked with a three-person SkillsUSA team to develop a small ocean wave energy generator. The physical prototype was tested in an ocean environment and generated enough electrical output to illuminate two LEDs.",
    what: "Create a small physical prototype intended to harness ocean wave motion and demonstrate conversion of that motion into electrical output.",
    how: "My primary responsibility was the mechanical design, fabrication, and assembly of the prototype. The team developed the device collaboratively and tested the assembled prototype in an ocean environment.",
    why: "The project needed to move beyond a concept and work as a physical system in a wave environment. Building and assembling a prototype made it possible to try the mechanical approach under real conditions.",
    results: "The prototype was tested in an ocean environment and generated enough electrical output to illuminate two LEDs. No power, efficiency, or other measured performance values are available to report.",
    contribution: "My primary contribution was mechanical design, fabrication, and assembly. This was a three-person team project; the outcome reflects collaborative work.",
    tools: ["Mechanical design", "Fabrication", "Mechanical assembly", "Physical prototype testing"],
    considerations: ["Translating wave motion into prototype movement", "Mechanical layout and assembly", "Outdoor ocean testing", "Working as a three-person engineering team"],
    gallery: [
      { label: "Prototype overview", caption: "Add an overall photograph of the generator prototype.", alt: "Placeholder for the wave energy generator prototype", folder: "assets/images/wave-energy/" },
      { label: "Mechanical design", caption: "Add a drawing or CAD model if available.", alt: "Placeholder for wave energy generator design documentation", folder: "assets/images/wave-energy/" },
      { label: "Ocean test", caption: "Add a project photograph from the ocean test.", alt: "Placeholder for ocean testing documentation", folder: "assets/images/wave-energy/" },
      { label: "Electrical demonstration", caption: "Add a photograph of the two illuminated LEDs.", alt: "Placeholder for the wave generator LED demonstration", folder: "assets/images/wave-energy/" }
    ]
  },
  {
    id: "sonoma-millworks",
    title: "Sonoma Millworks — Woodworking & Product Development",
    shortTitle: "Woodworking & product development",
    category: "Manufacturing",
    tags: ["Manufacturing", "Product Development"],
    status: "Work Experience",
    cardSummary: "Hands-on woodworking and manufacturing experience with physical materials, fabrication, framing, and product development.",
    intro: "My work at Sonoma Millworks has given me hands-on experience in woodworking, fabrication, framing, product development, and working with physical materials. The experience connects design decisions with making and assembly.",
    what: "Work in a woodworking and manufacturing environment, contributing to hands-on fabrication and product development. Specific products and project examples can be added when confirmed and ready to share.",
    how: "The experience involves working with physical materials and participating in woodworking, fabrication, framing, and assembly. Specific machinery, tools, and processes are left open until I can document them accurately.",
    why: "A design has to account for materials, measurement, assembly, and the steps required to make a physical product. Hands-on work helps me consider those factors while developing engineering concepts.",
    results: "This is ongoing work experience. Specific product outcomes and production details are not listed here.",
    contribution: "My experience includes woodworking, fabrication, product development, framing, and working with physical materials. Add project-specific contributions and product examples as they are confirmed.",
    tools: ["Woodworking and fabrication processes", "Physical materials", "Measurement and assembly — add specific details when confirmed"],
    considerations: ["Material properties", "Precision measurement", "Fabrication and assembly", "Design for practical production", "Problem-solving with physical materials"],
    gallery: [
      { label: "Project or product", caption: "Add a photograph of a project or product you can share.", alt: "Placeholder for a Sonoma Millworks product photograph", folder: "assets/images/sonoma-millworks/" },
      { label: "Fabrication detail", caption: "Add a detail showing materials or fabrication work.", alt: "Placeholder for a Sonoma Millworks fabrication detail", folder: "assets/images/sonoma-millworks/" }
    ]
  },
  {
    id: "tensile-tester",
    title: "Tensile Tester — Design & Fabrication",
    shortTitle: "Tensile tester",
    category: "Mechanical Design",
    tags: ["Mechanical Design", "Manufacturing", "CAD / FEA"],
    status: "Prototype",
    cardSummary: "A tensile testing machine I designed and built, with room to document its structure, setup, and future results.",
    intro: "I designed and built a tensile testing machine. This project brings together mechanical design, structural considerations, fabrication, and assembly.",
    what: "Design and build a machine for tensile testing and material characterization. Machine capacity, accuracy, specifications, and test results have not been provided and are not claimed here.",
    how: "I worked through the mechanical design and fabricated and assembled the machine. The page is ready for CAD, build documentation, testing setup, and results once those materials are available.",
    why: "A tensile tester needs a load path and structure suited to the forces involved, along with a practical way to mount and test a specimen. Design and structural decisions should be documented alongside the actual machine and test method.",
    results: "The machine has been designed and built. No load capacity, accuracy, or example material-test results are stated here.",
    contribution: "I designed and built the tensile testing machine. Add more detail about analysis, fabrication steps, and test procedures when available.",
    tools: ["Mechanical design", "Fabrication", "Mechanical assembly", "Material testing — add method and results when documented"],
    considerations: ["Machine structure and load path", "Specimen mounting", "Fabrication and assembly", "Testing setup and documentation"],
    gallery: [
      { label: "Machine CAD model", caption: "Add an overall CAD assembly or engineering drawing.", alt: "Placeholder for tensile tester CAD model", folder: "assets/images/tensile-tester/" },
      { label: "Fabrication", caption: "Add photographs of fabrication and assembly.", alt: "Placeholder for tensile tester fabrication photographs", folder: "assets/images/tensile-tester/" },
      { label: "Testing setup", caption: "Add a photograph of the specimen and testing setup.", alt: "Placeholder for tensile tester setup", folder: "assets/images/tensile-tester/" },
      { label: "Example results", caption: "Add a representative result only after the method and values are verified.", alt: "Placeholder for tensile test results", folder: "assets/images/tensile-tester/" }
    ]
  },
  {
    id: "pedal-box",
    title: "Pedal Box & Driver Interface Design",
    shortTitle: "Pedal box & driver interface",
    category: "Mechanical Design",
    tags: ["Mechanical Design", "CAD / FEA", "Product Development"],
    status: "Concept Development",
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
    status: "Completed",
    cardSummary: "A two-day elementary school lesson introducing simple machines through collaborative, student-built Rube Goldberg machines.",
    intro: "Working with a classmate, I have been helping reintroduce Rube Goldberg projects in local schools. We connected with previous mentors and a local school and helped organize a two-day lesson for a fourth-grade class.",
    what: "Plan an engaging introduction to simple machines that gives elementary students a chance to build their own Rube Goldberg machines.",
    how: "I worked collaboratively with a classmate, contacted previous mentors and a local school, and helped organize the two-day lesson. Students were introduced to simple machines and had an opportunity to build their own machines.",
    why: "A chain-reaction project gives students a hands-on way to explore mechanical interactions, sequencing, and creative problem-solving while communicating engineering ideas in an accessible way.",
    results: "A two-day lesson was organized with a fourth-grade class. No student identities or individual project outcomes are included here.",
    contribution: "I helped contact mentors and a local school and organize the lesson with a classmate. The outreach was collaborative work.",
    tools: ["Simple machines", "Lesson planning", "Collaborative project development", "Engineering communication"],
    considerations: ["Age-appropriate engineering concepts", "Hands-on construction", "Clear instructions", "Student privacy in any published photographs"],
    gallery: [
      { label: "Classroom setup", caption: "Add a classroom image only when publication permission is in place.", alt: "Placeholder for an approved classroom setup photograph", folder: "assets/images/rube-goldberg/" },
      { label: "Student-built machines", caption: "Use a non-identifying project photograph or diagram unless photo permissions are confirmed.", alt: "Placeholder for a non-identifying student project example", folder: "assets/images/rube-goldberg/" }
    ]
  }
];

window.PORTFOLIO_SKILLS = [
  { title: "CAD & engineering software", skills: [["SolidWorks", "Advanced student use"], ["Autodesk Inventor", "Level to confirm"], ["Finite element analysis", "Level to confirm"], ["Technical drawings", "Level to confirm"], ["3D & assembly modeling", "Level to confirm"]] },
  { title: "Manufacturing & fabrication", skills: [["Fabrication", "Level to confirm"], ["Tube notching", "Level to confirm"], ["Welding", "Level to confirm"], ["Woodworking", "Level to confirm"], ["Machining & prototyping", "Level to confirm"], ["Mechanical assembly", "Level to confirm"]] },
  { title: "Mechanical engineering", skills: [["Engineering design", "Level to confirm"], ["Statics & mechanics", "Coursework"], ["Material properties", "Level to confirm"], ["Structural design", "Level to confirm"], ["Design for manufacturing", "Level to confirm"], ["Driver ergonomics", "Level to confirm"]] },
  { title: "Communication & teamwork", skills: [["Technical communication", "Level to confirm"], ["Project coordination", "Level to confirm"], ["Team collaboration", "Level to confirm"], ["Engineering documentation", "Level to confirm"], ["Problem-solving", "Level to confirm"], ["Educational outreach", "Experience"]] }
];
