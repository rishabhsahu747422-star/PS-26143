# SIH 2026 | Team 26175 — Project Showcase & Evidence Portal

> **"Real Work. Real Progress. Real Impact."**  
> Public-facing project showcase and evidence portal for **Smart India Hackathon 2026** (Team 26175).

---

## 🎯 Purpose of this Portal

This website is a **separate public-facing evidence portal** designed specifically for SIH judges and evaluators. It is placed in your SIH presentation slide deck as a live link so evaluators can inspect:
- 📖 **In-depth Research Documentation** (rendered natively from local Markdown files)
- 🚀 **Development Timeline & Journey** with verifiable milestone proofs
- 🛡️ **Evidence Gallery** with filterable screenshots, videos, documents, and meeting minutes
- 💻 **Working Prototype Section** with video walkthrough and an interactive offline-sync simulator
- 👥 **Team Roster & Contributions**

---

## 🛠️ Tech Stack

- **React 18 + Vite** (Fast, modern, zero backend or database required)
- **JavaScript Only** (Clean, maintainable, no TypeScript overhead)
- **Tailwind CSS** (Custom palette: Slate `#0F172A`, Tech Blue `#2563EB`, Saffron `#FF9933`, India Green `#138808`)
- **React Markdown + Remark GFM** (Renders local `.md` whitepapers with tables, code blocks, and callouts)
- **Lucide Icons** (Clean, lightweight vector iconography)
- **Vercel Ready** (Pre-configured for instant zero-config static deployment)

---

## 🚀 Quick Start (Run Locally)

```bash
# 1. Navigate to project directory
cd sih-2026-showcase

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Open `http://localhost:5173` (or the port displayed in your terminal) in your browser.

---

## 🏗️ Production Build

To test the production build locally:

```bash
npm run build
npm run preview
```

The compiled static assets are located in `/dist` and are completely self-contained.

---

## ✏️ How to Edit Content (Zero React Knowledge Required)

### 1. Central Project Data (`src/data/projectData.js`)
Every milestone date, team member bio, progress percentage, and evidence card is managed in:
👉 **[`src/data/projectData.js`](./src/data/projectData.js)**

You can update:
- `projectMeta`: Problem statement title, ministry name, overall progress %
- `progressMilestones`: Milestone statuses (`Completed`, `In Progress`, `Upcoming`), dates, deliverables
- `journeyTimeline`: Milestone highlights, dates, descriptions
- `evidenceItems`: Proof cards, screenshots, video metadata, commit references
- `teamMembers`: Names, roles, contributions, and avatars

### 2. Research & Documentation Files (`src/content/`)
Markdown files are automatically loaded and rendered into professional whitepapers with Table of Contents:
- [`01-problem-understanding.md`](./src/content/01-problem-understanding.md)
- [`02-existing-solutions.md`](./src/content/02-existing-solutions.md)
- [`03-proposed-solution.md`](./src/content/03-proposed-solution.md)
- [`04-technical-architecture.md`](./src/content/04-technical-architecture.md)
- [`05-testing-and-results.md`](./src/content/05-testing-and-results.md)
- [`06-future-scope.md`](./src/content/06-future-scope.md)

Simply open any of these `.md` files and write regular Markdown. It instantly updates on the site!

### 3. Adding Your Images, Videos & PDFs
Drop your actual assets into the corresponding folder inside `/public`:
- `/public/evidence/` — Screenshots and architecture diagrams
- `/public/videos/` — Prototype demo videos (or link a YouTube URL in `projectData.js`)
- `/public/documents/` — Supplementary PDF reports or slide decks
- `/public/images/` — Team photos and logos

---

## 🌐 Deploying to Vercel (Manual Deployment)

Deploying this static site to Vercel is free, fast, and takes under 2 minutes:

### Option A: Via GitHub (Recommended)
1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of SIH 2026 Evidence Portal"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/sih-2026-showcase.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New..."** → **"Project"**.
4. Select your GitHub repository.
5. Framework Preset will automatically detect **Vite**.
6. Click **Deploy**. Vercel will build and give you your live URL (e.g., `https://sih-team26175.vercel.app`).

### Option B: Via Vercel CLI
```bash
npm install -g vercel
vercel
```
Follow the interactive prompts (select default settings) to deploy immediately.

---

## 🏛️ Color Palette Reference

| Role | Color | Hex Code |
|:---|:---|:---:|
| Background | Soft Off-White | `#F8FAFC` |
| Typography | Deep Slate | `#0F172A` |
| Primary Accent | Tech Blue | `#2563EB` |
| Highlight Light | Light Blue | `#EFF6FF` |
| Subtle Accent 1 | Saffron | `#FF9933` |
| Subtle Accent 2 | India Green | `#138808` |
| Borders | Slate Border | `#E2E8F0` |
