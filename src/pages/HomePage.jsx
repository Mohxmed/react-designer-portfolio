import HeroSection from "../screen.components/HeroSection/HeroSection";
import LandingCard from "../screen.components/LandingCard/LandingCard";
import LandingContact from "../screen.components/LandingContact/LandingContact";
import { Partner } from "../screen.components/PartnersSection/Partner";
import { Recent } from "../screen.components/RecentProjects/Recent";
import WhyMe from "../screen.components/WhyMeSection/WhyMe";
import Comment from "../screen.components/CommentsSlider/Comment";
import Footer from "../screen.components/Footer/Footer";
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
      <Footer />
    </>
  );
};
