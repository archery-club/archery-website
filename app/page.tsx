import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/FeatureSection";
import StatsSection from "@/components/StatsSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <StatsSection />
      <DownloadSection />
      <Footer />
    </main>
  );
}
