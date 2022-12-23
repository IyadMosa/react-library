// @ts-ignore
import React, { useState } from "react";
import DatePickerCustom from "./DatePickerCustom";
import Modal from "../../Modal";

export default {
  title: "DatePicker",
};

export const datePicker = () => {
  const [date, setDate] = useState("");
  console.log(date);
  return (
    <div>
      <DatePickerCustom label={"Date "} date={date} onChange={setDate} />
      <button onClick={() => alert(date)}>Show date</button>
    </div>
  );
};

export const modalDate = () => {
  return (
    <div>
      <Modal children={<DatePickerCustom label={"Date"} />} />
    </div>
  );
};
