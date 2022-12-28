import React, { FC } from "react";
import "./all.css";
import { DatePicker } from "@progress/kendo-react-dateinputs";
import { Container, TitleWrapper } from "./styles";

export interface Props {
  disabled?: boolean;
  label: string;
  date?: string;
  onChange?: any;
}

function convert(str) {
  const date = new Date(str),
    month = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [day, month, date.getFullYear()].join("-"); // + "T04:00:00.000Z";
}

const DatePickerCustom: FC<Props> = ({
  label = "",
  date = "",
  onChange = () => {},
  ...props
}) => {
  return (
    <Container>
      <TitleWrapper>{label}</TitleWrapper>
      <DatePicker
        className={"date"}
        format="dd-MM-yyyy"
        width={300}
        onChange={(date) => onChange(convert(date.value))}
      />
    </Container>
  );
};

export default DatePickerCustom;
