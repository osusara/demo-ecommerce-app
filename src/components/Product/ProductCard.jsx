import { useState } from "react";
import styled from "styled-components";
import { useCart } from "../../hooks/useCart";
import { Column, Container, Heading, Paragraph, Row } from "../common";
import ProductActionButtons from "./ProductActionButtons";
import ProductImage from "./ProductImage";
import ProductQuantityInput from "./ProductQuantityInput";
import ProductRating from "./ProductRating";
import ProductSizeSelector from "./ProductSizeSelector";

const productMock = {
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
  collection: {
    name: "Sandals, Slippers, Boots, Sports, Chapals",
    id: 1,
  },
};

const ProductCard = ({ product = productMock }) => {
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [productQty, setProductQty] = useState(1);
  const { dispatch } = useCart();

  const addToCartHandler = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        quantity: productQty,
        product_variant: {
          product: {
            image_url: product.images[0],
            price: product.price,
            name: product.name,
            description: product.description,
            id: product.id,
            collection: product.collection,
          },
          varient: `Size ${product.sizes[selectedSizeIndex]}`,
          id: Math.random(),
          stock: 899,
        },
      },
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
            productImages={product.images}
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
