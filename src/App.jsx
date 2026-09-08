import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EvidenceGallery from "./components/EvidenceGallery";
import PrototypeDemo from "./components/PrototypeDemo";
import Team from "./components/Team";
import Footer from "./components/Footer";
import ProofModal from "./components/ProofModal";
import MarkdownReader from "./components/MarkdownReader";

export default function App() {
  const [selectedProof, setSelectedProof] = useState(null);
  const [activeDocSlug, setActiveDocSlug] = useState(null);
  const [isDocReaderOpen, setIsDocReaderOpen] = useState(false);

  // Close modals on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedProof(null);
        setIsDocReaderOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleOpenDoc = (slug) => {
    setActiveDocSlug(slug);
    setIsDocReaderOpen(true);
  };

  const handleCloseDoc = () => {
    setIsDocReaderOpen(false);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] selection:bg-blue-100 selection:text-blue-800">
      {/* Top Navbar */}
      <Navbar onOpenDoc={handleOpenDoc} onNavigate={scrollToSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreJourney={() => scrollToSection("journey")}
          onViewEvidence={() => scrollToSection("evidence")}
          onOpenPrototype={() => scrollToSection("prototype")}
        />

        {/* 2. Progress Milestones Section */}
        {/* <Progress
          onSelectMilestone={(proofId) => {
            scrollToSection("evidence");
          }}
        /> */}

        {/* 3. Evidence Gallery Section (Primary Core Purpose) */}
        <EvidenceGallery
          onSelectProof={(item) => setSelectedProof(item)}
          onOpenDoc={handleOpenDoc}
        />

        {/* 4. Journey Vertical Timeline Section */}
        {/* <Timeline
          onSelectProof={(item) => setSelectedProof(item)}
          onOpenDoc={handleOpenDoc}
        /> */}

        {/* 5. Working Prototype Section */}
        <PrototypeDemo onOpenProofModal={(item) => setSelectedProof(item)} />

        {/* 6. Meet The Team Section */}
        <Team />
      </main>

      {/* Footer */}
      <Footer onOpenDoc={handleOpenDoc} onNavigate={scrollToSection} />

      {/* Interactive Proof Modal for Evidence Inspection */}
      {selectedProof && (
        <ProofModal
          item={selectedProof}
          onClose={() => setSelectedProof(null)}
          onOpenDoc={handleOpenDoc}
        />
      )}

      {/* Dedicated Markdown Research & Specs Reader */}
      {isDocReaderOpen && (
        <MarkdownReader
          initialDocSlug={activeDocSlug}
          onClose={handleCloseDoc}
        />
      )}
    </div>
  );
}
