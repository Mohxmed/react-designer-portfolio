import Container from "../../layouts/Container";
import "./why-me.css";

// Imgs

import Pros from "../../assets/why-me/Rectangle.png";
import Pros1 from "../../assets/why-me/Rectangle-1.png";
import Pros2 from "../../assets/why-me/Rectangle-2.png";
import Pros3 from "../../assets/why-me/Rectangle-3.png";

const WhyMe = () => {
  return (
    <div className="why-me main-gap ">
      <Container>
        <h1 data-aos="fade-down">Why Hire Me?</h1>
        <div className="pros">
          <ProsCard
            delay={0}
            title={"Communicative"}
            img={Pros}
            description={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. "
            }
          />
          <ProsCard
            delay={100}
            title={"Professional"}
            img={Pros1}
            description={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. "
            }
          />
          <ProsCard
            delay={200}
            title={"Collaborative"}
            img={Pros2}
            description={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. "
            }
          />
          <ProsCard
            delay={300}
            title={"Client’s Favourite"}
            img={Pros3}
            description={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. "
            }
          />
        </div>
      </Container>
    </div>
  );
};

const ProsCard = ({ img, title, description, delay }) => {
  return (
    <div className="card" data-aos="fade-right" data-aos-delay={`${delay}`}>
      <img src={img} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default WhyMe;
