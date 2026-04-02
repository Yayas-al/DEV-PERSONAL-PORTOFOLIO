import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navLinks } from "../data/navData";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
        isScrolled ? "bg-background border-b-2 border-border shadow-[0_4px_0_0_var(--color-border)] py-3" : "bg-transparent py-5"
      }  z-[100]`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between relative">
        <a
          href="#"
          className="text-2xl font-black tracking-tight hover:text-primary text-foreground"
        >
          Xinn<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="neo-card bg-card px-2 py-1 flex items-center gap-2">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm font-bold text-foreground hover:bg-highlight hover:text-foreground rounded-lg transition-colors border-2 border-transparent hover:border-border"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button size="sm" onClick={scrollToContact}>Contact Me</Button>
        </div>

        {/* Mobile Menu Button - Using Neo brutally blocky icon */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer neo-card bg-highlight flex items-center justify-center relative z-[60]"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[100%] mt-2 left-6 right-6 neo-card bg-card animate-fade-in z-50 overflow-hidden">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold text-foreground bg-background border-2 border-border px-4 py-3 rounded-xl shadow-[2px_2px_0px_var(--color-border)] hover:bg-highlight hover:shadow-[0_0_0_var(--color-border)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                {link.label}
              </a>
            ))}

            <div className="mt-4">
              <Button className="w-full" onClick={() => {
                setIsMobileMenuOpen(false);
                scrollToContact();
              }}>
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
