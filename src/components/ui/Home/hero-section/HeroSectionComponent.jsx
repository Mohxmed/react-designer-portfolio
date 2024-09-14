// Data
import adminData from "@data/admin/adminData";
// Components
import { OutlineButton, MainButton } from "@components/Buttons";
import { Socials } from "@components/Socials";
// images
import LineImage from "@assets/hero-section/Line.png";
// icons
import { MdMailOutline } from "react-icons/md";
import { GoDownload } from "react-icons/go";

// Info Component
const HeroInfo = () => {
  return (
    <div className="hero-content" data-aos="fade-right">
      <HeroInfoText />
      <Socials />
      <div className="hero-btns">
        <MainButton text={"Mail Me"} icon={<MdMailOutline size={25} />} />
        <a href={adminData.cv} download>
          <OutlineButton text={"Download CV"} icon={<GoDownload size={25} />} />
        </a>
      </div>
    </div>
  );
};

// HeroInfoText Component
const HeroInfoText = () => {
  return (
    <div className="info">
      <span className="greeting">Hey!</span>
      <h1 className="hero-title">
        I'm <span className="main-color">{adminData.name}</span>. <br />
        {adminData.title}.
      </h1>
      <img className="fx2" src={LineImage} />
      <p>{adminData.brief}</p>
    </div>
  );
};
export { HeroInfo };
