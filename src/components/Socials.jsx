import { BsDribbble, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import "../styles/socials.css";

const Socials = () => {
  return (
    <div className="follow">
      <span className="gray">Follow Me</span>
      <SocialIcons
        linkedInLink={"https://linkedin.com"}
        instagramLink={"https://instagram.com"}
        dribbleLink={"https://dribble.com"}
        youtubeLink={"https://youtube.com"}
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
      <a target="_blank" href={linkedInLink}>
        <BsLinkedin size={25} />
      </a>
      <a target="_blank" href={dribbleLink}>
        <BsDribbble size={25} />
      </a>
      <a target="_blank" href={instagramLink}>
        <BsInstagram size={25} />
      </a>
      <a target="_blank" href={youtubeLink}>
        <BsYoutube size={25} />
      </a>
    </div>
  );
};

export { SocialIcons, Socials };
