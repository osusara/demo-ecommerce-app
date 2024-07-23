import { useEffect, useState } from "react";
import styled from "styled-components";
import CartHeader from "./CartHeader";
import CartOrderSummary from "./CartOrderSummary";
import { PrimaryButton } from "../common";
import CartItemsList from "./CartItemsList";

const items = [
  {
    id: 1,
    qty: 2,
    selectedSize: 40,
    product: {
      id: 1,
      images: [
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
        "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      name: "Air Max Spider",
      description:
        "Spiderman Styled Sneakers Men's Football Shoes Outdoor Non- slip Mens Shoes Zapatos Hombres Breathable Man Running Shoes",
      price: 120,
      sizes: [39, 40, 41],
    },
  },
  {
    id: 2,
    qty: 1,
    selectedSize: 41,
    product: {
      id: 1,
      images: [
        "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
      ],
      name: "Air Max Spider",
      description:
        "Spiderman Styled Sneakers Men's Football Shoes Outdoor Non- slip Mens Shoes Zapatos Hombres Breathable Man Running Shoes",
      price: 120,
      sizes: [39, 40, 41],
    },
  },
];

const CartCard = ({ isOpen = true, setIsOpen }) => {
  const [cartItems, setCartItems] = useState([]);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(function getCartItems() {
    setCartItems(items);
  }, []);

  useEffect(
    function calculateTotal() {
      let currentTotal = 0;
      cartItems.forEach(
        (item) => (currentTotal = currentTotal + item.product.price * item.qty)
      );

      setSubTotal(currentTotal);
    },
    [cartItems]
  );

  return isOpen ? (
    <ModalContainer onClick={() => setIsOpen(false)}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <CartHeader onClearOrder={() => setCartItems([])} />
        <CartItemsList items={cartItems} />
        <BottomContainer>
          <CartOrderSummary subTotal={subTotal} />
          <CheckoutButton>
            Go To Checkout
            <i className="fa-solid fa-arrow-right"></i>
          </CheckoutButton>
        </BottomContainer>
      </Modal>
    </ModalContainer>
  ) : null;
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
`;

const Modal = styled.div`
  width: 480px;
  padding: 2rem;
  border: 0;
  border-radius: 1rem 0 0 1rem;
  box-shadow: hsl(0 0% 0% / 10%) 0 0 0.5rem 0.25rem;
  position: relative;
  background: white;
  margin: 0 0 0 auto;
`;

const BottomContainer = styled.div`
  width: 416px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

const CheckoutButton = styled(PrimaryButton)`
  width: 100%;
`;

export default CartCard;
