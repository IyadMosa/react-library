// @ts-ignore
import React, { useState } from "react";
import { DateLineChart, PointLineChart } from "./LineChart";

export default {
  title: "Charts/LineChart",
};

export const Simple = (args) => {
  return (
    <PointLineChart
      points={args.points}
      title={args.title}
      width={args.width}
      height={args.height}
      xLabel={args.xLabel}
      yLabel={args.yLabel}
    />
  );
};

Simple.args = {
  points: [
    { x: 1, y: 400 },
    { x: 2, y: 500 },
    { x: 3, y: 250 },
    { x: 6, y: 600 },
  ],
  width: "100%",
  height: "300px",
  title: "Simple line chart",
  xLabel: "Price",
  yLabel: "Size",
};

export const DateChart = (args) => {
  return (
    <DateLineChart
      points={args.points}
      title={args.title}
      width={args.width}
      height={args.height}
      yLabel={args.yLabel}
    />
  );
};

DateChart.args = {
  points: [
    { date: "10/2018", value: 400 },
    { date: "04/2020", value: 600 },
    { date: "05/2021", value: 500 },
    { date: "11/2022", value: 250 },
    { date: "01/2012", value: 250 },
  ],
  width: "100%",
  height: "300px",
  title: "Simple line chart",
  yLabel: "Value",
};
