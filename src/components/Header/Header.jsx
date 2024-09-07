import Container from "../../layouts/Container";
import { Logo, NavList } from "./HeaderComponents";
import "./header.css";

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

export default Header;
