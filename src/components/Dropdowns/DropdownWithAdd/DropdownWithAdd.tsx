import React, { FC } from "react";
import Dropdown from "../Dropdown";
import { Container } from "./styles";
import { AddForm } from "../../AddEditForm";

export interface DropdownProps {
  title: string;
  value: object;
  options?: object[];
  placeholder?: string;
  onChange?: any;
  disabled?: boolean;
  width?: number;
  addForm?: React.ReactNode | string;
  modelTitle?: string;
  onAddSubmit?: any;
}

const DropdownWithAddForm: FC<DropdownProps> = ({
  title = "Title",
  value,
  ...props
}) => {
  return (
    <Container>
      <Dropdown
        title={title}
        value={value}
        addComponent={<AddForm />}
        {...props}
      />
    </Container>
  );
};
export default DropdownWithAddForm;
