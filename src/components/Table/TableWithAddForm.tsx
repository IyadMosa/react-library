import React, { FC, useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Column } from "react-table";
import Table from "./Table";
import Modal from "../Modal";

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
}

const TableWithAddForm: FC<TableWithFormProps> = ({
  tableTitle = "Table Title",
  data = [],
  columns,
  ...props
}) => {
  const [showAddModel, setShowAddModel] = useState(false);
  return (
    <div>
      <Table
        tableTitle={tableTitle}
        data={data}
        columns={columns}
        addComponent={
          <IconButton color="primary" onClick={() => setShowAddModel(true)}>
            <AddCircleIcon />
          </IconButton>
        }
      />

      {showAddModel && (
        <div>
          <Modal
            onClose={() => {
              setShowAddModel(false);
            }}
            isShowButtons={true}
            title={props.modelTitle}
            onSubmit={() => {
              props.onAddSubmit();
              setShowAddModel(false);
            }}
          >
            {props.addForm}
          </Modal>
        </div>
      )}
    </div>
  );
};
export default TableWithAddForm;
