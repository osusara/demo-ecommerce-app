import styled from "styled-components";
import { Button, Column, Paragraph, Row } from "../common";

const ProductSizeSelector = ({
  productVariants,
  selectedVariant,
  setSelectedVariant,
}) => {
  return (
    <>
      <StyledParagraph>
        Shoe Size : <b>{selectedVariant.variant.replace(/^\D+/g, "")}</b>
      </StyledParagraph>
      <SizePillContainer>
        {productVariants.map((variant) => (
          <Column key={variant.id}>
            <SmallButton
              onClick={() => setSelectedVariant(variant)}
              $isActive={selectedVariant.id === variant.id}
            >
              {variant.variant.replace(/^\D+/g, "")}
            </SmallButton>
          </Column>
        ))}
      </SizePillContainer>
    </>
  );
};

const SmallButton = styled(Button)`
  width: auto;
  min-width: 52px;
  margin-right: 16px;
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
