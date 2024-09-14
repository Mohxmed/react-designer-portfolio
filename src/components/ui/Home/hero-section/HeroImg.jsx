import HeroImage from "@assets/hero-section/redesign.svg";

const HeroImg = () => {
  return (
    <div className="hero-img" data-aos="fade-left">
      <div className="img-wrapper">
        <img className="landing" src={HeroImage}></img>
      </div>
    </div>
  );
};

export default HeroImg;
