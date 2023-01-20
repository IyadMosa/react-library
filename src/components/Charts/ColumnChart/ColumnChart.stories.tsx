// @ts-ignore
import React, { useState } from "react";
import ColumnChart from "./ColumnChart";

export default {
  title: "Charts/ColumnChart",
};

export const Simple = (args) => {
  return (
    <ColumnChart
      points={args.points}
      title={args.title}
      width={args.width}
      height={args.height}
    />
  );
};

Simple.args = {
  points: [
    { label: "1", value: 400 },
    { label: "2", value: 500 },
    { label: "3", value: 250 },
    { label: "6", value: 600 },
  ],
  width: "100%",
  height: "300px",
  title: "Simple line chart",
};
