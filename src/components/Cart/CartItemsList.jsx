import styled from "styled-components";
import CartItem from "./CartItem";

const CartItemsList = ({ items = [] }) => {
  return (
    <CartItemsContainer>
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </CartItemsContainer>
  );
};

const CartItemsContainer = styled.div`
  margin-top: 45px;
`;

export default CartItemsList;
