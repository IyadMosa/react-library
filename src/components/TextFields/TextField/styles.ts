import styled from "styled-components";
import { primaryBlue, blackAndWhite, magenta } from "../../colors";

export const Wrapper = styled.div`
  font-size: 20px;
  font-weight: 400;
  font-family: "TitilliumWeb";
  font-style: normal;
  text-transform: capitalize;
  width: 100%;
  line-height: 14px;
  color: black;
`;

function getStrokeColor(
  disabled: boolean,
  isError: boolean,
  generalColor: string
): string {
  switch (true) {
    case disabled:
      return blackAndWhite[300];
    case isError:
      return magenta[500];

    default:
      return generalColor;
  }
}

function getBackgroundColor(disabled: boolean) {
  switch (true) {
    case disabled:
      return blackAndWhite[200];
    default:
      return "white";
  }
}
// @ts-ignore
export const ErrorMsgWrapper = styled.div<{
  width?: number;
}>`
  display: flex;
  padding-top: 5px;
  color: ${magenta[500]};
  font-size: 15px;

  span {
    margin-left: 5px;
    line-height: 11.5px;
    width: ${({ width }) => (width ? width - 15 : 285)}px;
  }
`;
// @ts-ignore
export const InputDiv = styled.input<{
  disabled?: any;
  isError?: any;
  width?: number;
  height?: number;
}>`
  display: flex;
  width: ${({ width }) => (width ? width : 300)}px;
  height: ${({ height }) => (height ? height : 36)}px;
  margin-top: 4px;
  border: 1px solid
    ${({ disabled, isError }) =>
      getStrokeColor(disabled, isError, blackAndWhite[300])};
  border-radius: 5px;
  padding-left: 10px;
  background-color: ${({ disabled }) => getBackgroundColor(disabled)};
  ::placeholder {
    color: #9e9e9e;
    font-style: normal;
  }
  :active {
    border-color: ${({ disabled, isError }) =>
      getStrokeColor(disabled, isError, primaryBlue[200])};
  }
  :hover {
    border-color: ${({ disabled, isError }) =>
      getStrokeColor(disabled, isError, primaryBlue[200])};
  }

  text-align: left;
  vertical-align: text-top;
`;

export const Title = styled.span<{
  disabled?: boolean;
  isError?: any;
}>`
  ${({ disabled, isError }) =>
    getStrokeColor(disabled, isError, primaryBlue[200])};};

  &.required:after {
    color: ${magenta[500]};
    content: ' *';
  }
`;
