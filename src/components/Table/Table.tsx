import React, { FC } from "react";
import {
  Container,
  HeaderButtonsWrapper,
  HeaderTitleAddWrapper,
  HeaderWrapper,
  TitleWrapper,
} from "./styles";
import ReactTable, { Column } from "react-table";
import "react-table/react-table.css";

export interface TableProps {
  tableTitle: string;
  data: object[];
  columns: Column[];
  pageSize?: number;
  addComponent?: React.ReactNode | string;
  filterable: boolean;
}

const Table: FC<TableProps> = ({
  tableTitle = "Table Title",
  data = [],
  columns,
  pageSize = 10,
  addComponent = <div />,
  filterable = false,
  ...props
}) => {
  return (
    <Container className={"table-container"}>
      <HeaderWrapper>
        <HeaderTitleAddWrapper>
          <TitleWrapper>{tableTitle}</TitleWrapper>
          <HeaderButtonsWrapper>{addComponent}</HeaderButtonsWrapper>
        </HeaderTitleAddWrapper>
      </HeaderWrapper>
      <ReactTable
        className="-striped -highlight"
        data={data}
        filterable={filterable}
        columns={columns}
        defaultPageSize={pageSize}
      />
    </Container>
  );
};
export default Table;
