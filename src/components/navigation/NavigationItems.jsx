import styled from "styled-components";

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

  & a {
    text-decoration: none;
    font-size: 18px;
  }

  & a:hover {
    color: #ddd;
  }
`;

function NavigationItems() {
  return (
    <NavItemContainer>
      <NavItem>
        <a href="#home">Home</a>
      </NavItem>
      <NavItem>
        <a href="#about">About</a>
      </NavItem>
      <NavItem>
        <a href="#shop">Shop</a>
      </NavItem>
      <NavItem>
        <a href="#testimonials">Testimonials</a>
      </NavItem>
      <NavItem>
        <a href="#collections">Collections</a>
      </NavItem>
    </NavItemContainer>
  );
}

export default NavigationItems;
