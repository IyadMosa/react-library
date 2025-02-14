import React, { FC, useCallback } from "react";
import { Column } from "react-table";
import Table from "../Table/Table";
import { AddForm } from "../../AddEditForm";

export interface TableWithFormProps {
  tableTitle?: string;
  data?: object[];
  columns: Column[];
  pageSize?: number;
  addForm?: React.ReactNode | string;
  filterable?: boolean;
  minWidth?: number;
  minHeight?: number;
  modelTitle?: string;
  onAddSubmit?: () => void;
  disabled?: boolean;
  disabledSubmit?: boolean;
  showAdd?: boolean;
}

const TableWithAddForm: FC<TableWithFormProps> = React.memo(
  ({
    tableTitle = "Table Title",
    data = [],
    columns,
    pageSize = 10,
    addForm,
    showAdd = true,
    disabledSubmit = false,
    onAddSubmit,
    disabled = false,
    ...props
  }) => {
    // Optimized callback to prevent unnecessary re-renders
    const handleAddSubmit = useCallback(() => {
      if (onAddSubmit) onAddSubmit();
    }, [onAddSubmit]);

    return (
      <Table
        tableTitle={tableTitle}
        data={data}
        columns={columns}
        addComponent={
          showAdd ? (
            <AddForm
              addForm={addForm}
              showAdd={showAdd}
              onAddSubmit={handleAddSubmit}
              disabledSubmit={disabledSubmit}
              disabled={disabled}
            />
          ) : null
        }
        pageSize={pageSize}
        {...props}
      />
    );
  }
);

export default TableWithAddForm;
