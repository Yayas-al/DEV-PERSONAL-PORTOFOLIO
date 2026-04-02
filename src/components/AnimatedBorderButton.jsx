import { Download } from "lucide-react";

export const AnimatedBorderButton = () => {
  return (
    <a
      href="/MuhamadNuryasin_CVIT.pdf"
      download="MuhamadNuryasin_CVIT.pdf"
      className="relative flex items-center justify-center neo-btn bg-secondary text-foreground font-bold px-8 py-4 text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-border disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        <Download className="w-5 h-5"/>
        Download CV
      </span>
    </a>
  );
};