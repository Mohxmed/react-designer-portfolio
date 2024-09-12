import Container from "../../../layouts/Container";
import Member from "./Member";
import team from "../../../data/team/team";

const Team = () => {
  return (
    <div className="team" data-aos="fade-left">
      <Container>
        <h2 data-aos="flip-right">Our Team</h2>
        <div className="team-wrapper">
          {team &&
            team.map((member) => {
              const { id, name, position, picture } = member;
              return (
                <Member
                  name={name}
                  position={position}
                  img={picture}
                  key={id}
                />
              );
            })}
        </div>
      </Container>
    </div>
  );
};
export default Team;
