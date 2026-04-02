import { Mail, Linkedin, MessageCircle } from "lucide-react";

export const CtaSectionModal = () => (
  <div
    className="w-full relative overflow-hidden"
    style={{ background: "#54595F" }}
  >
    {/* Subtle blueprint grid — lighter for dark bg */}
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.06]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />

    {/* Soft gradient blobs */}
    <div
      className="absolute -top-20 -left-20 w-[350px] h-[350px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(circle, rgba(111,175,154,0.15) 0%, transparent 70%)" }}
    />
    <div
      className="absolute -bottom-16 -right-16 w-[300px] h-[300px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(circle, rgba(197,216,154,0.12) 0%, transparent 70%)" }}
    />

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center text-center px-10 md:px-20 py-24 md:py-32">
      {/* Badge */}
      <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-[11px] font-black uppercase tracking-[0.35em] text-white/70 mb-10">
        <MessageCircle size={14} />
        Let's Connect
      </span>

      {/* Big heading */}
      <h2
        className="font-serif font-black text-white leading-[1.05] tracking-[-0.03em] max-w-2xl"
        style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
      >
        Have a data story
        <br />
        to tell?
      </h2>

      {/* Subtitle */}
      <p className="mt-6 text-[1.05rem] leading-relaxed text-white/60 max-w-lg font-sans">
        Whether you need a full-time analyst, a project consultant, or
        just want to talk shop about data — I'm always happy to connect.
      </p>

      {/* CTA Buttons */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        {/* Email button — primary */}
        <a
          href="mailto:muhammadnuryasinalkhafid@gmail.com"
          className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-white border-[2.5px] border-black shadow-[4px_4px_0_#000000] text-sm font-black text-slate-900 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150"
        >
          <Mail size={18} strokeWidth={2.5} className="text-slate-700" />
          Email Me
        </a>

        {/* LinkedIn button — secondary */}
        <a
          href="https://www.linkedin.com/in/muhamad-nuryasin-alkhafid/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-transparent border-[2.5px] border-white/30 text-sm font-black text-white hover:bg-white/10 hover:border-white/50 transition-all duration-150"
        >
          <Linkedin size={18} strokeWidth={2.5} />
          LinkedIn Profile
        </a>
      </div>

      {/* Bottom decorative dots */}
      <div className="flex items-center gap-2 mt-16">
        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
      </div>
    </div>
  </div>
);
