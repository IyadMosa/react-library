// @ts-ignore
import React from "react";
import Table from "./Table";

export default {
  title: "Table",
};
const columns = [
  {
    Header: "ID",
    accessor: "id",
    style: {
      textAlign: "center",
    },
  },
  {
    Header: "FirstName",
    accessor: "firstName",
    style: {
      textAlign: "center",
    },
  },
];

const data = [
  {
    id: 1,
    firstName: "Iyad",
  },
];
export const table = () => (
  <Table tableTitle="testing" columns={columns} data={data} />
);

export const table100Rows = () => (
  <Table tableTitle="100 Row" columns={columns} data={[]} pageSize={100} />
);
