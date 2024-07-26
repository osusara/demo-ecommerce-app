import { useState } from "react";
import styled from "styled-components";
import { useCart } from "../../hooks/useCart";
import { Column, Container, Heading, Paragraph, Row } from "../common";
import ProductActionButtons from "./ProductActionButtons";
import ProductImage from "./ProductImage";
import ProductQuantityInput from "./ProductQuantityInput";
import ProductRating from "./ProductRating";
import ProductSizeSelector from "./ProductSizeSelector";

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(
    product.product_variant[0]
  );
  const [productQty, setProductQty] = useState(1);
  const { dispatch } = useCart();

  const addToCartHandler = async () => {
    const payload = {
      quantity: productQty,
      productId: product.id,
      product_variant: {
        product: {
          image_url: product.image_url,
          price: product.price,
          name: product.name,
          description: product.description,
          id: product.id,
          collection: product.collection,
        },
        variant: selectedVariant.variant,
        id: Math.random(),
        stock: selectedVariant.stock,
      },
    };

    dispatch({
      type: "ADD_ITEM",
      payload,
    });
  };

  const buyNowHandler = () => {
    console.log("Buy Now");
  };

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
