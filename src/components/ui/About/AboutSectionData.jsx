import image from "../../../assets/landing-card/card-image.png";
import signature from "../../../assets/about/signature.png";
import appList from "../../../assets/about/List.png";
import data from "../../../data/admin/adminData";

export const AboutSectionData = () => {
  return (
    <>
      <div className="pic" data-aos="fade-right">
        <img src={image} />
      </div>
      <div className="info" data-aos="fade-left">
        <div className="persona">
          <h1>{data.name}</h1>
          <p className="position">{data.title}.</p>
          <p className="brief">{data.brief}</p>
        </div>
        <div className="mail">
          <span>Email me </span>
          <a href="#">{data.email}</a>
        </div>
        <img src={signature} />
        <div className="skills">
          <span>Tools & Skills</span>
          <img src={appList} />
        </div>
      </div>
    </>
  );
};
