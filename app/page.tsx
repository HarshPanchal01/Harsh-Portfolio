import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto max-w-5xl px-6">
        <Hero />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
