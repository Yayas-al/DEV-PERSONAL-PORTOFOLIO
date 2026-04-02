import { Database, Code2, LineChart, Table2, Cloud, FileCode2, Boxes, BookOpen, Terminal, Presentation, Network, LayoutTemplate, Workflow } from "lucide-react";

const getTechLogo = (name) => {
  const norm = name.toLowerCase();
  
  // High quality external logos
  const logoMap = {
    python: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    react: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    r: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg",
    pandas: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
    "scikit-learn": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
    kafka: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg",
    streamlit: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg",
    numpy: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
    docker: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    jira: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg",
    "sql server": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
    aws: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    "google workspace": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
    matlab: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg"
  };

  if (logoMap[norm]) {
     return { type: "image", src: logoMap[norm] };
  }

  // Icons for tools that don't have good external SVGs
  // 'dbt' broken SVG URL replaced with native orange database icon
  if (norm.includes("dbt") || norm.includes("sql") || norm.includes("query") || norm === "database") {
     const color = norm.includes("dbt") ? "text-orange-500" : "text-blue-500";
     return { type: "icon", icon: Database, color };
  }
  if (norm.includes("excel") || norm.includes("spreadsheet")) {
     return { type: "icon", icon: Table2, color: "text-green-600" };
  }
  if (norm.includes("tableau") || norm.includes("power bi") || norm.includes("looker") || norm.includes("chart") || norm.includes("seaborn") || norm.includes("matplotlib")) {
     return { type: "icon", icon: LineChart, color: "text-yellow-600" };
  }
  if (norm.includes("cloud")) {
     return { type: "icon", icon: Cloud, color: "text-orange-500" };
  }
  if (norm.includes("notion") || norm.includes("doc")) {
     return { type: "icon", icon: BookOpen, color: "text-gray-900" };
  }

  // Generic Fallback
  return { type: "text", text: name.substring(0, 2).toUpperCase() };
};

const TechBox = ({ name }) => {
  const logo = getTechLogo(name);

  return (
    <div className="flex items-center gap-4 bg-white border-[2px] border-black rounded-xl px-6 py-4 shadow-[3px_3px_0_#000000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_#000000] transition-all cursor-default">
      <div className="w-8 h-8 flex items-center justify-center shrink-0">
        {logo.type === "image" && (
           <img src={logo.src} alt={name} className="w-full h-full object-contain" />
        )}
        {logo.type === "icon" && (
           <logo.icon className={`w-full h-full ${logo.color}`} strokeWidth={2.5} />
        )}
        {logo.type === "text" && (
           <div className="w-full h-full bg-gray-200 border-[1.5px] border-black rounded-md flex items-center justify-center font-black text-xs text-black">
             {logo.text}
           </div>
        )}
      </div>
      <span className="font-bold text-gray-800 text-lg whitespace-nowrap">{name}</span>
    </div>
  );
};

export const TechStackSectionModal = ({ project }) => {
  const tags = project.tags || [];

  if (!tags || tags.length === 0) return null;

  return (
    <div className="mx-[-2.5rem] md:mx-[-4rem] mb-[-3rem] md:mb-[-3.5rem] border-t-[3px] border-black bg-[#FDFBF0] p-10 md:p-16 flex flex-col items-center text-center">
        
       {/* HEADINGS */}
       <div className="max-w-2xl mx-auto mb-12">
         <h2 className="text-3xl md:text-5xl font-serif font-black text-black leading-tight mb-4 tracking-tight">
           Technology Stack
         </h2>
         <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed">
           The tools and cutting-edge technologies that empower this solution robustly and efficiently.
         </p>
       </div>

       {/* GRID COMPONENT */}
       <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl w-full mb-12">
          {tags.map((tag, idx) => (
             <TechBox key={idx} name={tag} />
          ))}
       </div>

    </div>
  );
};
