import { OutlineButton, MainButton } from "../Buttons";
// images
import HeroImage from "../../assets/Image.png";
import LineImage from "../../assets/Line.png";
// icons
import { BsDribbble, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import { GoDownload } from "react-icons/go";
import { useState } from "react";
import Overlay from "../../layouts/Overlay";
import { FaX } from "react-icons/fa6";
import { TbTrash } from "react-icons/tb";

// Img Component
const HeroImg = () => {
  return (
    <div className="hero-img">
      <div className="img-wrapper">
        <img className="landing" src={HeroImage}></img>
      </div>
    </div>
  );
};

// Info Component
const HeroInfo = () => {
  const [showMailForm, setShowMailForm] = useState(false);

  return (
    <div className="hero-content">
      {showMailForm ? (
        <MailForm
          exit={() => {
            setShowMailForm(false);
          }}
        />
      ) : null}
      <HeroInfoText />
      <HeroSocials />
      <div className="hero-btns">
        <MainButton
          onClick={() => {
            setShowMailForm(true);
          }}
          text={"Mail Me"}
          icon={<MdMailOutline size={25} />}
        />
        <a href="/Example.pdf" download>
          <OutlineButton text={"Download CV"} icon={<GoDownload size={25} />} />
        </a>
      </div>
    </div>
  );
};

const HeroInfoText = () => {
  return (
    <div className="info">
      <span className="greeting">Hey!</span>
      <h1 className="hero-title">
        I'm <span className="main-color">Ariene Ray</span>. <br /> an UI/UX
        Designer.
      </h1>
      <img className="fx2" src={LineImage} />
      <p>
        UX Designer based in Jakarta, Indonesia.
        <br />I am designing with a minimal and beautiful design <br /> in mind.
      </p>
    </div>
  );
};

const HeroSocials = () => {
  return (
    <div className="follow">
      <span className="gray">Follow Me</span>
      <div className="icons ">
        <a href="#">
          <BsLinkedin href="#" size={25} />
        </a>
        <a href="#">
          <BsDribbble href="#" size={25} />
        </a>
        <a href="#">
          <BsInstagram href="#" size={25} />
        </a>
        <a href="#">
          <BsYoutube href="#" size={25} />
        </a>
      </div>
    </div>
  );
};

const MailForm = ({ exit }) => {
  return (
    <Overlay>
      <div className="exit pointer" onClick={exit}>
        <FaX />
      </div>
      <form>
        <label htmlFor="name">Name</label>
        <input required id="name" type="name"></input>
        <label htmlFor="email">Email</label>
        <input required id="email" type="email"></input>
        <label htmlFor="message">Message</label>
        <textarea required id="message"></textarea>
        <div className="form-buttons">
          <button className="send pointer main-btn">Send</button>
          <button className="reset pointer" type="reset">
            <TbTrash />
          </button>
        </div>
      </form>
    </Overlay>
  );
};

export { HeroImg, HeroInfo };
