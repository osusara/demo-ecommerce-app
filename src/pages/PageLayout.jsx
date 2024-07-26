import { useState } from "react";
import styled from "styled-components";
import { Column } from "../components/common";
import HeaderBar from "../components/navigation/HeaderBar";
import CartCard from "../components/Cart/CartCard";
import Footer from "../components/navigation/Footer";
import { Outlet } from "react-router-dom";

const Container = styled(Column)`
  margin: 0 64px;
`;

const StyledMain = styled.main`
  flex: 1;
`;

function PageLayout() {
  const [openCart, setOpenCart] = useState(false);

  return (
    <Container>
      <header>
        <HeaderBar openCart={() => setOpenCart(true)} />
      </header>
      <StyledMain>
        <Outlet />
      </StyledMain>
      <CartCard isOpen={openCart} setIsOpen={setOpenCart} />
      <Footer />
    </Container>
  );
}

export default PageLayout;
