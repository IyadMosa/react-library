import styled from "styled-components";
import { blueGray, blackAndWhite } from "../../colors";

export const TabsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
`;

export const Counter = styled.div<{ selected?: boolean; disabled?: boolean }>`
  display: flex;
  align-items: center;
  height: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 6.5px;
  padding-left: 6.5px;
  border-radius: 42px;
  margin-left: 2px;
  margin-right: 5px;
  font-size: 12px;
  transition: all 0.3s ease;
  text-align: center;

  background-color: ${({ disabled }) =>
    disabled ? blueGray[50] : blueGray[100]};
  color: ${({ disabled }) => (disabled ? blackAndWhite[500] : "")};
`;

export const Tab = styled.div<{ selected?: boolean; disabled?: boolean }>`
  padding-top: 12px;
  padding-bottom: 9px;
  display: flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  text-align: center;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  color: ${({ disabled }) => (disabled ? blackAndWhite[500] : "")};
  transition: all 300ms linear;
  user-select: none;

  span {
    // The label
    padding-left: 3px;
    padding-right: 8px;
    font-weight: ${({ selected }) => (selected ? 700 : 400)};
    color: #3c4144;

    &:hover {
      color: ${({ disabled, selected }) =>
        !disabled && !selected && blackAndWhite[600]};
    }
  }
`;

export const Wrapper = styled.div<{ marginBetweenTabs?: number }>`
  margin-right: ${({ marginBetweenTabs }) => marginBetweenTabs || 10}px;
  /* margin-left: ${({ marginBetweenTabs }) =>
    marginBetweenTabs / 2 || 10}px; */
`;

export const SelectedBorder = styled.div<{ isSelected: boolean }>`
  background-color: ${({ isSelected }) =>
    !isSelected ? "transparent" : "#3C4144"};
  border-radius: 2px;
  height: 3px;

  transition: all 0.3s ease;
`;
