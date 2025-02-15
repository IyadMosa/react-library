import React, { FC, useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from "@material-ui/icons/Search";
import { Container } from "./styles";
import Modal from "../Modal";

export interface AEProps {
  disabled?: boolean;
  showAdd?: boolean;
  disabledAdd?: boolean;
  addForm?: React.ReactNode;
  onAddSubmit?: () => void;

  showEdit?: boolean;
  disabledEdit?: boolean;
  editForm?: React.ReactNode;
  onEditSubmit?: () => void;

  showSearch?: boolean;
  disabledSearch?: boolean;
  searchForm?: React.ReactNode;
  onSearchSubmit?: () => void;

  disabledSubmit?: boolean;
}

const IconButtonWrapper: FC<{
  onClick: () => void;
  disabled?: boolean;
  icon: JSX.Element;
}> = ({ onClick, disabled = false, icon }) => (
  <IconButton color="inherit" onClick={onClick} disabled={disabled}>
    {icon}
  </IconButton>
);

const AddEditSearchForm: FC<AEProps> = ({
  showAdd = true,
  showEdit = false,
  showSearch = false,
  disabledSubmit = false,
  ...props
}) => {
  const [modalState, setModalState] = useState<{
    type: "add" | "edit" | "search" | null;
  }>({ type: null });

  const openModal = (type: "add" | "edit" | "search") =>
    setModalState({ type });
  const closeModal = () => setModalState({ type: null });

  const handleSubmit = (onSubmit?: () => void) => {
    if (onSubmit) onSubmit();
    closeModal();
  };

  return (
    <Container>
      {showAdd && (
        <>
          <IconButtonWrapper
            onClick={() => openModal("add")}
            disabled={props.disabled || props.disabledAdd}
            icon={<AddCircleIcon fontSize="large" />}
          />
          <Modal
            title="Add"
            isOpen={modalState.type === "add"}
            onClose={closeModal}
            onSubmit={() => handleSubmit(props.onAddSubmit)}
            disableSubmit={disabledSubmit}
            children={props.addForm}
          />
        </>
      )}

      {showEdit && (
        <>
          <IconButtonWrapper
            onClick={() => openModal("edit")}
            disabled={props.disabled || props.disabledEdit}
            icon={<EditIcon fontSize="large" />}
          />
          <Modal
            title="Edit"
            isOpen={modalState.type === "edit"}
            onClose={closeModal}
            onSubmit={() => handleSubmit(props.onEditSubmit)}
            disableSubmit={disabledSubmit}
            children={props.editForm}
          />
        </>
      )}

      {showSearch && (
        <>
          <IconButtonWrapper
            onClick={() => openModal("search")}
            disabled={props.disabled || props.disabledSearch}
            icon={<SearchIcon fontSize="large" />}
          />
          <Modal
            title="Search"
            isOpen={modalState.type === "search"}
            onClose={closeModal}
            onSubmit={() => handleSubmit(props.onSearchSubmit)}
            disableSubmit={disabledSubmit}
            children={props.searchForm}
          />
        </>
      )}
    </Container>
  );
};

export default AddEditSearchForm;

export const AddForm = (props: AEProps) => (
  <AddEditSearchForm showAdd {...props} />
);
export const EditForm = (props: AEProps) => (
  <AddEditSearchForm showEdit {...props} />
);
export const SearchForm = (props: AEProps) => (
  <AddEditSearchForm showSearch {...props} />
);
export const AddEditForm = (props: AEProps) => (
  <AddEditSearchForm showAdd showEdit {...props} />
);
