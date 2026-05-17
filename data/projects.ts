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
        techStack: ["Next.js", "Shadcn", "TypeScript", "TRPC", "PostgreSQL", "Cloudflare R2", "Wavesurfer.js", "Chatterbox-tts"],
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
        name: "PureFlow",
        slug: "pureflow",
        year: "2026",
        logo: "/pureflow/logo.png",
        image: "/pureflow/hero1.png",
        overview: "An experimental image and video-driven scrolling landing page inspired by modern cinematic web experiences. Built with smooth scroll orchestration, frame-based animations, and immersive transitions, the website reacts fluidly to user interaction as visuals evolve section by section. The project explores how leading creative studios and major companies craft high-end storytelling websites using techniques like frame-sequence scrolling, video scrubbing, layered motion effects, parallax depth, and synchronized GSAP timelines. Designed to study the workflow behind premium interactive experiences, the landing page combines performance-focused rendering with visually rich scroll animations to create a seamless narrative journey.",
        techStack: ["GSAP", "Next.js", "tailwindcss"],
        gallery: [
            "/pureflow/hero1.png",
            "/pureflow/hero2.png",
            "/pureflow/hero3.png",
        ],
        deploy: "https://airplane-3d-render-scroller-effect.vercel.app",
        github: "https://github.com/abhimanyujangid/airplane",
    },
    {
        id: "03",
        name: "Indocrown",
        slug: "indocrown",
        year: "2026",
        image: "/indocrown/hero1.png",
        overview: "A modern agriculture business landing page designed with clean UI aesthetics, smooth animations, and a premium user experience. The website highlights farming solutions, agricultural services, smart equipment, and sustainable technology through elegant layouts, cinematic section transitions, and interactive storytelling. Built with performance-first architecture, the platform focuses on SEO optimization, fast loading speeds, SSR support, and responsive design to ensure maximum reach and accessibility. Inspired by contemporary SaaS and enterprise websites, the experience combines minimal white-space driven design, subtle motion effects, and modern visual hierarchy to create a trustworthy and professional digital presence for the agriculture industry.",
        techStack: ["Next.js", "MUI", "i18n", "Framer Motion"],
        gallery: [
            "/indocrown/hero1.png",
            "/indocrown/hero2.png",
            "/indocrown/hero3.png",
        ],
        github: "https://github.com/abhimanyujangid/indocrown",
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
