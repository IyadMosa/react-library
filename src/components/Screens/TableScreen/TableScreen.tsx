import React, { FC, useEffect, useCallback } from "react";
import EmptyScreen from "../EmptyScreen";
import TableWithAddForm from "../../Tables/TableWithAddForm";
import { Column } from "react-table";

export interface TableScreenProps {
  title: string;
  data: object[];
  columns: Column[];
  addForm?: React.ReactNode | string;
  showAdd?: boolean;
  disabled?: boolean;
  modelTitle?: string;
  onAddSubmit?: () => void;
  onInit: () => void;
  disabledSubmit?: boolean;
  pageSize?: number;
}

const TablePage: FC<TableScreenProps> = ({
  data,
  columns,
  addForm,
  onAddSubmit,
  modelTitle,
  disabled = false,
  onInit,
  disabledSubmit = false,
  pageSize = 10,
}) => {
  // Memoized initialization function
  const initHandler = useCallback(() => {
    onInit();
  }, [onInit]);

  // Auto-refresh table every 15 seconds
  useEffect(() => {
    const interval = setInterval(initHandler, 15000);
    return () => clearInterval(interval);
  }, [initHandler]);

  return (
    <TableWithAddForm
      tableTitle=""
      data={data}
      columns={columns}
      addForm={addForm}
      showAdd={!!addForm}
      onAddSubmit={() => {
        onAddSubmit?.();
        setTimeout(initHandler, 1000);
      }}
      modelTitle={modelTitle}
      disabled={disabled}
      minHeight={600}
      minWidth={600}
      disabledSubmit={disabledSubmit}
      pageSize={pageSize}
    />
  );
};

const TableScreen: FC<TableScreenProps> = ({ title, ...props }) => {
  return <EmptyScreen title={title} page={<TablePage {...props} />} />;
};

export default TableScreen;
