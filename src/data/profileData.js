import { Facebook, Github, Linkedin } from 'lucide-react';

export const profileData = {
    role: "Junior Data Analyst",
    headline: {
        normal1: "Evolving ",
        highlight1: "through",
        normal2: "every small",
        highlight2: "increment"
    },
    description: "Hi, I'm Nuryasin (XINN) — your data storyteller. I turn complex, noisy datasets into clean, human stories. As an evolving junior data analyst, I am highly passionate about uncovering hidden insights and growing my skills through every small increment.",
    contactText: "Contact me",
    socials: [
        { icon: Github, href: "https://github.com/Yayas-al" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/muhamad-nuryasin-alkhafid/" },
        { icon: Facebook, href: "#" },
    ],
    profileImage: "/my-notion-face-transparent.png",
    floatingBadge: "Available for work",
    statsBadge: { value: "5+", label: "Data Projects" }
};
