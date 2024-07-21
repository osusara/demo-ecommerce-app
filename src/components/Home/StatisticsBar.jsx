import styled from "styled-components";
import { color } from "../../theme";

const stats = [
  {
    id: 1,
    count: "20k",
    description: "Orders completed",
  },
  {
    id: 2,
    count: "40k",
    description: "Regular visitors",
  },
  {
    id: 3,
    count: "15k",
    description: "Happy customers",
  },
];

const StatisticsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Statistic = styled.div`
  display: flex;
  align-items: center;
`;

const StatisticDescription = styled.span`
  color: ${color.text.light};
  font-family: Mulish;
  font-size: 18px;
  line-height: 25.2px;
  letter-spacing: 0.01em;
`;

const StatisticsCount = styled.span`
  font-family: Bruno Ace SC;
  font-size: 36px;
  line-height: 36px;
  letter-spacing: -0.02em;
  margin-right: 8px;
  color: ${color.text.emphasis};
`;

const StatisticsBar = () => {
  return (
    <StatisticsContainer>
      {stats.map((stat) => (
        <Statistic key={stat.id}>
          <StatisticsCount>{stat.count} + </StatisticsCount>
          <StatisticDescription>{stat.description}</StatisticDescription>
        </Statistic>
      ))}
    </StatisticsContainer>
  );
};

export default StatisticsBar;
