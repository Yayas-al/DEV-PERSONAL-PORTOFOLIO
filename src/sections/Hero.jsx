import { Button } from '@/components/Button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { AnimatedBorderButton } from '../components/AnimatedBorderButton';
import { profileData } from '../data/profileData';

export const Hero = () => {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0 bg-background" />

            <div className="container mx-auto px-6 pt-32 pb-40 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 neo-card bg-card text-sm font-bold text-foreground">
                                <span className="w-3 h-3 bg-primary border-2 border-border rounded-full animate-pulse" />
                                {profileData.role}
                            </span>
                        </div>

                        <div className="space-y-4">
                            <h1 className=" text-5xl md:text-6xl lg:text-7xl font-black leading-tight animate-fade-in animation-delay-100 text-foreground">
                                {profileData.headline.normal1} <span className="bg-primary px-2 py-1 neo-card text-foreground inline-block -rotate-2">{profileData.headline.highlight1}</span>
                                <br />
                                {profileData.headline.normal2}
                                <br />
                                <span className="font-serif italic font-normal bg-secondary px-2 py-1 neo-card text-foreground inline-block rotate-2">
                                    {profileData.headline.highlight2}
                                </span>
                            </h1>
                            <p className="text-lg text-foreground font-medium max-w-lg animate-fade-in animation-delay-800 leading-relaxed">
                                {profileData.description}
                            </p>
                        </div>

                        <div className='flex flex-wrap gap-4 animate-fade-in animation-delay-300'>
                            <Button size="lg" onClick={scrollToContact}>
                                {profileData.contactText} <ArrowRight className='w-5 h-5' />
                            </Button>
                            <AnimatedBorderButton />
                        </div>

                        <div className='flex items-center gap-4 animate-fade-in animation-delay-400'>
                            <span className='text-sm text-muted-foreground'>Follow Me: </span>
                            {profileData.socials.map((social, idx) => (
                                <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" className='p-2 neo-btn bg-card text-foreground hover:bg-primary transition-all duration-300'>
                                    {<social.icon className='w-5 h-5' />}
                                </a>
                            ))}
                        </div>

                    </div>
                    <div className='relative animate-fade-in animation-delay-300'>
                        <div className='relative max-w-md mx-auto'>
                            <div className='relative neo-card bg-primary p-2'>
                                <img src={profileData.profileImage}
                                    alt="Profile"
                                    className='w-full aspect-[4/5] object-cover rounded-[8px] border-2 border-border bg-background' />

                                <div className='absolute -bottom-4 -right-4 neo-card bg-secondary px-4 py-3 animate-float'>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-3 h-3 bg-green-500 border-2 border-border rounded-full' />
                                        <span className='text-sm font-bold text-foreground'>{profileData.floatingBadge}</span>
                                    </div>
                                </div>

                                <div className='absolute -top-4 -left-4 neo-card bg-highlight px-4 py-3 animate-float animation-delay-500'>
                                    <div className='text-2xl font-black text-foreground'>{profileData.statsBadge.value}</div>
                                    <div className='text-xs font-bold text-foreground'>{profileData.statsBadge.label}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
                <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                    <span className="text-xs uppercase tracking-wider">Scroll</span>
                    <ChevronDown className="w-6 h-6 animate-bounce" />
                </a>
            </div>
        </section>
    );
};
