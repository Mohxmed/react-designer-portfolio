import { useEffect, useRef, useState } from "react";

// Images
import Image from "../../assets/card-image.png";

// Icons
import { GoStarFill } from "react-icons/go";

const CardContent = () => {
  return (
    <div className="card-content">
      <div className="card-pic">
        <img src={Image} />
      </div>
      <div className="card-details">
        <div className="card-analysis">
          <div className="part-analysis">
            <h3>
              <IncrementEffect target={120} time={10} />
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
              B+
              <GoStarFill size={26} />
              <GoStarFill size={26} />
              <GoStarFill size={26} />
              <GoStarFill size={26} />
              <GoStarFill size={26} />
            </h3>
            <span>Positive Review’s</span>
          </div>
        </div>
        <div className="card-brief">
          <h2>Glad To Help You!</h2>
          <p>
            As a full-service digital designer, I work closely
            <br />
            with my clients to define, design and develop
            <br />
            transformative user experiences across all <br />
            platforms and brand’s touchpoints.
          </p>
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
