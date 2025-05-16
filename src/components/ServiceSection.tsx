'use client'

import React, { useEffect, useRef, useState } from "react";

const ServiceSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
    const [showCards, setShowCards] = useState([false, false, false]);
    const [showTitle, setShowTitle] = useState(false);

    useEffect(() => {
        const handleScrollOrKey = () => {
            // Animação dos cards e título (mantém igual)
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                setShowTitle(rect.top < window.innerHeight * 0.85 && rect.bottom > 0);
            }
            cardRefs.forEach((ref, idx) => {
                if (!ref.current) return;
                const rect = ref.current.getBoundingClientRect();
                if (window.innerWidth < 640) {
                    setShowCards(prev =>
                        prev.map((v, i) =>
                            i === idx
                                ? rect.top < window.innerHeight * 0.85 && rect.bottom > 0
                                : v
                        )
                    );
                } else {
                    if (sectionRef.current) {
                        const sectionRect = sectionRef.current.getBoundingClientRect();
                        const visible = sectionRect.top < window.innerHeight * 0.85 && sectionRect.bottom > 0;
                        setShowCards([visible, visible, visible]);
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
        <section
            className="bg-[#f5f5f5] min-h-screen text-black py-16 relative flex items-center justify-center"
            id="services"
            ref={sectionRef}
        >
            <div className="w-full">
                <h2 className={`text-3xl font-jetbrains text-center mb-12 transition-all duration-700 ease-out
                    ${showTitle ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
                `}>
                    Meus Serviços
                </h2>

                {/* Decorative dots - top left */}
                <div className="absolute top-30 left-72 z-0 hidden md:grid md:grid-cols-4 md:gap-1.5">
                    {[...Array(16)].map((_, i) => (
                        <div key={i} className="w-4 h-4 bg-[#3f3f3f]/65 rounded-full" />
                    ))}
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-0 z-10 relative">
                    {/* UX/UI Design Card */}
                    <div
                        ref={cardRefs[0]}
                        className={`bg-black text-white p-12 flex flex-col items-center text-center rounded-lg shadow-lg font-montserrat cursor-pointer transition-all duration-700 hover:scale-105 hover:-translate-y-2 hover:duration-200
                            ${showCards[0] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"} delay-100
                        `}
                    >
                        <div className="mb-8">
                            <div className="w-20 h-20 flex items-center justify-center bg-black border border-white p-5 rounded-lg">
                                <img src="/UxIcon.png" alt="UX/UI Design Icon" className="w-10 h-10" />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">UX/UI Design</h3>
                        <p className="text-base font-normal leading-relaxed text-white">
                            Criando interfaces visuais para seus sites e aplicativos com propósito de trazer uma experiência
                            agradável, memorável e facilitada.
                        </p>
                    </div>

                    {/* Frontend Development Card */}
                    <div
                        ref={cardRefs[1]}
                        className={`bg-black text-white p-12 flex flex-col items-center text-center rounded-lg shadow-lg font-montserrat cursor-pointer transition-all duration-700 hover:scale-105 hover:-translate-y-2 hover:duration-200
                            ${showCards[1] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"} delay-200
                        `}
                    >
                        <div className="mb-8">
                            <div className="w-20 h-20 flex items-center justify-center bg-black border border-white p-5 rounded-lg">
                                <img src="/FrontIcon.png" alt="Frontend Development Icon" className="w-10 h-10" />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Desenvolvimento Frontend</h3>
                        <p className="text-base font-normal leading-relaxed text-white">
                            Transformando a idealização do design em telas reais e interativa para seus usuários de maneira responsiva
                            e de acessibilidade inclusiva.
                        </p>
                    </div>

                    {/* Fullstack Development Card */}
                    <div
                        ref={cardRefs[2]}
                        className={`bg-black text-white p-12 flex flex-col items-center text-center rounded-lg shadow-lg font-montserrat cursor-pointer transition-all duration-700 hover:scale-105 hover:-translate-y-2 hover:duration-200
                            ${showCards[2] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"} delay-300
                        `}
                    >
                        <div className="mb-8">
                            <div className="w-20 h-20 flex items-center justify-center bg-black border border-white p-5 rounded-lg">
                                <img src="/FullIcon.png" alt="Fullstack Development Icon" className="w-10 h-10" />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Desenvolvimento Fullstack</h3>
                        <p className="text-base font-normal leading-relaxed text-white">
                            A arte de construir aplicações web completas, desde a interface que o usuário vê e interage (o frontend)
                            até a lógica por trás dos bastidores, o servidor e o banco de dados (o backend).
                        </p>
                    </div>
                </div>

                {/* Decorative dots - bottom right */}
                <div className="absolute bottom-9 right-72 grid-cols-4 gap-1.5 hidden md:grid md:grid-cols-4 md:gap-1.5">
                    {[...Array(16)].map((_, i) => (
                        <div key={i} className="w-4 h-4 bg-[#3f3f3f]/65 rounded-full" />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;