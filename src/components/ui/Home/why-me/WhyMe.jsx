import Container from "@layouts/Container";
import adminData from "@data/admin/adminData";
import ProsCard from "./ProsCard";
import "./why-me.css";

const WhyMe = () => {
  return (
    <div className="why-me main-gap ">
      <Container>
        <h1 data-aos="fade-down">Why Hire Me?</h1>
        <div className="pros">
          {adminData.whyMe.map((admin) => {
            return (
              <ProsCard
                delay={0}
                img={admin.image}
                title={admin.reason}
                description={admin.description}
                key={admin.id}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default WhyMe;
