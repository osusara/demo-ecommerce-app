import { useState } from "react";
import styled from "styled-components";
import { Column, Container, Heading, Paragraph, Row } from "../common";
import ProductImage from "./ProductImage";
import ProductQuantityInput from "./ProductQuantityInput";
import ProductRating from "./ProductRating";
import ProductSizeSelector from "./ProductSizeSelector";

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(
    product.product_variant[0]
  );
  const [productQty, setProductQty] = useState(1);

  /**
   * TODO:
   *   - Create an "Add to Cart" button
   *   - Add an onClick handler for adding items to the cart
   */

  return (
    <ProductContainer>
      <Row>
        <Column>
          <ProductImage
            productImage={product.image_url}
            productName={product.name}
          />
        </Column>
        <Column>
          <ProductDetailsContainer>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>$ {product.price.toFixed(2)}</ProductPrice>
            <ProductRating rating={4.5} />
            <StyledParagraph color="#6E6E6E">
              {product.description}
            </StyledParagraph>

            <ProductSizeSelector
              productVariants={product.product_variant}
              selectedVariant={selectedVariant}
              setSelectedVariant={setSelectedVariant}
            />

            {/* Add to cart button */}
            <ProductQuantityInput value={productQty} setValue={setProductQty} />
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
