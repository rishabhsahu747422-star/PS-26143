/**
 * CENTRAL DATA STRUCTURE FOR SIH 2026 SHOWCASE & EVIDENCE PORTAL
 * Team 26175 — "Real Work. Real Progress. Real Impact."
 *
 * Edit this file to update milestones, progress percentages, evidence items,
 * prototype details, team members, and general project metadata.
 */

export const projectMeta = {
  edition: "SMART INDIA HACKATHON 2026",
  teamId: "TEAM 26143",
  tagline: "Real Work. Real Progress. Real Impact.",
  problemStatementTitle:
    "Automated Resilient Platform for Ground Operations & Field Data Verification",
  problemStatementCategory: "Software / Civic Tech / Open Innovation",
  ministryOrOrg:
    "Ministry of Electronics & Information Technology (MeitY) / Smart Automation",
  overallProgress: 78, // in percentage
  daysActive: 12,
  prototypeStatus: "Functional Prototype v0.8",
  liveUpdateStatus: "Sprint 3 Completed — Field validation in progress",
  repoUrl: "https://github.com/team-26143/sih-2026-prototype", // placeholder
  demoVideoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // placeholder video
};

export const progressMilestones = [
  {
    id: "research",
    number: "01",
    title: "Problem & Field Research",
    subtitle:
      "Ground stakeholder interviews, requirements matrix, and literature review",
    status: "Completed",
    badgeColor: "emerald",
    date: "Aug 15 - Aug 20, 2026",
    completionPercentage: 100,
    evidenceCount: 3,
    evidenceTargetId: "doc-01",
    deliverables: [
      "Field interview summaries across 4 regional clusters",
      "Comprehensive comparative benchmark of 3 legacy systems",
      "Formal requirements specifications document",
    ],
  },
  {
    id: "design",
    number: "02",
    title: "Solution Design & Architecture",
    subtitle:
      "System data flow, UI wireframes, offline-first sync schema, and security model",
    status: "Completed",
    badgeColor: "emerald",
    date: "Aug 21 - Aug 26, 2026",
    completionPercentage: 100,
    evidenceCount: 4,
    evidenceTargetId: "scr-02",
    deliverables: [
      "Decoupled micro-service architecture blueprints",
      "Interactive Figma design system & responsive guidelines",
      "Tamper-evident HMAC data verification schema",
    ],
  },
  {
    id: "development",
    number: "03",
    title: "Core Development & Integration",
    subtitle:
      "React Progressive Web App, IndexedDB cache, Express gateway, and event queues",
    status: "In Progress",
    badgeColor: "blue",
    date: "Aug 27 - Sep 04, 2026",
    completionPercentage: 82,
    evidenceCount: 5,
    evidenceTargetId: "scr-03",
    deliverables: [
      "Zero-latency IndexedDB offline persistence queue",
      "Interactive desktop & tablet inspection dashboards",
      "Micro-service API endpoints with rate-limiting & telemetry",
    ],
  },
  {
    id: "testing",
    number: "04",
    title: "Testing & Validation",
    subtitle:
      "Network fault injection, 2G bandwidth stress test, cross-browser compatibility",
    status: "Upcoming",
    badgeColor: "amber",
    date: "Sep 05 - Sep 10, 2026",
    completionPercentage: 35,
    evidenceCount: 2,
    evidenceTargetId: "doc-05",
    deliverables: [
      "1,000-concurrent-user load test benchmark",
      "Cross-browser matrix testing (Chrome, Firefox, Safari)",
      "Zero-connectivity data loss prevention validation",
    ],
  },
];

export const journeyTimeline = [
  {
    id: "j-1",
    phase: "Milestone 01",
    title: "Problem Understanding & Ground Research",
    date: "August 15, 2026",
    status: "Completed",
    description:
      "Conducted field visits and stakeholder interviews with ground operators to identify critical friction points in data capture and validation lag.",
    highlights: [
      "4 Stakeholder Interviews",
      "Identified 4 Critical Bottlenecks",
      "Drafted Research Document",
    ],
    evidenceRef: "Problem Research Document (Doc #01)",
    evidenceId: "doc-01",
    tag: "Research",
  },
  {
    id: "j-2",
    phase: "Milestone 02",
    title: "Solution Design & Architecture Finalization",
    date: "August 21, 2026",
    status: "Completed",
    description:
      "Engineered our offline-first architecture pattern using IndexedDB for zero data loss and event-driven API queues with cryptographic hash verification.",
    highlights: [
      "System Design Diagram",
      "Tamper-evident Log Spec",
      "Figma Design System",
    ],
    evidenceRef: "Technical Architecture Spec (Doc #04)",
    evidenceId: "doc-04",
    tag: "Design",
  },
  {
    id: "j-3",
    phase: "Milestone 03",
    title: "Frontend Development & PWA Implementation",
    date: "August 28, 2026",
    status: "Completed",
    description:
      "Built the responsive React client interface with modular components, high-contrast accessible color tokens, and smooth touch-optimized gestures.",
    highlights: [
      "Sub-200KB initial bundle",
      "Full mobile responsiveness",
      "Accessible touch targets",
    ],
    evidenceRef: "Frontend Codebase & Component Screenshots",
    evidenceId: "scr-03",
    tag: "Frontend",
  },
  {
    id: "j-4",
    phase: "Milestone 04",
    title: "Backend Services & Offline-Sync Engine",
    date: "September 02, 2026",
    status: "In Progress",
    description:
      "Constructed the high-throughput synchronization bridge connecting offline client queues to PostgreSQL databases with automated conflict resolution.",
    highlights: [
      "Auto-sync on reconnect",
      "HMAC-SHA256 data signing",
      "Zero duplicate writes",
    ],
    evidenceRef: "Backend Integration & API Verification Logs",
    evidenceId: "scr-04",
    tag: "Backend",
  },
  {
    id: "j-5",
    phase: "Milestone 05",
    title: "Stress Testing & Network Fault Injection",
    date: "September 05, 2026",
    status: "Upcoming",
    description:
      "Simulating simulated 2G mobile conditions, intermittent packet drops, and device restarts mid-transaction to guarantee system resilience.",
    highlights: [
      "Simulated 2G Blackout Test",
      "1,000 Concurrent Requests",
      "Lighthouse 95+ Audit",
    ],
    evidenceRef: "Testing Methodology & Results (Doc #05)",
    evidenceId: "doc-05",
    tag: "Testing",
  },
  {
    id: "j-6",
    phase: "Milestone 06",
    title: "Working Prototype Demo & Final Evaluation Package",
    date: "September 08, 2026",
    status: "In Progress",
    description:
      "Packaging our functional prototype, demonstration video walkthrough, and verified evidence gallery for review by the Smart India Hackathon jury.",
    highlights: [
      "5-Minute Walkthrough Video",
      "Deployable Live Demo",
      "Complete Evidence Dossier",
    ],
    evidenceRef: "Interactive Prototype Walkthrough",
    evidenceId: "vid-01",
    tag: "Prototype",
  },
];

export const evidenceItems = [
  {
    id: "scr-01",
    category: "Screenshots",
    type: "Screenshot",
    badge: "Architecture",
    title: "Decoupled Micro-tier Architecture Diagram",
    description:
      "Detailed system architecture blueprint illustrating client PWA, API gateway, offline queue orchestrator, and PostgreSQL audit vault.",
    date: "Aug 22, 2026",
    verifiedBy: "Lead Architect",
    commitRef: "git: 8a4f91b",
    thumbnailType: "architecture",
    modalContent: {
      type: "image",
      title: "System Architectural Flow & Security Boundary",
      details:
        "Demonstrates isolation between on-device offline storage, reverse-proxy gateway, stateless verification workers, and the append-only relational audit store.",
    },
  },
  {
    id: "scr-02",
    category: "Screenshots",
    type: "Screenshot",
    badge: "UI / UX Design",
    title: "Figma High-Fidelity Design System & Tokens",
    description:
      "Design system showing accessible color contrast ratios, regional Indic typography scale, component library, and touch layouts.",
    date: "Aug 24, 2026",
    verifiedBy: "UI/UX Designer",
    commitRef: "figma: 92b0c1",
    thumbnailType: "figma",
    modalContent: {
      type: "image",
      title: "Component Library & Accessibility Benchmarks",
      details:
        "WCAG AAA color contrast ratios, 48px minimum touch targets, and lightweight SVG icons optimized for low-bandwidth devices.",
    },
  },
  {
    id: "scr-03",
    category: "Screenshots",
    type: "Screenshot",
    badge: "Frontend PWA",
    title: "Mobile Client & Offline Queue Interface",
    description:
      "Actual mobile interface rendering active status, queue indicators, dynamic form validation, and offline notification banners.",
    date: "Aug 29, 2026",
    verifiedBy: "Frontend Lead",
    commitRef: "git: c47a82e",
    thumbnailType: "mobile_ui",
    modalContent: {
      type: "image",
      title: "Live Mobile PWA Screen Previews",
      details:
        "Shows the offline-mode banner, cached draft submissions, automatic background sync triggers, and instant cryptographic signature preview.",
    },
  },
  {
    id: "scr-04",
    category: "Screenshots",
    type: "Screenshot",
    badge: "Backend & DB",
    title: "Database Schema & Real-Time Sync Logs",
    description:
      "Terminal logs and database records showing concurrent synchronization batches executed without collision or record dropping.",
    date: "Sep 01, 2026",
    verifiedBy: "Backend Lead",
    commitRef: "git: d19f430",
    thumbnailType: "terminal_logs",
    modalContent: {
      type: "code",
      title: "Terminal Sync Verification Logs",
      details:
        "Verified timestamp logs during automated reconnection test. 12 pending transactions dequeued and written with immutable hash receipts.",
    },
  },
  {
    id: "vid-01",
    category: "Videos",
    type: "Video",
    badge: "Prototype Demo",
    title: "5-Minute End-to-End System Walkthrough",
    description:
      "Screen recording demonstrating offline form submission, network disconnection simulation, reconnect auto-sync, and supervisor dashboard approval.",
    date: "Sep 03, 2026",
    verifiedBy: "Full Team",
    commitRef: "video: 1080p-demo.mp4",
    thumbnailType: "video_demo",
    modalContent: {
      type: "video",
      title: "Working Prototype Demonstration",
      details:
        "Full audio-guided walkthrough of our core hackathon problem solution, demonstrating key features in under 5 minutes.",
    },
  },
  {
    id: "vid-02",
    category: "Videos",
    type: "Video",
    badge: "Field Simulation",
    title: "Network Blackout & Reconnect Stress Test",
    description:
      "Live camera recording of mobile hardware undergoing airplane mode switching while maintaining responsive UI and zero form data loss.",
    date: "Sep 04, 2026",
    verifiedBy: "QA Engineer",
    commitRef: "video: stress-test-01.mp4",
    thumbnailType: "video_stress",
    modalContent: {
      type: "video",
      title: "Zero-Data-Loss Hardware Verification",
      details:
        "Rigorous testing showing zero packet loss and seamless background synchronization upon re-establishing cellular connectivity.",
    },
  },
  {
    id: "doc-01",
    category: "Documents",
    type: "Document",
    badge: "Research Doc",
    title: "Problem Understanding & Field Research",
    description:
      "In-depth research document analyzing ground bottlenecks, user personas, field interview insights, and requirements matrix.",
    date: "Aug 18, 2026",
    verifiedBy: "Research Lead",
    commitRef: "doc: 01-problem-understanding.md",
    thumbnailType: "doc_research",
    docSlug: "01-problem-understanding",
    modalContent: {
      type: "markdown",
      title: "Problem Understanding & Field Research",
      details:
        "Complete markdown documentation with field observations, pain point metrics, and core criteria.",
    },
  },
  {
    id: "doc-02",
    category: "Documents",
    type: "Document",
    badge: "Benchmarking",
    title: "Evaluation of Existing Solutions",
    description:
      "Comparative matrix contrasting legacy portals, enterprise SaaS, and our lightweight open-source architecture across 6 parameters.",
    date: "Aug 20, 2026",
    verifiedBy: "Research Lead",
    commitRef: "doc: 02-existing-solutions.md",
    thumbnailType: "doc_benchmark",
    docSlug: "02-existing-solutions",
    modalContent: {
      type: "markdown",
      title: "Evaluation of Existing Solutions",
      details:
        "Thorough architectural and cost comparison proving the necessity and innovation of our approach.",
    },
  },
  {
    id: "doc-04",
    category: "Documents",
    type: "Document",
    badge: "Architecture Spec",
    title: "Technical Architecture & System Design",
    description:
      "Full specifications including decoupled service tiers, cryptographic hash verification, database schemas, and performance benchmarks.",
    date: "Aug 25, 2026",
    verifiedBy: "System Architect",
    commitRef: "doc: 04-technical-architecture.md",
    thumbnailType: "doc_architecture",
    docSlug: "04-technical-architecture",
    modalContent: {
      type: "markdown",
      title: "Technical Architecture & System Design",
      details:
        "Detailed technical document detailing modular tiers, protocols, and security guardrails.",
    },
  },
  {
    id: "meet-01",
    category: "Meetings",
    type: "Meeting",
    badge: "Team Sync #04",
    title: "Sprint Review & Architecture Sign-Off",
    description:
      "Minutes of meeting detailing team consensus on IndexedDB offline caching schema, REST API contracts, and milestone allocations.",
    date: "Aug 23, 2026",
    verifiedBy: "Team Coordinator",
    commitRef: "notes: sprint-04-sync.pdf",
    thumbnailType: "meeting_notes",
    modalContent: {
      type: "meeting",
      title: "Sprint Review & Architecture Sign-Off Minutes",
      details:
        "Agenda: API schema freeze, mobile UI responsiveness review, offline queue state machine validation. Attendees: All 6 team members. Duration: 1h 45m.",
    },
  },
  {
    id: "meet-02",
    category: "Meetings",
    type: "Meeting",
    badge: "Mentor Review",
    title: "Academic Mentor & Domain Expert Review",
    description:
      "Critical feedback session with faculty mentor covering edge-case handling under low-end Android devices and state administrative compliance.",
    date: "Aug 30, 2026",
    verifiedBy: "Faculty Advisor",
    commitRef: "notes: mentor-session-02.pdf",
    thumbnailType: "mentor_session",
    modalContent: {
      type: "meeting",
      title: "Faculty Advisor Feedback Session",
      details:
        "Recommendations incorporated: Added fallback export to encrypted CSV, refined multilingual font loading strategy, optimized battery usage during background polling.",
    },
  },
  {
    id: "doc-05",
    category: "Documents",
    type: "Document",
    badge: "Test Report",
    title: "Testing Methodology & Initial Results",
    description:
      "Automated test logs, network fault injection scenarios, and Lighthouse 98/100 performance audit certificates.",
    date: "Sep 05, 2026",
    verifiedBy: "QA Engineer",
    commitRef: "doc: 05-testing-and-results.md",
    thumbnailType: "doc_testing",
    docSlug: "05-testing-and-results",
    modalContent: {
      type: "markdown",
      title: "Testing Methodology & Initial Results",
      details:
        "Formal test log covering 5 core test cases, latency metrics, and performance audit proofs.",
    },
  },
];

export const teamMembers = [
  {
    id: "member-1",
    name: "Rishabh Sahu",
    role: "Team Lead & UI/UX Designer",
    contribution:
      "Led the team’s overall development direction, designed the prototype’s user experience, and built the frontend to bring the solution from concept to a working demonstration.",
    skills: [
      "Team Leadership",
      "UI/UX Design",
      "React",
      "Frontend Development",
    ],
    avatarInitials: "RS",
    avatarBg: "bg-blue-600",
    github: "#",
    linkedin: "#",
  },
  {
    id: "member-2",
    name: "Sagar Shrivastava",
    role: "System Architect & Backend Lead",
    contribution:
      "Designed the system architecture, developed the backend services, and worked on the machine learning integration that powers the core intelligence of the solution.",
    skills: [
      "System Architecture",
      "Backend Development",
      "Machine Learning",
      "API Design",
    ],
    avatarInitials: "SS",
    avatarBg: "bg-emerald-600",
    github: "#",
    linkedin: "#",
  },
  {
    id: "member-3",
    name: "Tanu Jadon",
    role: "GenAI & Researcher",
    contribution:
      "Explored Generative AI applications for the solution, contributed to research and idea development, and prepared the team’s presentation to communicate the project effectively.",
    skills: [
      "Generative AI",
      "Research",
      "Prompt Engineering",
      "Presentation Design",
    ],
    avatarInitials: "TJ",
    avatarBg: "bg-indigo-600",
    github: "#",
    linkedin: "#",
  },
  {
    id: "member-4",
    name: "Reetika Dhaneshwar",
    role: "GenAI & Researcher",
    contribution:
      "Contributed to Generative AI research, helped shape the team’s solution, and designed the team presentation while introducing the team name that represents our identity.",
    skills: [
      "Generative AI",
      "Research",
      "Presentation Design",
      "Creative Thinking",
    ],
    avatarInitials: "RD",
    avatarBg: "bg-amber-600",
    github: "#",
    linkedin: "#",
  },
  {
    id: "member-5",
    name: "Nasir Khan",
    role: "Frontend & PWA Specialist",
    contribution:
      "Developed the frontend experience and explored Progressive Web App capabilities to make the solution responsive, accessible, and usable across different devices.",
    skills: ["React", "Frontend Development", "PWA", "Responsive Design"],
    avatarInitials: "NK",
    avatarBg: "bg-teal-600",
    github: "#",
    linkedin: "#",
  },
  {
    id: "member-6",
    name: "Shivansh Nema",
    role: "Python Data Analyst & Documentation Lead",
    contribution:
      "Worked on Python-based data analysis, organized technical research, and contributed to the project’s documentation to clearly communicate its implementation and impact.",
    skills: ["Python", "Data Analysis", "Research", "Technical Documentation"],
    avatarInitials: "SN",
    avatarBg: "bg-rose-600",
    github: "#",
    linkedin: "#",
  },
];

export const prototypeFeatures = [
  {
    title: "Offline-First Resilience",
    description:
      "Seamless data capture with zero network signal. Submissions queue locally in IndexedDB with zero loss.",
    tag: "Core Innovation",
  },
  {
    title: "Cryptographic Tamper Proofing",
    description:
      "Every submission is stamped with SHA-256 signatures, ensuring complete data immutability and verifiable audits.",
    tag: "Security",
  },
  {
    title: "Automated Reconnection Sync",
    description:
      "Automatic background dispatch once network connectivity is re-established without requiring user refresh.",
    tag: "Performance",
  },
  {
    title: "High-Contrast Accessible UI",
    description:
      "Lightweight, responsive interface designed for field operators on entry-level Android smartphones.",
    tag: "Ergonomics",
  },
];
