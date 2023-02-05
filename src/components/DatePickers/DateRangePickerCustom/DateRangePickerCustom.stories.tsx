// @ts-ignore
import React, { useState } from "react";
import DateRangePickerCustom from "./DateRangePickerCustom";
import DateRangePickerModal from "./DateRangePickerModal";

export default {
  title: "DateRangePicker",
};

export const dateRangePicker = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  console.log(from, to);
  return (
    <div>
      <DateRangePickerCustom setFrom={setFrom} setTo={setTo} />
    </div>
  );
};

export const dateRangePickerModal = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  console.log(from, to);
  return (
    <div>
      <DateRangePickerModal setFrom={setFrom} setTo={setTo} />
    </div>
  );
};
