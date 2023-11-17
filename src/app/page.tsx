import Image from "next/image";
import Homepage from "@/components/sections/Homepage";
import About from "@/components/sections/About";
export default function Home() {
  return (
    <main className="flex flex-col">
      <Homepage />
      <About />
    </main>
  );
}
