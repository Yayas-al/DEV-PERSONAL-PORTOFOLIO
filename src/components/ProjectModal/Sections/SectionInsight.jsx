import { Lightbulb } from "lucide-react";
import { renderDesc } from "./utils";

export const SectionInsight = ({ data, id }) => (
  <div
    id={id}
    className="w-full min-h-[90vh] flex flex-col justify-center px-10 md:px-20 py-24 relative overflow-hidden"
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

    {/* Decorative large circle offset */}
    <div
      className="absolute -right-28 -bottom-28 w-[460px] h-[460px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(circle, #FFFDF5 0%, transparent 68%)", opacity: 0.7 }}
    />
    <div
      className="absolute -left-16 top-12 w-[200px] h-[200px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(circle, #F1F4E8 0%, transparent 70%)", opacity: 0.55 }}
    />

    <div className="w-full max-w-5xl mx-auto relative z-10 flex flex-col gap-10">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="p-3 bg-white border-[2.5px] border-slate-900 shadow-[4px_4px_0_rgba(15,23,42,0.85)] rounded-xl">
          <Lightbulb size={28} className="text-slate-800" />
        </div>
        <span className="text-[11px] font-black uppercase tracking-[0.35em] text-slate-500">
          Key Findings
        </span>
      </div>

      <h2
        className="font-serif font-black text-slate-900 leading-[0.92] tracking-[-0.04em]"
        style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
      >
        {data.title}
      </h2>

      {/* Earthy accent bar */}
      <div className="flex items-center gap-2">
        <div className="w-14 h-[3px] rounded-full" style={{ background: "#5B9E8A" }} />
        <div className="w-6 h-[3px] rounded-full" style={{ background: "#E4B49E" }} />
        <div className="w-3 h-[3px] rounded-full" style={{ background: "#C5D89A" }} />
      </div>

      {/* Unified Text Canvas */}
      <div className="text-[1.1rem] leading-[1.85] text-slate-700 font-sans mt-4">
        {renderDesc(
          data.desc,
          "mb-5 last:mb-0 text-slate-700 font-medium"
        )}
      </div>
    </div>
  </div>
);
