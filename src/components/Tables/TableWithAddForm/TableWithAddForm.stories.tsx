import React from "react";
import { Meta, Story } from "@storybook/react";
import { Column } from "react-table";
import TableWithAddForm, { TableWithFormProps } from "./TableWithAddForm";
import { AddForm } from "../../AddEditForm";

// Mock Table Data
const mockData = [
  { id: 1, name: "John Doe", age: 28 },
  { id: 2, name: "Jane Smith", age: 34 },
  { id: 3, name: "Alice Johnson", age: 25 },
];

// Table Columns Definition
const columns: Column[] = [
  { Header: "ID", accessor: "id" },
  { Header: "Name", accessor: "name" },
  { Header: "Age", accessor: "age" },
];

// Mock Add Form
const CustomAddForm = <div style={{ padding: 20 }}>Custom Add Form Here</div>;

export default {
  title: "Components/TableWithAddForm",
  component: TableWithAddForm,
  argTypes: {
    tableTitle: { control: "text", defaultValue: "User List" },
    pageSize: { control: "number", defaultValue: 5 },
    showAdd: { control: "boolean", defaultValue: true },
    disabledSubmit: { control: "boolean", defaultValue: false },
    disabled: { control: "boolean", defaultValue: false },
  },
} as Meta;

// Template for Stories
const Template: Story<TableWithFormProps> = (args) => (
  <TableWithAddForm {...args} />
);

// 📌 Basic Table With Add Form
export const Default = Template.bind({});
Default.args = {
  data: mockData,
  columns: columns,
  showAdd: true,
  onAddSubmit: () => alert("Form Submitted!"),
};

// 📌 Table With a Custom Add Form
export const WithCustomAddForm = Template.bind({});
WithCustomAddForm.args = {
  data: mockData,
  columns: columns,
  showAdd: true,
  addForm: CustomAddForm,
  onAddSubmit: () => alert("Custom Form Submitted!"),
};

// 📌 Table With Add Disabled
export const DisabledAddButton = Template.bind({});
DisabledAddButton.args = {
  data: mockData,
  columns: columns,
  showAdd: true,
  disabled: true,
  onAddSubmit: () => alert("Should not trigger"),
};

// 📌 Table Without Add Button
export const NoAddButton = Template.bind({});
NoAddButton.args = {
  data: mockData,
  columns: columns,
  showAdd: false,
};
