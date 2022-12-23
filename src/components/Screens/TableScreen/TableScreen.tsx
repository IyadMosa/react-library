import React, { FC } from "react";
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
}

const TablePage: FC<Props> = ({
  data = [],
  columns = [],
  addForm,
  onAddSubmit = () => 0,
  modelTitle = "",
  disabled = false,
}) => {
  return (
    <TableWithAddForm
      tableTitle={""}
      data={data}
      columns={columns}
      addForm={addForm}
      onAddSubmit={onAddSubmit}
      modelTitle={modelTitle}
      disabled={disabled}
      minHeight={600}
      minWidth={600}
    />
  );
};

const TableScreen: FC<Props> = ({
  title = "",
  data = [],
  columns = [],
  addForm,
  onAddSubmit = () => 0,
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
          title={""}
          disabled={props.disabled}
        />
      }
    />
  );
};
export default TableScreen;
