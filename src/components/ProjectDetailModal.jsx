import { X } from "lucide-react";
import { HeroSectionModal } from "./ProjectModal/HeroSectionModal";
import { StatsSectionModal } from "./ProjectModal/StatsSectionModal";
import { FeaturesSectionModal } from "./ProjectModal/FeaturesSectionModal";
import { TechStackSectionModal } from "./ProjectModal/TechStackSectionModal";
import { ProjectSectionModal } from "./ProjectModal/ProjectSectionModal";
import { CtaSectionModal } from "./ProjectModal/CtaSectionModal";

export const ProjectDetailModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-[87.5rem] h-[90vh] bg-[#FDFBF0] border-[3px] border-black rounded-[2rem] shadow-[1.5rem_1.5rem_0_0_#000000] overflow-hidden flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-2.5 bg-[#FFDE59] border-[2.5px] border-black shadow-[4px_4px_0_#000000] rounded-xl hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer hover:shadow-none"
        >
          <X size={22} strokeWidth={3} className="text-black" />
        </button>

        {/* Scrollable content — NO outer padding; each section controls its own */}
        <div className="flex-1 overflow-y-auto scroll-smooth">

          {/* ── ZONE 1: Hero — keeps paddding ─────────────────────── */}
          <div className="px-10 md:px-16 py-12 md:py-14 bg-[#FDFBF0]">
            <HeroSectionModal project={project} />
            <StatsSectionModal project={project} />
          </div>

          {/* ── ZONE 2: Features — edge-to-edge ───────────────────── */}
          <FeaturesSectionModal project={project} />

          {/* ── ZONE 3: Tech Stack — edge-to-edge ─────────────────── */}
          <TechStackSectionModal project={project} />

          {/* ── ZONE 4: Deep-Dive Sections — each full-bleed ──────── */}
          <ProjectSectionModal project={project} />

          {/* ── ZONE 5: CTA / Let's Connect — dark footer ──────────── */}
          <CtaSectionModal />

        </div>
      </div>
    </div>
  );
};