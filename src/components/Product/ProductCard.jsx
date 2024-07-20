import { useState } from "react";
import styled from "styled-components";
import { Row, Column, Paragraph, Container, Heading } from "../common";
import ProductImage from "./ProductImage";
import ProductSizeSelector from "./ProductSizeSelector";
import ProductActionButtons from "./ProductActionButtons";
import ProductQuantityInput from "./ProductQuantityInput";

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

const ProductCard = () => {
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
            <ProductPrice>$ {product.price.toFixed(2)}</ProductPrice>
            <StyledParagraph color="#6E6E6E">
              {product.description}
            </StyledParagraph>

            <ProductSizeSelector
              productSizes={product.sizes}
              selectedSizeIndex={selectedSizeIndex}
              setSelectedSizeIndex={setSelectedSizeIndex}
            />

            <ProductQuantityInput value={productQty} setValue={setProductQty} />

            <ProductActionButtons
              onAddToCart={addToCartHandler}
              onBuyNow={buyNowHandler}
            />
          </ProductDetailsContainer>
        </Column>
      </Row>
    </ProductContainer>
  );
};

const ProductContainer = styled(Container)`
  margin: 64px;
`;

const ProductName = styled(Heading)`
  margin-bottom: 24px;
`;

const ProductPrice = styled.h3`
  font-size: 32px;
  margin-bottom: 24px;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 18px;
  margin-bottom: 24px;
`;

const ProductDetailsContainer = styled(Container)`
  height: 100%;
  margin: auto auto auto 30px;
`;

export default ProductCard;
