import React, { FC, useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Modal from "../Modal";
import { Container } from "../AddEditForm/styles";

export interface AddFormProps {
  disabled?: boolean;
  disabledAdd?: boolean;
  addForm?: React.ReactNode;
  onAddSubmit?: () => void;
  disabledSubmit?: boolean;
}

const AddForm: FC<AddFormProps> = ({
  disabled = false,
  disabledAdd = false,
  addForm,
  onAddSubmit,
  disabledSubmit = false,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);
  const handleSubmit = () => {
    if (onAddSubmit) onAddSubmit();
    handleClose();
  };

  return (
    <Container>
      <IconButton
        color="inherit"
        onClick={handleOpen}
        disabled={disabled || disabledAdd}
      >
        <AddCircleIcon fontSize="large" />
      </IconButton>

      <Modal
        title="Add Form"
        isOpen={isModalOpen}
        onSubmit={handleSubmit}
        onClose={handleClose}
        disableSubmit={disabledSubmit}
      >
        {addForm}
      </Modal>
    </Container>
  );
};

export default AddForm;
