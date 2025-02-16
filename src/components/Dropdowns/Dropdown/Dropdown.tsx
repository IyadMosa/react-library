import Select from "react-select";
import React, { FC } from "react";
import { Container, InnerContainer, TitleWrapper } from "./styles";

export interface DropdownProps {
  title: string;
  value: string | object;
  options?: { label: string; value: string | object }[];
  placeholder?: string;
  onChange?: any;
  disabled?: boolean;
  width?: number;
  addComponent?: React.ReactNode;
}

const Dropdown: FC<DropdownProps> = ({
  title = "",
  value,
  options = [],
  placeholder,
  onChange,
  disabled = false,
  addComponent,
  ...props
}) => {
  return (
    <Container {...props}>
      <TitleWrapper>{title}</TitleWrapper>
      <InnerContainer>
        <Select
          className={"select"}
          options={options}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          isDisabled={disabled}
        />
        {addComponent}
      </InnerContainer>
    </Container>
  );
};
export default Dropdown;
