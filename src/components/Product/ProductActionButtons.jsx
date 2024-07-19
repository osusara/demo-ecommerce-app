import { Column, Row, SecondaryButton, PrimaryButton } from "../common";

const ProductActionButtons = ({ onAddToCart, onBuyNow }) => (
  <Row>
    <Column>
      <SecondaryButton onClick={onAddToCart}>
        Add to Cart
        <i className="fa-solid fa-square-plus"></i>
      </SecondaryButton>
    </Column>
    <Column>
      <PrimaryButton onClick={onBuyNow}>
        Buy Now
        <i className="fa-solid fa-basket-shopping" />
      </PrimaryButton>
    </Column>
  </Row>
);

export default ProductActionButtons