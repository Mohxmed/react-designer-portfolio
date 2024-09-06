import Container from "../layouts/Container";
import HeroImage from "../assets/Image.png";
import HeroImageEffect from "../assets/BulletPoints.png";
import LineImage from "../assets/Line.png";
import "../styles/hero-section.css";
import { BsDribbble, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import { GoDownload } from "react-icons/go";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Container>
        <HeroInfo />
        <HeroImg />
      </Container>
    </div>
  );
};

// Img Component
const HeroImg = () => {
  return (
    <div className="hero-img">
      <img className="fx" src={HeroImageEffect} />
      <img className="landing-img" src={HeroImage} />
    </div>
  );
};

// Info Component
const HeroInfo = () => {
  return (
    <div className="hero-info">
      <div className="info">
        <span className="hey">Hey!</span>
        <h1 className="hero-title">
          I'm <span className="cl-span">Ariene Ray</span>. <br /> an UI/UX
          Designer.
        </h1>
        <img className="fx2" src={LineImage} />
        <p className="paragraph">
          UX Designer based in Jakarta, Indonesia.
          <br />I am designing with a minimal and beautiful design <br /> in
          mind.
        </p>
      </div>
      <div className="follow">
        <span className="gray">Follow Me</span>
        <div className="icons ">
          <BsLinkedin href="#" size={25} />
          <BsDribbble href="#" size={25} />
          <BsInstagram href="#" size={25} />
          <BsYoutube href="#" size={25} />
        </div>
      </div>
      <div className="hero-btns">
        <MainButton text={"Mail Me"} icon={<MdMailOutline size={25} />} />
        <OutlineButton text={"Download CV"} icon={<GoDownload size={25} />} />
      </div>
    </div>
  );
};

// Main Button
const MainButton = ({ text, icon }) => {
  return (
    <button className="btn main-btn">
      <span>
        {icon}
        {text}
      </span>
    </button>
  );
};
const OutlineButton = ({ text, icon }) => {
  return (
    <button className="btn outline-btn">
      <span>
        {icon}
        {text}
      </span>
    </button>
  );
};

export default HeroSection;
