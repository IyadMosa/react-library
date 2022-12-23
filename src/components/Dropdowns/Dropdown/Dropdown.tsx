import Select from "react-select";
import React, { FC } from "react";
import { Container, InnerContainer, TitleWrapper } from "./styles";

export interface DropdownProps {
  title: string;
  value: object;
  options?: object[];
  placeholder?: string;
  onChange?: any;
  disabled?: boolean;
  width?: number;
  addComponent?: React.ReactNode | string;
}

const Dropdown: FC<DropdownProps> = ({
  title = "",
  options = [],
  ...props
}) => {
  return (
    <Container {...props}>
      <TitleWrapper>{title}</TitleWrapper>
      <InnerContainer>
        <Select
          className={"select"}
          options={options}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          isDisabled={props.disabled}
        />
        {props.addComponent}
      </InnerContainer>
    </Container>
  );
};
export default Dropdown;
