import React, { FC, useMemo } from "react";
import { Chart } from "react-google-charts";
import { Container, NoData, TitleWrapper } from "../style";

export interface Props {
  points: object[];
  title: string;
  width?: string;
  height?: string;
}

const PieChart: FC<Props> = ({
  points = [],
  title = "",
  width = "100%",
  height = "400px",
}) => {
  const data = useMemo(
    () => [
      ["", ""],
      ...points.map((point: { label; value }) => [point.label, point.value]),
    ],
    [points]
  );

  const Component = () => {
    if (points?.length === 0) {
      return <NoData>No Data</NoData>;
    } else {
      return (
        <Chart chartType="PieChart" width={width} height={height} data={data} />
      );
    }
  };

  return (
    <Container>
      <TitleWrapper>{title}</TitleWrapper>
      <Component />
    </Container>
  );
};
export default PieChart;
