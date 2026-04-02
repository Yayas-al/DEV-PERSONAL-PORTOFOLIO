import { GraduationCap, Award, Briefcase } from "lucide-react";

const experiences = [
  {
    icon: GraduationCap,
    period: "2022",
    label: "Studi Independen",
    title: "AI Mastery — Orbit Future Academy",
    company: "Orbit Future Academy (OFA)",
    desc: "Membangun chatbot sekretaris kesehatan bernama CHESA menggunakan teknik NLP dan deep learning. Program mencakup 9 mata kuliah intensif mulai dari logika AI, pemrograman Python, hingga computer vision — selesai dengan IPK 3.70.",
    tools: ["Python", "Deep Learning", "NLP", "Computer Vision", "Reinforcement Learning"],
  },
  {
    icon: Award,
    period: "2023",
    label: "Bootcamp",
    title: "FGA Digital Talent — Data Science",
    company: "Kominfo × Digitalent",
    desc: "Membangun model klasifikasi dalam pelatihan intensif 154 jam. Kurikulum mencakup SQL, statistika, data visualization, Python, preprocessing, hingga machine learning — seluruhnya berbasis studi kasus nyata.",
    tools: ["Python", "SQL", "Statistics", "Machine Learning", "Data Visualization"],
  },
  {
    icon: Briefcase,
    period: "2024 — 2025",
    label: "Work Experience",
    title: "IT Staff",
    company: "PT Dian Bayu Tribuana",
    desc: "Merancang dan membangun system ticketing serta digital asset database dengan arsitektur relational database. Mengotomasi alur kerja operasional dan mendigitalkan manajemen aset perusahaan dari proses manual.",
    tools: ["Notion", "Excel", "Relational Database"],
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-background border-t-2 border-border"
    >
      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        {/* ─── Header ─── */}
        <div className="mb-20">
          <p className="text-sm font-bold text-muted-foreground uppercase tracking-[0.25em] mb-4">
            Career Journey
          </p>
          <h2
            className="font-serif font-black text-foreground leading-[1.08] tracking-[-0.03em] mb-4"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
          >
            Experience that{" "}
            <em className="font-serif text-primary italic">speaks volumes.</em>
          </h2>
          <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
            A timeline of my professional growth — from intensive bootcamps to
            hands-on industry experience, every step sharpened my analytical edge.
          </p>
        </div>

        {/* ─── Timeline ─── */}
        <div className="relative">
          {/* Center vertical line — visible on lg+ */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-border" />

          <div className="flex flex-col gap-16 lg:gap-24">
            {experiences.map((exp, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className="relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                >
                  {/* Timeline dot — center on lg */}
                  <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 z-20">
                    <div className="w-4 h-4 rounded-full bg-primary border-[3px] border-border shadow-[0_0_0_4px_var(--color-background)]" />
                  </div>

                  {/* Card — alternates position */}
                  <div
                    className={`${isLeft ? "lg:col-start-1" : "lg:col-start-2"
                      } lg:row-start-1`}
                  >
                    <div className="neo-card bg-card p-8 flex flex-col gap-5 hover:bg-secondary/10 transition-colors duration-200">
                      {/* Label badge */}
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/15 border-2 border-border rounded-full text-xs font-black text-foreground">
                          <exp.icon size={14} strokeWidth={2.5} />
                          {exp.label}
                        </span>
                      </div>

                      {/* Period */}
                      <p className="text-sm font-bold text-primary tracking-wide">
                        {exp.period}
                      </p>

                      {/* Title & Company */}
                      <div>
                        <h3 className="text-xl font-black text-foreground leading-tight">
                          {exp.title}
                        </h3>
                        <p className="text-sm font-medium text-muted-foreground mt-1">
                          {exp.company}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-[0.95rem] leading-[1.8] text-foreground/65">
                        {exp.desc}
                      </p>

                      {/* Tools */}
                      <div className="flex flex-wrap gap-2 mt-1">
                        {exp.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-3 py-1 bg-background border-2 border-border rounded-full text-xs font-bold text-foreground hover:bg-highlight hover:-translate-y-0.5 hover:shadow-[0_2px_0px_var(--color-border)] cursor-default transition-all"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty spacer for the other side on lg */}
                  <div
                    className={`hidden lg:block ${isLeft ? "lg:col-start-2" : "lg:col-start-1"
                      } lg:row-start-1`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};