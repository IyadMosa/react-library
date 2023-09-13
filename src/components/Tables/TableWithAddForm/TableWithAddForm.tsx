import React, { FC } from "react";
import { Column } from "react-table";
import Table from "../Table/Table";
import { AddForm } from "../../AddEditForm";

export interface TableWithFormProps {
  tableTitle: string;
  data: object[];
  columns: Column[];
  pageSize?: number;
  addForm?: React.ReactNode | string;
  filterable?: boolean;
  minWidth?: number;
  minHeight?: number;
  modelTitle?: string;
  onAddSubmit?: any;
  disabled?: boolean;
  disabledSubmit: boolean;
  showAdd?: boolean;
}

const TableWithAddForm: FC<TableWithFormProps> = ({
  tableTitle = "Table Title",
  data = [],
  columns,
  disabledSubmit = false,
  pageSize = 10,
  ...props
}) => {
  return (
    <Table
      tableTitle={tableTitle}
      data={data}
      columns={columns}
      addComponent={
        <AddForm
          addForm={props.addForm}
          showAdd={props.showAdd}
          onAddSubmit={props.onAddSubmit}
          disabledSubmit2={disabledSubmit}
        />
      }
      minWidth={props.minWidth}
      disabled={props.disabled}
      pageSize={pageSize}
      {...props}
    />
  );
};
export default TableWithAddForm;
