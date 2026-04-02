export const StatsSectionModal = ({ project }) => {
  const stats = project.stats || project.metrics || [];

  if (!stats || stats.length === 0) return null;

  return (
    <div className="border-t-[1.5px] border-black/20 pt-8 mb-16 flex justify-center">
      <div className="flex flex-wrap justify-center gap-10 md:gap-12 lg:gap-16">
        {stats.map((m, i) => (
          <div
            key={i}
            className={`flex flex-col space-y-2 py-2 relative group ${
              i < stats.length - 1
                ? "lg:pr-16 lg:after:content-[''] lg:after:absolute lg:after:right-0 lg:after:top-1/2 lg:after:-translate-y-1/2 lg:after:w-[1.5px] lg:after:h-[80%] lg:after:bg-black/10"
                : ""
            }`}
          >
            <div
              className="font-serif font-black text-black italic leading-none whitespace-nowrap text-center lg:text-left"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              {m.value}
            </div>
            <div className="text-[10px] sm:text-xs font-black text-gray-400 uppercase tracking-[0.2em] leading-tight text-center lg:text-left">
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
