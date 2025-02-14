import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import TableScreen, { TableScreenProps } from "./TableScreen";
import { Column } from "react-table";

// Sample Data
const mockData = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
];

const columns: Column[] = [
  { Header: "ID", accessor: "id" },
  { Header: "Name", accessor: "name" },
  { Header: "Age", accessor: "age" },
];

export default {
  title: "Components/TableScreen",
  component: TableScreen,
  argTypes: {
    onInit: { action: "Initialized" },
    onAddSubmit: { action: "Added" },
  },
} as Meta;

// Template
const Template: StoryFn<TableScreenProps> = (args) => <TableScreen {...args} />;

// Default Story
export const Default = Template.bind({});
Default.args = {
  title: "User List",
  data: mockData,
  columns: columns,
  showAdd: false,
};

// With Add Form
export const WithAddForm = Template.bind({});
WithAddForm.args = {
  ...Default.args,
  showAdd: true,
  addForm: <div>Mock Add Form</div>,
};

// Disabled State
export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
  disabledSubmit: true,
};

// Custom Page Size
export const CustomPageSize = Template.bind({});
CustomPageSize.args = {
  ...Default.args,
  pageSize: 5,
};
