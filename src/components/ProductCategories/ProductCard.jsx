import styled from "styled-components";
import { color } from "../../theme";
import { Image } from "../common";

const ProductImage = styled(Image)`
  aspect-ratio: 1 / 0.95;
`;

const Container = styled.div`
  position: relative;
  cursor: pointer;
`;

const CardTextContainer = styled.div`
  position: absolute;
  bottom: 16px;
  width: 100%;
  text-align: center;
`;

const CardText = styled.h5`
  color: #fff;
  font-size: 20px;

  ${Container}:hover & {
    color: ${color.text.accentLight};
  }
`;

const UnderLine = styled.hr`
  width: 50px;
  border: solid #fff 2px;
  border-radius: 4px;

  ${Container}:hover & {
    border-color: ${color.text.accentLight};
  }
`;

const ProductCard = ({ product }) => {
  return (
    <Container key={product.id}>
      <ProductImage src={product.image} />
      <CardTextContainer>
        <CardText>$ {product.price}</CardText>
        <CardText>{product.name}</CardText>
        <UnderLine />
      </CardTextContainer>
    </Container>
  );
};

export default ProductCard;
