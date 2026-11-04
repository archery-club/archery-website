import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/FeatureSection";
import StatsSection from "@/components/StatsSection";
import GlobalSection from "@/components/GlobalSection";
import CommunitySection from "@/components/CommunitySection";
import FAQ from "@/components/FAQ";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

export default function Home() {
  return <><a className="skip-link" href="#main-content">Skip to content</a><div id="top" /><Navbar /><main id="main-content"><Hero /><StatsSection /><Features /><GlobalSection /><CommunitySection /><FAQ /><DownloadSection /></main><Footer /></>;
}
