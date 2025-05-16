'use client'

import React, { useEffect, useRef, useState } from "react";

const ProjectsSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardRefs = [
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null)
    ];
    const [showCards, setShowCards] = useState([false, false, false, false]);
    const [showTitle, setShowTitle] = useState(false);

    useEffect(() => {
        const handleScrollOrKey = () => {
            // Título
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                setShowTitle(rect.top < window.innerHeight * 0.85 && rect.bottom > 0);
            }
            // Cards (mobile: individual, desktop: todos juntos)
            cardRefs.forEach((ref, idx) => {
                if (!ref.current) return;
                const rect = ref.current.getBoundingClientRect();
                if (window.innerWidth < 640) {
                    // Mobile: cada card individual
                    setShowCards(prev =>
                        prev.map((v, i) =>
                            i === idx
                                ? rect.top < window.innerHeight * 0.85 && rect.bottom > 0
                                : v
                        )
                    );
                } else {
                    // Desktop: todos juntos
                    if (sectionRef.current) {
                        const sectionRect = sectionRef.current.getBoundingClientRect();
                        const visible = sectionRect.top < window.innerHeight * 0.85 && sectionRect.bottom > 0;
                        setShowCards([visible, visible, visible, visible]);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScrollOrKey, { passive: true });
        window.addEventListener("keydown", handleScrollOrKey, { passive: false });
        handleScrollOrKey();

        return () => {
            window.removeEventListener("scroll", handleScrollOrKey);
            window.removeEventListener("keydown", handleScrollOrKey);
        };
    }, []);

    return (
        <section className="py-16 bg-black min-h-screen" id="projects" ref={sectionRef}>
            <h2 className={`text-3xl font-mono text-center mb-12 text-white transition-all duration-700 ease-out
                ${showTitle ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
            `}>
                &lt;Projetos&gt;
            </h2>

            <div className="max-w-5xl mx-auto grid grid-cols-2 grid-rows-2 w-[calc(100%-40px)]">
                {/* Store */}
                <div
                    ref={cardRefs[0]}
                    className={`relative flex flex-col items-center justify-center min-h-[180px] sm:min-h-[220px] md:min-h-[300px] p-4 sm:p-8 md:p-16 bg-black text-white group overflow-hidden transition-all duration-700 delay-100
                        ${showCards[0] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
                    `}
                >
                    <img
                        src="/STOREIcon.png"
                        alt="Store"
                        className="w-28 sm:w-36 md:w-48 max-w-full h-auto object-contain"
                        style={{ maxHeight: 100 }}
                    />
                    {/* Overlay */}
                    <a
                        href="https://storelojaportfolio.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-10"
                        tabIndex={-1}
                    >
                        <p className="text-base sm:text-lg font-montserrat font-semibold block md:hidden">Acessar</p>
                        <p className="text-base sm:text-lg font-montserrat font-semibold hidden md:block">Acesse a Store</p>
                    </a>
                </div>

                {/* Reciclohub */}
                <div
                    ref={cardRefs[1]}
                    className={`relative flex flex-col items-center justify-center min-h-[180px] sm:min-h-[220px] md:min-h-[300px] p-4 sm:p-8 md:p-16 bg-white text-black group overflow-hidden transition-all duration-700 delay-200
                        ${showCards[1] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
                    `}
                >
                    <img
                        src="/reciclohubBlackLogo.png"
                        alt="Reciclohub"
                        className="w-44 sm:w-52 md:w-86 max-w-full h-auto object-contain"
                        style={{ maxHeight: 150 }}
                    />
                    <p className="hidden sm:block text-xs sm:text-sm text-black text-nowrap text-center font-lato mt-2 sm:mt-4">
                        O hub digital de Colaboração sustentável entre indústrias.
                    </p>
                    {/* Overlay */}
                    <a
                        href="https://reciclohub-reciclo.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 bg-white/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-10"
                        tabIndex={-1}
                    >
                        <p className="text-base sm:text-lg font-montserrat font-semibold block md:hidden text-black">Acessar</p>
                        <p className="text-base sm:text-lg font-montserrat font-semibold hidden md:block text-black">Acesse o RecicloHub</p>
                    </a>
                </div>

                {/* MEPHOCODEX */}
                <div
                    ref={cardRefs[2]}
                    className={`relative flex flex-col items-center justify-center min-h-[180px] sm:min-h-[220px] md:min-h-[300px] p-4 sm:p-8 md:p-16 bg-white text-black group overflow-hidden transition-all duration-700 delay-300
                        ${showCards[2] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
                    `}
                >
                    <img
                        src="/MEPHOCODEXIcon.png"
                        alt="MEPHOCODEX"
                        className="w-32 sm:w-44 md:w-56 max-w-full h-auto object-contain"
                        style={{ maxHeight: 110 }}
                    />
                    {/* Overlay */}
                    <a
                        href="https://mephocodexportfolio.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 bg-white/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-10"
                        tabIndex={-1}
                    >
                        <p className="text-base sm:text-lg font-montserrat font-semibold block md:hidden text-black">Acessar</p>
                        <p className="text-base sm:text-lg font-montserrat font-semibold hidden md:block text-black">Acesse o Mephocodex</p>
                    </a>
                </div>

                {/* Novo container preto ao lado do MEPHOCODEX */}
                <div
                    ref={cardRefs[3]}
                    className={`relative flex flex-col items-center justify-center min-h-[180px] sm:min-h-[220px] md:min-h-[300px] p-4 sm:p-8 md:p-16 bg-black group overflow-hidden transition-all duration-700 delay-400
                        ${showCards[3] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
                    `}
                >
                    {/* Conteúdo opcional */}
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                        <p className="text-base sm:text-lg font-montserrat font-semibold">Em breve...</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;