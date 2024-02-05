import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <main style={{backgroundImage: 'url(/images/beams-home@95.jpg)'}}>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
    </main>
  );
}
