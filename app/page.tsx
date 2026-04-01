import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Babinraj V | Senior Java Developer & Automation Architect",
  description: "Senior Java Developer & Test Automation expert with over 7 years of industrial experience. Specializing in high-end, scalable, and AI-driven enterprise solutions.",
  keywords: ["Java Developer", "Automation Architect", "Publicis Sapient", "Spring Boot", "Babinraj V", "Senior Associate Technology"],
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground scroll-smooth antialiased">
      <Navbar />
      <div className="absolute inset-x-0 top-0 h-[80vh] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent -z-10" />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Awards />
      <Contact />
    </main>
  );
}
