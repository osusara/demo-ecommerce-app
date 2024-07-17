import styled from "styled-components";

export const Image = styled.img`
  height: ${(props) => (props.height ? props.height : "100%")};
  width: ${(props) => (props.width ? props.width : "100%")};
  min-width: ${(props) => (props.width)};
  object-position: center;
  border-radius: 8px;
  object-fit: cover;
`;
