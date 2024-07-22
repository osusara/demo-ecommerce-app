import { useState } from "react";
import styled from "styled-components";
import { Row, Column, Image, Paragraph } from "../common";
import { color } from "../../theme";

const carouselItemsMock = [
  {
    id: 1,
    name: "AIR MAX 60",
    rating: 4.5,
    img: "https://i.postimg.cc/gcHtp5CX/9fe598c0318cdf4811370d0f6aecf4aa.png",
  },
  {
    id: 2,
    name: "AIR PRO 60",
    rating: 4.2,
    img: "https://i.postimg.cc/rykZvcP2/0160ab004662baa9b958c52118f9ed81.png",
  },
  {
    id: 3,
    name: "AIR PRO 50",
    rating: 4,
    img: "https://i.postimg.cc/DZK5kd5P/6d441dae615bc2c6ed8d9c1b35c862dd.png",
  },
];

const HeroCarousel = ({ carouselItems = carouselItemsMock }) => {
  const [items, setItems] = useState(carouselItems);
  const dots = carouselItems.map((item) => item.id);

  const onClickDot = (startId) => {
    const currentItemsOrder = items;
    const startIndex = currentItemsOrder.findIndex(
      (item) => item.id === startId
    );
    if (startIndex === -1) return;

    const part1 = currentItemsOrder.slice(startIndex);
    const part2 = currentItemsOrder.slice(0, startIndex);

    setItems(part1.concat(part2));
  };

  return (
    <CarouselContainer>
      <Carousel>
        {items.map((item) => (
          <CarouselItem key={item.id}>
            <Row>
              <Column>
                <Image
                  src={item.img}
                  alt={item.name}
                  width="75px"
                  height="75px"
                />
              </Column>
              <Column>
                <ItemDetails>
                  <ItemName>{item.name}</ItemName>
                  <ItemRating>
                    <i className="fa-solid fa-star"></i>{" "}
                    {item.rating.toFixed(1)}
                  </ItemRating>
                  <ItemLink href="#cart">Add To Cart</ItemLink>
                </ItemDetails>
              </Column>
            </Row>
          </CarouselItem>
        ))}
      </Carousel>
      <CarouselDots>
        {dots.map((id) => (
          <CarouselDot
            key={id}
            onClick={() => onClickDot(id)}
            className={items[0].id === id ? "active" : ""}
          />
        ))}
      </CarouselDots>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  position: relative;
  width: 95%;
  overflow: hidden;
`;

const Carousel = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const CarouselItem = styled.div`
  min-width: 47%;
  box-sizing: border-box;
  padding: 5px 10px;
  margin: 10px;
  background-color: #000000;
  border-radius: 8px;
`;

const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const CarouselDot = styled.div`
  width: 10px;
  height: 10px;
  background-color: #ccc;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &.active {
    background-color: #333;
  }
`;

const ItemDetails = styled.div`
  margin: 2px 10px;
`;

const ItemName = styled(Paragraph)`
  color: #ffffff;
  font-size: 16px;
`;

const ItemRating = styled(Paragraph)`
  color: ${color.text.light};
  font-size: 14px;
`;

const ItemLink = styled.a`
  color: ${color.text.accentLight};
  font-size: 14px;
`;

export default HeroCarousel;
