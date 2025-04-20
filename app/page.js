import About from "@/components/About"
import Contact from "@/components/Contact"
import Education from "@/components/Education"
import Experience from "@/components/Experience"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Resume from "@/components/Resume"
import ScrollToTop from "@/components/ScrollToTop"
import Skills from "@/components/Skills"


export default function Home() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
