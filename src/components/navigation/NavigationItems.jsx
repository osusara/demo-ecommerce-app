import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { color } from "../../theme";

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
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  color: ${color.text.heading};

  &:hover {
    color: #ddd;
  }

  &.active {
    color: ${color.text.accent};
  }

  &.active::before {
    content: "";
    position: absolute;
    top: 0;
    left: -16px;
    background-color: ${color.text.accent};
    width: calc(100% + 32px);
    height: 8px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

function NavigationItems() {
  return (
    <NavItemContainer>
      <NavItem>
        <StyledLink to="/">Home</StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="/about">About</StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="/shop">Shop</StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="/testimonials">Testimonials</StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="/collections">Collections</StyledLink>
      </NavItem>
    </NavItemContainer>
  );
}

export default NavigationItems;
