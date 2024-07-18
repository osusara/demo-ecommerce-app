import { useState } from "react";
import ProductImage from "./ProductImage";
import {
  Row,
  Column,
  PrimaryButton,
  SecondaryButton,
  SmallButton,
  Paragraph,
  Container,
  QtyInput,
} from "../common";
import styled from "styled-components";

const product = {
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
};

const ProductDetails = () => {
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [productQty, setProductQty] = useState(1);

  const addToCartHandler = () => {
    console.log("Add To Cart");
  };

  const buyNowHandler = () => {
    console.log("Buy Now");
  };

  return (
    <ProductContainer>
      <Row>
        <Column>
          <ProductImage
            productImages={product.images}
            productName={product.name}
          />
        </Column>
        <Column>
          <ProductDetailsContainer>
            <ProductName>{product.name}</ProductName>
            <h3>$ {product.price.toFixed(2)}</h3>
            <Paragraph color="#6E6E6E">{product.description}</Paragraph>

            <SizeSelector
              productSizes={product.sizes}
              selectedSizeIndex={selectedSizeIndex}
              setSelectedSizeIndex={setSelectedSizeIndex}
            />

            <QtyInput value={productQty} setValue={setProductQty} />

            <ActionButtons
              onAddToCart={addToCartHandler}
              onBuyNow={buyNowHandler}
            />
          </ProductDetailsContainer>
        </Column>
      </Row>
    </ProductContainer>
  );
};

const SizeSelector = ({
  productSizes,
  selectedSizeIndex,
  setSelectedSizeIndex,
}) => {
  return (
    <>
      <Paragraph>
        Shoe Size: <b>{productSizes[selectedSizeIndex]}</b>
      </Paragraph>
      <Row>
        {productSizes.map((size, index) => (
          <Column key={index}>
            <SmallButton
              onClick={() => setSelectedSizeIndex(index)}
              isActive={selectedSizeIndex === index}
            >
              {size}
            </SmallButton>
          </Column>
        ))}
      </Row>
    </>
  );
};

const ActionButtons = ({ onAddToCart, onBuyNow }) => (
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

const ProductContainer = styled(Container)`
  margin: 64px;
`;

const ProductName = styled.h1`
  font-family: "Bruno Ace SC", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 48px;
  line-height: 48px;
`;

const ProductDetailsContainer = styled(Container)`
  height: 100%;
  margin: auto auto auto 30px;
`;

export default ProductDetails;
