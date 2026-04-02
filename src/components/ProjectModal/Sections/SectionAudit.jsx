import { FileSearch } from "lucide-react";
import { renderDesc } from "./utils";

export const SectionAudit = ({ data, id }) => (
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

    <div className="w-full max-w-6xl mx-auto flex flex-col gap-12 relative z-10">
      {/* Header */}
      <div
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8"
        style={{ borderBottom: "2px solid rgba(168,197,186,0.45)" }}
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white border-[2.5px] border-slate-900 shadow-[4px_4px_0_rgba(15,23,42,0.85)] rounded-xl">
              <FileSearch size={26} className="text-slate-800" />
            </div>
            <span className="text-[11px] font-black uppercase tracking-[0.35em] text-slate-400">
              Data Quality &amp; Assessment
            </span>
          </div>
          <h2
            className="font-serif font-black text-slate-900 leading-[0.92] tracking-[-0.04em]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            {data.title}
          </h2>
        </div>

        {/* Stacked accent bars */}
        <div className="flex flex-col gap-1.5 mb-2">
          <div className="w-20 h-[3px] rounded-full" style={{ background: "#A8C5BA" }} />
          <div className="w-12 h-[3px] rounded-full" style={{ background: "#E4B49E" }} />
          <div className="w-6 h-[3px] rounded-full" style={{ background: "#C5D89A" }} />
        </div>
      </div>

      {/* Content grid — checklist card feel */}
      <div className="grid md:grid-cols-2 gap-5">
        <div className="md:col-span-2 text-[1.15rem] leading-relaxed text-slate-700 font-sans">
          {renderDesc(
            data.desc,
            "mb-3 last:mb-0 text-slate-600 text-base",
            "flex items-start gap-3 text-[1rem] font-semibold text-slate-800 bg-white/80 border border-[rgba(168,197,186,0.4)] p-5 rounded-xl hover:border-[#A8C5BA] transition-colors duration-150",
            "grid md:grid-cols-2 gap-4 mt-4"
          )}
        </div>
      </div>
    </div>
  </div>
);
