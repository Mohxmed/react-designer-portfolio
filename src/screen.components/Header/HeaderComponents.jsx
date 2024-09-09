import { useState, useCallback } from "react";
import { NavLink, Link } from "react-router-dom";

// Logo
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

// Navigate Links
const NavList = () => {
  const [navigatorLine, setNavigatorLine] = useState(0); // Home

  const handleNavLine = useCallback((target) => {
    if (navigatorLine === target) return;
    if (navigatorLine !== target) setNavigatorLine(target);
  });

  return (
    <div className="nav-list">
      <ul>
        <NavLine leftPosition={navigatorLine} />
        <CustomLink
          to={"/"}
          onClick={handleNavLine}
          NavTarget={0}
          setNavLine={setNavigatorLine}
        >
          Home
        </CustomLink>
        <CustomLink
          to={"about"}
          onClick={handleNavLine}
          NavTarget={90}
          setNavLine={setNavigatorLine}
        >
          About
        </CustomLink>
        <CustomLink
          to={"projects"}
          onClick={handleNavLine}
          NavTarget={180}
          setNavLine={setNavigatorLine}
        >
          Projects
        </CustomLink>
        <CustomLink
          to={"contact"}
          onClick={handleNavLine}
          NavTarget={270}
          setNavLine={setNavigatorLine}
        >
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
const CustomLink = ({ to, NavTarget, onClick, children, setNavLine }) => {
  const ifActiveClass = ({ isActive }) => {
    isActive && setNavLine(NavTarget);
    return isActive ? "active" : null;
  };
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
