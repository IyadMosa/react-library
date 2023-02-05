import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import React, { FC, useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; //
import { format } from "date-fns";

export interface Props {
  setFrom: any;
  setTo: any;
}

const DateRangePickerCustom: FC<Props> = ({
  setFrom = () => {},
  setTo = () => {},
}) => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  return (
    <DateRangePicker
      onChange={(item) => {
        setState([item.selection]);
        setFrom(format(item.selection.startDate, "dd/MM/yyyy"));
        setTo(format(item.selection.endDate, "dd/MM/yyyy"));
      }}
      showSelectionPreview={true}
      moveRangeOnFirstSelection={false}
      ranges={state}
      direction="horizontal"
      preventSnapRefocus={true}
      calendarFocus="backwards"
      format="dd/MM/yyyy"
    />
  );
};
export default DateRangePickerCustom;
