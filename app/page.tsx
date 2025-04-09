import { Hero } from "@/components/home/Hero";
import { Navbar } from "@/components/home/Navbar";
import { Welcome } from "@/components/home/Welcome";
import { About } from "@/components/home/About";
import { Team } from "@/components/home/Team";
import { Partner } from "@/components/home/Partner";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Welcome />
      <About />
      <Team />
      <Partner />
      <Contact />
    </div>
  );
}
