import React, { FC, useEffect } from "react";
import EmptyScreen from "../EmptyScreen";
import { ChartColumn, ChartRow, Container } from "./styles";
import {
  ColumnChart,
  DateLineChart,
  PieChart,
  PointLineChart,
} from "../../index";

export interface Props {
  title: any;
  onInit: any;
  charts: any;
}

const Dashboard: FC<Props> = ({ onInit = () => 0, charts = [] }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      onInit();
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const ChartsComponents: any = () =>
    charts.map((arr) => {
      return (
        <ChartRow>
          {arr.map(
            (chart: {
              title: string;
              type: string;
              points: [];
              yLabel: string;
            }) => {
              switch (chart.type.toLowerCase()) {
                case "pie":
                  return (
                    <ChartColumn>
                      <PieChart points={chart.points} title={chart.title} />
                    </ChartColumn>
                  );
                case "column":
                  return (
                    <ChartColumn>
                      <ColumnChart points={chart.points} title={chart.title} />
                    </ChartColumn>
                  );
                case "date":
                  return (
                    <ChartColumn>
                      <DateLineChart
                        points={chart.points}
                        title={chart.title}
                        yLabel={chart.yLabel}
                      />
                    </ChartColumn>
                  );
                case "point":
                  return (
                    <ChartColumn>
                      <PointLineChart
                        points={chart.points}
                        title={chart.title}
                        yLabel={chart.yLabel}
                      />
                    </ChartColumn>
                  );
              } //switch
            }
          )}
        </ChartRow>
      );
    });
  return (
    <Container>
      <ChartsComponents />
    </Container>
  );
};
const DashboardScreen: FC<Props> = ({
  title = "",
  onInit = () => 0,
  charts = [],
  ...props
}) => {
  return (
    <EmptyScreen
      title={title}
      page={<Dashboard onInit={onInit} title={""} charts={charts} />}
    />
  );
};
export default DashboardScreen;
