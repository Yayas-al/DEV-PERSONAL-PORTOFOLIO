import { Database, BarChart3, Users, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Database,
    title: "Clean Data",
    desc: "Transforming messy, fragmented datasets into structured, analysis-ready tables that tell a clear story.",
  },
  {
    icon: BarChart3,
    title: "Sharp Analysis",
    desc: "Going beyond surface-level numbers to uncover hidden patterns, anomalies, and actionable business insights.",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "Bridging the gap between technical findings and business stakeholders through clear, visual communication.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Growth",
    desc: "Constantly learning new tools, techniques, and frameworks — every project is an opportunity to level up.",
  },
];

export const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background border-t-2 border-border"
    >
      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        {/* ─── Top label ─── */}
        <p className="text-sm font-bold text-muted-foreground uppercase tracking-[0.25em] mb-16">
          About Me
        </p>

        {/* ─── Main Grid: Left text / Right cards ─── */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* ════ LEFT COLUMN ════ */}
          <div className="flex flex-col gap-10">
            {/* Big italic serif heading */}
            <h2
              className="font-serif font-black text-foreground leading-[1.08] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)" }}
            >
              Turning raw data into{" "}
              <em className="font-serif text-primary italic">
                clear, actionable
              </em>
              <br />
              business stories.
            </h2>

            {/* Lead intro — slightly larger, sets the tone */}
            <p className="text-[1.15rem] leading-[1.85] font-sans text-foreground/80">
              Hi, I'm <span className="font-black text-foreground">Nuryasin (XINN)</span> — your data storyteller.
              I turn complex, noisy datasets into clean, human stories. As an evolving
              junior data analyst, I am highly passionate about uncovering hidden
              insights and growing my skills through every small increment.
            </p>

            {/* Expertise block — with accent border for visual break */}
            <div className="pl-5 border-l-[3px] border-primary">
              <p className="text-[0.98rem] leading-[1.9] font-sans text-foreground/65">
                My toolkit includes{" "}
                <span className="font-bold text-foreground/85">SQL</span>,{" "}
                <span className="font-bold text-foreground/85">Python</span>, and visualization
                platforms like{" "}
                <span className="font-bold text-foreground/85">Tableau</span> &{" "}
                <span className="font-bold text-foreground/85">Power BI</span> — from building
                ETL pipelines to crafting interactive dashboards. I combine analytical
                rigor with a keen eye for storytelling and clarity.
              </p>
            </div>

            {/* Closing — lighter, shorter */}
            <p className="text-[0.95rem] leading-[1.9] font-sans text-foreground/55">
              When I'm not wrangling data, you'll find me exploring new analytical
              techniques, contributing to open-source projects, or sharpening my
              skills one dataset at a time.
            </p>

            {/* Quote card */}
            <div className="neo-card bg-secondary p-6">
              <p className="text-[1rem] leading-[1.8] font-serif italic text-foreground">
                "My mission is to uncover insights that are not just numbers on a
                screen, but truly meaningful narratives — stories that
                stakeholders trust and teams can act on immediately."
              </p>
            </div>
          </div>

          {/* ════ RIGHT COLUMN — 2×2 Value Cards ════ */}
          <div className="grid grid-cols-2 gap-4">
            {values.map((item, idx) => (
              <div
                key={idx}
                className="neo-card bg-card p-6 flex flex-col gap-4 hover:bg-secondary/20 hover:-translate-y-1 transition-all duration-200 cursor-default"
              >
                {/* Icon */}
                <div className="p-2.5 bg-background border-2 border-border rounded-lg shadow-[2px_2px_0px_var(--color-border)] w-fit">
                  <item.icon size={22} strokeWidth={2} className="text-foreground" />
                </div>

                {/* Title */}
                <h3 className="text-base font-black text-foreground">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};