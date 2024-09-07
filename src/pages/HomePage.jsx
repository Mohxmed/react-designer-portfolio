import HeroSection from "../components/HeroSection/HeroSection";
import LandingCard from "../components/LandingCard/LandingCard";
import { Recent } from "../components/RecentProjects/Recent";
import "aos/dist/aos.css";

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <LandingCard />
      <Recent />
    </>
  );
};
