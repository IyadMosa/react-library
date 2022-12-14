import * as Style from "./styles";
// @ts-ignore
import React, { FC } from "react";
import { Title } from "./styles";

interface InputProps {
  disabled?: boolean;
  title?: string;
  placeHolder?: string;
  isError?: boolean;
  errorMsg?: string;
  width?: number;
  height?: number;
  debugId?: string;
  className?: string;
  value?: string;
  onChange?: any;
  onPressEnter?: any;
  isRequired?: boolean;
}
const TextField: FC<InputProps> = ({
  disabled,
  title = "",
  isError = false,
  errorMsg = "A long Error message should be written by 2 - 3 row, and should not be longer than an input. ",
  width,
  height,
  debugId = "",
  className = "",
  value = "",
  onChange,
  onPressEnter = () => 0,
  placeHolder = "",
  ...props
}) => {
  const handleChange = (e: any) => onChange(e.target.value);
  const handleClick = (e: any) =>
    onPressEnter && e.key === "Enter" ? onPressEnter(e.target.value) : null;
  const isRequiredClass = props.isRequired ? "required" : "";
  return (
    <div>
      <Style.Wrapper>
        <Title disabled={disabled} className={`${isRequiredClass}`}>
          {title}
        </Title>
        <Style.InputDiv
          disabled={disabled}
          placeholder={placeHolder}
          isError={isError}
          width={width}
          height={height}
          data-debug-id={"text-field " + debugId}
          className={"text-field " + className}
          value={value}
          onChange={handleChange}
          onClick={handleClick}
        />
        {isError && (
          <Style.ErrorMsgWrapper width={width}>
            <span className={"errorMsg"}>{errorMsg}</span>
          </Style.ErrorMsgWrapper>
        )}
      </Style.Wrapper>
    </div>
  );
};

export default TextField;
