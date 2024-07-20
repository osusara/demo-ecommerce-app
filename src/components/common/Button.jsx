import styled from "styled-components";

export const Button = styled.button`
  width: 194px;
  height: 48px;
  padding: 12px 16px 12px 16px;
  margin-right: 5px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  text-align: center;

  i {
    margin-left: 7px;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: #ed342a;
  color: #ffffff;

  &:hover {
    background-color: #ffffff;
    color: #ed342a;
    border: solid #ed342a 2px;
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: #ffffff;
  color: #000000;
  border: solid #000000 2px;
  margin-right: 16px;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
`;
