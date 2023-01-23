import React, { FC, useMemo } from "react";
import { Chart } from "react-google-charts";
import { Container } from "./style";

export interface Props {
  disabled?: boolean;
  points: object[]; //{label:"", value:""}
  title: string;
  width?: string;
  height?: string;
  xLabel?: string;
  yLabel: string;
}

export const LineChart = ({
  data = [],
  title = "",
  width = "100%",
  height = "400px",
  ...props
}) => {
  const options = {
    chart: {
      title: title,
    },
    series: {
      0: { axis: props.xLabel },
    },
    axes: {
      y: {
        Total: { label: props.yLabel },
      },
    },
  };
  return (
    <Chart
      chartType="Line"
      width={width}
      height={height}
      data={data}
      options={options}
    />
  );
};

export const PointLineChart: FC<Props> = ({
  points = [],
  title = "",
  xLabel = "",
  yLabel = "",
}) => {
  const data = useMemo(
    () => [
      [xLabel, yLabel],
      ...points.map((point: { x; y }) => [point.x, point.y]),
    ],
    [points]
  );
  return (
    <Container id={"line-chart-container"}>
      <LineChart title={title} data={data} />
    </Container>
  );
};

export const DateLineChart: FC<Props> = ({
  points = [],
  title = "",
  yLabel = "",
}) => {
  const data = useMemo(
    () => [
      ...points.map((point: { date; value }) => [point.date, point.value]),
    ],
    [points]
  );
  data.sort((a, b) => {
    let date1 = a[0].split("/").reverse().join("");
    let date2 = b[0].split("/").reverse().join("");
    return date1.localeCompare(date2);
  });
  const titledData = useMemo(() => [["Date", yLabel], ...data], [data]);
  return <LineChart title={title} data={titledData} />;
};
