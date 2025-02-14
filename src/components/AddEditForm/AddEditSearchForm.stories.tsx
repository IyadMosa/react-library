import React from "react";
import { Meta, Story } from "@storybook/react";
import AddEditSearchForm, {
  AddForm,
  EditForm,
  SearchForm,
  AddEditForm,
  AEProps,
} from "./AddEditSearchForm";

export default {
  title: "Components/AddEditSearchForm",
  component: AddEditSearchForm,
  argTypes: {
    disabled: { control: "boolean" },
    showAdd: { control: "boolean" },
    showEdit: { control: "boolean" },
    showSearch: { control: "boolean" },
    disabledSubmit: { control: "boolean" },
  },
} as Meta;

const Template: Story<AEProps> = (args) => <AddEditSearchForm {...args} />;

// Default story (Add button enabled, others hidden)
export const Default = Template.bind({});
Default.args = {
  showAdd: true,
  showEdit: false,
  showSearch: false,
  disabledSubmit: false,
  addForm: <p>Add Form Content</p>,
  onAddSubmit: () => alert("Add submitted!"),
};

// Add Button Only
export const AddOnly = Template.bind({});
AddOnly.args = {
  showAdd: true,
  showEdit: false,
  showSearch: false,
  disabledSubmit: false,
  addForm: <p>Add Form Content</p>,
  onAddSubmit: () => alert("Added Successfully!"),
};

// Edit Button Only
export const EditOnly = Template.bind({});
EditOnly.args = {
  showAdd: false,
  showEdit: true,
  showSearch: false,
  disabledSubmit: false,
  editForm: <p>Edit Form Content</p>,
  onEditSubmit: () => alert("Edit Saved!"),
};

// Search Button Only
export const SearchOnly = Template.bind({});
SearchOnly.args = {
  showAdd: false,
  showEdit: false,
  showSearch: true,
  disabledSubmit: false,
  searchForm: <p>Search Form Content</p>,
  onSearchSubmit: () => alert("Search Performed!"),
};

// Add & Edit Buttons
export const AddEdit = Template.bind({});
AddEdit.args = {
  showAdd: true,
  showEdit: true,
  showSearch: false,
  disabledSubmit: false,
  addForm: <p>Add Form Content</p>,
  editForm: <p>Edit Form Content</p>,
  onAddSubmit: () => alert("Added Successfully!"),
  onEditSubmit: () => alert("Edit Saved!"),
};

// All Buttons (Add, Edit, Search)
export const FullComponent = Template.bind({});
FullComponent.args = {
  showAdd: true,
  showEdit: true,
  showSearch: true,
  disabledSubmit: false,
  addForm: <p>Add Form Content</p>,
  editForm: <p>Edit Form Content</p>,
  searchForm: <p>Search Form Content</p>,
  onAddSubmit: () => alert("Added Successfully!"),
  onEditSubmit: () => alert("Edit Saved!"),
  onSearchSubmit: () => alert("Search Performed!"),
};

// Disabled Add Button
export const DisabledAdd = Template.bind({});
DisabledAdd.args = {
  showAdd: true,
  showEdit: false,
  showSearch: false,
  disabledAdd: true,
};

// Disabled All Buttons
export const DisabledAll = Template.bind({});
DisabledAll.args = {
  showAdd: true,
  showEdit: true,
  showSearch: true,
  disabled: true,
};

// Individual Components
export const AddFormStory: Story<AEProps> = (args) => <AddForm {...args} />;
AddFormStory.args = {
  showAdd: true,
  addForm: <p>Add Form Content</p>,
  onAddSubmit: () => alert("Added Successfully!"),
};

export const EditFormStory: Story<AEProps> = (args) => <EditForm {...args} />;
EditFormStory.args = {
  showEdit: true,
  editForm: <p>Edit Form Content</p>,
  onEditSubmit: () => alert("Edit Saved!"),
};

export const SearchFormStory: Story<AEProps> = (args) => (
  <SearchForm {...args} />
);
SearchFormStory.args = {
  showSearch: true,
  searchForm: <p>Search Form Content</p>,
  onSearchSubmit: () => alert("Search Performed!"),
};

export const AddEditFormStory: Story<AEProps> = (args) => (
  <AddEditForm {...args} />
);
AddEditFormStory.args = {
  showAdd: true,
  showEdit: true,
  addForm: <p>Add Form Content</p>,
  editForm: <p>Edit Form Content</p>,
  onAddSubmit: () => alert("Added Successfully!"),
  onEditSubmit: () => alert("Edit Saved!"),
};
