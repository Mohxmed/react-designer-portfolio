import HeroSection from "../components/HeroSection/HeroSection";
import LandingCard from "../components/LandingCard/LandingCard";
import LandingContact from "../components/LandingContact/LandingContact";
import { Recent } from "../components/RecentProjects/Recent";
import WhyMe from "../components/WhyMeSection/WhyMe";
import "aos/dist/aos.css";

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <LandingCard />
      <Recent />
      <WhyMe />
      <LandingContact />
    </>
  );
};
