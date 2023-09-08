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
import Table from "../../Tables/Table";

export interface Props {
  title: any;
  onInit: any;
  charts: any;
  setFrom: any;
  setTo: any;
  refresh?: boolean;
}

const Dashboard: FC<Props> = ({
  onInit = () => 0,
  charts = [],
  setFrom = () => 0,
  setTo = () => 0,
  refresh = true,
}) => {
  useEffect(() => {
    const interval = setInterval(() => {
      refresh && onInit();
    }, 60000);
    return () => clearInterval(interval);
  }, [refresh]);

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
              table_columns: [];
              table_data: [];
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
                case "table":
                  return (
                    <ChartColumn>
                      <Table
                        tableTitle={chart.title}
                        columns={chart.table_columns}
                        data={chart.table_data}
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
  refresh = true,
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
          refresh={refresh}
        />
      }
    />
  );
};
export default DashboardScreen;
