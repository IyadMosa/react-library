import React, { FC, useCallback, useEffect } from "react";
import EmptyScreen from "../EmptyScreen";
import TableWithAddForm from "../../Tables/TableWithAddForm";

export interface TableScreenProps {
  title: string;
  data: object[];
  columns: [];
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
  title,
  data,
  columns,
  showAdd = true,
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
      showAdd={showAdd}
      onAddSubmit={() => {
        onAddSubmit();
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
  return (
    <EmptyScreen title={title} page={<TablePage title={title} {...props} />} />
  );
};

export default TableScreen;
