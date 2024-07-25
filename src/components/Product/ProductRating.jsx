import styled from "styled-components";
import { color } from "../../theme";
import { Row } from "../common";

const Container = styled(Row)`
  margin-bottom: 24px;
  align-items: center;
`;

const Rating = styled.p`
  font-size: 24px;
  margin-left: 16px;
`;

const StarIcon = ({ filled, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="28"
      viewBox="0 0 29 28"
      fill="none"
    >
      <path
        d="M13.7867 1.62234C14.0112 0.931355 14.9888 0.931359 15.2133 1.62234L17.4912 8.63298C17.7924 9.56003 18.6563 10.1877 19.6311 10.1877H27.0025C27.729 10.1877 28.0311 11.1174 27.4433 11.5445L21.4797 15.8773C20.6911 16.4502 20.3611 17.4658 20.6624 18.3928L22.9403 25.4035C23.1648 26.0945 22.3739 26.6691 21.7861 26.242L15.8225 21.9092C15.0339 21.3363 13.9661 21.3363 13.1775 21.9092L7.21387 26.242C6.62609 26.6691 5.83523 26.0945 6.05974 25.4035L8.33764 18.3928C8.63885 17.4658 8.30887 16.4502 7.52028 15.8773L1.55667 11.5445C0.968884 11.1174 1.27097 10.1877 1.99751 10.1877H9.36893C10.3437 10.1877 11.2076 9.56003 11.5088 8.63298L13.7867 1.62234Z"
        stroke={color}
        strokeWidth="1.5"
        fill={filled ? color : undefined}
      />
    </svg>
  );
};

const ProductRating = ({ rating }) => {
  const filledCount = Math.floor(2);
  const stars = Array.from({ length: 5 }).map((_, i) =>
    i < filledCount ? true : false
  );

  return (
    <Container>
      {stars.map((filled, i) => (
        <StarIcon key={i} filled={filled} color={color.button.primary} />
      ))}
      <Rating>{rating}</Rating>
    </Container>
  );
};

export default ProductRating;
