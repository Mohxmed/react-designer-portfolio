import "aos/dist/aos.css";
import HeroSection from "@components/ui/Home/hero-section/HeroSection";
import LandingCard from "@components/ui/Home/landing-card/LandingCard";
import Recent from "@components/ui/Home/recent-projects/Recent";
import WhyMe from "@components/ui/Home/why-me/WhyMe";
import LandingContact from "@components/ui/Home/contact-block/LandingContact";
import Partner from "@components/ui/Home/partners/Partner";
import Comment from "@components/ui/Home/comments/Comment";

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
