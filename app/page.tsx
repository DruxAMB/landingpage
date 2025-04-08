import { Hero } from "@/components/home/Hero";
import { Navbar } from "@/components/home/Navbar";

export default function Home() {

  return (
    <div className="max-w-[1440px] justify-center mx-auto px-4 md:px-8 lg:px-16 xl:px-40">
      <Navbar />
      <Hero />
    </div>
  );
}
