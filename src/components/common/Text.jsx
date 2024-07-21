import styled from "styled-components";
import { color } from "../../theme";

export const Paragraph = styled.p`
  color: ${(props) => props.color};
  text-align: start;
`;

export const Heading = styled.h1`
  font-family: "Bruno Ace SC", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 48px;
  line-height: 48px;
`;

export const SectionHeading = styled.h2`
  font-size: 36px;
`;

export const HighlightedText = styled.span`
  color: ${color.text.emphasis};
`;
