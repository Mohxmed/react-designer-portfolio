import { Link } from "react-router-dom";

const Logo = ({ name }) => {
  const textStyle = { textDecoration: "none", color: "inherit" };
  return (
    <div className="logo">
      <Link style={textStyle} to="/">
        <h2>{name}</h2>
      </Link>
    </div>
  );
};

export default Logo;
