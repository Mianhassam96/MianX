import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HookSection from "./components/HookSection";
import InteractiveDemo from "./components/InteractiveDemo";
import UseCases from "./components/UseCases";
import IdentitySelector from "./components/IdentitySelector";
import CoreValues from "./components/CoreValues";
import ModeSystem from "./components/ModeSystem";
import ProductShowcase from "./components/ProductShowcase";
import SelfAwareness from "./components/SelfAwareness";
import SocialProof from "./components/SocialProof";
import Ecosystem from "./components/Ecosystem";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0a0a]">
        <Hero />
        <HookSection />
        <InteractiveDemo />
        <UseCases />
        <IdentitySelector />
        <CoreValues />
        <ModeSystem />
        <ProductShowcase />
        <SelfAwareness />
        <SocialProof />
        <Ecosystem />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
