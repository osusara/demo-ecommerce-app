import { useState } from "react";
import styled from "styled-components";
import { Column } from "../components/common";
import HeaderBar from "../components/navigation/HeaderBar";
import CartCard from "../components/Cart/CartCard";

const Container = styled(Column)`
  margin: 0 64px;
`;

function PageLayout({ children }) {
  const [openCart, setOpenCart] = useState(false);

  return (
    <Container>
      <header>
        <HeaderBar openCart={() => setOpenCart(true)} />
      </header>
      <main>{children}</main>
      <CartCard isOpen={openCart} setIsOpen={setOpenCart} />
    </Container>
  );
}

export default PageLayout;
