import React from "react";
import {
  Container,
  Title,
  ProgressBarContainer,
  ProgressBar,
  PercentageText,
  DetailsText,
} from "./style";

interface TotalPaidProps {
  totalPaid: number;
  totalRequested: number;
  name: string;
}

const TotalPaid: React.FC<TotalPaidProps> = ({
  totalPaid,
  totalRequested,
  name,
}) => {
  const percentage =
    totalRequested > 0 ? (totalPaid / totalRequested) * 100 : 0;

  const getColor = (): string => {
    if (percentage >= 75) return "#22c55e"; // Green
    if (percentage >= 50) return "#eab308"; // Yellow
    return "#ef4444"; // Red
  };

  return (
    <Container>
      <Title>Bills for {decodeURIComponent(name)}</Title>
      <ProgressBarContainer>
        <ProgressBar color={getColor()} width={percentage} />
        <PercentageText>{percentage.toFixed(2)}%</PercentageText>
      </ProgressBarContainer>
      <DetailsText>
        {totalPaid} / {totalRequested} ({percentage.toFixed(2)}%)
      </DetailsText>
    </Container>
  );
};

export default TotalPaid;
