import React from "react";

const ServiceSection: React.FC = () => (
    <section className="bg-[#f5f5f5] text-black py-16 relative" id="services">
        <h2 className="text-3xl font-jetbrains text-center mb-12">Meus Serviços</h2>

        {/* Decorative dots - top left */}
        <div className="absolute top-30 left-72 grid grid-cols-4 gap-1.5 z-0">
            {[...Array(16)].map((_, i) => (
                <div key={i} className="w-4 h-4 bg-[#3f3f3f]/65 rounded-full" />
            ))}
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-0 z-10 relative">
            {/* UX/UI Design Card */}
            <div className="bg-black text-white p-12 flex flex-col items-center text-center rounded-lg shadow-lg font-montserrat cursor-pointer transition-transform duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="mb-8">
                    <div className="w-20 h-20 flex items-center justify-center bg-black border border-white p-5 rounded-lg">
                        <img src="/UxIcon.png" alt="UX/UI Design Icon" className="w-10 h-10" />
                    </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">UX/UI Design</h3>
                <p className="text-base font-normal leading-relaxed text-gray-300">
                    Criando interfaces visuais para seus sites e aplicativos com propósito de trazer uma experiência
                    agradável, memorável e facilitada.
                </p>
            </div>

            {/* Frontend Development Card */}
            <div className="bg-black text-white p-12 flex flex-col items-center text-center rounded-lg shadow-lg font-montserrat cursor-pointer transition-transform duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="mb-8">
                    <div className="w-20 h-20 flex items-center justify-center bg-black border border-white p-5 rounded-lg">
                        <img src="/FrontIcon.png" alt="Frontend Development Icon" className="w-10 h-10" />
                    </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Desenvolvimento Frontend</h3>
                <p className="text-base font-normal leading-relaxed text-gray-300">
                    Transformando a idealização do design em telas reais e interativa para seus usuários de maneira responsiva
                    e de acessibilidade inclusiva.
                </p>
            </div>

            {/* Fullstack Development Card */}
            <div className="bg-black text-white p-12 flex flex-col items-center text-center rounded-lg shadow-lg font-montserrat cursor-pointer transition-transform duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="mb-8">
                    <div className="w-20 h-20 flex items-center justify-center bg-black border border-white p-5 rounded-lg">
                        <img src="/FullIcon.png" alt="Fullstack Development Icon" className="w-10 h-10" />
                    </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Desenvolvimento Fullstack</h3>
                <p className="text-base font-normal leading-relaxed text-gray-300">
                    A arte de construir aplicações web completas, desde a interface que o usuário vê e interage (o frontend)
                    até a lógica por trás dos bastidores, o servidor e o banco de dados (o backend).
                </p>
            </div>
        </div>

        {/* Decorative dots - bottom right */}
        <div className="absolute bottom-9 right-72 grid grid-cols-4 gap-1.5">
            {[...Array(16)].map((_, i) => (
                <div key={i} className="w-4 h-4 bg-[#3f3f3f]/65 rounded-full" />
            ))}
        </div>
    </section>
);

export default ServiceSection;