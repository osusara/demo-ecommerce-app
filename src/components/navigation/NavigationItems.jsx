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
  position: relative;
  color: ${(props) => (props.active ? "#BD9F00" : "#000000")};

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
    background-color: ${(props) => (props.active ? "#BD9F00" : "unset")};
    width: calc(100% + 32px);
    height: 8px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

function NavigationItems({ openCart }) {
  return (
    <NavItemContainer>
      <NavItem active>
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
      <NavItem>
        <a href="#cart" onClick={openCart}>
          <i className="fa-solid fa-shopping-cart"></i>
        </a>
      </NavItem>
    </NavItemContainer>
  );
}

export default NavigationItems;