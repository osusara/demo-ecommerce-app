import styled from "styled-components";
import {
  Row,
  Column,
  Heading,
  Paragraph,
  PrimaryButton,
  Image,
} from "../common/index";
import { color } from "../../theme";
import HeroCarousel from "./HeroCarousel";

const HeroSection = () => {
  return (
    <MarginContainer>
      <Row>
        <Column>
          <PaddingContainer>
            <HeroHeadingText>Summer Collection</HeroHeadingText>
            <HeroYearText>2024</HeroYearText>
            <HeroParagraph>
              Find your shoes from our various collections. Here shoes are
              endless and profit is also endless.
            </HeroParagraph>
            <PrimaryButton>
              Shop Now
              <i className="fa-solid fa-arrow-right"></i>
            </PrimaryButton>
          </PaddingContainer>
          <HeroCarousel />
        </Column>
        <Column>
          <PaddingContainer>
            <HeroImage
              src="https://i.postimg.cc/DZK5kd5P/6d441dae615bc2c6ed8d9c1b35c862dd.png"
              atl="Hero image"
              width="550px"
              height="550px"
            />
          </PaddingContainer>
        </Column>
      </Row>
    </MarginContainer>
  );
};

const MarginContainer = styled.div`
  margin: 50px;
`;

const PaddingContainer = styled.div`
  padding: 10px;
`;

const HeroHeadingText = styled(Heading)`
  font-size: 76px;
  line-height: 94px;
`;

const HeroYearText = styled(Heading)`
  font-size: 64px;
  line-height: 64px;
  padding: 8px 16px 8px 16px;
  border: 2px solid ${color.text.emphasis};
  color: ${color.text.emphasis};
  width: 240px;
`;

const HeroParagraph = styled(Paragraph)`
  color: ${color.text.light};
  font-size: 18px;
  line-height: 25px;
  margin: 20px 0;
`;

const HeroImage = styled(Image)`
  border-radius: 50px;
`;

export default HeroSection;
