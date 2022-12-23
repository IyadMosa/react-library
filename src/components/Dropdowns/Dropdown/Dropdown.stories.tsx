// @ts-ignore
import React, { useState } from "react";
import Dropdown from "./Dropdown";

export default {
  title: "Dropdown",
};

export const dropdown = () => {
  const [value, setValue] = useState({ value: "", label: "" });
  const options = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
  ];
  return (
    <Dropdown
      title={"value"}
      value={value}
      options={options}
      onChange={(value) => setValue(value)}
      width={400}
    />
  );
};

export const disabled = () => {
  const [value, setValue] = useState({ value: "", label: "" });
  const options = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
  ];
  return (
    <Dropdown
      title={"value"}
      value={value}
      options={options}
      onChange={(value) => setValue(value)}
      width={400}
      disabled={true}
    />
  );
};
