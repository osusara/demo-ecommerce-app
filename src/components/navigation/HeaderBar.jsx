import styled from "styled-components";
import logo from "/logo.svg";
import NavigationItems from "./NavigationItems";

function HeaderBar({ openCart }) {
  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <NavigationItems openCart={openCart} />
      <CartButton onClick={openCart}>
        <IconWrapper>
          <i className="fa-solid fa-shopping-cart"></i>
          <Badge>3</Badge>
        </IconWrapper>
      </CartButton>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 75px 1fr auto;
  margin: 0 64px;
`;

const Logo = styled.img`
  margin-top: auto;
  margin-bottom: auto;
`;

const CartButton = styled.span`
  margin: auto 5px auto 5px;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  position: relative;
  display: inline-block;
  font-size: 28px
`;

const Badge = styled.span`
  position: absolute;
  top: -5px;
  right: -10px;
  background: red;
  color: white;
  border-radius: 50%;
  padding: 1px 6px;
  font-size: 12px;
  font-weight: bold;
`;

export default HeaderBar;
