import styled from "styled-components";

const NavBar = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`;

const NavItem = styled.li`
  margin: 0 1rem;
  padding: 25px;

  & a {
    text-decoration: none;
    font-size: 18px;
  }

  & a:hover {
    color: #ddd;
  }
`;

function NavigationBar() {
  return (
    <NavBar>
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
    </NavBar>
  );
}

export default NavigationBar;
