/**
 * Research Documents loader for SIH 2026 Showcase
 * Loads local markdown files using Vite ?raw import
 */

import docProblem from '../content/01-problem-understanding.md?raw';
import docExisting from '../content/02-existing-solutions.md?raw';
import docProposed from '../content/03-proposed-solution.md?raw';
import docArchitecture from '../content/04-technical-architecture.md?raw';
import docTesting from '../content/05-testing-and-results.md?raw';
import docFuture from '../content/06-future-scope.md?raw';

export const researchDocs = [
  {
    id: "01-problem-understanding",
    order: 1,
    title: "Problem Understanding & Field Research",
    shortTitle: "Problem Understanding",
    category: "Field Research",
    readTime: "4 min read",
    status: "Verified",
    date: "Aug 18, 2026",
    content: docProblem,
    summary: "Ground analysis, user pain points across 4 stakeholder categories, and verified core requirements."
  },
  {
    id: "02-existing-solutions",
    order: 2,
    title: "Evaluation of Existing Solutions",
    shortTitle: "Existing Solutions",
    category: "Benchmarking",
    readTime: "5 min read",
    status: "Verified",
    date: "Aug 20, 2026",
    content: docExisting,
    summary: "Comparative audit between legacy systems, enterprise SaaS, and our open-source offline architecture."
  },
  {
    id: "03-proposed-solution",
    order: 3,
    title: "Proposed Solution & Functional Blueprint",
    shortTitle: "Proposed Solution",
    category: "Blueprint",
    readTime: "4 min read",
    status: "Verified",
    date: "Aug 22, 2026",
    content: docProposed,
    summary: "High-level vision, core architectural pillars, end-to-end user journey, and verified impact targets."
  },
  {
    id: "04-technical-architecture",
    order: 4,
    title: "Technical Architecture & System Design",
    shortTitle: "Technical Architecture",
    category: "Engineering Spec",
    readTime: "6 min read",
    status: "Verified",
    date: "Aug 25, 2026",
    content: docArchitecture,
    summary: "Decoupled micro-service tiers, cryptographic data verification, database schemas, and performance benchmarks."
  },
  {
    id: "05-testing-and-results",
    order: 5,
    title: "Testing Methodology & Initial Results",
    shortTitle: "Testing & Results",
    category: "Verification",
    readTime: "5 min read",
    status: "Verified",
    date: "Sep 05, 2026",
    content: docTesting,
    summary: "Automated test cases, network fault injection scenarios, and Lighthouse 98/100 performance audit results."
  },
  {
    id: "06-future-scope",
    order: 6,
    title: "Future Scope & National Rollout Roadmap",
    shortTitle: "Future Scope",
    category: "Strategic Plan",
    readTime: "4 min read",
    status: "Verified",
    date: "Sep 07, 2026",
    content: docFuture,
    summary: "Post-hackathon rollout phases, DigiLocker/Aadhaar integration roadmap, and sustainable maintenance model."
  }
];
