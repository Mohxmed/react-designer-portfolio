import { useState, useCallback } from "react";
import { NavLink, Link } from "react-router-dom";

// Logo
const Logo = ({ name }) => {
  return (
    <div className="logo">
      <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
        <h2>{name}</h2>
      </Link>
    </div>
  );
};

// Navigate Links
const NavList = () => {
  // Navigator Line
  const [navigatorLine, setNavigatorLine] = useState(0); // Home
  const handleNavLine = useCallback((target) => {
    if (navigatorLine === target) return;
    if (navigatorLine !== target) setNavigatorLine(target);
  });
  return (
    <div className="nav-list">
      <ul>
        <NavLine leftPosition={navigatorLine} />
        <CustomLink to={"/"} onClick={handleNavLine} NavTarget={0}>
          Home
        </CustomLink>
        <CustomLink to={"about"} onClick={handleNavLine} NavTarget={100}>
          About
        </CustomLink>
        <CustomLink to={"projects"} onClick={handleNavLine} NavTarget={200}>
          Projects
        </CustomLink>
        <CustomLink to={"contact"} onClick={handleNavLine} NavTarget={300}>
          Contact
        </CustomLink>
      </ul>
    </div>
  );
};

// Navigator Line
const NavLine = ({ leftPosition }) => {
  return (
    <span className="navigator-line" style={{ left: leftPosition }}></span>
  );
};

// Custom NavLink
const CustomLink = ({ to, NavTarget, onClick, children }) => {
  const ifActiveClass = ({ isActive }) => (isActive ? "active" : null);
  return (
    <NavLink
      onClick={() => {
        onClick(NavTarget);
      }}
      className={ifActiveClass}
      to={to}
    >
      {children}
    </NavLink>
  );
};

export { Logo, NavList };
