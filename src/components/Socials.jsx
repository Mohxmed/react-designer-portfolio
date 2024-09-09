import { BsDribbble, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import "../styles/socials.css";

const Socials = () => {
  return (
    <div className="follow">
      <span className="gray">Follow Me</span>
      <SocialIcons
        linkedInLink={"#"}
        instagramLink={"#"}
        dribbleLink={"#"}
        youtubeLink={"#"}
      />
    </div>
  );
};

const SocialIcons = ({
  linkedInLink,
  dribbleLink,
  instagramLink,
  youtubeLink,
}) => {
  return (
    <div className="icons ">
      <a href={linkedInLink}>
        <BsLinkedin size={25} />
      </a>
      <a href={dribbleLink}>
        <BsDribbble size={25} />
      </a>
      <a href={instagramLink}>
        <BsInstagram size={25} />
      </a>
      <a href={youtubeLink}>
        <BsYoutube size={25} />
      </a>
    </div>
  );
};

export { SocialIcons, Socials };
