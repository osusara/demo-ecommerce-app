import styled from "styled-components";
import { color } from "../../theme";
import { Link } from "react-router-dom";

const NavItemContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
`;

const NavItem = styled.li`
  margin: 0 5px;
  padding: 25px 0;
  position: relative;
  color: ${(props) =>
    props.$isActive ? color.text.accent : color.text.heading};

  & a {
    text-decoration: none;
    font-size: 18px;
  }

  & a:hover {
    color: #ddd;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -16px;
    background-color: ${(props) =>
      props.$isActive ? color.text.accent : "unset"};
    width: calc(100% + 32px);
    height: 8px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

function NavigationItems() {
  return (
    <NavItemContainer>
      <NavItem $isActive>
        <Link to="/">Home</Link>
      </NavItem>
      <NavItem>
        <Link to="/about">About</Link>
      </NavItem>
      <NavItem>
        <Link to="/shop">Shop</Link>
      </NavItem>
      <NavItem>
        <Link to="/testimonials">Testimonials</Link>
      </NavItem>
      <NavItem>
        <Link to="/collections">Collections</Link>
      </NavItem>
    </NavItemContainer>
  );
}

export default NavigationItems;
