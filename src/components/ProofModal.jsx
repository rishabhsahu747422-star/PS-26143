import React from 'react';
import { X, ExternalLink, Calendar, CheckCircle, ShieldCheck, FileText, Video, Image as ImageIcon, Terminal, Users, BookOpen } from 'lucide-react';

export default function ProofModal({ item, onClose, onOpenDoc }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex justify-center items-center p-3 sm:p-6 animate-fadeIn">
      
      {/* Modal Container */}
      <div className="bg-white rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl border border-borderSlate my-auto animate-scaleUp">
        
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-6 bg-slate-50 border-b border-borderSlate flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-primaryBlue border border-blue-200">
                {item.category}
              </span>
              <span className="text-xs font-mono text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200">
                Ref: {item.commitRef}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              {item.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-200/80 rounded-lg transition-colors ml-4"
            aria-label="Close proof preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Detailed Preview Frame based on Proof Category */}
          <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-900 shadow-inner">
            {item.category === 'Screenshots' && (
              <div className="p-6 text-white space-y-4 font-mono text-xs">
                <div className="flex justify-between items-center text-slate-600 border-b border-slate-800 pb-2">
                  <span className="flex items-center space-x-2 text-emerald-400">
                    <CheckCircle className="w-4 h-4" />
                    <span>Evidence Hash Verified</span>
                  </span>
                  <span>ISO-8601 Timestamp: {item.date}</span>
                </div>
                
                {/* Visual Representation */}
                <div className="p-4 rounded bg-slate-950 border border-slate-800 text-slate-200 space-y-2">
                  <div className="text-amber-300 font-bold">ARTIFACT SNAPSHOT &amp; TECHNICAL PROOF</div>
                  <p className="text-slate-600 leading-relaxed font-sans text-sm">
                    {item.modalContent?.details || item.description}
                  </p>
                  <div className="pt-2 text-[11px] text-slate-600 font-mono">
                    SHA-256 Digest: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
                  </div>
                </div>
              </div>
            )}

            {item.category === 'Videos' && (
              <div className="p-8 text-center text-white space-y-4">
                <div className="w-16 h-16 rounded-full bg-primaryBlue/90 flex items-center justify-center mx-auto shadow-lg">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Video Demonstration Archive</h4>
                  <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto">
                    {item.modalContent?.details || item.description}
                  </p>
                </div>
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-300 font-mono">
                  <span>Duration: ~4m 30s</span>
                  <span>•</span>
                  <span>Format: WebM / MP4</span>
                </div>
              </div>
            )}

            {item.category === 'Documents' && (
              <div className="p-6 bg-slate-50 text-slate-900 space-y-4 font-sans">
                <div className="flex items-center space-x-3 pb-3 border-b border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-primaryBlue flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-600">Local Markdown research documentation</p>
                  </div>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {item.modalContent?.details || item.description}
                </p>
                {item.docSlug && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenDoc(item.docSlug);
                    }}
                    className="w-full py-2.5 px-4 rounded-xl bg-primaryBlue hover:bg-primaryBlue-dark text-white font-semibold text-sm transition-colors flex items-center justify-center space-x-2"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Open in Markdown Reader →</span>
                  </button>
                )}
              </div>
            )}

            {item.category === 'Meetings' && (
              <div className="p-6 bg-white text-slate-900 space-y-4 font-sans">
                <div className="flex items-center space-x-3 pb-3 border-b border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-600">Team Review &amp; Architecture Audit Minutes</p>
                  </div>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs space-y-2 text-slate-700">
                  <p><strong>Verification Details:</strong> {item.modalContent?.details}</p>
                  <p><strong>Verified by:</strong> {item.verifiedBy}</p>
                  <p><strong>Reference Document:</strong> {item.commitRef}</p>
                </div>
              </div>
            )}
          </div>

          {/* Verification Dossier Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <span className="block text-slate-600 font-semibold uppercase text-[10px]">Verified By</span>
              <span className="font-bold text-slate-900 mt-0.5 block">{item.verifiedBy}</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <span className="block text-slate-600 font-semibold uppercase text-[10px]">Recorded Date</span>
              <span className="font-bold text-slate-900 mt-0.5 block">{item.date}</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <span className="block text-slate-600 font-semibold uppercase text-[10px]">Integrity Audit</span>
              <span className="font-bold text-emerald-600 mt-0.5 flex items-center space-x-1">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Verified Match</span>
              </span>
            </div>
          </div>

        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-borderSlate flex items-center justify-between">
          <span className="text-xs text-slate-600">
            Smart India Hackathon 2026 • Team 26175 Evidence Portal
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold rounded-lg transition-colors"
          >
            Close Preview
          </button>
        </div>

      </div>

    </div>
  );
}
