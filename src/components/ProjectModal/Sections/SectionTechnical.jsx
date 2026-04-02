import { Code, Terminal, GitBranch, Layers, Cpu, ArrowRight } from "lucide-react";
import { renderDesc } from "./utils";

export const SectionTechnical = ({ data, id }) => {

  // Split description into paragraphs for card rendering
  const paragraphs = (data.desc || "").split("\n").filter(Boolean);

  return (
    <div
      id={id}
      className="w-full min-h-[90vh] flex flex-col justify-center px-10 md:px-20 py-24 relative overflow-hidden"
      style={{ background: "#F1F4E8" }}
    >
      {/* Decorative grid pattern — subtle blueprint feel */}
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
        className="absolute -top-20 -right-20 w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #D1EAE3 0%, transparent 70%)", opacity: 0.4 }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #E4D9C5 0%, transparent 70%)", opacity: 0.35 }}
      />

      <div className="w-full max-w-6xl mx-auto relative z-10 flex flex-col gap-12">
        
        {/* ─── Header ─── */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 bg-white border-[2.5px] border-slate-900 shadow-[5px_5px_0_rgba(15,23,42,0.85)] rounded-xl">
              <Code size={30} strokeWidth={2.5} className="text-slate-800" />
            </div>
            <span className="text-[11px] font-black uppercase tracking-[0.35em] text-slate-400">
              Engineering & Architecture
            </span>
          </div>

          <h2
            className="font-serif font-black text-slate-900 leading-[0.92] tracking-[-0.04em]"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)" }}
          >
            {data.title}
          </h2>

          {/* Accent bars */}
          <div className="flex items-center gap-2">
            <div className="w-14 h-[3px] rounded-full" style={{ background: "#6FAF9A" }} />
            <div className="w-7 h-[3px] rounded-full" style={{ background: "#C5D89A" }} />
            <div className="w-3 h-[3px] rounded-full" style={{ background: "#E4B49E" }} />
          </div>
        </div>

        {/* ─── Pipeline visual + Content ─── */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">

          {/* Left — Pipeline icons column */}
          <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start gap-6 lg:gap-0">
            {[
              { icon: Terminal, label: "Extract", color: "#6FAF9A" },
              { icon: GitBranch, label: "Transform", color: "#C5D89A" },
              { icon: Layers, label: "Load", color: "#E4B49E" },
              { icon: Cpu, label: "Deploy", color: "#A8C5BA" },
            ].map((step, idx) => (
              <div key={idx} className="flex lg:flex-col items-center gap-3">
                {/* Connection line (not on first) */}
                {idx > 0 && (
                  <div className="hidden lg:block w-[2px] h-10 mx-auto" style={{ background: `linear-gradient(to bottom, ${[
                    "#6FAF9A", "#C5D89A", "#E4B49E", "#A8C5BA"
                  ][idx - 1]}, ${step.color})` }} />
                )}
                {idx > 0 && (
                  <ArrowRight size={16} className="lg:hidden text-slate-300 shrink-0" />
                )}

                {/* Step card */}
                <div className="group flex items-center lg:flex-col gap-3 cursor-default">
                  <div
                    className="p-3 rounded-xl border-[2.5px] border-slate-900 shadow-[3px_3px_0_rgba(15,23,42,0.7)] bg-white transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-[4px_4px_0_rgba(15,23,42,0.8)]"
                  >
                    <step.icon size={22} strokeWidth={2.2} className="text-slate-700" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                    {step.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right — Content card */}
          <div className="lg:col-span-9">
            <div
              className="relative p-8 md:p-12 rounded-2xl border-[2.5px] border-slate-900 shadow-[6px_6px_0_rgba(15,23,42,0.8)] bg-white"
            >
              {/* Subtle corner label */}
              <div className="absolute top-4 right-5 flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                PIPELINE
              </div>

              {/* Content body - Unified Text Canvas */}
              <div className="text-[1.1rem] leading-[1.85] text-slate-700 font-sans mt-4 w-full">
                {renderDesc(
                  data.desc,
                  "mb-5 last:mb-0 text-slate-700 font-medium"
                )}
              </div>

              {/* Bottom tech indicators */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-3">
                {["Pipeline", "Reproducible", "Documented", "Automated"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.15em] text-slate-500 bg-[#F1F4E8] border border-slate-200 rounded-lg"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
