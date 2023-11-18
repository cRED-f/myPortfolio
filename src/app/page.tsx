import Image from "next/image";
import Homepage from "@/components/sections/Homepage";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skill from "@/components/sections/Skill";
import Contact from "@/components/sections/Contact";
export default function Home() {
  return (
    <main className="flex flex-col">
      <Homepage />
      <About />
      <Projects />
      <Skill />
      <Contact />
    </main>
  );
}
