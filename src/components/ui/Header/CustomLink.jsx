import { NavLink } from "react-router-dom";

const CustomLink = ({ to, NavTarget, onClick, children, setNavLine }) => {
  const ifActiveClass = ({ isActive }) => {
    isActive && setNavLine(NavTarget);
    return isActive ? "active" : null;
  };

  return (
    <NavLink
      replace
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

export default CustomLink;
