// @ts-ignore
import React from "react";
import DashboardScreen from "./DashboardScreen";

export default {
  title: "Dashboard",
};

export const dashboardScreen = () => {
  const charts = [
    [
      {
        title: "Pie Chart 1",
        type: "Pie",
        points: [
          { label: "A", value: 500 },
          { label: "B", value: 500 },
        ],
      },
      {
        title: "Pie Chart 2",
        type: "Pie",
        points: [
          { label: "A", value: 500 },
          { label: "B", value: 500 },
        ],
      },
    ],
    [
      {
        title: "Column Chart",
        type: "Column",
        points: [
          { label: "A", value: 500 },
          { label: "B", value: 500 },
        ],
      },
    ],
    [
      {
        title: "Date Chart",
        type: "Date",
        points: [
          { label: "01/2022", value: 500 },
          { label: "02/2022", value: 550 },
          { label: "03/2022", value: 450 },
        ],
        yLabel: "price",
      },
      {
        title: "Pie Chart 3",
        type: "Pie",
        points: [
          { label: "A", value: 500 },
          { label: "B", value: 500 },
        ],
      },
    ],
    [
      {
        title: "Point Chart",
        type: "Point",
        points: [
          { x: "01", y: 500 },
          { x: "02", y: 550 },
          { x: "03", y: 450 },
        ],
        yLabel: "price",
      },
    ],
    [
      {
        title: "table",
        type: "table",
        table_columns: [
          {
            Header: "ID",
            accessor: "id",
            style: {
              textAlign: "center",
            },
          },
          {
            Header: "FirstName",
            accessor: "firstName",
            style: {
              textAlign: "center",
            },
          },
        ],
        table_data: [{ id: 1, firstName: "Iyad" }],
      },
    ],
  ];
  return (
    <DashboardScreen
      title={"Dashboard"}
      onInit={() => console.log("get data for charts")}
      charts={charts}
      setFrom={() => 0}
      setTo={() => 0}
    />
  );
};

export const emptyDashboardScreen = () => {
  const charts = [
    [
      {
        title: "Pie Chart",
        type: "Pie",
        points: [],
      },
    ],
    [
      {
        title: "Column Chart",
        type: "Column",
        points: [],
      },
    ],
    [
      {
        title: "Date Chart",
        type: "Date",
        points: [],
        yLabel: "price",
      },
    ],
    [
      {
        title: "Point Chart",
        type: "Point",
        points: [],
        yLabel: "price",
      },
    ],
  ];
  return (
    <DashboardScreen
      title={"Dashboard"}
      onInit={() => 0}
      charts={charts}
      setFrom={() => 0}
      setTo={() => 0}
    />
  );
};
