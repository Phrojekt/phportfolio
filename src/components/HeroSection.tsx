import Link from "next/link";

    const HeroSection: React.FC = () => {
        return (
            <section className="relative min-h-[calc(100vh-80px)] flex items-center bg-gradient-to-br from-black via-[#121212] to-[#1a1a1a]">
                {/* Decorative dots - top left */}
                <div className="absolute top-70 left-58 grid grid-cols-4 gap-1.5 z-0">
                    {[...Array(16)].map((_, i) => (
                        <div key={i} className="w-4 h-4 bg-[#3f3f3f] rounded-full" />
                    ))}
                </div>

                <div className="container mx-auto px-24 z-10">
                    <div className="max-w-xl">
                        <p className="mb-1 font-light">Olá, eu sou</p>
                        <h1 className="text-5xl font-mono mb-4 tracking-wide">Paulo Henrique</h1>
                        <p className="text-sm max-w-md leading-relaxed text-[#d9d9d9] mb-8">
                            Um Engenheiro de Software que une paixão por programação e conhecimento em UX Design para criar
                            experiências online funcionais e memoráveis.
                        </p>

                        <div className="flex gap-4">
                            <Link
                                href="#curriculo"
                                className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-sm hover:bg-gray-200 transition-colors"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                                        stroke="black"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path d="M14 2V8H20" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16 13H8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16 17H8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10 9H9H8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="font-bold text-sm">Currículo</span>
                            </Link>
                            <Link
                                href="https://github.com/Phrojekt"
                                className="flex items-center gap-2 border border-white px-4 py-2 rounded-sm hover:bg-white/10 transition-colors"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9 19C4.7 20.4 4.7 16.5 3 16M15 21V17.5C15 16.5 15.1 16.1 14.5 15.5C17.3 15.2 20 14.1 20 9.49995C19.9988 8.30492 19.5325 7.15726 18.7 6.29995C19.0905 5.26192 19.0545 4.11158 18.6 3.09995C18.6 3.09995 17.5 2.79995 15.1 4.39995C13.0672 3.87054 10.9328 3.87054 8.9 4.39995C6.5 2.79995 5.4 3.09995 5.4 3.09995C4.94548 4.11158 4.90953 5.26192 5.3 6.29995C4.46745 7.15726 4.00122 8.30492 4 9.49995C4 14.1 6.7 15.2 9.5 15.5C8.9 16.1 8.9 16.7 9 17.5V21"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <span className="font-bold text-sm">Github</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Decorative dots - bottom right */}
                <div className="absolute bottom-24 right-24 grid grid-cols-4 gap-1.5">
                    {[...Array(16)].map((_, i) => (
                        <div key={i} className="w-4 h-4 bg-[#3f3f3f] rounded-full" />
                    ))}
                </div>
            </section>
        );
    };

    export default HeroSection;