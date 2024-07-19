import styled from "styled-components";
import { Button, Column, Paragraph, Row } from "../common";

const ProductSizeSelector = ({
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

const SmallButton = styled(Button)`
  width: 52px;
  height: 29px;
  padding: 2px 16px 2px 16px;
  border-radius: 6px;
  background-color: ${(props) => (props.isActive ? "#ed342a" : "#ffffff")};
  border: ${(props) => (props.isActive ? "none" : "1px solid #808080")};
  color: ${(props) => (props.isActive ? "#ffffff" : "#808080")};

  &:hover {
    background-color: #ed342a;
    color: #ffffff;
    border: none;
  }
`;

export default ProductSizeSelector;
