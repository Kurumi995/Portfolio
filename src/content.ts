export type Link = { label: string; href: string }

export type Project = {
  title: string
  description: string
  highlights: string[]
  tech: string[]
  category?: 'web' | 'unity'
  image?: {
    src: string
    alt: string
    href?: string
  }
  youtubeId?: string
  video?: {
    src: string
    poster?: string
  }
  links: {
    demo?: Link
    code?: Link
    video?: Link
  }
}

export type Experience = {
  company: string
  role: string
  location: string
  dates: string
  bullets: string[]
  tech?: string[]
}

export type Education = {
  school: string
  program: string
  dates: string
  details?: string[]
}

export const content = {
  profile: {
    name: 'Wen-Ching Chang',
    headline: 'Product-minded Full-Stack & Interactive Engineer',
    summary:
      'I build user-facing products and systems with a strong engineering foundation. My background spans full-stack web, interactive/AR prototypes, and low-level compiler and systems work, allowing me to ship end-to-end features with both performance and UX in mind.',
    location: 'Ann Arbor, MI · Open to relocation / remote',
    focus: 'Full-Stack · Interactive Systems · UX-aware Engineering',
    availability: 'Seeking full-time roles (2026)',
    email: 'cwching@umich.edu',
    highlights: [
      'Strong systems + product mindset',
      'End-to-end ownership',
      'Clear technical communication',
    ],
    bullets: [
      'Built and deployed full-stack applications with real-time interaction and server-authoritative logic.',
      'Experienced in performance-sensitive C/C++ systems through compiler and HLS research.',
      'Comfortable collaborating across engineering, design, and research contexts.',
    ],
  },

  links: {
    email: { label: 'Email', href: 'mailto:cwching@umich.edu' },
    website: { label: 'Website', href: 'https://your-domain.com' },
    github: { label: 'GitHub', href: 'https://github.com/kurumi995' },
    linkedin: {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/wen-ching-chang-902720360/',
    },
    resume: null,
  },

  education: [
    {
      school: 'University of Michigan',
      program: 'M.S. in Information',
      dates: 'Sep 2024 — May 2026',
      details: ['GPA: 3.9 / 4.0'],
    },
    {
      school: 'Shanghai Jiao Tong University',
      program: 'B.S. in Electrical and Computer Engineering',
      dates: 'Sep 2021 — Aug 2025',
      details: ['GPA: 3.6 / 4.0'],
    },
  ] satisfies Education[],

  about: {
    paragraph1:
      'I enjoy building products that feel intuitive while staying technically sound. I care about clean abstractions, predictable system behavior, and interfaces that reduce user friction.',
    paragraph2:
      'My work ranges from full-stack web apps and interactive prototypes to low-level compiler and HLS research, giving me a rare combination of product intuition and systems depth.',
    facts: [
      { k: 'Education', v: 'UMich · SJTU (ECE)' },
      { k: 'Background', v: 'Full-Stack + Systems / Compiler' },
      { k: 'Interests', v: 'Interactive systems, XR, performance' },
      { k: 'Languages', v: 'English · Chinese' },
    ],
  },

  research: [
    {
      title: 'CLAST: Cross-Layer Approximate HLS',
      description:
        'Research on approximate high-level synthesis using configurable three-operand adders to improve area–delay efficiency.',
      highlights: [
        'Prepared and evaluated image-processing benchmarks (FFT, filters, matrix ops)',
        'Compared against open-source HLS approaches',
        'Achieved ~57% area–delay product improvement',
      ],
      tech: ['LLVM', 'HLS', 'Verilog', 'Hardware-aware optimization'],
      image: {
        src: '/clast-date-2024.svg',
        alt: 'CLAST: Cross-Layer Approximate HLS (DATE 2024)',
        href: 'https://doi.org/10.23919/DATE58400.2024.10546611',
      },
      links: {
        demo: {
          label: 'Paper (DATE 2024)',
          href: 'https://doi.org/10.23919/DATE58400.2024.10546611',
        },
      },
    },
    {
      title: 'TDHLS: HLS Toolchain Development',
      description:
        'Extended an LLVM-based HLS flow with debugging, latency measurement, and automated RTL generation features.',
      highlights: [
        'Translated LLVM IR printf into Verilog $display',
        'Integrated RTL-level latency counters',
        'Reduced average latency by 98.5% on key benchmarks',
      ],
      tech: ['LLVM IR', 'C++', 'Verilog', 'Makefile'],
      image: {
        src: '/model3.png',
        alt: 'Model 3',
        href: '/23SU_VE490_Report_TDHLS.pdf',
      },
      links: {},
    },
  ] satisfies Project[],

  projects: [
    {
      title: 'Real-Time Multiplayer Wordle',
      description:
        'A real-time multiplayer Wordle web app with synchronized gameplay and server-authoritative logic.',
      highlights: [
        'Designed and implemented 14+ RESTful API endpoints',
        'Real-time room and state sync via Socket.IO',
        'JWT-based authentication and role-based access control',
      ],
      tech: ['React', 'Express', 'MongoDB', 'Socket.IO', 'GCP'],
      category: 'web',
      image: {
        src: '/wordle.png',
        alt: 'Real-Time Multiplayer Wordle',
        href: 'http://35.225.1.116:6790/',
      },
      links: {
        code: {
          label: 'Code',
          href: 'https://github.com/kurumi995/Wordle',
        },
      },
    },
    {
      title: 'Heart Garden – AI Emotional Support App',
      description:
        'A mobile app providing AI-assisted emotional support through guided interaction and progress tracking.',
      highlights: [
        'Built responsive UI flows with React Native and Expo',
        'Integrated OpenAI API with optimized system prompts',
        'Configured Firebase Auth, Firestore, and Storage',
      ],
      tech: ['React Native', 'Expo', 'OpenAI API', 'Firebase'],
      category: 'web',
      youtubeId: 'NLGeP4-j8Rg',
      links: {
        code: {
          label: 'Code',
          href: 'https://github.com/Kurumi995/HeartGarden',
        },
      },
    },
    {
      title: 'VR Earthquake Simulation Training System for Journalists',
      description:
        'A Unity-based VR training system that simulates earthquake scenarios to support journalist field training and decision-making.',
      highlights: [
        'Developed C# scripts for autonomous journalist and photographer character behaviors',
        'Designed device pack preparation workflow with object placement and position tracking',
        'Implemented wound bandaging interaction using trigger zones and gesture tracking',
      ],
      tech: ['Unity', 'C#', 'XR Interaction', 'VR'],
      category: 'unity',
      youtubeId: 'Zbyo0MhhswI',
      links: {},
    },
    {
      title: 'First-Person VR Shooting Range Game',
      description:
        'A first-person VR shooting range focused on immersive spatial design and responsive interaction.',
      highlights: [
        'Built a VR shooting range with immersive spatial layout and interactive flow',
        'Implemented controller-based aiming and shooting mechanics',
        'Integrated Meta XR SDK to improve interaction responsiveness and realism',
      ],
      tech: ['Unity', 'C#', 'Meta XR SDK', 'VR'],
      category: 'unity',
      youtubeId: '7SbzpdSTB_w',
      links: {},
    },        
    {
      title: 'VR Hollow Knight Redesign',
      description:
        'A VR interaction redesign inspired by Hollow Knight, providing responsive combat-style feedback to create a more immersive experience.',
      highlights: [
        'Supported continuous movement through controllers and hand tracking',
        'Designed normal attack and charged slash to provide different damage and animation',
        'Implemented light effect to simulate the exploration in dark environment that adds tension',
      ],
      tech: ['Unity', 'C#', 'Meta XR SDK', 'VR'],
      category: 'unity',
      youtubeId: 'DOszWHYhFpk',
      links: {},
    },        
    {
      title: 'VR Valorant Redesign Demo',
      description:
        'A VR interaction redesign inspired by Valorant, simulating the shooting and aiming mechanics of the game.',
      highlights: [
        'Built a site with immersive layout and interactive flow includes planting spikes and attacking the enemies',
        'Implemented controller-based aiming and shooting mechanics',
        'Simulated the explosion of the spike through particle system',
      ],
      tech: ['Unity', 'C#', 'Meta XR SDK', 'VR'],
      category: 'unity',
      youtubeId: 'TEApWfLtroo',
      links: {},
    },        
  ] satisfies Project[],

  experience: [
    {
      company: 'Ideatrix Cogn AI Lab Corp',
      role: 'Mobile App Design Intern',
      location: 'Allen, TX',
      dates: 'May 2025 — Aug 2025',
      bullets: [
        'Designed 30+ high-fidelity mobile UI screens in Figma and Unity.',
        'Improved design-to-development handoff and reduced clarification cycles.',
        'Reorganized and maintained company website using WordPress.',
      ],
      tech: ['Figma', 'Unity', 'WordPress', 'UI/UX Design'],
    },
    {
      company: 'Shanghai Taize Semiconductor',
      role: 'Compiler Development Intern',
      location: 'Shanghai, China',
      dates: 'Apr 2024 — Jun 2024',
      bullets: [
        'Enhanced LLVM backend in C++ for floating-point and vector computation.',
        'Implemented kernel-level code coverage instrumentation.',
        'Validated behavior with LLVM IR and CodeGen tests.',
      ],
      tech: ['C++', 'C', 'LLVM', 'Compiler', 'Performance'],
    },
    {
      company: 'Shanghai Happy Artisans Enterprise Co., Ltd.',
      role: 'Engineering Documentation Intern',
      location: 'Shanghai, China',
      dates: 'Mar 2024 — Apr 2024',
      bullets: [
        'Authored technical documentation for semiconductor wafer-processing equipment using LaTeX.',
        'Documented system-level workflows including startup/shutdown, wafer transfer, and alarm handling.',
        'Translated operational procedures into clear, maintainable engineering references.',
      ],
      tech: ['Semiconductor systems', 'LaTeX'],
    },    
    {
      company: 'Shanghai Jiao Tong University',
      role: 'Teaching Assistant of Programming & Data Structures',
      location: 'Shanghai, China',
      dates: 'Sep 2023 — Dec 2023',
      bullets: [
        'Supported lectures and lab sessions for programming courses.',
        'Maintained Online Judge system for automated grading.',
        'Led exercises on OOP, ADTs, and core CS concepts.',
      ],
      tech: ['C++', 'C', 'Algorithm', 'Data Structures'],
    },
  ] satisfies Experience[],

  skills: [
    {
      name: 'Languages',
      items: ['C', 'C++', 'C#', 'Python', 'JavaScript', 'Matlab', 'Elm'],
    },
    {
      name: 'Frontend',
      items: ['React', 'React Native', 'HTML', 'CSS'],
    },
    {
      name: 'Backend & Cloud',
      items: ['Node.js', 'Express', 'MongoDB', 'SQL', 'WebSocket', 'Firebase', 'GCP'],
    },
    {
      name: 'Systems & Tools',
      items: ['LLVM', 'Git', 'Linux', 'Jest'],
    },
    {
      name: 'Hardware',
      items: ['Verilog', 'Xilinx Vivado', 'RTL design', 'RTL verification'],
    },
    {
      name: 'Others',
      items: ['Figma', 'Unity', 'Meta XR SDK', 'Prototyping'],
    },
  ],

  contact: {
    note:
      'If you’re hiring for 2026 software engineering or interactive roles, I’d love to connect. Please include a brief note on the role and timeline.',
  },
}
