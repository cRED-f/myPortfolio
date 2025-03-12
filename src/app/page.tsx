import Homepage from "@/components/sections/Homepage";
import { About } from "@/components/sections/About";
import Skill from "@/components/sections/Skill";
import Contact from "@/components/sections/Contact";
import { ProjectSection } from "@/components/sections/projectSection";
export default function Home() {
  return (
    <main className="flex flex-col">
      <Homepage />
      <ProjectSection />
      <About />
      <Skill />
      <Contact />
    </main>
  );
}
