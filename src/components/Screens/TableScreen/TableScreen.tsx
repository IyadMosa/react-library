import React, { FC, useEffect } from "react";
import EmptyScreen from "../EmptyScreen";
import TableWithAddForm from "../../Tables/TableWithAddForm";
import { Column } from "react-table";

export interface Props {
  title: string;
  disabled?: boolean;
  data: object[];
  columns: Column[];
  addForm: React.ReactNode | string;
  modelTitle?: string;
  onAddSubmit: any;
  onInit: any;
  disabledSubmit: boolean;
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
    />
  );
};

const TableScreen: FC<Props> = ({
  title = "",
  data = [],
  columns = [],
  addForm,
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
          addForm={addForm}
          onAddSubmit={onAddSubmit}
          onInit={onInit}
          title={""}
          disabled={props.disabled}
          disabledSubmit
        />
      }
    />
  );
};
export default TableScreen;
