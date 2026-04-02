import { ExternalLink, Github } from "lucide-react";

export const HeroSectionModal = ({ project }) => {
  const badgeRaw = project.badgeText || project.stat || "Project • Details";
  const badgeLeft = badgeRaw.split("•")[0]?.trim();
  const badgeRight = badgeRaw.split("•")[1]?.trim();

  const title = project.title;
  const description = project.heroDesc || project.description;
  const ctaText = project.callToActionText || "Get Started";
  const ctaUrl = project.callToActionUrl || "#";
  const demoText = project.demoText || "See a Demo";
  const demoUrl = project.demoUrl || project.liveUrl || "#";
  const visualUrl = project.visualUrl;

  return (
    <div className="flex-1 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-10">
      {/* LEFT: Badge + Title + Desc + Buttons */}
      <div className="flex flex-col space-y-6">
        {/* Badge */}
        <div className="inline-flex items-center self-start rounded-full bg-emerald-400 border-[2px] border-black shadow-[3px_3px_0_#000000] overflow-hidden">
          <span className="px-3 py-1 bg-white font-black text-black text-[9px] uppercase tracking-widest border-r-[2px] border-black">
            {badgeLeft}
          </span>
          <span className="px-3 py-1 font-bold text-black text-[10px] tracking-wide">
            {badgeRight}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-black leading-[1.05] tracking-tight">
          {title}
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-600 font-medium leading-relaxed max-w-md">
          {description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href={ctaUrl}
            className="px-7 py-3.5 rounded-xl bg-[#FFDE59] border-[2.5px] border-black shadow-[5px_5px_0_#000000] text-base font-black text-black hover:translate-x-[2px] hover:translate-y-[2px] transition-all hover:shadow-none inline-flex items-center justify-center"
          >
            {ctaText}
          </a>
          <a
            href={demoUrl}
            target="_blank"
            rel="noreferrer"
            className="px-7 py-3.5 rounded-xl bg-white border-[2.5px] border-black shadow-[5px_5px_0_#000000] text-base font-black text-black hover:translate-x-[2px] hover:translate-y-[2px] transition-all hover:shadow-none inline-flex items-center justify-center gap-2"
          >
            {demoText} <ExternalLink size={18} strokeWidth={2.5} />
          </a>
        </div>
      </div>

      {/* RIGHT: Mockup Browser */}
      <div className="w-full">
        <div className="w-full rounded-[1.75rem] border-[3px] border-black shadow-[1rem_1rem_0_#000000] bg-white overflow-hidden">
          {/* Browser Bar */}
          <div className="h-10 bg-[#FFF9EB] border-b-[2.5px] border-black flex items-center px-5 gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full border-[1.5px] border-black bg-[#FF6B6B]" />
              <div className="w-2.5 h-2.5 rounded-full border-[1.5px] border-black bg-[#FFDE59]" />
              <div className="w-2.5 h-2.5 rounded-full border-[1.5px] border-black bg-[#6BCB77]" />
            </div>
            <div className="flex-1 mx-4 h-5 bg-white/60 rounded-full border-[1.5px] border-black/20" />
          </div>
          {/* Content Area */}
          <div className="aspect-[16/9] bg-gray-50 flex items-center justify-center overflow-hidden">
            {visualUrl ? (
              <img
                src={visualUrl}
                alt={title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-[150%] p-8 flex flex-col gap-5 bg-[#FEF4E8]">
                {/* Simulated UI Content */}
                <div className="w-full h-[30%] flex gap-4">
                  <div className="flex-1 bg-white border-[2px] border-black rounded-xl shadow-[3px_3px_0_#000000]" />
                  <div className="flex-1 bg-white border-[2px] border-black rounded-xl shadow-[3px_3px_0_#000000]" />
                  <div className="w-1/3 bg-white border-[2px] border-black rounded-xl shadow-[3px_3px_0_#000000]" />
                </div>
                <div className="flex-1 bg-white border-[2px] border-black rounded-xl shadow-[6px_6px_0_#000000] flex items-end gap-3 px-6 pb-5">
                  <div className="flex-1 h-[35%] bg-[#FFB6B9] border-[1.5px] border-black rounded-sm" />
                  <div className="flex-1 h-[60%] bg-[#FAE3D9] border-[1.5px] border-black rounded-sm" />
                  <div className="flex-1 h-[50%] bg-[#BBDED6] border-[1.5px] border-black rounded-sm" />
                  <div className="flex-1 h-[80%] bg-[#61C0BF] border-[1.5px] border-black rounded-sm" />
                  <div className="flex-1 h-[45%] bg-[#FFDE59] border-[1.5px] border-black rounded-sm" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
