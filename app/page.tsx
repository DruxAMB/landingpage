import { Hero } from "@/components/home/Hero";
import { Navbar } from "@/components/home/Navbar";
import { Welcome } from "@/components/home/Welcome";
import { About } from "@/components/home/About";
import { Team } from "@/components/home/Team";
import { Boda } from "@/components/home/Boda";
import { Contact } from "@/components/home/Contact";
import { Footer } from "@/components/home/Footer";
import { Join } from "@/components/home/Join";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Boda />
      <About />
      <Welcome />
      <Join />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
