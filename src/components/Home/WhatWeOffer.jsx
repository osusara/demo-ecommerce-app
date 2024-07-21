import styled from "styled-components";
import { color } from "../../theme";
import { HighlightedText, SectionHeading } from "../common/Text";

const StyledSection = styled.section`
  width: 100%;
  background-color: ${color.background.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
`;

const WhatWeOffer = () => {
  return (
    <StyledSection>
      <SectionHeading>
        What We <HighlightedText>Offer</HighlightedText>
      </SectionHeading>
      WHAT WE OFFER SECTION
    </StyledSection>
  );
};

export default WhatWeOffer;
