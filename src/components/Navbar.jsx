import React, { useState } from "react";
import { projectMeta } from "../data/projectData";
import { Menu, X, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";
import sih from "../assets/image.png";

export default function Navbar({ onOpenDoc, activeSection, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Evidence", href: "#evidence" },
    { name: "Prototype", href: "#prototype" },
    { name: "Team", href: "#team" },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(href.replace("#", ""));
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-borderSlate shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Left: Branding & Team ID */}
          <div className="flex items-center space-x-3">
            <a
              href="#"
              className="group flex items-center space-x-3 text-mainText hover:opacity-90 transition-opacity"
            >
              {/* Emblem / Badge */}
              <div className=" rounded-lg bg-white flex items-center justify-center group-hover:border-primaryBlue transition-colors">
                <div className="flex flex-col items-center justify-center">
                  <img src={sih} alt="" className="h-14 w-14" />
                </div>
              </div>

              {/* Text Identity */}
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-extrabold tracking-tight text-slate-900">
                    SIH 2026
                  </span>
                  <span className="text-slate-300 font-light">|</span>
                  <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-blue-50 text-primaryBlue border border-blue-200/60 tracking-wider">
                    {projectMeta.teamId}
                  </span>
                </div>
                <span className="text-[11px] font-medium text-slate-700 tracking-tight">
                  Evidence &amp; Showcase Portal
                </span>
              </div>
            </a>
          </div>

          {/* Center Navigation (Desktop) */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-600 hover:text-primaryBlue hover:bg-lightBlue rounded-md transition-colors"
              >
                {item.name}
              </a>
            ))}

            {/* Research Docs Quick Action */}
            <button
              onClick={() => onOpenDoc && onOpenDoc("01-problem-understanding")}
              className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 rounded-md border border-slate-200 transition-colors flex items-center space-x-1.5 ml-2"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-primaryBlue" />
              <span>Research Docs</span>
            </button>
          </nav>

          {/* Right: Live Updates Badge */}
          <div className="hidden sm:flex items-center space-x-3">
            <div
              title="Verified live progress feed from Team 26175"
              className="flex items-center space-x-2 px-3 py-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full text-xs font-semibold tracking-wide shadow-2xs"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-live-pulse"></span>
              <span className="tracking-wide uppercase text-[11px]">
                Live Updates
              </span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <div className="flex items-center space-x-1 px-2.5 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full text-[10px] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-live-pulse"></span>
              <span>LIVE</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Subtle Saffron-White-Green Tricolor Accent Line */}
      <div className="h-[2px] w-full flex">
        <div className="h-full w-1/3 bg-saffron opacity-85"></div>
        <div className="h-full w-1/3 bg-white opacity-40"></div>
        <div className="h-full w-1/3 bg-indiaGreen opacity-85"></div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-borderSlate px-4 pt-3 pb-5 space-y-2 shadow-lg">
          <div className="text-xs font-semibold text-slate-600 uppercase tracking-wider px-3 pb-1">
            Navigation
          </div>
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-primaryBlue hover:bg-lightBlue rounded-md"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDoc && onOpenDoc("01-problem-understanding");
              }}
              className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-primaryBlue bg-blue-50 rounded-lg border border-blue-200"
            >
              <span className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-primaryBlue" />
                <span>Read Research &amp; Docs</span>
              </span>
              <span>→</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
