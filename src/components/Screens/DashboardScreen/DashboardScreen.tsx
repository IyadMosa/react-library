import React, { FC, useEffect } from "react";
import EmptyScreen from "../EmptyScreen";
import { ChartColumn, ChartRow, Container } from "./styles";
import {
  ColumnChart,
  DateLineChart,
  DateRangePickerModal,
  PieChart,
  PointLineChart,
} from "../../index";

export interface Props {
  title: any;
  onInit: any;
  charts: any;
  setFrom: any;
  setTo: any;
}

const Dashboard: FC<Props> = ({
  onInit = () => 0,
  charts = [],
  setFrom = () => 0,
  setTo = () => 0,
}) => {
  useEffect(() => {
    const interval = setInterval(() => {
      onInit();
    }, 60000);
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
  setFrom = () => 0,
  setTo = () => 0,
  ...props
}) => {
  return (
    <EmptyScreen
      title={title}
      titleComponent={<DateRangePickerModal setFrom={setFrom} setTo={setTo} />}
      page={
        <Dashboard
          onInit={onInit}
          title={""}
          charts={charts}
          setFrom={setFrom}
          setTo={setTo}
        />
      }
    />
  );
};
export default DashboardScreen;
