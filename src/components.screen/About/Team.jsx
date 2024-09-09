import Container from "../../layouts/Container";
import img from "../../assets/about/Picture.png";
import img1 from "../../assets/about/Picture-1.png";
import img2 from "../../assets/about/Picture-2.png";

const Team = () => {
  return (
    <div className="team" data-aos="fade-left">
      <Container>
        <h2 data-aos="flip-right">Our Team</h2>
        <div className="team-wrapper">
          <Member
            name={"Eleanor Pena"}
            position={"Back End Developer"}
            img={img}
          />
          <Member
            name={"Jane Cooper"}
            position={"Back End Developer"}
            img={img1}
          />
          <Member name={"Cody Fisher"} position={"UX Designer"} img={img2} />
        </div>
      </Container>
    </div>
  );
};
export default Team;

const Member = ({ name, position, img }) => {
  return (
    <div className="member">
      <img src={img} alt="" />
      <div className="details">
        <h3>{name}</h3>
        <span>{position}</span>
      </div>
    </div>
  );
};
