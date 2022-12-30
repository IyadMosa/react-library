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
        onChange={(date) => onChange(date.value)}
      />
    </Container>
  );
};

export default DatePickerCustom;
