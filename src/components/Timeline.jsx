import React from 'react';
import { journeyTimeline } from '../data/projectData';
import { Calendar, CheckCircle2, Clock, ArrowRight, ExternalLink, ShieldCheck, Flag } from 'lucide-react';

export default function Timeline({ onSelectProof, onOpenDoc }) {
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Completed':
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            <span>Completed</span>
          </span>
        );
      case 'In Progress':
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-primaryBlue border border-blue-200">
            <Clock className="w-3 h-3 text-primaryBlue" />
            <span>In Progress</span>
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
            <span>Upcoming</span>
          </span>
        );
    }
  };

  const handleEvidenceClick = (item) => {
    if (item.evidenceId?.startsWith('doc-') && onOpenDoc) {
      // Find the document slug
      if (item.evidenceId === 'doc-01') onOpenDoc('01-problem-understanding');
      else if (item.evidenceId === 'doc-04') onOpenDoc('04-technical-architecture');
      else if (item.evidenceId === 'doc-05') onOpenDoc('05-testing-and-results');
      else onOpenDoc('01-problem-understanding');
    } else if (onSelectProof) {
      onSelectProof({
        id: item.evidenceId,
        title: item.title,
        category: item.tag === 'Research' ? 'Documents' : 'Screenshots',
        date: item.date,
        verifiedBy: 'Team 26175',
        commitRef: `milestone: ${item.phase.toLowerCase()}`,
        description: item.description,
        modalContent: {
          details: item.description + " Evidence verified under milestone phase."
        }
      });
    }
  };

  return (
    <section id="journey" className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-borderSlate">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-white border border-borderSlate text-xs font-bold uppercase tracking-widest text-slate-700">
            <Flag className="w-3.5 h-3.5 text-primaryBlue" />
            <span>Development Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-mainText tracking-tight">
            OUR JOURNEY
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Every milestone tells a story.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          
          {/* Vertical Spine Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 -translate-x-1/2"></div>

          {/* Timeline Nodes */}
          <div className="space-y-10 sm:space-y-12">
            {journeyTimeline.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } group`}
                >
                  
                  {/* Center Node Indicator */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-primaryBlue shadow-md z-10 group-hover:scale-110 transition-transform">
                    <span className="w-2.5 h-2.5 rounded-full bg-primaryBlue"></span>
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden sm:block sm:w-1/2"></div>

                  {/* Content Card */}
                  <div className={`pl-12 sm:pl-0 sm:w-1/2 ${
                    isEven ? 'sm:pr-10' : 'sm:pl-10'
                  } w-full`}>
                    
                    <div className="bg-white rounded-2xl p-6 border border-borderSlate shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all duration-200 space-y-3">
                      
                      {/* Card Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-mono font-bold text-primaryBlue uppercase tracking-wider">
                          {item.phase}
                        </span>
                        {getStatusBadge(item.status)}
                      </div>

                      {/* Title & Date */}
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                          {item.title}
                        </h3>
                        <div className="flex items-center space-x-1 text-xs text-slate-600 mt-0.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.date}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Highlights Pill Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.highlights.map((h, i) => (
                          <span 
                            key={i} 
                            className="px-2 py-0.5 rounded bg-slate-100 text-[11px] font-medium text-slate-700 border border-slate-200/60"
                          >
                            {h}
                          </span>
                        ))}
                      </div>

                      {/* Evidence Link Footer */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[11px] text-slate-600">
                          Proof reference:
                        </span>
                        <button
                          onClick={() => handleEvidenceClick(item)}
                          className="text-xs font-semibold text-primaryBlue hover:text-primaryBlue-dark inline-flex items-center space-x-1 group/btn"
                        >
                          <span className="group-hover/btn:underline">{item.evidenceRef}</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                        </button>
                      </div>

                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
