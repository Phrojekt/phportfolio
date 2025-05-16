import HeroSection from "@/components/HeroSection"
import Navbar from "@/components/Navbar"
import ProjectsSection from "@/components/ProjectsSection"
import ServiceSection from "@/components/ServiceSection"

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <Navbar />

      <HeroSection />

      <ServiceSection />

      <ProjectsSection />
    </main>
  )
}
