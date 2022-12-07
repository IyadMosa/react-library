import React, { FC } from "react";
import { StyledButton } from "./styles";

export interface ButtonProps {
  disabled?: boolean;
  label?: string;
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
  minWidth?: number;
  minHeight?: number;
  fontSize?: number;
}

const Button: FC<ButtonProps> = ({
  disabled = false,
  onClick = () => {},
  ...props
}) => {
  return (
    <StyledButton
      disabled={disabled}
      onClick={(e) => !disabled && onClick(e)}
      {...props}
    >
      {props.label}
    </StyledButton>
  );
};

export default Button;
