import { Lightbulb, Briefcase, Database, LineChart, Monitor, Code } from "lucide-react";

const iconMap = {
  Impact: Lightbulb,
  Business: Briefcase,
  Overview: Database,
  Analysis: LineChart,
  Visual: Monitor,
  Technical: Code,
};

export const FeaturesSectionModal = ({ project }) => {
  const steps = project.steps || [];

  if (!steps || steps.length === 0) return null;

  return (
    <div className="mx-[-2.5rem] md:mx-[-4rem] mb-[-3rem] md:mb-[-3.5rem] mt-10 border-t-[3px] border-black bg-[#A7D7D1] p-10 md:p-16">
      <div className="grid lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Column: Text & Image */}
        <div className="lg:col-span-5 flex flex-col space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-black leading-tight mb-6">
              Unlock Our Fantastic Features!
            </h2>
            <p className="text-base text-gray-800 font-medium leading-relaxed mb-8 pr-4">
              Explore our dynamic and effective tools that make enhancing your project's performance effortless and enjoyable!
            </p>
            <button className="px-7 py-3 rounded-xl bg-[#FFDE59] border-[2.5px] border-black shadow-[4px_4px_0_#000000] text-sm font-black text-black hover:translate-x-[2px] hover:translate-y-[2px] transition-all hover:shadow-none">
              Learn More
            </button>
          </div>

          <div className="w-full mt-8 rounded-[1.5rem] border-[3px] border-black shadow-[0.75rem_0.75rem_0_#000000] bg-white overflow-hidden aspect-square flex items-center justify-center relative">
               {/* Decorative lines like in the image */}
               <div className="absolute inset-0 opacity-20 pointer-events-none stroke-black/50 overflow-hidden">
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

        {/* Right Column: Stack of Cards */}
        <div className="lg:col-span-7 flex flex-col space-y-5 lg:-mt-4 relative z-10">
          {steps.map((step, idx) => {
            const Icon = iconMap[step.tag] || Lightbulb;
            const isHighlighted = idx === 0;

            return (
              <div 
                key={idx} 
                className={`p-6 rounded-xl border-[2.5px] border-black flex items-start gap-6 transition-transform hover:-translate-y-1 ${
                  isHighlighted 
                    ? "bg-[#FFC6B6] shadow-[6px_6px_0_#000000]" 
                    : "bg-[#FFF9EB] shadow-[4px_4px_0_#000000] opacity-95 hover:opacity-100"
                }`}
              >
                <div className={`shrink-0 p-3 rounded-full border-[2px] border-black ${isHighlighted ? 'bg-white' : 'bg-[#FFF2D0]'}`}>
                  <Icon size={28} strokeWidth={2.5} className="text-black" />
                </div>
                <div className="flex flex-col pt-1">
                  <h3 className="text-xl font-black text-black mb-2">
                    {step.title}
                  </h3>
                  <p className={`text-sm font-medium leading-relaxed ${isHighlighted ? 'text-red-900/80' : 'text-gray-600'}`}>
                    {step.desc}
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
