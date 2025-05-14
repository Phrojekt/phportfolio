import HeroSection from "@/components/HeroSection"
import Navbar from "@/components/Navbar"
import ServiceSection from "@/components/ServiceSection"

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <Navbar />

      <HeroSection />

      <ServiceSection />

      {/* Projects Section */}
      <section className="py-16 bg-black" id="projects">
        <h2 className="text-3xl font-mono text-center mb-12 text-white">&lt;Projetos&gt;</h2>

        <div className="max-w-5xl mx-auto flex flex-wrap">
          {/* Store */}
          <div className="relative flex-1 min-w-[300px] flex flex-col items-center justify-center min-h-[300px] p-16 basis-1/2 bg-black text-white group overflow-hidden">
            <img
              src="/STOREIcon.png"
              alt="Store"
              className="w-48 max-w-full h-auto object-contain"
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
              <p className="text-lg font-montserrat font-semibold">Acesse o projeto Store</p>
              {/* Adicione mais conteúdo aqui se desejar */}
            </a>
          </div>

          {/* Reciclohub */}
          <div className="relative flex-1 min-w-[300px] flex flex-col items-center justify-center min-h-[300px] p-16 basis-1/2 bg-white text-black group overflow-hidden">
            <img
              src="/reciclohubBlackLogo.png"
              alt="Reciclohub"
              className="w-86 max-w-full h-auto object-contain"
              style={{ maxHeight: 130 }}
            />
            <p className="text-sm text-center mt-4">O hub digital de Colaboração sustentável entre indústrias.</p>
            {/* Overlay */}
            <a
              href="https://reciclohub-reciclo.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 bg-white/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-10"
              tabIndex={-1}
            >
              <p className="text-lg font-montserrat font-semibold text-black">Acesse o Reciclohub</p>
              {/* Adicione mais conteúdo aqui se desejar */}
            </a>
          </div>

          {/* MEPHOCODEX */}
          <div className="relative flex-1 min-w-[300px] flex flex-col items-center justify-center min-h-[300px] p-16 basis-1/2 bg-white text-black group overflow-hidden">
            <img
              src="/MEPHOCODEXIcon.png"
              alt="MEPHOCODEX"
              className="w-56 max-w-full h-auto object-contain"
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
              <p className="text-lg font-montserrat font-semibold text-black">Acesse o Mephocodex</p>
              {/* Adicione mais conteúdo aqui se desejar */}
            </a>
          </div>

          {/* Novo container preto ao lado do MEPHOCODEX */}
          <div className="relative flex-1 min-w-[300px] flex flex-col items-center justify-center min-h-[300px] p-16 basis-1/2 bg-black group overflow-hidden">
            {/* Conteúdo opcional */}
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
              <p className="text-lg font-montserrat font-semibold">Em breve...</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
