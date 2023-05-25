// @ts-ignore
import React from "react";
import TableScreen from "./TableScreen";
import TableWithAddForm from "../../Tables/TableWithAddForm";

export default {
  title: "TableScreen",
};

export const tableScreen = () => {
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
    <TableScreen
      title={"empty table page"}
      addForm={<div />}
      columns={columns}
      data={[]}
      showAdd={true}
      onAddSubmit={() => alert("submit")}
      onInit={() => console.log("send rest...")}
      disabledSubmit={false}
    />
  );
};

export const tableScreenNoAdd = () => {
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
    <TableScreen
      title={"empty table page"}
      columns={columns}
      data={[]}
      showAdd={false}
      onInit={() => console.log("send rest...")}
    />
  );
};
