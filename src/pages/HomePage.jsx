import "aos/dist/aos.css";

import HeroSection from "../components/ui/HeroSection/HeroSection";
import LandingCard from "../components/ui//LandingCard/LandingCard";
import LandingContact from "../components/ui/LandingContact/LandingContact";
import { Partner } from "../components/ui/PartnersSection/Partner";
import { Recent } from "../components/ui/RecentProjects/Recent";
import WhyMe from "../components/ui/WhyMeSection/WhyMe";
import Comment from "../components/ui/CommentsSlider/Comment";

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <LandingCard />
      <Recent />
      <WhyMe />
      <LandingContact />
      <Partner />
      <Comment />
    </>
  );
};
