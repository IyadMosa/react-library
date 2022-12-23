import React, { useState } from "react";
import DropdownWithAdd from "./DropdownWithAdd";

export default {
  title: "DropdownWithAdd",
};

export const dropdownWithAddForm = () => {
  const [value, setValue] = useState({ value: "", label: "" });
  const options = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
  ];
  return (
    <DropdownWithAdd
      title={"value"}
      value={value}
      options={options}
      onChange={(value) => setValue(value)}
      width={400}
    />
  );
};
