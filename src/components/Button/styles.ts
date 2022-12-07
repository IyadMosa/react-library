import styled from "styled-components";
import { ButtonProps } from "./Button";

export const StyledButton = styled.button<ButtonProps>`
  background-color: cornflowerblue;
  color: azure;
  font-size: 20px;
  font-family: fangsong;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed;" : "pointer")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth + "px" : "300px")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight + "px" : "50px")};
`;
