import React, { useState } from "react";
import AddEditSearchForm, {
  AddEditForm,
  AddForm,
  EditForm,
  SearchForm,
} from "./AddEditSearchForm";

export default {
  title: "AddEditSearchForms",
};
export const addForm = () => {
  return <AddForm />;
};
export const editForm = () => {
  return <EditForm />;
};

export const searchForm = () => {
  return <SearchForm />;
};

export const addEditForm = () => {
  return <AddEditForm />;
};
