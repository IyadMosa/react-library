import React from "react";
import { Wrapper } from "./styles";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return (
    <Wrapper>
      <button>{props.label}</button>
    </Wrapper>
  );
};

export default Button;
