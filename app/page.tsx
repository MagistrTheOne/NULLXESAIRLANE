import { NavBar } from "./components/NavBar";
import { HeroSection } from "./components/sections/HeroSection";
import { ConceptSection } from "./components/sections/ConceptSection";
import { UniverseRoutesSection } from "./components/sections/UniverseRoutesSection";
import { FleetSection } from "./components/sections/FleetSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { FinalCtaSection } from "./components/sections/FinalCtaSection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-dark text-zinc-50">
      <NavBar />
      <main className="flex-1">
        <HeroSection />
        <ConceptSection />
        <UniverseRoutesSection />
        <FleetSection />
        <ExperienceSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}


