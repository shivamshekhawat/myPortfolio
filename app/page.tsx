import { Suspense } from "react";
import Hero from "components/hero";
import About from "components/about";
import Projects from "components/projects";
import Skills from "components/skills";
import Contact from "components/contact";
import LoadingSpinner from "components/loading-spinner";
import Experience from "@/experience";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </Suspense>
    </main>
  );
}
