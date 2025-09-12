import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      
      <section id="home">
        <HeroSection />
      </section>
      
      <div className="section-transition">
        <section id="projects">
          <ProjectsSection />
          <TestimonialsSection />
        </section>
      </div>
      
      <div className="section-transition">
        <section id="about">
          <AboutSection />
        </section>
      </div>
      
      <div className="section-transition">
        <section id="contact">
          <ContactSection />
        </section>
      </div>
      
      <Footer />
    </div>
  );
}
