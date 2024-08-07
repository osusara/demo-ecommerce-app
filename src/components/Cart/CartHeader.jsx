import styled from "styled-components";
import { Button, Column, RightColumn, Heading, Row } from "../common";

const CartHeader = ({ onClearOrder }) => (
  <Row>
    <Column>
      <HeaderTitle>My Cart</HeaderTitle>
    </Column>
    <RightColumn>
      <HeaderButton onClick={onClearOrder}>
        Clear Order
        <i className="fa-solid fa-trash"></i>
      </HeaderButton>
    </RightColumn>
  </Row>
);

const HeaderTitle = styled(Heading)`
  font-size: 32px;
`;

const HeaderButton = styled(Button)`
  width: auto;
  height: auto;
  border: none;
  color: #262626;
  background-color: transparent;
  padding: 2px 0 2px 6px;
  margin: auto 0 auto auto;

  &:hover {
    color: #8e8e8e;
  }
`;

export default CartHeader;
