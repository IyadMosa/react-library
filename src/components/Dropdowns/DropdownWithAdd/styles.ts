import styled from "styled-components";
import { DropdownProps } from "./DropdownWithAdd";

export const Container = styled.div<DropdownProps>`
  display: flex;
  flex-direction: row;
  gap: 5px;
  width: ${({ width }) => (width ? width + "px" : "300px")};
  padding: 5px;
  background: white;
`;
