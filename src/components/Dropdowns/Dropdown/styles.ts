import styled from "styled-components";
import { DropdownProps } from "./Dropdown";

export const Container = styled.div<DropdownProps>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: ${({ width }) => (width ? width + "px" : "200px")};
  padding: 5px;
  background: white;
`;

export const InnerContainer = styled.div<DropdownProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .select {
    min-width: 85%;
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
  height: 14px;
  font-family: "Titillium Web";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: black;
`;
