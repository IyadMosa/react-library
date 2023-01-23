import React, { FC, useMemo } from "react";
import { Chart } from "react-google-charts";

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
  const options = {
    title: title,
  };

  return (
    <Chart
      chartType="PieChart"
      width={width}
      height={height}
      data={data}
      options={options}
    />
  );
};
export default PieChart;
