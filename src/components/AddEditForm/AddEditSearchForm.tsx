import React, { FC, useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Edit from "@material-ui/icons/Edit";
import Search from "@material-ui/icons/Search";
import { Container } from "./styles";
import Modal from "../Modal";

export interface AEProps {
  disabled?: boolean;
  width?: number;
  height?: number;
  showAdd?: boolean;
  disabledAdd?: boolean;
  addForm?: React.ReactNode | string;
  onAddSubmit?: any;
  showEdit?: boolean;
  disabledEdit?: boolean;
  editForm?: React.ReactNode | string;
  onEditSubmit?: any;
  showSearch?: boolean;
  disabledSearch?: boolean;
  searchForm?: React.ReactNode | string;
  onSearchSubmit?: any;
  disabledSubmit2: boolean;
}

const AddButton = ({ disabled = false, onClick }) => {
  return (
    <IconButton
      color="inherit"
      style={{ padding: 0 }}
      onClick={onClick}
      disabled={disabled}
    >
      <AddCircleIcon />
    </IconButton>
  );
};

const EditButton = ({ disabled = false, onClick }) => {
  return (
    <IconButton
      color="inherit"
      style={{ padding: 0 }}
      onClick={onClick}
      disabled={disabled}
    >
      <Edit />
    </IconButton>
  );
};

const SearchButton = ({ disabled = false, onClick }) => {
  return (
    <IconButton
      color="inherit"
      style={{ padding: 0 }}
      onClick={onClick}
      disabled={disabled}
    >
      <Search />
    </IconButton>
  );
};

const AddEditSearchForm: FC<AEProps> = ({
  showAdd = true,
  showEdit = false,
  showSearch = false,
  disabledSubmit2 = false,
  ...props
}) => {
  const [showAddModel, setShowAddModel] = useState(false);
  const [showEditModel, setShowEditModel] = useState(false);
  const [showSearchModel, setShowSearchModel] = useState(false);
  return (
    <Container>
      {showAdd && (
        <AddButton
          disabled={props.disabled || props.disabledAdd}
          onClick={() => {
            setShowAddModel(true);
          }}
        />
      )}
      {showAddModel && (
        <div>
          <Modal
            title={"Add"}
            onClose={() => {
              setShowAddModel(false);
            }}
            isShowButtons={true}
            onSubmit={() => {
              props.onAddSubmit();
              setShowAddModel(false);
            }}
            disabledSubmit={disabledSubmit2}
          >
            {props.addForm}
          </Modal>
        </div>
      )}
      {showEdit && (
        <EditButton
          disabled={props.disabled || props.disabledEdit}
          onClick={() => {
            setShowEditModel(true);
          }}
        />
      )}
      {showEditModel && (
        <div>
          <Modal
            title={"Edit"}
            onClose={() => {
              setShowEditModel(false);
            }}
            isShowButtons={true}
            onSubmit={() => {
              props.onEditSubmit();
              setShowEditModel(false);
            }}
            disabledSubmit={disabledSubmit2}
          >
            {props.editForm}
          </Modal>
        </div>
      )}
      {showSearch && (
        <SearchButton
          disabled={props.disabled || props.disabledSearch}
          onClick={() => {
            setShowSearchModel(true);
          }}
        />
      )}
      {showSearchModel && (
        <div>
          <Modal
            title={"Search"}
            onClose={() => {
              setShowSearchModel(false);
            }}
            isShowButtons={true}
            onSubmit={() => {
              props.onSearchSubmit();
              setShowSearchModel(false);
            }}
            disabledSubmit={disabledSubmit2}
          >
            {props.searchForm}
          </Modal>
        </div>
      )}
    </Container>
  );
};
export default AddEditSearchForm;

export const AddForm = ({ ...props }) => {
  return (
    <AddEditSearchForm
      disabledSubmit2={true}
      showAdd={true}
      showEdit={false}
      showSearch={false}
      {...props}
    />
  );
};

export const EditForm = ({ ...props }) => {
  return (
    <AddEditSearchForm
      disabledSubmit2={props.disabledSubmit}
      showAdd={false}
      showEdit={true}
      showSearch={false}
      {...props}
    />
  );
};

export const SearchForm = ({ ...props }) => {
  return (
    <AddEditSearchForm
      disabledSubmit2={props.disabledSubmit}
      showAdd={false}
      showEdit={false}
      showSearch={true}
      {...props}
    />
  );
};

export const AddEditForm = ({ ...props }) => {
  return (
    <AddEditSearchForm
      disabledSubmit2={props.disabledSubmit}
      showAdd={true}
      showEdit={true}
      showSearch={false}
      {...props}
    />
  );
};
