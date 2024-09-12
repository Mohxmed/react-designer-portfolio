import { useState, useCallback } from "react";
import CustomLink from "./CustomLink";

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
const NavLine = ({ leftPosition }) => {
  return (
    <span className="navigator-line" style={{ left: leftPosition }}></span>
  );
};
export default NavList;
