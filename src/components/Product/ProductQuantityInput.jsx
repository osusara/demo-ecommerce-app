import styled from "styled-components";
import { Column, Row } from "../common";

const ProductQuantityInput = ({ value, setValue }) => {
  const onDecrement = () => {
    if (value > 1) setValue((v) => v - 1);
  };

  const onIncrement = () => {
    setValue((v) => v + 1);
  };

  return (
    <QtyContainer>
      <Row>
        <Column>
          <QtyButton onClick={onDecrement}>-</QtyButton>
        </Column>
        <Column>
          <QtyValue>{value}</QtyValue>
        </Column>
        <Column>
          <QtyButton onClick={onIncrement}>+</QtyButton>
        </Column>
      </Row>
    </QtyContainer>
  );
};

const QtyContainer = styled.div`
  background-color: #f3f3f3;
  border-radius: 50px;
  margin: 24px 0;
  width: fit-content;
`;

const QtyValue = styled.span`
  width: 55px;
  border: none;
  padding: 10px 0;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
`;

const QtyButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 10px 20px;
  margin: auto;
  cursor: pointer;
  font-size: 22px;
  text-align: center;
`;

export default ProductQuantityInput;