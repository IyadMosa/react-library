import React, { FC, useEffect, useState } from "react";
import TextField from "../TextField";

interface TextFieldRangeProps {
  disabled?: boolean;
  title?: string;
  width?: number;
  height?: number;
  value: number;
  onChange?: any;
  min: number;
  max: number;
  isRequired?: boolean;
}

const TextFieldRange: FC<TextFieldRangeProps> = ({
  value = 0,
  onChange = () => 0,
  disabled = false,
  title,
  min = 1,
  max = 1000000,
  isRequired = true,
  ...props
}) => {
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    switch (true) {
      case isNaN(value):
        setIsError(true);
        setErrorMsg("Contains invalid letters or characters");
        break;
      case isRequired && value.toString() === "":
        setIsError(true);
        setErrorMsg("This filed is required");
        break;
      case value > max:
        setIsError(true);
        setErrorMsg("Value more than " + max);
        break;
      case value < min:
        setIsError(true);
        setErrorMsg("Value less than " + min);
        break;
      case !!(value % 1):
        setIsError(true);
        setErrorMsg("Decimal values are not allowed");
        break;
      default:
        setIsError(false);
        setErrorMsg("");
    }
  }, [value, isRequired, min, max]);

  return (
    <TextField
      title={title}
      value={value + ""}
      onChange={(value) => onChange(value)}
      disabled={disabled}
      isError={isError}
      errorMsg={errorMsg}
      isRequired={isRequired}
      {...props}
    />
  );
};
export default TextFieldRange;
