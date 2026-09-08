import React from 'react';
import { projectMeta } from '../data/projectData';
import { ShieldCheck, Heart, ExternalLink, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenDoc, onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-borderSlate text-slate-600">
      
      {/* Subtle Saffron-White-Green Tricolor Accent Line at top of Footer */}
      <div className="h-[2px] w-full flex">
        <div className="h-full w-1/3 bg-saffron opacity-80"></div>
        <div className="h-full w-1/3 bg-slate-200 opacity-60"></div>
        <div className="h-full w-1/3 bg-indiaGreen opacity-80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Col 1: Branding & Tagline */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center">
                <span className="text-xs font-bold text-blue-400">SIH</span>
              </div>
              <span className="text-base font-extrabold text-slate-900 tracking-tight">
                {projectMeta.teamId}
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-xs font-semibold text-slate-700">
                {projectMeta.edition}
              </span>
            </div>

            <p className="text-lg font-extrabold text-slate-900 tracking-tight">
              "{projectMeta.tagline}"
            </p>

            <p className="text-xs text-slate-700 max-w-md leading-relaxed">
              Official Project Showcase &amp; Evidence Repository for the Smart India Hackathon 2026. Built strictly to demonstrate verifiable progress, technical research, and working prototype execution.
            </p>

            <div className="pt-2 text-xs text-slate-700 flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Evaluator Access Ready • Static Vercel Deployable</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Sections
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              <li>
                <a href="#journey" className="hover:text-primaryBlue transition-colors">Our Journey</a>
              </li>
              <li>
                <a href="#evidence" className="hover:text-primaryBlue transition-colors">Evidence Gallery</a>
              </li>
              <li>
                <a href="#prototype" className="hover:text-primaryBlue transition-colors">Working Prototype</a>
              </li>
              <li>
                <a href="#team" className="hover:text-primaryBlue transition-colors">Meet the Team</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Research Docs Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Research Dossier
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              <li>
                <button
                  onClick={() => onOpenDoc && onOpenDoc('01-problem-understanding')}
                  className="hover:text-primaryBlue transition-colors text-left"
                >
                  01. Problem Understanding
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenDoc && onOpenDoc('02-existing-solutions')}
                  className="hover:text-primaryBlue transition-colors text-left"
                >
                  02. Existing Solutions Audit
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenDoc && onOpenDoc('04-technical-architecture')}
                  className="hover:text-primaryBlue transition-colors text-left"
                >
                  04. Technical Architecture
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenDoc && onOpenDoc('05-testing-and-results')}
                  className="hover:text-primaryBlue transition-colors text-left"
                >
                  05. Testing &amp; Results Log
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-700">
          <p className="flex items-center space-x-1">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>by Team 26175 • Smart India Hackathon 2026</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
