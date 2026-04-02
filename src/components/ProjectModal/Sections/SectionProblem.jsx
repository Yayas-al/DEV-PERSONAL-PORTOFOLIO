import { AlertOctagon } from "lucide-react";
import { renderDesc } from "./utils";

export const SectionProblem = ({ data, id }) => (
  <div
    id={id}
    className="w-full min-h-[90vh] flex flex-col items-center justify-center px-10 md:px-20 py-24 relative overflow-hidden"
    style={{ background: "#F1F4E8" }}
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

    {/* Huge decorative bg letter */}
    <span
      className="absolute -top-8 right-0 select-none pointer-events-none leading-none font-black"
      style={{
        fontSize: "18rem",
        color: "rgba(212,132,90,0.12)",
      }}
    >
      !
    </span>

    {/* Side accent blob */}
    <div
      className="absolute left-0 bottom-0 w-72 h-72 rounded-full pointer-events-none"
      style={{
        background: "radial-gradient(circle, #D1EAE3 0%, transparent 70%)",
        opacity: 0.5,
        transform: "translate(-40%, 40%)",
      }}
    />

    <div className="w-full max-w-5xl mx-auto relative z-10 flex flex-col gap-10">
      <div className="flex items-center gap-4">
        <div className="p-4 bg-white border-[2.5px] border-slate-900 shadow-[4px_4px_0_rgba(15,23,42,0.85)] rounded-2xl">
          <AlertOctagon size={38} strokeWidth={2.5} className="text-slate-800" />
        </div>
        <span className="text-[11px] font-black uppercase tracking-[0.35em] text-slate-500">
          Problem Statement
        </span>
      </div>

      <h2
        className="font-serif font-black text-slate-900 leading-[0.92] tracking-[-0.04em]"
        style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
      >
        {data.title}
      </h2>

      {/* Warm accent bar */}
      <div className="flex items-center gap-2">
        <div className="w-16 h-[3px] rounded-full" style={{ background: "#D4845A" }} />
        <div className="w-6 h-[3px] rounded-full" style={{ background: "#A8C5BA" }} />
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
