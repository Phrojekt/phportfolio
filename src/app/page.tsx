import Link from "next/link"

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="flex justify-end p-8 items-center">
        <div className="flex gap-6">
          <Link href="#quem-sou" className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-medium">
            Quem sou?
          </Link>
          <Link href="#portfolio" className="text-sm font-medium">
            Portfolio
          </Link>
          <Link href="#briefing" className="text-sm font-medium">
            Briefing
          </Link>
          <Link href="#contato" className="text-sm font-medium">
            Contato
          </Link>
          <Link href="#link" className="text-sm font-medium">
            Link
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center">
        {/* Decorative dots - top left */}
        <div className="absolute top-24 left-24 grid grid-cols-4 gap-1.5">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-[#3f3f3f] rounded-full" />
          ))}
        </div>

        <div className="container mx-auto px-24">
          <div className="max-w-xl">
            <p className="text-sm mb-1 font-light">Olá, eu sou</p>
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
            <div key={i} className="w-1.5 h-1.5 bg-[#3f3f3f] rounded-full" />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#f5f5f5] text-black py-16 relative">
        <h2 className="text-3xl font-mono text-center mb-12">Meus Serviços</h2>

        {/* Decorative dots - top left */}
        <div className="absolute top-16 left-32 grid grid-cols-4 gap-1.5">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-[#666666] rounded-full" />
          ))}
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8 px-8">
          <div className="bg-black text-white p-8 flex flex-col items-center text-center rounded-sm">
            <div className="mb-6">
              <div className="w-16 h-16 flex items-center justify-center bg-black border border-white p-4 rounded-sm">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="2" />
                  <rect x="7" y="7" width="4" height="4" fill="white" />
                  <rect x="7" y="13" width="10" height="2" fill="white" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-medium mb-4">UX/UI Design</h3>
            <p className="text-sm leading-relaxed text-gray-300">
              Criando interfaces visuais para seus sites e aplicativos com propósito de trazer uma experiência
              agradável, memorável e facilitada.
            </p>
          </div>

          <div className="bg-black text-white p-8 flex flex-col items-center text-center rounded-sm">
            <div className="mb-6">
              <div className="w-16 h-16 flex items-center justify-center bg-black border border-white p-4 rounded-sm">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="14" rx="2" stroke="white" strokeWidth="2" />
                  <path d="M9 10L11 12L9 14" stroke="white" strokeWidth="2" />
                  <path d="M15 10L13 12L15 14" stroke="white" strokeWidth="2" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-medium mb-4">Desenvolvimento Frontend</h3>
            <p className="text-sm leading-relaxed text-gray-300">
              Transformando a idealização do design em telas reais e interativa para seus usuários de maneira responsiva
              e de acessibilidade inclusiva.
            </p>
          </div>

          <div className="bg-black text-white p-8 flex flex-col items-center text-center rounded-sm">
            <div className="mb-6">
              <div className="w-16 h-16 flex items-center justify-center bg-black border border-white p-4 rounded-sm">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" />
                  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" />
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" />
                </svg>
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
