import { LineChart, BarChart3, PieChart, TrendingUp, Filter, Sparkles } from "lucide-react";
import { renderDesc } from "./utils";

export const SectionAnalysis = ({ data, id }) => (
  <div
    id={id}
    className="w-full flex flex-col relative overflow-hidden"
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

    {/* Decorative blobs */}
    <div
      className="absolute top-20 -right-20 w-[400px] h-[400px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(circle, #D1EAE3 0%, transparent 70%)", opacity: 0.3 }}
    />
    <div
      className="absolute bottom-40 -left-16 w-[280px] h-[280px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(circle, #E4D9C5 0%, transparent 70%)", opacity: 0.25 }}
    />

    {/* ─── HERO HEADER ─── */}
    <div className="w-full px-10 md:px-20 pt-28 pb-20 relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        {/* Label + icon */}
        <div className="flex items-center gap-4">
          <div className="p-3.5 bg-white border-[2.5px] border-slate-900 shadow-[5px_5px_0_rgba(15,23,42,0.85)] rounded-xl">
            <LineChart size={30} strokeWidth={2.5} className="text-slate-800" />
          </div>
          <span className="text-[11px] font-black uppercase tracking-[0.35em] text-slate-400">
            Exploratory Data Analysis
          </span>
        </div>

        {/* Big serif heading */}
        <h2
          className="font-serif font-black text-slate-900 leading-[0.92] tracking-[-0.04em]"
          style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
        >
          {data.title}
        </h2>

        {/* Accent bars */}
        <div className="flex items-center gap-2">
          <div className="w-16 h-[3px] rounded-full" style={{ background: "#6FAF9A" }} />
          <div className="w-8 h-[3px] rounded-full" style={{ background: "#C5D89A" }} />
          <div className="w-4 h-[3px] rounded-full" style={{ background: "#E4B49E" }} />
        </div>
      </div>
    </div>

    {/* ─── EDA PROCESS INDICATORS ─── */}
    <div className="w-full px-10 md:px-20 pb-16 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Filter, label: "Data Cleaning", sub: "Handling missing values & outliers" },
            { icon: BarChart3, label: "Distribution", sub: "Understanding data shape & spread" },
            { icon: PieChart, label: "Correlation", sub: "Variable relationships & patterns" },
            { icon: TrendingUp, label: "Trend Analysis", sub: "Time-based patterns & seasonality" },
          ].map((step, idx) => (
            <div
              key={idx}
              className="group flex flex-col gap-3 p-5 rounded-xl border-[2px] border-slate-900 shadow-[3px_3px_0_rgba(15,23,42,0.7)] bg-white hover:-translate-y-0.5 hover:shadow-[4px_4px_0_rgba(15,23,42,0.8)] transition-all duration-200 cursor-default"
            >
              <step.icon size={22} strokeWidth={2.2} className="text-slate-600 group-hover:text-slate-900 transition-colors" />
              <div>
                <p className="text-sm font-black text-slate-800 leading-tight">{step.label}</p>
                <p className="text-[11px] text-slate-400 mt-1 leading-snug">{step.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* ─── MAIN CONTENT — EDITORIAL READING ZONE ─── */}
    <div className="w-full px-10 md:px-20 pb-28 relative z-10">
      <div className="w-full max-w-5xl mx-auto">
        {/* Thin top rule */}
        <div className="w-full h-px mb-16" style={{ background: "linear-gradient(to right, transparent, rgba(15,23,42,0.12), transparent)" }} />

        {/* Drop cap-style intro marker */}
        <div className="flex items-center gap-3 mb-10">
          <Sparkles size={16} className="text-slate-400" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
            Analysis Findings
          </span>
          <div className="flex-1 h-px bg-slate-200" />
        </div>

        {/* 
          Main article body — optimized for long-form reading:
          - max-w-3xl ≈ 65-75 char line length (ideal readability)
          - text-[1.15rem] comfortable body size
          - leading-[2] generous line spacing  
          - text-justify for clean edges
          - Clear paragraph separation
        */}
        {/* Unified Text Canvas */}
        <article className="text-[1.1rem] leading-[1.85] text-slate-700 font-sans mt-4 w-full">
          {renderDesc(
            data.desc,
            "mb-5 last:mb-0 text-slate-700 font-medium"
          )}
        </article>

        {/* Bottom rule */}
        <div className="w-full h-px mt-16" style={{ background: "linear-gradient(to right, transparent, rgba(15,23,42,0.12), transparent)" }} />

        {/* Section end marker */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
        </div>
      </div>
    </div>
  </div>
);
