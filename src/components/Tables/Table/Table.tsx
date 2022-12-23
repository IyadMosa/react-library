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
  filterable?: boolean;
  minWidth?: number;
  minHeight?: number;
  disabled?: boolean;
  tableWidth?: string;
}

const Table: FC<TableProps> = ({
  tableTitle = "Table Title",
  data = [],
  columns,
  ...props
}) => {
  return (
    <Container tableTitle={tableTitle} data={data} columns={columns} {...props}>
      <HeaderWrapper>
        <HeaderTitleAddWrapper>
          <TitleWrapper>{tableTitle}</TitleWrapper>
          <HeaderButtonsWrapper>{props.addComponent}</HeaderButtonsWrapper>
        </HeaderTitleAddWrapper>
      </HeaderWrapper>
      <ReactTable
        className="-striped -highlight table"
        data={data}
        filterable={props.filterable ? props.filterable : true}
        columns={columns}
        defaultPageSize={props.pageSize ? props.pageSize : 10}
      />
    </Container>
  );
};
export default Table;
