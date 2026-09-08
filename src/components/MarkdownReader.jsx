import React, { useState, useEffect, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { researchDocs } from '../data/researchDocs';
import { 
  BookOpen, 
  ArrowLeft, 
  ArrowRight, 
  X, 
  Check, 
  Copy, 
  FileText, 
  ListOrdered, 
  ExternalLink, 
  ChevronRight,
  ShieldCheck,
  Calendar,
  Clock
} from 'lucide-react';

export default function MarkdownReader({ initialDocSlug, onClose }) {
  const [selectedSlug, setSelectedSlug] = useState(initialDocSlug || '01-problem-understanding');
  const [copied, setCopied] = useState(false);

  // Sync if initialDocSlug changes from outside
  useEffect(() => {
    if (initialDocSlug) {
      setSelectedSlug(initialDocSlug);
    }
  }, [initialDocSlug]);

  // Current active doc
  const currentDocIndex = researchDocs.findIndex(d => d.id === selectedSlug);
  const currentDoc = researchDocs[currentDocIndex] || researchDocs[0];

  const prevDoc = currentDocIndex > 0 ? researchDocs[currentDocIndex - 1] : null;
  const nextDoc = currentDocIndex < researchDocs.length - 1 ? researchDocs[currentDocIndex + 1] : null;

  // Extract Table of Contents from markdown headings
  const tableOfContents = useMemo(() => {
    if (!currentDoc || !currentDoc.content) return [];
    const lines = currentDoc.content.split('\n');
    const toc = [];

    lines.forEach((line) => {
      const match = line.match(/^(#{2,3})\s+(.*)$/);
      if (match) {
        const level = match[1].length; // 2 for ##, 3 for ###
        const title = match[2].trim();
        const anchor = title
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-');
        toc.push({ level, title, anchor });
      }
    });

    return toc;
  }, [currentDoc]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToAnchor = (anchor) => {
    const el = document.getElementById(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-sm flex justify-center items-center p-2 sm:p-4 md:p-6 animate-fadeIn">
      
      {/* Modal Container */}
      <div className="bg-white rounded-2xl w-full max-w-6xl h-[92vh] flex flex-col shadow-2xl border border-borderSlate overflow-hidden">
        
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-borderSlate bg-slate-50 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors flex items-center space-x-1.5 text-xs font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Showcase</span>
            </button>

            <div className="h-4 w-px bg-slate-200 hidden sm:block"></div>

            <div className="hidden sm:flex items-center space-x-2 text-xs text-slate-700">
              <span className="font-semibold text-slate-900">Research &amp; Specs</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-primaryBlue font-medium truncate max-w-xs">{currentDoc.shortTitle}</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopyLink}
              className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 text-xs font-medium transition-colors flex items-center space-x-1.5 shadow-2xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied!' : 'Share'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-200/80 rounded-lg transition-colors"
              aria-label="Close reader"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Content Area: Sidebar + Reader View */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Document Navigation Sidebar (Desktop) */}
          <aside className="w-72 bg-slate-50/80 border-r border-borderSlate p-4 overflow-y-auto hidden md:flex flex-col justify-between shrink-0">
            <div className="space-y-4">
              <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wider px-2">
                Research Whitepapers ({researchDocs.length})
              </div>

              <div className="space-y-1">
                {researchDocs.map((doc) => {
                  const isActive = doc.id === currentDoc.id;
                  return (
                    <button
                      key={doc.id}
                      onClick={() => setSelectedSlug(doc.id)}
                      className={`w-full text-left px-3 py-2.5 rounded-xl text-xs transition-all flex items-start space-x-2.5 ${
                        isActive
                          ? 'bg-blue-50 text-primaryBlue font-bold border border-blue-200/70 shadow-2xs'
                          : 'text-slate-600 hover:bg-white hover:text-slate-900 font-medium'
                      }`}
                    >
                      <span className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-mono shrink-0 mt-0.5 ${
                        isActive ? 'bg-primaryBlue text-white font-bold' : 'bg-slate-200 text-slate-600'
                      }`}>
                        0{doc.order}
                      </span>
                      <div className="min-w-0">
                        <p className="truncate leading-snug">{doc.shortTitle}</p>
                        <p className="text-[10px] text-slate-600 font-normal truncate mt-0.5">{doc.category}</p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Table of Contents for Current Doc */}
              {tableOfContents.length > 0 && (
                <div className="pt-4 border-t border-slate-200/80 space-y-2">
                  <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wider px-2 flex items-center space-x-1.5">
                    <ListOrdered className="w-3.5 h-3.5 text-primaryBlue" />
                    <span>In This Document</span>
                  </div>
                  <nav className="space-y-0.5 text-xs max-h-48 overflow-y-auto pr-1">
                    {tableOfContents.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => scrollToAnchor(item.anchor)}
                        className={`block text-left w-full truncate py-1 px-2 rounded text-slate-600 hover:text-primaryBlue hover:bg-blue-50/50 transition-colors ${
                          item.level === 3 ? 'pl-4 text-[11px]' : 'font-medium'
                        }`}
                      >
                        {item.title}
                      </button>
                    ))}
                  </nav>
                </div>
              )}
            </div>

            {/* Sidebar Bottom: Team 26175 badge */}
            <div className="p-3 bg-white border border-slate-200 rounded-xl mt-4">
              <div className="flex items-center space-x-2 text-[11px] font-bold text-slate-900">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Verified Local Documentation</span>
              </div>
              <p className="text-[10px] text-slate-600 mt-1">
                Local Markdown source files in <code className="font-mono text-[9px] bg-slate-100 px-1 py-0.5 rounded">src/content/</code>
              </p>
            </div>
          </aside>

          {/* Reader Document Body */}
          <main className="flex-1 overflow-y-auto p-6 sm:p-10 lg:p-14 bg-white">
            
            {/* Mobile Document Picker */}
            <div className="md:hidden mb-6 pb-4 border-b border-slate-200">
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                Select Document:
              </label>
              <select
                value={currentDoc.id}
                onChange={(e) => setSelectedSlug(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm font-semibold text-slate-800"
              >
                {researchDocs.map(d => (
                  <option key={d.id} value={d.id}>
                    Doc 0{d.order}: {d.shortTitle}
                  </option>
                ))}
              </select>
            </div>

            <article className="max-w-3xl mx-auto">
              
              {/* Document Metadata Banner */}
              <header className="mb-8 pb-6 border-b border-slate-100">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-primaryBlue border border-blue-200">
                    Doc #0{currentDoc.order}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center space-x-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    <span>SIH Peer Reviewed</span>
                  </span>
                  <span className="text-xs text-slate-700 flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{currentDoc.readTime}</span>
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {currentDoc.summary}
                </p>
              </header>

              {/* Rendered Markdown Body with custom components */}
              <div className="markdown-body prose prose-slate max-w-none text-slate-800">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ node, ...props }) => {
                      const text = String(props.children);
                      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                      return (
                        <h1 id={id} className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-6 mb-4 pb-2 border-b border-slate-200" {...props} />
                      );
                    },
                    h2: ({ node, ...props }) => {
                      const text = String(props.children);
                      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                      return (
                        <h2 id={id} className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-8 mb-3 scroll-mt-6" {...props} />
                      );
                    },
                    h3: ({ node, ...props }) => {
                      const text = String(props.children);
                      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                      return (
                        <h3 id={id} className="text-lg font-bold text-slate-900 tracking-tight mt-6 mb-2 scroll-mt-6" {...props} />
                      );
                    },
                    p: ({ node, ...props }) => (
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4" {...props} />
                    ),
                    ul: ({ node, ...props }) => (
                      <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base text-slate-700 pl-2" {...props} />
                    ),
                    ol: ({ node, ...props }) => (
                      <ol className="list-decimal list-inside space-y-2 mb-4 text-sm sm:text-base text-slate-700 pl-2" {...props} />
                    ),
                    li: ({ node, ...props }) => (
                      <li className="text-slate-700 leading-relaxed" {...props} />
                    ),
                    blockquote: ({ node, ...props }) => (
                      <blockquote className="p-4 my-5 rounded-r-xl border-l-4 border-primaryBlue bg-blue-50/70 text-slate-800 italic text-sm sm:text-base font-medium shadow-2xs" {...props} />
                    ),
                    table: ({ node, ...props }) => (
                      <div className="overflow-x-auto my-6 rounded-xl border border-slate-200 shadow-2xs">
                        <table className="w-full text-left text-xs sm:text-sm text-slate-700 border-collapse" {...props} />
                      </div>
                    ),
                    thead: ({ node, ...props }) => (
                      <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200" {...props} />
                    ),
                    tbody: ({ node, ...props }) => (
                      <tbody className="divide-y divide-slate-200" {...props} />
                    ),
                    tr: ({ node, ...props }) => (
                      <tr className="hover:bg-slate-50/80 transition-colors" {...props} />
                    ),
                    th: ({ node, ...props }) => (
                      <th className="p-3 sm:p-3.5 font-bold" {...props} />
                    ),
                    td: ({ node, ...props }) => (
                      <td className="p-3 sm:p-3.5" {...props} />
                    ),
                    code: ({ inline, className, children, ...props }) => {
                      if (inline) {
                        return (
                          <code className="bg-slate-100 text-slate-900 px-1.5 py-0.5 rounded font-mono text-xs font-semibold border border-slate-200" {...props}>
                            {children}
                          </code>
                        );
                      }
                      return (
                        <pre className="bg-slate-900 text-slate-100 rounded-xl p-4 my-4 overflow-x-auto font-mono text-xs leading-relaxed border border-slate-800 shadow-inner">
                          <code>{children}</code>
                        </pre>
                      );
                    },
                    hr: () => <hr className="my-8 border-slate-200" />
                  }}
                >
                  {currentDoc.content}
                </ReactMarkdown>
              </div>

              {/* Prev / Next Document Navigation */}
              <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {prevDoc ? (
                  <button
                    onClick={() => setSelectedSlug(prevDoc.id)}
                    className="p-4 rounded-xl border border-borderSlate hover:border-primaryBlue bg-white hover:bg-slate-50 text-left transition-all group flex items-center space-x-3 shadow-2xs"
                  >
                    <ArrowLeft className="w-5 h-5 text-slate-400 group-hover:text-primaryBlue transition-colors shrink-0" />
                    <div>
                      <span className="block text-[11px] font-semibold text-slate-600 uppercase">Previous Doc</span>
                      <span className="block text-sm font-bold text-slate-900 group-hover:text-primaryBlue transition-colors truncate">
                        {prevDoc.shortTitle}
                      </span>
                    </div>
                  </button>
                ) : (
                  <div></div>
                )}

                {nextDoc ? (
                  <button
                    onClick={() => setSelectedSlug(nextDoc.id)}
                    className="p-4 rounded-xl border border-borderSlate hover:border-primaryBlue bg-white hover:bg-slate-50 text-right transition-all group flex items-center justify-end space-x-3 shadow-2xs sm:col-start-2"
                  >
                    <div>
                      <span className="block text-[11px] font-semibold text-slate-600 uppercase">Next Doc</span>
                      <span className="block text-sm font-bold text-slate-900 group-hover:text-primaryBlue transition-colors truncate">
                        {nextDoc.shortTitle}
                      </span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-primaryBlue transition-colors shrink-0" />
                  </button>
                ) : null}
              </div>

            </article>
          </main>

        </div>

      </div>

    </div>
  );
}
