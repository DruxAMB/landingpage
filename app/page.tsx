import { Hero } from "@/components/home/Hero";
import { Navbar } from "@/components/home/Navbar";
import { Welcome } from "@/components/home/Welcome";
import { About } from "@/components/home/About";
import { Team } from "@/components/home/Team";

export default function Home() {

  return (
    <div className="max-w-[1440px] justify-center mx-auto">
        <Navbar />
        <Hero />
      <Welcome />
      <About />
      <Team />
    </div>
  );
}
