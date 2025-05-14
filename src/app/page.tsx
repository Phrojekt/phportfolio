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
          <a
            href="https://storelojaportfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white flex-1 min-w-[300px] flex flex-col items-center justify-center min-h-[300px] p-16 basis-1/2 transition-transform hover:scale-105"
          >
            <img
              src="/STOREIcon.png"
              alt="Store"
              className="w-48 max-w-full h-auto object-contain"
              style={{ maxHeight: 100 }}
            />
          </a>

          {/* Reciclohub */}
          <a
            href="https://reciclohub-reciclo.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black flex-1 min-w-[300px] flex flex-col items-center justify-center min-h-[300px] p-16 basis-1/2 transition-transform hover:scale-105"
          >
            <img
              src="/reciclohubBlackLogo.png"
              alt="Reciclohub"
              className="w-86 max-w-full h-auto object-contain"
              style={{ maxHeight: 130 }}
            />
            <p className="text-sm text-center mt-4">O hub digital de Colaboração sustentável entre indústrias.</p>
          </a>

          {/* MEPHOCODEX */}
          <a
            href="https://mephocodexportfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black flex-1 min-w-[300px] flex flex-col items-center justify-center min-h-[300px] p-16 basis-1/2 transition-transform hover:scale-105"
          >
            <img
              src="/MEPHOCODEXIcon.png"
              alt="MEPHOCODEX"
              className="w-56 max-w-full h-auto object-contain"
              style={{ maxHeight: 110 }}
            />
          </a>

          {/* Novo container preto ao lado do MEPHOCODEX */}
          <div className="bg-black flex-1 min-w-[300px] flex flex-col items-center justify-center min-h-[300px] p-16 basis-1/2">
            {/* Conteúdo opcional */}
          </div>
        </div>
      </section>
    </main>
  )
}
