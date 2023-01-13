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
}

const TableWithAddForm: FC<TableWithFormProps> = ({
  tableTitle = "Table Title",
  data = [],
  columns,
  disabledSubmit = false,
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
          onAddSubmit={props.onAddSubmit}
          disabledSubmit2={disabledSubmit}
        />
      }
      minWidth={props.minWidth}
      disabled={props.disabled}
      {...props}
    />
  );
};
export default TableWithAddForm;
