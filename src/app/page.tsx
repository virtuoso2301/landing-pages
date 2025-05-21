import Image from "next/image";
import HeroSection from "../components/HeroSection";
import ImageSlider from "../components/ImageSlider";
import AdminPanelSection from "../components/AdminPanelSection";
import UserPanelSection from "../components/UserPanelSection";
import TechnologyStackScroller from "../components/TechnologyStackScroller";
import IntegrationsSection from "../components/IntegrationsSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <HeroSection />
      <ImageSlider />
      <AdminPanelSection />
      <UserPanelSection />
      <TechnologyStackScroller />
      <IntegrationsSection />
    </main>
  );
}
