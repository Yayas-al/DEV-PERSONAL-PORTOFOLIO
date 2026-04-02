import { Monitor } from "lucide-react";

export const SectionDashboard = ({ data, id }) => {
  if (!data?.media) return null;

  const isIframe = data.media.type === "iframe";

  return (
    <div
      id={id}
      className="w-full min-h-[90vh] flex flex-col justify-center items-center px-10 md:px-20 py-20 relative overflow-hidden"
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

      <div className="w-full max-w-[80rem] flex flex-col gap-8 relative z-10">
        {/* Top label */}
        <div className="flex items-center gap-4">
          <Monitor size={28} className="text-slate-500" />
          <h2 className="text-3xl md:text-4xl font-serif font-black text-slate-900 tracking-tight">
            {data.title}
          </h2>
        </div>

        {/* Frame */}
        <div className="w-full border border-slate-200 shadow-xl rounded-2xl overflow-hidden flex flex-col bg-slate-100">
          {/* Minimal browser chrome */}
          <div className="h-10 bg-white border-b border-slate-100 flex items-center px-5 gap-2.5 shrink-0">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <div className="flex-1 mx-4 h-5 bg-slate-100 rounded-full max-w-sm" />
          </div>

          {/* Media — iframe gets a fixed tall frame; image gets object-contain full display */}
          {isIframe ? (
            <div className="w-full" style={{ height: "70vh" }}>
              <iframe
                src={data.media.url}
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                title={data.title}
              />
            </div>
          ) : (
            <img
              src={data.media.url}
              alt={data.title}
              className="w-full h-auto object-cover"
            />
          )}
        </div>

        {/* Caption — only for live iframe */}
        {isIframe && (
          <p className="text-sm text-slate-400 font-medium text-center tracking-wide">
            Live dashboard · Scroll or zoom to explore
          </p>
        )}
      </div>
    </div>
  );
};
