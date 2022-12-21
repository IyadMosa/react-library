// @ts-ignore
import React, { useState } from "react";
import TextField from "./TextField";

export default {
  title: "TextField",
};

export const textField = () => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <TextField
      title={"value"}
      value={value}
      onChange={(value) => setValue(value)}
    />
  );
};

export const textFieldWithError = () => {
  const errorMsg = "There is some Errors";
  return (
    <TextField title={"Value"} value={""} isError={true} errorMsg={errorMsg} />
  );
};

export const required = () => {
  return <TextField title={"required"} value={""} isRequired={true} />;
};

export const disabled = () => {
  return <TextField title={"disabled"} value={""} disabled={true} />;
};
