import styled from "styled-components";
import { color } from "../../theme";
import { Image } from "../common";

const ProductImage = styled(Image)`
  aspect-ratio: 1 / 0.95;
`;

const Container = styled.div`
  position: relative;
`;

const CardTextContainer = styled.div`
  position: absolute;
  bottom: 24px;
  width: 100%;
  text-align: center;
`;

const CardText = styled.h5`
  color: #fff;

  ${Container}:hover & {
    color: ${color.text.accentLight};
  }
`;

const ProductCard = ({ product }) => {
  return (
    <Container key={product.id}>
      <ProductImage src={product.image} />
      <CardTextContainer>
        <CardText>$ {product.price}</CardText>
        <CardText>{product.name}</CardText>
      </CardTextContainer>
    </Container>
  );
};

export default ProductCard;
