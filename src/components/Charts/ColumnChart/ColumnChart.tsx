import React, { FC, useMemo } from "react";
import { Chart } from "react-google-charts";
import { Container, NoData, TitleWrapper } from "../style";

export interface Props {
  points: object[];
  title: string;
  width?: string;
  height?: string;
}

const ColumnChart: FC<Props> = ({
  points = [],
  title = "",
  width = "100%",
  height = "400px",
}) => {
  const data = useMemo(() => {
    let titles = [];
    points.forEach((point: { label }) =>
      titles.push(point.label, { role: "annotation" })
    );
    let values = [];
    points.forEach((point: { value }) => values.push(point.value, point.value));
    return [
      ["", { role: "annotation" }, ...titles],
      ["", "", ...values],
    ];
  }, [points]);

  const Component = () => {
    if (points?.length === 0) {
      return <NoData>No Data</NoData>;
    } else {
      return (
        <Chart
          chartType="ColumnChart"
          width={width}
          height={height}
          data={data}
        />
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
export default ColumnChart;
