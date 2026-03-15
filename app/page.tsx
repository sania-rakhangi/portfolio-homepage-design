import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FeaturedProjects } from "@/components/featured-projects"
import { UIUXWork } from "@/components/uiux-work"
import { EngineeringProjects } from "@/components/engineering-projects"
import { Skills } from "@/components/skills"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <UIUXWork />
      <EngineeringProjects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
