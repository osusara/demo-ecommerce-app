import styled from "styled-components";
import CartItem from "./CartItem";

const CartItemsList = ({ items = [] }) => {
  return (
    <CartItemsContainer>
      {items.map((item) => (
        <CartItem key={item.product_variant.id} item={item} />
      ))}
    </CartItemsContainer>
  );
};

const CartItemsContainer = styled.div`
  height: 480px;
  margin-top: 30px;
  overflow-y: auto;
`;

export default CartItemsList;
