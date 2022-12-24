// @ts-ignore
import React, { useState } from "react";
import TextFieldRange from "./TextFieldRange";

export default {
  title: "TextFieldRange",
};

export const range = () => {
  const [value, setValue] = useState();
  return (
    <TextFieldRange
      title={"value"}
      value={value}
      onChange={(value) => setValue(value)}
      max={100}
      min={0}
    />
  );
};
