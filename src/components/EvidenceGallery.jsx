import React, { useState } from "react";
import { evidenceItems } from "../data/projectData";
import {
  Filter,
  Image as ImageIcon,
  Video,
  FileText,
  Users,
  ExternalLink,
  ArrowRight,
  Calendar,
  ShieldCheck,
  Play,
  Eye,
  BookOpen,
  CheckCircle,
  Terminal,
  Layers,
} from "lucide-react";

export default function EvidenceGallery({ onSelectProof, onOpenDoc }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Screenshots", "Videos", "Documents", "Meetings"];

  const filteredItems =
    activeFilter === "All"
      ? evidenceItems
      : evidenceItems.filter((item) => item.category === activeFilter);

  // Helper to render realistic thumbnail representations for each proof type
  const renderThumbnail = (item) => {
    switch (item.thumbnailType) {
      case "architecture":
        return (
          <div className="w-full h-44 bg-slate-900 p-3.5 flex flex-col justify-between text-white font-mono text-[10px] relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
            <div className="flex justify-between items-center text-slate-600 border-b border-slate-800 pb-1.5">
              <span className="flex items-center space-x-1">
                <Layers className="w-3 h-3 text-blue-400" />
                <span>arch_blueprint_v2.svg</span>
              </span>
              <span className="text-emerald-400 text-[9px]">TIER-ISOLATED</span>
            </div>

            {/* Schematic visual */}
            <div className="grid grid-cols-3 gap-2 py-2">
              <div className="border border-blue-500/40 bg-blue-950/40 rounded p-1.5 text-center">
                <div className="text-blue-300 font-bold text-[9px]">CLIENT</div>
                <div className="text-[8px] text-slate-600">IndexedDB</div>
              </div>
              <div className="border border-amber-500/40 bg-amber-950/40 rounded p-1.5 text-center">
                <div className="text-amber-300 font-bold text-[9px]">
                  GATEWAY
                </div>
                <div className="text-[8px] text-slate-600">Reverse Proxy</div>
              </div>
              <div className="border border-emerald-500/40 bg-emerald-950/40 rounded p-1.5 text-center">
                <div className="text-emerald-300 font-bold text-[9px]">
                  STORAGE
                </div>
                <div className="text-[8px] text-slate-600">PostgreSQL</div>
              </div>
            </div>

            <div className="flex justify-between items-center text-[9px] text-slate-600">
              <span>SHA-256 Validated</span>
              <span className="text-blue-400">Click to expand</span>
            </div>
          </div>
        );

      case "figma":
        return (
          <div className="w-full h-44 bg-slate-100 p-3.5 flex flex-col justify-between text-slate-800 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300 border-b border-slate-200">
            <div className="flex justify-between items-center pb-1 border-b border-slate-200">
              <span className="text-[10px] font-semibold text-slate-600">
                Figma Design System
              </span>
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-purple-100 text-purple-700">
                WCAG AAA
              </span>
            </div>
            {/* Color swatches & typography preview */}
            <div className="space-y-2 py-2">
              <div className="flex space-x-1.5">
                <div className="w-7 h-7 rounded bg-[#2563EB] shadow-xs flex items-center justify-center text-[8px] text-white font-mono">
                  #25
                </div>
                <div className="w-7 h-7 rounded bg-[#0F172A] shadow-xs flex items-center justify-center text-[8px] text-white font-mono">
                  #0F
                </div>
                <div className="w-7 h-7 rounded bg-[#FF9933] shadow-xs flex items-center justify-center text-[8px] text-white font-mono">
                  #FF
                </div>
                <div className="w-7 h-7 rounded bg-[#138808] shadow-xs flex items-center justify-center text-[8px] text-white font-mono">
                  #13
                </div>
              </div>
              <div className="space-y-1">
                <div className="h-2.5 w-3/4 bg-slate-300 rounded"></div>
                <div className="h-2 w-1/2 bg-slate-200 rounded"></div>
              </div>
            </div>
            <div className="text-[9px] text-slate-600 font-mono">
              Token file: theme.tokens.json
            </div>
          </div>
        );

      case "mobile_ui":
        return (
          <div className="w-full h-44 bg-gradient-to-b from-slate-900 to-slate-950 p-3 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
            <div className="w-48 bg-white rounded-lg p-2 shadow-lg border border-slate-700 text-slate-900 space-y-1.5">
              <div className="flex justify-between items-center text-[9px] font-bold text-slate-600 pb-1 border-b border-slate-100">
                <span className="text-primaryBlue">Field Operator Portal</span>
                <span className="text-emerald-600">● Online</span>
              </div>
              <div className="p-1.5 rounded bg-blue-50 text-[9px] text-blue-900 font-medium">
                Pending Sync: 0 (Synced 12)
              </div>
              <div className="h-2 w-full bg-slate-200 rounded"></div>
              <div className="h-2 w-4/5 bg-slate-200 rounded"></div>
            </div>
            <span className="absolute bottom-2 right-2 text-[9px] font-mono text-slate-600">
              PWA Viewport
            </span>
          </div>
        );

      case "terminal_logs":
        return (
          <div className="w-full h-44 bg-slate-950 p-3 flex flex-col justify-between font-mono text-[10px] text-emerald-400 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
            <div className="flex justify-between text-slate-600 text-[9px] border-b border-slate-800 pb-1">
              <span className="flex items-center space-x-1">
                <Terminal className="w-3 h-3 text-emerald-400" />
                <span>node index.js --verify</span>
              </span>
              <span className="text-emerald-400">200 OK</span>
            </div>
            <div className="space-y-1 py-1 text-slate-300 text-[10px]">
              <p className="text-slate-600">[DB] connection pool: 10 active</p>
              <p className="text-blue-400">[SYNC] batch id #0492 received</p>
              <p className="text-emerald-400">[VERIFY] hmac signature: match</p>
              <p className="text-slate-600">[AUDIT] wrote 12 rows in 42ms</p>
            </div>
            <div className="text-[9px] text-slate-600">
              Commit ref: git: d19f430
            </div>
          </div>
        );

      case "video_demo":
      case "video_stress":
        return (
          <div className="w-full h-44 bg-slate-900 relative overflow-hidden flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>

            {/* Video Play Button Icon */}
            <div className="w-12 h-12 rounded-full bg-primaryBlue/90 hover:bg-primaryBlue text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform z-20">
              <Play className="w-5 h-5 fill-white ml-0.5" />
            </div>

            <div className="absolute top-3 left-3 z-20">
              <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-[10px] font-mono text-white flex items-center space-x-1">
                <Video className="w-3 h-3 text-red-400" />
                <span>1080p HD Video</span>
              </span>
            </div>

            <div className="absolute bottom-2.5 left-3 right-3 z-20 flex justify-between items-center text-[10px] text-slate-300">
              <span className="font-medium truncate">
                Walkthrough Demonstration
              </span>
              <span className="font-mono bg-black/50 px-1.5 py-0.5 rounded">
                04:32
              </span>
            </div>
          </div>
        );

      case "doc_research":
      case "doc_benchmark":
      case "doc_architecture":
      case "doc_testing":
      default:
        return (
          <div className="w-full h-44 bg-slate-50 p-4 flex flex-col justify-between border-b border-slate-200 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
            <div className="flex justify-between items-start">
              <div className="w-8 h-8 rounded-md bg-blue-50 border border-blue-200 flex items-center justify-center text-primaryBlue">
                <FileText className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono bg-slate-200/80 text-slate-700 px-1.5 py-0.5 rounded">
                Markdown / PDF
              </span>
            </div>

            <div className="space-y-1.5">
              <div className="h-3 w-4/5 bg-slate-300 rounded"></div>
              <div className="h-2 w-full bg-slate-200 rounded"></div>
              <div className="h-2 w-2/3 bg-slate-200 rounded"></div>
            </div>

            <div className="flex justify-between items-center text-[10px] text-slate-600 font-medium">
              <span>Peer-Reviewed Doc</span>
              <span className="text-primaryBlue font-semibold flex items-center">
                Read Doc →
              </span>
            </div>
          </div>
        );
    }
  };

  const getBadgeStyle = (category) => {
    switch (category) {
      case "Screenshots":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Videos":
        return "bg-rose-50 text-rose-700 border-rose-200";
      case "Documents":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "Meetings":
        return "bg-amber-50 text-amber-700 border-amber-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  return (
    <section
      id="evidence"
      className="py-16 sm:py-24 bg-white border-b border-borderSlate"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-100 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-widest text-primaryBlue">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Evidence Repository</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-mainText tracking-tight">
              EVIDENCE GALLERY
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Real work. Real proof.
            </p>
          </div>

          {/* Research Docs Callout Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-between gap-4 max-w-md shadow-2xs">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-primaryBlue flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">
                  Research &amp; Specs Dossier
                </p>
                <p className="text-[11px] text-slate-700">
                  6 Local Markdown technical whitepapers
                </p>
              </div>
            </div>
            <button
              onClick={() => onOpenDoc && onOpenDoc("01-problem-understanding")}
              className="px-3 py-1.5 bg-primaryBlue hover:bg-primaryBlue-dark text-white text-xs font-semibold rounded-lg shadow-xs transition-colors shrink-0 flex items-center space-x-1"
            >
              <span>Read Research</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === cat
                  ? "bg-slate-900 text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
              }`}
            >
              {cat === "All" ? "All Proofs" : cat}
              <span
                className={`ml-1.5 px-1.5 py-0.2 rounded-full text-[10px] ${
                  activeFilter === cat
                    ? "bg-slate-700 text-slate-200"
                    : "bg-slate-200 text-slate-600"
                }`}
              >
                {cat === "All"
                  ? evidenceItems.length
                  : evidenceItems.filter((i) => i.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        {/* Evidence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl border border-borderSlate overflow-hidden shadow-2xs hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div
                className="cursor-pointer overflow-hidden relative"
                onClick={() => {
                  if (item.docSlug && onOpenDoc) {
                    onOpenDoc(item.docSlug);
                  } else {
                    onSelectProof(item);
                  }
                }}
              >
                {renderThumbnail(item)}
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${getBadgeStyle(item.category)}`}
                    >
                      {item.badge}
                    </span>
                    <span className="text-[11px] text-slate-600 flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{item.date}</span>
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-primaryBlue transition-colors line-clamp-1">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-slate-600">
                    {item.commitRef}
                  </span>

                  <div className="flex space-x-2">
                    {item.docSlug && (
                      <button
                        onClick={() => onOpenDoc && onOpenDoc(item.docSlug)}
                        className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition-colors flex items-center space-x-1"
                      >
                        <BookOpen className="w-3 h-3" />
                        <span>Doc</span>
                      </button>
                    )}

                    <button
                      onClick={() => onSelectProof(item)}
                      className="px-3 py-1.5 cursor-pointer bg-blue-50  text-primaryBlue  text-xs font-semibold rounded-md border  transition-all flex items-center space-x-1"
                    >
                      <span>View Proof</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Notice on Proof Integrity */}
        <div className="mt-12 text-center text-xs text-slate-700 bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-2xl mx-auto flex items-center justify-center space-x-2">
          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            Every piece of evidence links to verifiable local source code
            commits, meeting minutes, and research markdown documents.
          </span>
        </div>
      </div>
    </section>
  );
}
