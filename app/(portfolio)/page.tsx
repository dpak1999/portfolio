import PortfolioContent from "@/components/portfolio-content";
import { AboutSection } from "@/components/sections/about-section";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <PortfolioContent />
      <AboutSection />
    </main>
  );
}
