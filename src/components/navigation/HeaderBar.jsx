import styled from "styled-components";
import logo from "/logo.svg";
import NavigationItems from "./NavigationItems";

const Container = styled.div`
  display: grid;
  grid-template-columns: 75px 1fr auto;
  margin: 0 64px;
`;

const Logo = styled.img`
  margin-top: auto;
  margin-bottom: auto;
`;

function HeaderBar({ openCart }) {
  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <NavigationItems openCart={openCart} />
    </Container>
  );
}

export default HeaderBar;
