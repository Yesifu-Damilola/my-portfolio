import { Navbar } from "@/components/Navbar/Navbar";
import { ScrollZoomLine } from "@/components/ScrollZoomLine";
import { About } from "@/features/about/About";
import { Contact } from "@/features/contact/Contact";
import { Experience } from "@/features/experience/Experience";
import { HomePage } from "@/features/homepage/HomePage";
import { Projects } from "@/features/projects/Projects";
import { Skills } from "@/features/skills/Skills";

export default function Home() {
  return (
    <section className="bg-[#1e1e1e] bg-[url('/images/backgroundimg.png')] bg-cover bg-center bg-no-repeat min-h-screen px-1 overflow-x-hidden">
      <div className="flex flex-col items-center justify-center text-center px-2 space-y-10">
        <ScrollZoomLine />
        <Navbar />
        <HomePage />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </section>
  );
}
