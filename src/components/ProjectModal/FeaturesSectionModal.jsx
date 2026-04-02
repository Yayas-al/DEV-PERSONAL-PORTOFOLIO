import { Lightbulb, Briefcase, Database, LineChart, Monitor, Code, AlertOctagon, FileSearch } from "lucide-react";

const iconMap = {
  Insight: Lightbulb,
  Problem: AlertOctagon,
  Overview: Database,
  Analysis: LineChart,
  Dashboard: Monitor,
  Technical: Code,
  Audit: FileSearch,
  Recommendation: Briefcase
};

const staticFeaturesMap = {
  Insight: {
    title: "Key Insights",
    desc: "Menyajikan temuan paling berdampak dari analisis data — pola tersembunyi, anomali, dan peluang bisnis yang ditemukan selama eksplorasi."
  },
  Recommendation: {
    title: "Rekomendasi Bisnis",
    desc: "Menampilkan langkah-langkah aksi strategis yang disusun berdasarkan insight — rekomendasi konkret yang siap dieksekusi oleh tim bisnis."
  },
  Overview: {
    title: "Data Overview",
    desc: "Memberikan gambaran umum tentang sumber data, volume, dan cakupan dataset yang digunakan dalam proyek ini."
  },
  Analysis: {
    title: "Exploratory Data Analysis (EDA)",
    desc: "Menampilkan proses eksplorasi data — distribusi, korelasi, pola musiman, dan anomali yang ditemukan melalui analisis statistik."
  },
  Technical: {
    title: "Technical Pipeline",
    desc: "Menjelaskan arsitektur teknis yang digunakan — tools, pipeline, infrastruktur, dan alur kerja engineering di balik proyek."
  },
  Dashboard: {
    title: "Dashboard & Visualization",
    desc: "Demonstrasi interaktif dari dashboard analitik yang telah dibangun secara visual."
  },
  Problem: {
    title: "Problem Statement",
    desc: "Mendefinisikan akar permasalahan bisnis yang diselesaikan melalui pendekatan berbasis data."
  },
  Audit: {
    title: "Data Quality Audit",
    desc: "Laporan detail mengenai kualitas data mentah dan proses pembersihan data yang dilakukan."
  }
};

export const FeaturesSectionModal = ({ project }) => {
  const steps = project.steps || [];

  if (!steps || steps.length === 0) return null;

  return (
    <div className="w-full bg-[#A7D7D1] p-10 md:p-16">
      <div className="grid lg:grid-cols-12 gap-16 max-w-[87.5rem] mx-auto">
        
        {/* Left Column: Text & Image */}
        <div className="lg:col-span-5">
          <div className="flex flex-col space-y-8 sticky top-12 pb-10 md:pb-16">
            <div>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-black leading-tight mb-6">
              Unlock Our Fantastic Features!
            </h2>
            <p className="text-base text-gray-800 font-medium leading-relaxed mb-8 pr-4">
              Explore our dynamic and effective tools that make enhancing your project's performance effortless and enjoyable!
            </p>
            <button className="px-7 py-3 rounded-xl bg-[#FFDE59] border-[2.5px] border-black shadow-[4px_4px_0_#000000] text-sm font-black text-black hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer hover:shadow-none">
              Learn More
            </button>
          </div>

          <div className="w-full mt-8 rounded-[1.5rem] border-[3px] border-black shadow-[0.75rem_0.75rem_0_#000000] bg-white overflow-hidden aspect-square flex items-center justify-center relative transition-all duration-300">
               {/* Decorative lines like in the image */}
               <div className="absolute inset-0 opacity-20 pointer-events-none stroke-black/50 overflow-hidden z-0">
                 <svg width="100%" height="100%">
                    <line x1="0" y1="100%" x2="100%" y2="0" stroke="currentColor" strokeWidth="2" />
                 </svg>
               </div>

               {project.visualUrl ? (
                  <img src={project.visualUrl} alt="Features" className="w-full h-full object-cover z-10 relative" />
               ) : (
                  <div className="w-full h-full p-6 flex flex-col gap-4 bg-gray-50 z-10 relative">
                     {/* Abstract Chart mockup for Left Side Graphic */}
                     <div className="w-full h-1/2 bg-white border-[2.5px] border-black rounded-xl p-4 flex flex-col justify-end gap-2 shadow-[4px_4px_0_#000000]">
                        <div className="flex items-end justify-between h-full gap-2 px-2">
                           <div className="w-1/6 bg-blue-300 h-[40%] rounded-sm border-2 border-black"></div>
                           <div className="w-1/6 bg-emerald-400 h-[70%] rounded-sm border-2 border-black"></div>
                           <div className="w-1/6 bg-[#FFB6B9] h-[50%] rounded-sm border-2 border-black"></div>
                           <div className="w-1/6 bg-[#FFDE59] h-[90%] rounded-sm border-2 border-black"></div>
                           <div className="w-1/6 bg-purple-300 h-[60%] rounded-sm border-2 border-black"></div>
                        </div>
                     </div>
                     <div className="w-full flex-1 bg-white border-[2.5px] border-black rounded-xl p-4 shadow-[4px_4px_0_#000000]">
                         <div className="flex gap-4 items-center">
                            <div className="w-12 h-12 rounded-full border-2 border-black bg-[#FFB6B9]"></div>
                            <div className="flex-1 space-y-2">
                               <div className="h-3 bg-black/10 rounded-full w-3/4"></div>
                               <div className="h-3 bg-black/10 rounded-full w-1/2"></div>
                            </div>
                         </div>
                     </div>
                  </div>
               )}
          </div>
          </div>
        </div>

        {/* Right Column: Stack of Cards */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-5 relative z-10 h-full">
          {steps.map((step, idx) => {
            const Icon = iconMap[step.tag] || Lightbulb;

            return (
              <div 
                key={idx} 
                onClick={() => {
                  const el = document.getElementById(`section-${step.tag}`);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className={`group p-6 rounded-xl border-[2.5px] border-black flex items-start gap-6 cursor-pointer transition-all duration-300 bg-[#FFF9EB] shadow-[4px_4px_0_#000000] hover:-translate-y-1 hover:bg-[#FFC6B6] hover:shadow-[6px_6px_0_#000000]`}
              >
                <div className={`shrink-0 p-3 rounded-full border-[2px] border-black transition-colors duration-300 bg-[#FFF2D0] group-hover:bg-white`}>
                  <Icon size={28} strokeWidth={2.5} className="text-black" />
                </div>
                <div className="flex flex-col pt-1">
                  <h3 className="text-xl font-black text-black mb-2 transition-colors duration-300">
                    {staticFeaturesMap[step.tag]?.title || step.title}
                  </h3>
                  <p className={`text-sm font-medium leading-relaxed transition-colors duration-300 text-gray-600 group-hover:text-red-900/90`}>
                    {staticFeaturesMap[step.tag]?.desc || step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
