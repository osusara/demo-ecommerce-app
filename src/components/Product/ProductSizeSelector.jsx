import styled from "styled-components";
import { Button, Column, Paragraph, Row } from "../common";

const ProductSizeSelector = ({
  productVarients,
  selectedVarient,
  setSelectedVarient,
}) => {
  return (
    <>
      <StyledParagraph>
        Shoe <b>{productVarients[0].varient}</b>
      </StyledParagraph>
      <SizePillContainer>
        {productVarients.map((varientItem) => (
          <Column key={varientItem.id}>
            <SmallButton
              onClick={() => setSelectedVarient(varientItem)}
              $isActive={selectedVarient.id === varientItem.id}
            >
              {varientItem.varient}
            </SmallButton>
          </Column>
        ))}
      </SizePillContainer>
    </>
  );
};

const SmallButton = styled(Button)`
  width: auto;
  height: 29px;
  padding: 2px 16px 2px 16px;
  border-radius: 6px;
  background-color: ${(props) => (props.$isActive ? "#ed342a" : "#ffffff")};
  border: ${(props) => (props.$isActive ? "none" : "1px solid #808080")};
  color: ${(props) => (props.$isActive ? "#ffffff" : "#808080")};

  &:hover {
    background-color: #ed342a;
    color: #ffffff;
    border: none;
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 18px;
  margin-bottom: 24px;
`;

const SizePillContainer = styled(Row)`
  margin-bottom: 24px;
`;

export default ProductSizeSelector;
