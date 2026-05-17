export interface Project {
    id: string;
    name: string;
    slug: string;
    year: string;
    image: string;
    logo?: string;
    overview: string;
    techStack: string[];
    gallery: string[];
    github?: string;
    deploy?: string;
}

export const projects: Project[] = [
    {
        id: "01",
        name: "Ekkon",
        slug: "ekkon",
        year: "2026",
        logo: "/ekkon/logo.png",
        image: "/ekkon/hero1.png",
        overview: "Ekkon is an AI voice generation platform for turning text into realistic, natural-sounding speech. It is built for creators and teams who need quick voice drafts for stories, podcasts, marketing copy, notifications, and product experiences.",
        techStack: ["Next.js", "Shadcn", "TypeScript", "TRPC", "PostgreSQL", "Cloudflare R2", "wavesurfer.js"],
        gallery: [
            "/ekkon/hero1.png",
            "/ekkon/hero2.png",
            "/ekkon/hero3.png",
        ],
        deploy: "https://ekkon-kappa.vercel.app/",
        github: "https://github.com/abhimanyujangid/ekkon",
    },
    {
        id: "02",
        name: "Airplane 3D Render Scroller",
        slug: "airplane-3d-render-scroller",
        year: "2026",
        image: "/images/airplane.png",
        overview: "An experimental 3D web experience built with Three.js and GSAP. It features a continuous 3D render of an airplane that smoothly reacts to scroll events, creating a highly immersive cinematic feel.",
        techStack: ["Three.js", "React Three Fiber", "GSAP", "Next.js"],
        gallery: [
            "/images/airplane.png",
            "https://images.unsplash.com/photo-1504333638930-c8787321efa0?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop",
        ],
        deploy: "https://airplane-3d-render-scroller-effect.vercel.app",
        github: "https://github.com/abhimanyujangid/airplane",
    },
    {
        id: "03",
        name: "Agriculture Website",
        slug: "agriculture-website",
        year: "2026",
        image: "/images/Indocrown.png",
        overview: "A comprehensive digital solution for modern agriculture. This website showcases equipment, services, and educational resources tailored for farming communities with localization support.",
        techStack: ["Next.js", "Tailwind CSS", "i18n", "Framer Motion"],
        gallery: [
            "/images/Indocrown.png",
            "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1000&auto=format&fit=crop",
        ],
        deploy: "https://dhannalal-surendra-kumar-krishi-yan.vercel.app/en",
    },
    {
        id: "04",
        name: "Web3 Interactive Platform",
        slug: "web3-interactive-platform",
        year: "2021",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f4ec651?q=80&w=2832&auto=format&fit=crop",
        overview: "A futuristic Web3 platform conceptualized to bridge the gap between decentralized technologies and mainstream users. Focuses heavily on micro-interactions and dark mode aesthetics.",
        techStack: ["React", "Web3.js", "Solidity", "Tailwind CSS"],
        gallery: [
            "https://images.unsplash.com/photo-1639762681485-074b7f4ec651?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1644361566696-3d442b5b482a?q=80&w=1000&auto=format&fit=crop",
        ],
        github: "https://github.com/abhimanyujangid/web3-platform",
    },
];
