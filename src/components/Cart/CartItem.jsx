import styled from "styled-components";
import { Column, Image, Paragraph, RightColumn, Row } from "../common";

const CartItem = ({ item }) => {
  return (
    <ItemContainer>
      <Row>
        <Column>
          <Image
            src={item.product_variant.product.image_url}
            alt={item.product_variant.product.name}
            width="75px"
            height="75px"
          />
        </Column>
        <Column>
          <DetailsContainer>
            <Paragraph>
              <b>{item.product_variant.product.name}</b>
            </Paragraph>
            <small>
              {item.product_variant.variant} | Quantity : {item.quantity}
            </small>
          </DetailsContainer>
        </Column>
        <RightColumn>
          <PriceValue>
            $ {(item.product_variant.product.price * item.quantity).toFixed(2)}
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
