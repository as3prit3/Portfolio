import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contacts";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
