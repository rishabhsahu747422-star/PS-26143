import React, { useState } from 'react';
import { projectMeta, prototypeFeatures } from '../data/projectData';
import { 
  Play, 
  Tv, 
  ExternalLink, 
  ShieldCheck, 
  Wifi, 
  WifiOff, 
  RefreshCw, 
  CheckCircle2, 
  Terminal, 
  Sliders, 
  Smartphone,
  Sparkles
} from 'lucide-react';

export default function PrototypeDemo({ onOpenProofModal }) {
  const [activeTab, setActiveTab] = useState('video'); // 'video' or 'simulator'
  
  // Interactive simulator state
  const [isOffline, setIsOffline] = useState(false);
  const [queueCount, setQueueCount] = useState(0);
  const [syncedItems, setSyncedItems] = useState([
    { id: 'REC-092', label: 'Ground Audit - North Zone', time: '10:14 AM', status: 'Synced', hash: '8f2a..1b' },
    { id: 'REC-093', label: 'Facility Inspection Check', time: '10:28 AM', status: 'Synced', hash: 'c41d..9e' }
  ]);
  const [formData, setFormData] = useState({ operatorName: 'Ravi Kumar', region: 'Sector 4B' });
  const [isSyncing, setIsSyncing] = useState(false);

  const handleSimulateSubmit = (e) => {
    e.preventDefault();
    if (isOffline) {
      setQueueCount(prev => prev + 1);
    } else {
      const newItem = {
        id: `REC-09${syncedItems.length + 4}`,
        label: `${formData.region} - ${formData.operatorName}`,
        time: 'Just now',
        status: 'Synced',
        hash: Math.random().toString(36).substring(2, 8)
      };
      setSyncedItems([newItem, ...syncedItems]);
    }
  };

  const handleToggleNetwork = () => {
    const nextState = !isOffline;
    setIsOffline(nextState);

    // If coming back online with items in queue, simulate background auto-sync
    if (!nextState && queueCount > 0) {
      setIsSyncing(true);
      setTimeout(() => {
        const flushed = Array.from({ length: queueCount }).map((_, idx) => ({
          id: `REC-AUTO-${idx + 1}`,
          label: `Offline Queued Item #${idx + 1}`,
          time: 'Synced upon reconnect',
          status: 'Synced',
          hash: Math.random().toString(36).substring(2, 8)
        }));
        setSyncedItems(prev => [...flushed, ...prev]);
        setQueueCount(0);
        setIsSyncing(false);
      }, 1200);
    }
  };

  return (
    <section id="prototype" className="py-16 sm:py-24 bg-white border-b border-borderSlate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-widest text-primaryBlue">
            <Tv className="w-3.5 h-3.5" />
            <span>Working Prototype</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-mainText tracking-tight">
            SEE THE SOLUTION IN ACTION
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Watch our working prototype and understand how the solution works.
          </p>
        </div>

        {/* Tab Toggle: Video Walkthrough vs. Live Interactive Simulator */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-100 p-1 rounded-xl inline-flex space-x-1 border border-slate-200">
            <button
              onClick={() => setActiveTab('video')}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 ${
                activeTab === 'video'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Demonstration Video</span>
            </button>
            <button
              onClick={() => setActiveTab('simulator')}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 ${
                activeTab === 'simulator'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Offline-Sync Simulator</span>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] px-1.5 py-0.2 rounded font-mono">
                Interactive
              </span>
            </button>
          </div>
        </div>

        {/* Main Stage Display */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-borderSlate shadow-card overflow-hidden">
          
          {activeTab === 'video' ? (
            /* VIDEO WALKTHROUGH STAGE */
            <div className="flex flex-col">
              
              {/* Large Video Preview Frame */}
              <div className="relative bg-slate-950 aspect-video w-full flex items-center justify-center overflow-hidden group">
                
                {/* Visual Backdrop with subtle grid & glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-slate-950/80 to-transparent"></div>
                <div 
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(#2563EB 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }}
                />

                {/* Simulated Center Screen Content */}
                <div className="relative z-10 text-center p-6 space-y-4 max-w-lg">
                  <div 
                    onClick={() => {
                      if (onOpenProofModal) {
                        onOpenProofModal({
                          id: "vid-01",
                          category: "Videos",
                          title: "5-Minute Working Prototype Demonstration",
                          date: "Sep 03, 2026",
                          verifiedBy: "Team 26175",
                          commitRef: "demo-video-v0.8.mp4",
                          description: "Full audio-guided walkthrough of our core hackathon problem solution, demonstrating key features in under 5 minutes.",
                          modalContent: {
                            type: "video",
                            details: "Demonstrates offline data input, local SQLite/IndexedDB caching, airplane mode fault injection, automatic reconnection sync, and supervisor dashboard verification."
                          }
                        });
                      }
                    }}
                    className="w-20 h-20 rounded-full bg-primaryBlue hover:bg-primaryBlue-light text-white flex items-center justify-center mx-auto shadow-xl cursor-pointer transform group-hover:scale-105 transition-all"
                  >
                    <Play className="w-8 h-8 fill-white ml-1" />
                  </div>

                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/10 text-blue-300 border border-white/10 backdrop-blur-xs mb-2">
                      SIH 2026 EVALUATION DEMO • 1080p HD
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      Full System Workflow Walkthrough
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Audio commentary explaining architecture, offline caching, and audit verification
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        if (onOpenProofModal) {
                          onOpenProofModal({
                            id: "vid-01",
                            category: "Videos",
                            title: "5-Minute Working Prototype Demonstration",
                            date: "Sep 03, 2026",
                            verifiedBy: "Team 26175",
                            commitRef: "demo-video-v0.8.mp4",
                            description: "Full audio-guided walkthrough of our core hackathon problem solution."
                          });
                        }
                      }}
                      className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-white text-slate-950 font-bold text-sm hover:bg-slate-100 transition-colors shadow-lg"
                    >
                      <span>Watch Demo →</span>
                    </button>
                  </div>
                </div>

                {/* Video Scrubber Mockup Bar at Bottom */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-4 flex items-center justify-between text-xs text-slate-300 z-10 font-mono">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    <span>00:00 / 04:45</span>
                  </div>
                  <div className="hidden sm:flex items-center space-x-4 text-[11px] text-slate-600">
                    <span>01:10 Field Capture</span>
                    <span>•</span>
                    <span>02:30 Offline Queuing</span>
                    <span>•</span>
                    <span>03:45 Real-time Sync</span>
                  </div>
                  <span>1080p 60fps</span>
                </div>

              </div>

              {/* Video Footer info */}
              <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <h4 className="text-sm font-bold text-slate-900">
                    Prototype Video Instructions
                  </h4>
                  <p className="text-xs text-slate-600">
                    This video placeholder can be directly updated with your team's YouTube or MP4 video URL in <code className="font-mono text-[11px] bg-slate-200 px-1 py-0.5 rounded">src/data/projectData.js</code>.
                  </p>
                </div>

                <div className="flex items-center space-x-2 shrink-0">
                  <a
                    href={projectMeta.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-900 text-xs font-semibold hover:bg-slate-100 transition-colors flex items-center space-x-1.5 shadow-2xs"
                  >
                    <span>Source Code</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          ) : (
            /* INTERACTIVE OFFLINE-SYNC SIMULATOR */
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Simulator Controls & Network State Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    isOffline ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                  }`}>
                    {isOffline ? <WifiOff className="w-5 h-5" /> : <Wifi className="w-5 h-5" />}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Simulated Device Network Status: {isOffline ? 'OFFLINE (Simulated Blackout)' : 'ONLINE (4G Connected)'}
                    </h4>
                    <p className="text-xs text-slate-600">
                      Toggle network state to test local client queuing and auto-sync on recovery
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleToggleNetwork}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors flex items-center justify-center space-x-2 shrink-0 ${
                    isOffline 
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm' 
                      : 'bg-amber-500 hover:bg-amber-600 text-white shadow-sm'
                  }`}
                >
                  {isOffline ? <Wifi className="w-3.5 h-3.5" /> : <WifiOff className="w-3.5 h-3.5" />}
                  <span>{isOffline ? 'Restore Network (Reconnect)' : 'Cut Network (Go Offline)'}</span>
                </button>
              </div>

              {/* Interactive Demo Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Left: Interactive Field Input Form */}
                <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                    <span className="text-xs font-bold uppercase text-slate-700 flex items-center space-x-1.5">
                      <Smartphone className="w-4 h-4 text-primaryBlue" />
                      <span>Field Operator Capture Interface</span>
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                      isOffline ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {isOffline ? 'CACHE-MODE' : 'LIVE-SYNC'}
                    </span>
                  </div>

                  <form onSubmit={handleSimulateSubmit} className="space-y-3 text-xs">
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Field Operator Name</label>
                      <input
                        type="text"
                        value={formData.operatorName}
                        onChange={(e) => setFormData({ ...formData, operatorName: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-primaryBlue text-slate-900"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Region / Sector Code</label>
                      <input
                        type="text"
                        value={formData.region}
                        onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-primaryBlue text-slate-900"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 px-4 bg-primaryBlue hover:bg-primaryBlue-dark text-white font-bold rounded-lg transition-colors flex items-center justify-center space-x-2"
                    >
                      <span>Submit Record</span>
                      <span className="text-[11px] font-normal opacity-80">
                        {isOffline ? '(Will Queue in IndexedDB)' : '(Instant Dispatch)'}
                      </span>
                    </button>
                  </form>

                  {/* Local Queue Gauge */}
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex justify-between items-center text-xs">
                    <span className="text-slate-600 font-medium">Local IndexedDB Queue:</span>
                    <span className={`font-mono font-bold px-2 py-0.5 rounded ${
                      queueCount > 0 ? 'bg-amber-100 text-amber-800 animate-pulse' : 'bg-slate-200 text-slate-700'
                    }`}>
                      {queueCount} records pending
                    </span>
                  </div>
                </div>

                {/* Right: Real-time Dispatch Ledger / Terminal */}
                <div className="p-5 rounded-xl border border-slate-900 bg-slate-950 text-white space-y-3 font-mono text-xs flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center pb-2 border-b border-slate-800 text-[11px] text-slate-600">
                      <span className="flex items-center space-x-1.5 text-emerald-400">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>Central Audit Ledger</span>
                      </span>
                      {isSyncing ? (
                        <span className="text-blue-400 flex items-center space-x-1">
                          <RefreshCw className="w-3 h-3 animate-spin" />
                          <span>Syncing...</span>
                        </span>
                      ) : (
                        <span className="text-slate-600">{syncedItems.length} verified</span>
                      )}
                    </div>

                    {/* Ledger List */}
                    <div className="space-y-2 py-2 max-h-52 overflow-y-auto pr-1">
                      {syncedItems.map((item, idx) => (
                        <div key={idx} className="p-2 rounded bg-slate-900 border border-slate-800/80 text-[11px] flex justify-between items-center">
                          <div>
                            <span className="text-emerald-400 font-bold">{item.id}</span>: <span className="text-slate-300 font-sans">{item.label}</span>
                            <div className="text-[9px] text-slate-600">hash: {item.hash} • {item.time}</div>
                          </div>
                          <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/70 border border-emerald-800 px-1.5 py-0.5 rounded">
                            VERIFIED
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-600 flex justify-between items-center">
                    <span>Storage Engine: PostgreSQL Append-Only</span>
                    <span className="text-emerald-400">● 100% Data Integrity</span>
                  </div>
                </div>

              </div>

            </div>
          )}

        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-7xl mx-auto">
          {prototypeFeatures.map((feat, index) => (
            <div key={index} className="p-5 rounded-xl bg-slate-50 border border-borderSlate space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primaryBlue px-2 py-0.5 rounded bg-blue-50 border border-blue-100">
                {feat.tag}
              </span>
              <h4 className="text-sm font-bold text-slate-900 tracking-tight">
                {feat.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
