import Link from "next/link";

const HeroSection: React.FC = () => {
    return (
        <section className="relative min-h-[calc(100vh-80px)] flex items-center bg-gradient-to-br from-black via-[#121212] to-[#1a1a1a]" id="quem-sou">
            {/* Decorative dots - top left */}
            <div
                className="
                    absolute z-0
                    top-16 left-8
                    grid-cols-4 gap-1.5
                    sm:top-10 sm:left-4
                    md:top-16 md:left-16
                    lg:top-24 lg:left-24
                    hidden md:grid
                "
            >
                {[...Array(16)].map((_, i) => (
                    <div key={i} className="w-3 h-3 bg-[#3f3f3f] rounded-full sm:w-2 sm:h-2 md:w-3 md:h-3 lg:w-4 lg:h-4" />
                ))}
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 z-10">
                <div className="max-w-xl">
                    <p className="mb-1 font-light font-jetbrains">Olá, eu sou</p>
                    <h1 className="text-5xl mb-4 tracking-wide font-jetbrains">Paulo Henrique</h1>
                    <p className=" max-w-md font-montserrat leading-relaxed text-white mb-8">
                        Um Engenheiro de Software que une paixão por programação e conhecimento em UX Design para criar
                        experiências online funcionais e memoráveis.
                    </p>

                    <div className="flex gap-4">
                        <Link
                            href="/curriculum.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition-colors"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                            <span className="font-semibold font-montserrat text-base">Currículo</span>
                        </Link>
                        <Link
                            href="https://github.com/Phrojekt"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 border border-white px-6 py-3 rounded-md hover:bg-white/10 transition-colors"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9 19C4.7 20.4 4.7 16.5 3 16M15 21V17.5C15 16.5 15.1 16.1 14.5 15.5C17.3 15.2 20 14.1 20 9.49995C19.9988 8.30492 19.5325 7.15726 18.7 6.29995C19.0905 5.26192 19.0545 4.11158 18.6 3.09995C18.6 3.09995 17.5 2.79995 15.1 4.39995C13.0672 3.87054 10.9328 3.87054 8.9 4.39995C6.5 2.79995 5.4 3.09995 5.4 3.09995C4.94548 4.11158 4.90953 5.26192 5.3 6.29995C4.46745 7.15726 4.00122 8.30492 4 9.49995C4 14.1 6.7 15.2 9.5 15.5C8.9 16.1 8.9 16.7 9 17.5V21"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span className="font-semibold font-montserrat text-base">Github</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Decorative dots - bottom right */}
            <div
                className="
                    absolute z-0
                    bottom-24 right-24
                    grid-cols-4 gap-1.5
                    sm:bottom-10 sm:right-4
                    md:bottom-16 md:right-16
                    lg:bottom-24 lg:right-24
                    hidden md:grid
                "
            >
                {[...Array(16)].map((_, i) => (
                    <div key={i} className="w-3 h-3 bg-[#3f3f3f] rounded-full sm:w-2 sm:h-2 md:w-3 md:h-3 lg:w-4 lg:h-4" />
                ))}
            </div>
        </section>
    );
};

export default HeroSection;