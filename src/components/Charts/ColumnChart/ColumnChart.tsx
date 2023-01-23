import React, { FC, useMemo } from "react";
import { Chart } from "react-google-charts";

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

  const options = {
    title: title,
  };

  return (
    <Chart
      chartType="ColumnChart"
      width={width}
      height={height}
      data={data}
      options={options}
    />
  );
};
export default ColumnChart;
