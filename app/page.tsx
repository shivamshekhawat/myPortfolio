import { Suspense } from "react";
import Hero from "components/hero"; // Correcting import
import About from "components/about"; // Correcting import
import Projects from "components/projects"; // Correcting import
import Skills from "components/skills"; // Correcting import
import Contact from "components/contact"; // Correcting import
import LoadingSpinner from "components/loading-spinner"; // Correcting import

export default function Home() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </Suspense>
    </main>
  );
}
