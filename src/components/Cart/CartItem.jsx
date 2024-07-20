import styled from "styled-components";
import { Column, Image, Paragraph, RightColumn, Row } from "../common";

const CartItem = ({ item }) => {
  return (
    <ItemContainer>
      <Row>
        <Column>
          <Image
            src={item.product.images[0]}
            alt={item.product.name}
            width="75px"
            height="75px"
          />
        </Column>
        <Column>
          <DetailsContainer>
            <Paragraph>
              <b>{item.product.name}</b>
            </Paragraph>
            <small>
              Size: {item.selectedSize} | Quantity: {item.qty}
            </small>
          </DetailsContainer>
        </Column>
        <RightColumn>
          <PriceValue>
            $ {(item.product.price * item.qty).toFixed(2)}
          </PriceValue>
        </RightColumn>
      </Row>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  margin: 15px 0;
`;

const PriceValue = styled(Paragraph)`
  font-size: 20px;
  margin: auto;
`;

const DetailsContainer = styled.div`
  margin: auto 10px;
`;

export default CartItem;
