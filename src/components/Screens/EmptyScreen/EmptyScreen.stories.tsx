// @ts-ignore
import React from "react";
import EmptyScreen from "./EmptyScreen";
import TableWithAddForm from "../../Tables/TableWithAddForm";

export default {
  title: "EmptyScreen",
};

export const mainScreen = () => {
  const columns = [
    {
      Header: "id",
      accessor: "id",
    },
    {
      Header: "test",
      accessor: "test",
    },
  ];
  return (
    <EmptyScreen
      title={"empty page"}
      page={
        <TableWithAddForm
          columns={columns}
          data={[]}
          tableTitle={""}
          minWidth={800}
        />
      }
    />
  );
};
