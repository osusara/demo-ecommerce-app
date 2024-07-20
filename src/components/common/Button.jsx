import styled from "styled-components";

const Button = styled.button`
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

export const SmallButton = styled(Button)`
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
