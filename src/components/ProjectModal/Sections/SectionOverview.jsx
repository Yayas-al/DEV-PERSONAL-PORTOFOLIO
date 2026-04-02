import { Database } from "lucide-react";
import { renderDesc } from "./utils";

export const SectionOverview = ({ data, id }) => (
  <div
    id={id}
    className="w-full min-h-[90vh] bg-[#F1F4E8] flex flex-col items-center justify-center px-10 md:px-20 py-24 relative overflow-hidden"
  >
    {/* Subtle blueprint grid */}
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.04]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15,23,42,1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,1) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />

    {/* Subtle top-left organic blob */}
    <div
      className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(circle, #D1EAE3 0%, transparent 70%)", opacity: 0.55 }}
    />
    {/* Bottom-right warm blob */}
    <div
      className="absolute -bottom-20 -right-16 w-[320px] h-[320px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(circle, #FDE2D2 0%, transparent 70%)", opacity: 0.45 }}
    />

    <div className="w-full max-w-5xl mx-auto relative z-10 flex flex-col items-start gap-10">
      {/* Label */}
      <div className="flex items-center gap-3">
        <div className="p-3 bg-white border-[2.5px] border-slate-900 shadow-[4px_4px_0_rgba(15,23,42,0.85)] rounded-xl">
          <Database size={26} className="text-slate-800" />
        </div>
        <span className="text-[11px] font-black uppercase tracking-[0.35em] text-slate-400">
          Project Overview
        </span>
      </div>

      {/* Big Serif Heading */}
      <h2
        className="font-serif font-black text-slate-900 leading-[0.92] tracking-[-0.04em]"
        style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
      >
        {data.title}
      </h2>

      {/* Earthy accent divider */}
      <div className="flex items-center gap-3">
        <div className="w-16 h-[3px] rounded-full" style={{ background: "#A8C5BA" }} />
        <div className="w-4 h-[3px] rounded-full" style={{ background: "#E4B49E" }} />
      </div>

      {/* Unified Text Canvas */}
      <div className="text-[1.1rem] leading-[1.85] text-slate-700 font-sans mt-4 w-full">
        {renderDesc(
          data.desc,
          "mb-5 last:mb-0 text-slate-700 font-medium"
        )}
      </div>
    </div>
  </div>
);
