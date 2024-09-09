import "aos/dist/aos.css";

import HeroSection from "../components.screen/HeroSection/HeroSection";
import LandingCard from "../components.screen/LandingCard/LandingCard";
import LandingContact from "../components.screen/LandingContact/LandingContact";
import { Partner } from "../components.screen/PartnersSection/Partner";
import { Recent } from "../components.screen/RecentProjects/Recent";
import WhyMe from "../components.screen/WhyMeSection/WhyMe";
import Comment from "../components.screen/CommentsSlider/Comment";

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
