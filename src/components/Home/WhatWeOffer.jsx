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
  },
  {
    id: 2,
    heading: "Cash Back",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus eget pellentesque sit leo gravida.",
    iconClass: "ph ph-money-wavy",
  },
  {
    id: 3,
    heading: "Monthly Offer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus eget pellentesque sit leo gravida.",
    iconClass: "ph ph-seal-percent",
  },
  {
    id: 4,
    heading: "Membership",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus eget pellentesque sit leo gravida.",
    iconClass: "ph ph-users",
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

const Logo = styled.img`
  width: 64px;
  margin: 20px 0px;
`;

const Card = styled.div`
  max-width: 300px;
  padding: 24px;
  border-radius: 12px;
  height: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #fff;
  color: ${color.text.darker};

  &:hover {
    background-color: #000;
    color: #fff;

    & ${CardHeading} {
      color: ${color.text.emphasis};
    }

    & ${Logo} {
      filter: invert(1);
    }
  }
`;

const CardContainer = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
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
          <Card key={data.id}>
            <CardIcon className={data.iconClass} />
            <CardHeading>{data.heading}</CardHeading>
            {data.description}
            <Logo src={logo} alt="logo" />
          </Card>
        ))}
      </CardContainer>
    </StyledSection>
  );
};

export default WhatWeOffer;
