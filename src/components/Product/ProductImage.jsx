import { useState } from "react";
import { Column, Image, Row } from "../common";
import styled from "styled-components";

const ProductImage = ({ productImages, productName }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <>
      <Image
        src={productImages[selectedImageIndex]}
        alt={`${productName} ${selectedImageIndex}`}
        width="380px"
        height="380px"
      />
      <ImageSelector>
        <Row>
          {productImages.map((image, index) => (
            <Column key={index}>
              <Image
                src={image}
                alt={`${productName} ${selectedImageIndex}`}
                onClick={() => setSelectedImageIndex(index)}
                width="89px"
                height="89px"
              />
              {selectedImageIndex === index ? <UnderLine /> : null}
            </Column>
          ))}
        </Row>
      </ImageSelector>
    </>
  );
};

const ImageSelector = styled.div`
  margin: 10px auto;

  img {
    margin: 0 10px;
  }
`;

const UnderLine = styled.hr`
  width: 40%;
  border: solid #ed342a 2px;
  border-radius: 4px;
`;

export default ProductImage;
