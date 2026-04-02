export const StatsSectionModal = ({ project }) => {
  const stats = project.stats || project.metrics || [];

  if (!stats || stats.length === 0) return null;

  return (
    <div className="border-t-[1.5px] border-black/20 pt-8 mb-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8">
        {stats.map((m, i) => (
          <div
            key={i}
            className={`flex flex-col space-y-2 py-2 ${
              i < stats.length - 1
                ? "lg:pr-8 lg:border-r-[1.5px] border-black/10 lg:mr-8"
                : ""
            }`}
          >
            <div
              className="font-serif font-black text-black italic leading-none whitespace-nowrap"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              {m.value}
            </div>
            <div className="text-[10px] sm:text-xs font-black text-gray-400 uppercase tracking-[0.2em] leading-tight">
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
