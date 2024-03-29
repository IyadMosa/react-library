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
  pageSize = 10,
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
        defaultPageSize={pageSize}
        pageSizeOptions={
          [5, 10, 20, 25, 50, 100].includes(pageSize)
            ? [5, 10, 20, 25, 50, 100]
            : [...[5, 10, 20, 25, 50, 100], pageSize]
        }
      />
    </Container>
  );
};
export default Table;
