import HeroSection from "../components/HeroSection/HeroSection";
import LandingCard from "../components/LandingCard/LandingCard";
import LandingContact from "../components/LandingContact/LandingContact";
import { Partner } from "../components/PartnersSection/Partner";
import { Recent } from "../components/RecentProjects/Recent";
import WhyMe from "../components/WhyMeSection/WhyMe";
import Comment from "../components/CommentsSlider/Comment";
import "aos/dist/aos.css";

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
