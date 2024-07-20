import { useEffect, useState } from "react";
import styled from "styled-components";
import { Column, Paragraph, RightColumn, Row } from "../common";

const CartOrderSummary = ({ subTotal, deleveryFee = 0, discountPercentage = 0 }) => {
  const [total, setTotal] = useState(subTotal);
  const discountValue = subTotal * (discountPercentage / 100);

  useEffect(
    function calculateTotal() {
      const currentTotal = subTotal - discountValue + deleveryFee;
      setTotal(currentTotal);
    },
    [deleveryFee, discountValue, subTotal]
  );

  return (
    <div>
      <Hr />
      <TotaText>Order Summary</TotaText>
      <Row>
        <Column>
          <SubTotaText>Subtotal</SubTotaText>
        </Column>
        <RightColumn>
          <SubTotalValue>$ {subTotal.toFixed(2)}</SubTotalValue>
        </RightColumn>
      </Row>

      {discountPercentage && discountPercentage > 0 ? (
        <Row>
          <Column>
            <SubTotaText>Discount (-{discountPercentage}%)</SubTotaText>
          </Column>
          <RightColumn>
            <SubTotalValue>$ {discountValue.toFixed(2)}</SubTotalValue>
          </RightColumn>
        </Row>
      ) : null}

      <Row>
        <Column>
          <SubTotaText>Delevery Fee</SubTotaText>
        </Column>
        <RightColumn>
          <SubTotalValue>$ {deleveryFee.toFixed(2)}</SubTotalValue>
        </RightColumn>
      </Row>

      <Hr />
      <Row>
        <Column>
          <TotaText>Total</TotaText>
        </Column>
        <RightColumn>
          <TotalValue>$ {total.toFixed(2)}</TotalValue>
        </RightColumn>
      </Row>
    </div>
  );
};

const TotaText = styled(Paragraph)`
  font-family: "Bruno Ace SC", sans-serif;
  font-size: 20px;
  margin: 10px 0;
`;

const TotalValue = styled(TotaText)`
  font-size: 24px;
`;

const SubTotaText = styled(Paragraph)`
  font-size: 14px;
  margin: 5px 0;
  color: rgba(0, 0, 0, 0.6);
`;

const SubTotalValue = styled(Paragraph)`
  font-size: 16px;
`;

const Hr = styled.hr`
  border: solid rgba(0, 0, 0, 0.1) 1px;
`;

export default CartOrderSummary;
