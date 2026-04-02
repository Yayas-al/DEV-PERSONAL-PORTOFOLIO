import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { useState } from "react";
import { ProjectDetailModal } from "../components/ProjectDetailModal";
import { portfolioData } from "../data/portfolioData";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(portfolioData.length / itemsPerPage);
  const currentProjects = portfolioData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <>
      <section id="projects" className="py-20 bg-background relative z-10 border-t-2 border-border mt-10">
        <div className="container mx-auto px-6">
          <div className="animate-fade-in">
            <div className="mb-12 text-center md:text-left">
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">Featured Work</p>
              <h2 className="text-3xl md:text-4xl font-black text-foreground">Projects that moved the needle</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              {currentProjects.map((project) => (
                <div key={project.id} className="neo-card bg-card p-8 flex flex-col gap-6 hover:shadow-[2px_2px_0_0_var(--color-border)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all relative">
                   {/* Top accent dash line */}
                   <div className={`absolute top-0 left-8 h-1 ${project.accentBg} w-16`} />

                   <div className="flex flex-col gap-4 mt-2">
                     <div>
                       <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full border-2 border-border shadow-[2px_2px_0px_var(--color-border)] ${project.accentBg} text-foreground mb-4`}>
                         {project.stat || project.badgeText}
                       </span>
                       <h3 className="text-2xl font-black text-foreground">{project.title}</h3>
                     </div>
                     
                     <p className="text-muted-foreground font-medium leading-relaxed">
                       {project.desc}
                     </p>
                     
                     <div className="flex flex-wrap gap-2 mt-2">
                       {project.tags.map((tag, tagIdx) => (
                         <span key={tagIdx} className="px-3 py-1 bg-muted border-2 border-border rounded-full text-xs font-bold text-foreground">
                           {tag}
                         </span>
                       ))}
                     </div>
                   </div>

                   <div className="mt-auto flex flex-wrap gap-4 pt-4 border-t-2 border-border/30">
                     <button onClick={() => setSelectedProject(project)} className={`flex items-center gap-2 px-6 py-2 bg-highlight border-2 border-border shadow-[2px_2px_0_var(--color-border)] rounded-lg text-sm font-bold text-foreground hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_var(--color-border)] transition-all mr-auto`}>
                       View Detail <ArrowRight className="w-4 h-4" />
                     </button>
                     <a href="#" className={`flex items-center gap-2 p-2 neo-btn ${project.accentBg} text-foreground hover:brightness-95`} aria-label="Live Dashboard">
                       <ExternalLink className="w-5 h-5" /> 
                     </a>
                     <a href="#" className="flex items-center gap-2 p-2 neo-btn bg-background text-foreground hover:bg-muted" aria-label="GitHub Code">
                       <Github className="w-5 h-5" />
                     </a>
                   </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center items-center gap-4">
                 <button 
                   onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
                   disabled={currentPage === 0}
                   className="p-3 bg-white border-[2px] border-black shadow-[2px_2px_0_#000000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_#000000] rounded-lg disabled:opacity-50 disabled:pointer-events-none transition-all flex items-center justify-center cursor-pointer"
                 >
                   <ArrowRight className="w-5 h-5 rotate-180 text-black" />
                 </button>
                 
                 <div className="flex gap-2">
                   {Array.from({ length: totalPages }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentPage(i)}
                        className={`w-3 h-3 rounded-full border-2 border-black cursor-pointer transition-colors ${currentPage === i ? "bg-black" : "bg-white"}`}
                      />
                   ))}
                 </div>

                 <button 
                   onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
                   disabled={currentPage === totalPages - 1}
                   className="p-3 bg-white border-[2px] border-black shadow-[2px_2px_0_#000000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_#000000] rounded-lg disabled:opacity-50 disabled:pointer-events-none transition-all flex items-center justify-center cursor-pointer"
                 >
                   <ArrowRight className="w-5 h-5 text-black" />
                 </button>
              </div>
            )}
            
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
};