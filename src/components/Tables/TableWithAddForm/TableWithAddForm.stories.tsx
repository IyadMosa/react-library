// @ts-ignore
import React from "react";
import TableWithAddForm from "./TableWithAddForm";

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
export const tableWithAddForm = () => (
    <TableWithAddForm
        tableTitle="testing"
        columns={columns}
        data={data}
        modelTitle={"add form"}
        onAddSubmit={() => alert("Modal submit")}
        disabledSubmit={false}
        pageSize={100}
    />

);
