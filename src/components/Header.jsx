import Container from "../layouts/Container";
import "../styles/header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Container>
        <Logo name={"Arlene Rey"} />
        <NavList />
      </Container>
    </div>
  );
};

const Logo = ({ name }) => {
  return (
    <div className="logo">
      <h2>{name}</h2>
    </div>
  );
};

const NavList = () => {
  const ifActiveClass = ({ isActive }) => (isActive ? "active" : null);

  return (
    <div className="nav-list">
      <ul>
        <NavLink className={ifActiveClass} to="/">
          Home
        </NavLink>
        <NavLink className={ifActiveClass} to="about">
          About
        </NavLink>
        <NavLink className={ifActiveClass} to="projects">
          Projects
        </NavLink>
        <NavLink className={ifActiveClass} to="contact">
          Contact
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
