import React from 'react';
import { ArrowRight, ExternalLink, Calendar, CheckCircle2, Activity, Layers, Terminal, Sparkles, ShieldAlert } from 'lucide-react';
import { projectMeta } from '../data/projectData';

export default function Hero({ onExploreJourney, onViewEvidence, onOpenPrototype }) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-borderSlate bg-gradient-to-b from-white via-slate-50/50 to-[#F8FAFC]">
      
      {/* Background Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0F172A 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Pitch, Headlines, CTAs */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7 text-left">
            
            {/* Small Label with subtle Saffron & Blue accents */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/80 text-primaryBlue text-xs sm:text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-saffron inline-block"></span>
              <span className="uppercase tracking-wider font-bold text-[11px] sm:text-xs">
                {projectMeta.edition}
              </span>
              <span className="text-slate-300">/</span>
              <span className="text-slate-600 font-medium text-[11px] sm:text-xs">
                {projectMeta.teamId}
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-mainText tracking-tight leading-[1.12]">
                Building for India.
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primaryBlue tracking-tight leading-[1.12]">
                Proving Every Step.
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-xl">
              Follow our journey from problem research to a working solution,
              with real progress, evidence, and impact.
            </p>

            {/* Problem Statement Note Card */}
            <div className="p-4 rounded-xl bg-white border border-borderSlate shadow-2xs space-y-1.5 max-w-xl">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-600 uppercase tracking-wider">
                <span className="flex items-center space-x-1.5 text-primaryBlue">
                  <span className="w-1.5 h-1.5 rounded-full bg-primaryBlue"></span>
                  <span>SIH 2026 Problem Statement</span>
                </span>
                <span className="text-slate-600">ID: #26175</span>
              </div>
              <p className="text-sm font-semibold text-slate-900 line-clamp-2">
                {projectMeta.problemStatementTitle}
              </p>
              <div className="text-xs text-slate-600 pt-0.5">
                {projectMeta.ministryOrOrg}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onExploreJourney}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-primaryBlue hover:bg-primaryBlue-dark text-white text-sm sm:text-base font-semibold shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Our Journey</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onViewEvidence}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 text-sm sm:text-base font-semibold border border-borderSlate shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all"
              >
                <span>View Live Evidence</span>
                <ExternalLink className="w-4 h-4 text-primaryBlue" />
              </button>
            </div>

            {/* Micro Credibility Bar */}
            <div className="pt-3 flex flex-wrap items-center gap-6 text-xs font-medium text-slate-700">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Field Research Verified</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Offline-First PWA</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero Faked Metrics</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Professional Student Engineering Pod Visual + Floating Glass Cards */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100/60 via-slate-100/40 to-amber-100/40 rounded-3xl filter blur-2xl opacity-70 -z-10"></div>

            {/* Main Stage Card Container */}
            <div className="relative w-full max-w-lg lg:max-w-none bg-white/95 rounded-2xl border border-slate-200 shadow-card p-4 sm:p-6 overflow-visible">
              
              {/* Top Window Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  <span className="text-xs font-mono text-slate-600 pl-2">sih-2026-workspace/prototype</span>
                </div>
                <span className="text-[11px] font-mono text-primaryBlue bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                  Sprint #3 Active
                </span>
              </div>

              {/* Rich Vector Graphic: Student Hackathon Dev Team Collaborating */}
              <div className="relative rounded-xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 p-4 sm:p-5 text-white overflow-hidden shadow-inner min-h-[300px] flex flex-col justify-between">
                
                {/* Visual Dev Environment: Terminal + Live Preview split */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 z-10">
                  
                  {/* Terminal Screen Mockup */}
                  <div className="rounded-lg bg-slate-950/90 border border-slate-800 p-3 font-mono text-[11px] space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] text-slate-600 pb-1 border-b border-slate-800/80">
                      <span className="flex items-center space-x-1">
                        <Terminal className="w-3 h-3 text-emerald-400" />
                        <span>sync-daemon.log</span>
                      </span>
                      <span className="text-emerald-400">PASS</span>
                    </div>
                    <p className="text-slate-600">[08:42:15] <span className="text-blue-300">indexedDB</span>: 12 queued</p>
                    <p className="text-slate-600">[08:42:16] <span className="text-amber-300">network</span>: offline simulated</p>
                    <p className="text-slate-600">[08:42:19] <span className="text-emerald-400">network</span>: 4G reconnected</p>
                    <p className="text-emerald-300">[08:42:20] sync batch: 12/12 verified</p>
                    <p className="text-slate-600 font-mono text-[10px] text-slate-300">sha256: 8a4f91b..[OK]</p>
                  </div>

                  {/* Architecture & UI Wireframe Preview */}
                  <div className="rounded-lg bg-slate-950/90 border border-slate-800 p-3 flex flex-col justify-between">
                    <div className="flex items-center justify-between text-[10px] text-slate-600 pb-1 border-b border-slate-800/80">
                      <span className="text-slate-300 font-medium">Device Simulation</span>
                      <span className="text-xs text-blue-400">PWA 360x640</span>
                    </div>
                    
                    {/* Mini Phone Frame representation */}
                    <div className="my-2 p-2 rounded bg-slate-900 border border-slate-700/60 space-y-1.5">
                      <div className="h-2 w-12 bg-blue-500 rounded-sm"></div>
                      <div className="h-1.5 w-full bg-slate-700 rounded-sm"></div>
                      <div className="h-1.5 w-4/5 bg-slate-700 rounded-sm"></div>
                      <div className="grid grid-cols-2 gap-1 pt-1">
                        <div className="h-4 bg-emerald-950/60 border border-emerald-500/40 rounded flex items-center justify-center text-[8px] text-emerald-300">
                          Offline Safe
                        </div>
                        <div className="h-4 bg-blue-950/60 border border-blue-500/40 rounded flex items-center justify-center text-[8px] text-blue-300">
                          HMAC Signed
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-[9px] text-slate-600">
                      <span>Status: Ground Ready</span>
                      <span className="text-emerald-400">Latency: 120ms</span>
                    </div>
                  </div>

                </div>

                {/* Team Pod Graphic representation at the bottom of the card */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between z-10">
                  <div className="flex items-center space-x-3">
                    {/* Diverse Avatar Bubbles */}
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold text-white shadow">
                        AS
                      </div>
                      <div className="w-8 h-8 rounded-full bg-emerald-600 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold text-white shadow">
                        PP
                      </div>
                      <div className="w-8 h-8 rounded-full bg-amber-600 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold text-white shadow">
                        AI
                      </div>
                      <div className="w-8 h-8 rounded-full bg-indigo-600 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold text-white shadow">
                        RV
                      </div>
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-semibold text-white">Team 26175 Engineering Pod</p>
                      <p className="text-[11px] text-slate-600">6 Members • Distributed Development</p>
                    </div>
                  </div>

                  <button
                    onClick={onOpenPrototype}
                    className="text-xs font-semibold px-3 py-1.5 bg-primaryBlue hover:bg-primaryBlue-light text-white rounded-lg transition-colors flex items-center space-x-1"
                  >
                    <span>Test Prototype</span>
                    <span>↗</span>
                  </button>
                </div>

                {/* Ambient Code Lines in the background */}
                <div className="absolute -right-6 -bottom-6 opacity-10 font-mono text-xs text-white select-none pointer-events-none text-right">
                  {`function syncBatch() { return db.queue.flush(); }`}
                </div>
              </div>

              {/* FLOATING GLASS CARD 1: 12 DAYS OF WORK */}
              <div className="absolute -top-5 -left-3 sm:-left-6 glass-panel rounded-xl px-4 py-2.5 shadow-card border border-white/80 animate-subtle-float">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-700">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="block text-xs font-extrabold text-slate-900 tracking-tight">
                      {projectMeta.daysActive} DAYS OF WORK
                    </span>
                    <span className="block text-[10px] font-medium text-slate-600">
                      Documented &amp; Logged
                    </span>
                  </div>
                </div>
              </div>

              {/* FLOATING GLASS CARD 2: LIVE PROTOTYPE */}
              <div className="absolute -bottom-5 -right-2 sm:-right-5 glass-panel rounded-xl px-4 py-2.5 shadow-card border border-white/80 animate-subtle-float-delayed">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-700">
                    <Activity className="w-4 h-4 animate-pulse" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-live-pulse"></span>
                      <span className="text-xs font-extrabold text-slate-900 tracking-tight">
                        LIVE PROTOTYPE
                      </span>
                    </div>
                    <span className="block text-[10px] font-medium text-slate-600">
                      v0.8 Ready for Evaluation
                    </span>
                  </div>
                </div>
              </div>

              {/* FLOATING GLASS CARD 3: PROJECT PROGRESS */}
              <div className="hidden sm:block absolute top-1/2 -right-6 -translate-y-1/2 glass-panel rounded-xl p-3 shadow-card border border-white/80">
                <div className="space-y-1 text-left min-w-[120px]">
                  <div className="flex justify-between items-center text-[10px] font-bold text-slate-600 uppercase">
                    <span>Progress</span>
                    <span className="text-primaryBlue font-extrabold">{projectMeta.overallProgress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primaryBlue rounded-full transition-all duration-1000"
                      style={{ width: `${projectMeta.overallProgress}%` }}
                    ></div>
                  </div>
                  <span className="block text-[9px] text-slate-600">Sprint 3 of 4</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
