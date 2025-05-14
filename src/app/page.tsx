import HeroSection from "@/components/HeroSection"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <Navbar />

      <HeroSection />

      {/* Services Section */}
      <section className="bg-[#f5f5f5] text-black py-16 relative px-24">
        <h2 className="text-3xl font-mono text-center mb-12">Meus Serviços</h2>

        {/* Decorative dots - top left */}
        <div className="absolute top-16 left-32 grid grid-cols-4 gap-1.5">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-[#666666] rounded-full" />
          ))}
        </div>

        <div className="max-w-6xl grid grid-cols-3 gap-8">
          {/* UX/UI Design Card */}
          <div className="bg-black text-white p-8 flex flex-col items-center text-center rounded-sm">
            <div className="mb-6">
              <div className="w-16 h-16 flex items-center justify-center bg-black border border-white p-4 rounded-sm">
                <img src="/UxIcon.png" alt="UX/UI Design Icon" className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-xl font-medium mb-4">UX/UI Design</h3>
            <p className="text-sm leading-relaxed text-gray-300">
              Criando interfaces visuais para seus sites e aplicativos com propósito de trazer uma experiência
              agradável, memorável e facilitada.
            </p>
          </div>

          {/* Frontend Development Card */}
          <div className="bg-black text-white p-8 flex flex-col items-center text-center rounded-sm">
            <div className="mb-6">
              <div className="w-16 h-16 flex items-center justify-center bg-black border border-white p-4 rounded-sm">
                <img src="/FrontIcon.png" alt="Frontend Development Icon" className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-xl font-medium mb-4">Desenvolvimento Frontend</h3>
            <p className="text-sm leading-relaxed text-gray-300">
              Transformando a idealização do design em telas reais e interativa para seus usuários de maneira responsiva
              e de acessibilidade inclusiva.
            </p>
          </div>

          {/* Fullstack Development Card */}
          <div className="bg-black text-white p-8 flex flex-col items-center text-center rounded-sm">
            <div className="mb-6">
              <div className="w-16 h-16 flex items-center justify-center bg-black border border-white p-4 rounded-sm">
                <img src="/FullIcon.png" alt="Fullstack Development Icon" className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-xl font-medium mb-4">Desenvolvimento Fullstack</h3>
            <p className="text-sm leading-relaxed text-gray-300">
              A arte de construir aplicações web completas, desde a interface que o usuário vê e interage (o frontend)
              até a lógica por trás dos bastidores, o servidor e o banco de dados (o backend).
            </p>
          </div>
        </div>

        {/* Decorative dots - bottom right */}
        <div className="absolute bottom-16 right-32 grid grid-cols-4 gap-1.5">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-[#666666] rounded-full" />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-black">
        <h2 className="text-3xl font-mono text-center mb-12 text-white">&lt;Projetos&gt;</h2>

        <div className="max-w-5xl mx-auto grid grid-cols-2">
          {/* Rental Mobilistic */}
          <div className="bg-black text-white p-16 flex flex-col items-center justify-center min-h-[300px]">
            <div className="mb-6">
              <svg width="80" height="50" viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="5" width="45" height="25" rx="2" stroke="white" strokeWidth="2" />
                <rect x="30" y="20" width="45" height="25" rx="2" stroke="white" strokeWidth="2" />
                <rect x="40" y="30" width="6" height="6" rx="3" fill="white" />
                <rect x="50" y="30" width="6" height="6" rx="3" fill="white" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold">Rental Mobilistic</h3>
          </div>

          {/* Reciclohub */}
          <div className="bg-white text-black p-16 flex flex-col items-center justify-center min-h-[300px]">
            <h3 className="text-5xl mb-3">
              <span className="font-bold">reciclo</span>
              <span className="font-normal">hub</span>
            </h3>
            <p className="text-sm text-center">O hub digital de Colaboração sustentável entre indústrias.</p>
          </div>

          {/* MEPHOCODEX */}
          <div className="bg-white text-black p-16 flex flex-col items-center justify-center min-h-[300px]">
            <h3 className="text-5xl font-serif font-bold">MEPHOCODEX</h3>
          </div>

          {/* STORE */}
          <div className="bg-black text-white p-16 flex flex-col items-center justify-center min-h-[300px]">
            <h3 className="text-5xl font-bold tracking-[0.2em]">STORE</h3>
          </div>
        </div>
      </section>
    </main>
  )
}
