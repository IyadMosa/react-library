import styled from "styled-components";
import { Props } from "./PieChart";

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: ${({ width }) => (width ? width + "px" : "100%")};
  padding: 5px;
  background: white;
`;
