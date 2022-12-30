import styled from "styled-components";
import { primaryBlue, blackAndWhite, darkMode } from "../../colors";

function getStrokeColor(disabled: boolean, checked: boolean): string {
  switch (true) {
    case disabled:
      return blackAndWhite[400];
    case checked:
      return primaryBlue[500];
    default:
      return blackAndWhite[500];
  }
}

function getStrokeHoverColor(disabled: boolean, checked: boolean): string {
  switch (true) {
    case disabled:
      return blackAndWhite[400];
    case checked:
      return primaryBlue[300];
    default:
      return blackAndWhite[400];
  }
}

function getFillColor(disabled: boolean, checked: boolean): string {
  switch (true) {
    case !checked:
      return "transparent";
    case disabled:
      return blackAndWhite[400];
    default:
      return primaryBlue[500];
  }
}

function getFillHoverColor(disabled: boolean, checked: boolean): string {
  switch (true) {
    case !checked:
      return "transparent";
    case disabled:
      return blackAndWhite[400];
    default:
      return primaryBlue[300];
  }
}

export const StyledCheckbox = styled.div<{
  disabled: boolean;
  checked: boolean;
  marginRight?: string;
}>`
  display: flex;
  height: 14px;

  margin-right: ${(props) => props.marginRight};

  cursor: ${({ disabled }) => (disabled ? "not-allowed;" : "pointer")};
  svg {
    rect {
      stroke: ${({ disabled, checked }) => getStrokeColor(disabled, checked)};
      fill: ${({ disabled, checked }) => getFillColor(disabled, checked)};
      stroke-width: 1.08px;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    path {
      stroke: ${({ checked }) => (checked ? "#ffffff" : "transparent")};
    }

    &:hover {
      rect {
        stroke: ${({ disabled, checked }) =>
          getStrokeHoverColor(disabled, checked)};
        fill: ${({ disabled, checked }) =>
          getFillHoverColor(disabled, checked)};
      }
    }
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

export const StyledCheckboxWrapper = styled.div<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 11px;

  color: ${({ disabled }) => {
    switch (true) {
      case disabled:
        return blackAndWhite[500];
      default:
        return "inherit";
    }
  }};

  input {
    /* Hide the browser's default checkbox */
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
  }
  label {
    display: flex;
    align-items: center;
    cursor: ${({ disabled }) => (disabled ? "not-allowed;" : "pointer")};
    // Remove some properties being set elsewhere in the app for label
    margin: 0px;
    font-weight: 400;
    max-width: unset;
  }
`;
