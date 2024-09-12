import "./header.css";
import adminData from "../../../data/admin/adminData";
import Container from "../../../layouts/Container";
import Logo from "./Logo";
import NavList from "./NavList";

const Header = () => {
  return (
    <div className="header" data-aos="fade-down">
      <Container>
        <Logo name={adminData.name} />
        <NavList />
      </Container>
    </div>
  );
};

export default Header;
