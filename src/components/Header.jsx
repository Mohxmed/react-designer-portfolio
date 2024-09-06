import { useCallback, useState } from "react";
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
  // Active Links
  const ifActiveClass = ({ isActive }) => (isActive ? "active" : null);
  // NavigatorLine
  const [navigatorLine, setNavigatorLine] = useState(0); // Home
  const handleNavigatorLine = useCallback((target) => {
    if (navigatorLine === target) return;
    if (navigatorLine !== target) setNavigatorLine(target);
  });

  return (
    <div className="nav-list">
      <ul>
        <span className="navigator-line" style={{ left: navigatorLine }}></span>
        <NavLink
          onClick={() => {
            handleNavigatorLine(0);
          }}
          className={ifActiveClass}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => {
            handleNavigatorLine(100);
          }}
          className={ifActiveClass}
          to="about"
        >
          About
        </NavLink>
        <NavLink
          onClick={() => {
            handleNavigatorLine(200);
          }}
          className={ifActiveClass}
          to="projects"
        >
          Projects
        </NavLink>
        <NavLink
          onClick={() => {
            handleNavigatorLine(300);
          }}
          className={ifActiveClass}
          to="contact"
        >
          Contact
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
