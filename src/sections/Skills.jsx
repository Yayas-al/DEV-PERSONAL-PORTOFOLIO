import { skillCategories } from "../data/skillsData";

export const Skills = () => {
    return (
        <section className="py-20 bg-background relative z-10 border-t-2 border-border mt-10">
            <div className="container mx-auto px-6">
                <div className='animate-fade-in'>
                    <div className="mb-10 text-center md:text-left">
                        <p className='text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2'>Skill Set</p>
                        <h2 className='text-3xl md:text-4xl font-black text-foreground'>Tools of the trade</h2>
                    </div>
                    <div className='grid md:grid-cols-2 gap-6 relative z-10'>
                        {skillCategories.map((category, idx) => (
                            <div key={idx} className='neo-card bg-card p-6 flex flex-col gap-4 hover:bg-secondary/20 transition-colors'>
                                <div className='flex items-center gap-3'>
                                    <div className='p-2 bg-background border-2 border-border rounded-lg shadow-[2px_2px_0px_var(--color-border)]'>
                                        <category.icon className='w-6 h-6 text-foreground' />
                                    </div>
                                    <h3 className='text-xl font-bold text-foreground'>{category.title}</h3>
                                </div>
                                <div className='flex flex-wrap gap-2 mt-2'>
                                    {category.skills.map((skill, skillIdx) => (
                                        <span key={skillIdx} className='px-4 py-1.5 bg-background border-2 border-border rounded-full text-sm font-bold text-foreground hover:bg-highlight hover:-translate-y-1 hover:shadow-[0_2px_0px_var(--color-border)] cursor-default transition-all'>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
