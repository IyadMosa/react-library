import styled from "styled-components";
import { AEProps } from "./AddEditSearchForm";

export const Container = styled.div<AEProps>`
  display: flex;
  flex-direction: row;
  gap: 5px;
  width: ${({ width }) => (width ? width + "px" : "30px")};
  background: white;
  vertical-align: top;
`;
