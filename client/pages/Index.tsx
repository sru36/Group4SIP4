import Hero from "@/components/Hero";
import About from "@/components/About";
import Sensors from "@/components/Sensors";
import Team from "@/components/Team";
import Credits from "@/components/Credits";

export default function Index() {
  return (
    <main className="bg-background">
      <Hero />
      <About />
      <Sensors />
      <Team />
      <Credits />
    </main>
  );
}
