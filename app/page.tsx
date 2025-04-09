import { Hero } from "@/components/home/Hero";
import { Navbar } from "@/components/home/Navbar";
import { Welcome } from "@/components/home/Welcome";
import { About } from "@/components/home/About";
import { Team } from "@/components/home/Team";

export default function Home() {

  return (
    <div className="max-w-[1440px] justify-center mx-auto">
      <div className="px-4 md:px-8 lg:px-16 xl:px-40">
        <Navbar />
        <Hero />
      </div>
      <Welcome />
      <About />
      <Team />
    </div>
  );
}
