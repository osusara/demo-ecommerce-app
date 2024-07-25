import styled from "styled-components";
import { useCart } from "../../hooks/useCart";
import { PrimaryButton } from "../common";
import CartHeader from "./CartHeader";
import CartOrderSummary from "./CartOrderSummary";
import CartItemsList from "./CartItemsList";

const CartCard = ({ isOpen = true, setIsOpen }) => {
  const { state, dispatch } = useCart()

  const handleClearOrder = () => {
    dispatch({ type: 'REMOVE_ALL' });
  }

  return isOpen ? (
    <ModalContainer onClick={() => setIsOpen(false)}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <CartHeader onClearOrder={handleClearOrder} />
        <CartItemsList items={state.items} />
        <BottomContainer>
          <CartOrderSummary
            subTotal={state.totalAmount}
            deliveryFee={state.deliveryFee}
            discountPercentage={state.discountPercentage}
          />
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
