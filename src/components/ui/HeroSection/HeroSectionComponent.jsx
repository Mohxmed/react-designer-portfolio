import { useState } from "react";
import adminData from "../../../data/admin/adminData";

// Components
import Overlay from "../../../layouts/Overlay";
import { OutlineButton, MainButton } from "../../../components/Buttons";
import { Socials } from "../../../components/Socials";

// images
import LineImage from "../../../assets/hero-section/Line.png";

// icons
import { MdMailOutline } from "react-icons/md";
import { GoDownload } from "react-icons/go";
import { FaX } from "react-icons/fa6";
import { TbTrash } from "react-icons/tb";

// Img Component

// Info Component
const HeroInfo = () => {
  const [showMailForm, setShowMailForm] = useState(false);

  return (
    <div className="hero-content" data-aos="fade-right">
      {showMailForm ? (
        <MailForm
          exit={() => {
            setShowMailForm(false);
          }}
        />
      ) : null}
      <HeroInfoText />
      <Socials />
      <div className="hero-btns">
        <MainButton
          onClick={() => {
            setShowMailForm(true);
          }}
          text={"Mail Me"}
          icon={<MdMailOutline size={25} />}
        />
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

// MailForm Component w/ Overlay
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

export { HeroInfo };
