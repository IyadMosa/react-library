// @ts-ignore
import React, { useState } from "react";
import PieChart from "./PieChart";

export default {
  title: "Charts/PieChart",
};

export const Simple = (args) => {
  return (
    <PieChart
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
