import React from 'react';
import { progressMilestones, projectMeta } from '../data/projectData';
import { CheckCircle2, Clock, AlertCircle, ArrowUpRight, FileText } from 'lucide-react';

export default function Progress({ onSelectMilestone }) {
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Completed':
        return (
          <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Completed</span>
          </span>
        );
      case 'In Progress':
        return (
          <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-primaryBlue border border-blue-200">
            <Clock className="w-3.5 h-3.5 text-primaryBlue animate-spin" style={{ animationDuration: '3s' }} />
            <span>In Progress</span>
          </span>
        );
      case 'Upcoming':
      default:
        return (
          <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
            <span>Upcoming</span>
          </span>
        );
    }
  };

  return (
    <section id="progress" className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-borderSlate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-white border border-borderSlate text-xs font-bold uppercase tracking-widest text-slate-700">
            <span className="w-1.5 h-1.5 rounded-full bg-primaryBlue"></span>
            <span>Milestone Tracking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-mainText tracking-tight">
            OUR PROGRESS
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            From idea to implementation.
          </p>
        </div>

        {/* Overall Horizontal Progress Bar */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-borderSlate shadow-soft mb-12 max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Overall Project Readiness
              </h3>
              <p className="text-xs text-slate-700 mt-0.5">
                Current milestone completion weight across all sprint phases
              </p>
            </div>
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-extrabold text-primaryBlue">
                {projectMeta.overallProgress}%
              </span>
              <span className="text-xs font-medium text-slate-600">Overall Target</span>
            </div>
          </div>

          {/* Progress Track */}
          <div className="w-full bg-slate-100 h-3.5 rounded-full overflow-hidden p-0.5 border border-slate-200/70">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-primaryBlue rounded-full transition-all duration-700 relative"
              style={{ width: `${projectMeta.overallProgress}%` }}
            >
              {/* Subtle light shimmer indicator */}
              <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/40 rounded-full"></div>
            </div>
          </div>

          {/* Quick Stats Grid below progress bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-100 text-center sm:text-left">
            <div>
              <span className="block text-[11px] font-semibold text-slate-600 uppercase">Working Time</span>
              <span className="text-base font-bold text-slate-800">{projectMeta.daysActive} Continuous Days</span>
            </div>
            <div>
              <span className="block text-[11px] font-semibold text-slate-600 uppercase">Milestones Done</span>
              <span className="text-base font-bold text-emerald-700">2 of 4 Completed</span>
            </div>
            <div>
              <span className="block text-[11px] font-semibold text-slate-600 uppercase">Active Sprint</span>
              <span className="text-base font-bold text-primaryBlue">Sprint #3 (Core Dev)</span>
            </div>
            <div>
              <span className="block text-[11px] font-semibold text-slate-600 uppercase">Data Policy</span>
              <span className="text-base font-bold text-slate-800">Verifiable Audit Trail</span>
            </div>
          </div>
        </div>

        {/* Four Milestone Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {progressMilestones.map((milestone) => (
            <div
              key={milestone.id}
              className={`bg-white rounded-xl border p-5 sm:p-6 transition-all duration-200 hover:shadow-card hover:-translate-y-1 flex flex-col justify-between ${
                milestone.status === 'In Progress'
                  ? 'border-blue-300 ring-2 ring-blue-100 shadow-soft'
                  : 'border-borderSlate shadow-2xs'
              }`}
            >
              {/* Card Top */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-extrabold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                    STAGE {milestone.number}
                  </span>
                  {getStatusBadge(milestone.status)}
                </div>

                <h4 className="text-base font-bold text-slate-900 tracking-tight mb-1.5">
                  {milestone.title}
                </h4>

                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  {milestone.subtitle}
                </p>

                {/* Sub Deliverables Checklist */}
                <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-100">
                  <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                    Deliverables
                  </span>
                  {milestone.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-1.5 text-xs text-slate-600">
                      <span className="text-emerald-500 font-bold mt-0.5">•</span>
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Bottom: Completion Bar & Metadata */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="flex justify-between items-center text-xs font-semibold">
                  <span className="text-slate-600">Phase Completion</span>
                  <span className={milestone.status === 'Completed' ? 'text-emerald-600' : 'text-primaryBlue'}>
                    {milestone.completionPercentage}%
                  </span>
                </div>

                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      milestone.status === 'Completed'
                        ? 'bg-emerald-500'
                        : milestone.status === 'In Progress'
                        ? 'bg-primaryBlue'
                        : 'bg-slate-300'
                    }`}
                    style={{ width: `${milestone.completionPercentage}%` }}
                  ></div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-600 pt-1">
                  <span>{milestone.date}</span>
                  <button
                    onClick={() => onSelectMilestone && onSelectMilestone(milestone.evidenceTargetId)}
                    className="text-primaryBlue hover:underline font-semibold flex items-center space-x-0.5"
                  >
                    <span>{milestone.evidenceCount} Proofs</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
