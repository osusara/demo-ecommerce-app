import styled from "styled-components";
import { color } from "../../theme";
import { Heading, HighlightedText, SectionHeading } from "../common/Text";
import logo from "/logo.svg";

const cardData = [
  {
    id: 1,
    heading: "24/7 Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus eget pellentesque sit leo gravida.",
    iconClass: "ph ph-phone",
    selected: false,
  },
  {
    id: 2,
    heading: "Cash Back",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus eget pellentesque sit leo gravida.",
    iconClass: "ph ph-money-wavy",
    selected: false,
  },
  {
    id: 3,
    heading: "Monthly Offer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus eget pellentesque sit leo gravida.",
    iconClass: "ph ph-seal-percent",
    selected: false,
  },
  {
    id: 1,
    heading: "Membership",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus eget pellentesque sit leo gravida.",
    iconClass: "ph ph-users",
    selected: true,
  },
];

const StyledSection = styled.section`
  margin: 0 -68px;
  background-color: ${color.background.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
`;

const CardIcon = styled.i`
  background-color: #f5f5f5;
  font-size: 72px;
  padding: 24px;
  border-radius: 100px;
  color: #000;
`;

const CardHeading = styled(Heading)`
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  color: ${color.text.accent};
  margin: 24px 0px;
`;

// ${({ $selected }) => `
// color: ${$selected ? color.text.emphasis : color.text.accent};
// `}

const Logo = styled.img`
  width: 64px;
  margin: 20px 0px;
`;

const Card = styled.div`
  padding: 24px;
  border-radius: 12px;
  height: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${({ $selected }) => `
    background-color: ${$selected ? "#000" : "#fff"};
     color: ${$selected ? "#fff" : color.text.darker};

    & ${CardHeading} {
      color: ${$selected ? color.text.emphasis : color.text.accent};
    }

    & ${Logo} {
      filter: invert(${$selected ? 1 : 0});
    }
  `}
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  margin-top: 20px;
`;

const WhatWeOffer = () => {
  return (
    <StyledSection>
      <SectionHeading>
        What We <HighlightedText>Offer</HighlightedText>
      </SectionHeading>
      <CardContainer>
        {cardData.map((data) => (
          <Card $selected={data.selected} key={data.id}>
            <CardIcon className={data.iconClass} />
            <CardHeading $selected={data.selected}>{data.heading}</CardHeading>
            {data.description}
            <Logo src={logo} alt="logo" />
          </Card>
        ))}
      </CardContainer>
    </StyledSection>
  );
};

export default WhatWeOffer;
