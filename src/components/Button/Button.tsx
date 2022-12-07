import React, { FC } from "react";

export interface ButtonProps {
  disabled?: boolean;
  label?: string;
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
  minWidth?: number;
  minHeight?: number;
  fontSize?: number;
  color?: string;
}

const Button: FC<ButtonProps> = ({
  disabled = false,
  minWidth = 300,
  minHeight = 50,
  color = "blue",
  onClick = () => {},
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      onClick={(e) => !disabled && onClick(e)}
      style={{
        minWidth: `${minWidth}px`,
        minHeight: `${minHeight}px`,
        borderRadius: `8px`,
        backgroundColor: `${color}`,
      }}
      {...props}
    >
      {props.label}
    </button>
  );
};

export default Button;
