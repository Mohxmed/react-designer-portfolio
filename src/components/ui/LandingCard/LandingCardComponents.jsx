import { useEffect, useRef, useState } from "react";
import adminData from "../../../data/admin/adminData";

// Images
import Image from "../../../assets/landing-card/card-image.png";

// Icons
import { GoStarFill } from "react-icons/go";

const CardContent = () => {
  return (
    <div className="card-content">
      <div className="card-pic">
        <img src={Image} data-aos="flip-left" />
      </div>
      <div className="card-details">
        <div
          className="card-analysis"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <div className="part-analysis">
            <h3>
              <IncrementEffect target={adminData.completed} time={10} />
              <span
                style={{
                  color: "#8ED2A9",
                  fontWeight: "700",
                }}
              >
                +
              </span>
            </h3>
            <span>Completed Projects</span>
          </div>
          <div className="part-analysis">
            <h3>
              {adminData.reviews}
              <GoStarFill size={26} />
              <GoStarFill size={26} />
              <GoStarFill size={26} />
              <GoStarFill size={26} />
              <GoStarFill size={26} />
            </h3>
            <span>Positive Review’s</span>
          </div>
        </div>
        <div className="card-brief" data-aos="fade-left" data-aos-delay="300">
          <h2>Glad To Help You!</h2>
          <p>{adminData.offer}</p>
        </div>
      </div>
    </div>
  );
};

const IncrementEffect = ({ target, time }) => {
  const [number, setNumber] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setNumber((prev) => prev + 1);
    }, time);

    if (number === target) {
      clearTimeout(timeoutRef.current);
    }
  });

  return <>{number}</>;
};

export { CardContent };
