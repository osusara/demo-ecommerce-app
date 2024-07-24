import styled from "styled-components";
import { Column, Heading, Row } from "../common";
import logo from "/logo.svg";
import banner from "/footer-banner.jpeg";
import { HighlightedText } from "../common/Text";

const Logo = styled.img`
  width: 64px;
  margin-bottom: 20px;
`;

const BannerImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 400px;
  filter: brightness(0.5);
`;

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 48px 0px;
  gap: 20px;
`;

const Banner = styled.div`
  display: flex;
  margin-left: -68px;
  margin-right: -68px;
  position: relative;
`;

const BannerContent = styled(Column)`
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const BannerHeader = styled(Heading)`
  font-size: 36px;
  line-height: 36px;
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
`;

const BannerText = styled.p`
  max-width: 800px;
  color: #fff;
  text-align: center;
`;

const Bottom = styled.div`
  display: flex;
  padding: 48px 0px;
  gap: 20px;
  width: 100%;
`;

const LinksHeading = styled(Heading)`
  font-size: 18px;
  line-height: 18px;
  margin-bottom: 16px;
`;

const LinksSection = styled(Row)`
  flex-grow: 1;
  justify-content: space-between;
  gap: 8px;

  & li {
    margin: 2px 0px;
  }
`;

const Caption = styled(Column)`
  max-width: 550px;
`;

// https://i.postimg.cc/FsLvWQ1m/1f6d1a31a198f7269b04b05cf9cde05e.jpg

function Footer() {
  return (
    <Container>
      <Banner>
        <BannerImage src={banner} alt="footer-banner" />
        <BannerContent>
          <BannerHeader>
            What our <HighlightedText>clients say</HighlightedText> about us
          </BannerHeader>
          <BannerText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel
            placerat malesuada aenean scelerisque enim fames amet, proin. Tortor
            donec nulla vel nibh eu aliquet imperdiet. Faucibus non augue odio
            duis amet. Vitae massa et tincidunt.
          </BannerText>
        </BannerContent>
      </Banner>
      <Bottom>
        <Caption>
          <Logo src={logo} alt="logo" />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel placerat
          malesuada aenean scelerisque enim fames amet,
        </Caption>
        <LinksSection>
          <Column>
            <LinksHeading>Products</LinksHeading>
            <ul>
              <li>Courses</li>
              <li>Schedule</li>
              <li>Pricing</li>
              <li>Teachers</li>
            </ul>
          </Column>
          <Column>
            <LinksHeading>We</LinksHeading>
            <ul>
              <li>Careers</li>
              <li>About us</li>
              <li>Blog</li>
            </ul>
          </Column>
          <Column>
            <LinksHeading>Contact Us</LinksHeading>
            <ul>
              <li>1901 Thornridge Cir. Shiloh,</li>
              <li>Hawaii 81063</li>
              <li>+1 891 989-11-91</li>
              <li>hello@logoipsum.com</li>
            </ul>
          </Column>
        </LinksSection>
      </Bottom>
    </Container>
  );
}

export default Footer;
