import { Nav } from "@/sections/Nav";
import { Hero } from "@/sections/Hero";
import { Marquee } from "@/sections/Marquee";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { SiteInteractions } from "@/components/SiteInteractions";

export default function Home() {
  return (
    <div id="top" style={{ position: "relative" }}>
      <Nav />
      <Hero />
      <Marquee />
      <Projects />
      <Experience />
      <About />
      <Contact />
      <SiteInteractions />
    </div>
  );
}
