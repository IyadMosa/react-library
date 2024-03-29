import React, { FC, useEffect } from "react";
import EmptyScreen from "../EmptyScreen";
import TableWithAddForm from "../../Tables/TableWithAddForm";
import { Column } from "react-table";

export interface Props {
  title: string;
  disabled?: boolean;
  showAdd?: boolean;
  data: object[];
  columns: Column[];
  addForm?: React.ReactNode | string;
  modelTitle?: string;
  onAddSubmit?: any;
  onInit: any;
  disabledSubmit?: boolean;
  pageSize?: number;
}

const TablePage: FC<Props> = ({
  data = [],
  columns = [],
  addForm,
  onAddSubmit = () => 0,
  modelTitle = "",
  disabled = false,
  onInit = () => 0,
  disabledSubmit = false,
  pageSize = 10,
  ...props
}) => {
  useEffect(() => {
    const interval = setInterval(() => {
      onInit();
    }, 15000);
    return () => clearInterval(interval);
  }, []);
  return (
    <TableWithAddForm
      tableTitle={""}
      data={data}
      columns={columns}
      addForm={addForm}
      showAdd={props.showAdd}
      onAddSubmit={() => {
        onAddSubmit();
        setTimeout(() => {
          onInit();
        }, 1000);
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

const TableScreen: FC<Props> = ({
  title = "",
  data = [],
  columns = [],
  addForm,
  showAdd = true,
  onAddSubmit = () => 0,
  onInit = () => 0,
  disabledSubmit = false,
  ...props
}) => {
  return (
    <EmptyScreen
      title={title}
      page={
        <TablePage
          data={data}
          columns={columns}
          showAdd={showAdd}
          addForm={addForm}
          onAddSubmit={onAddSubmit}
          onInit={onInit}
          title={""}
          disabled={props.disabled}
          disabledSubmit={disabledSubmit}
          pageSize={props.pageSize}
        />
      }
    />
  );
};
export default TableScreen;
