import React, { FC, useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import Modal from "../../Modal";
import DateRangePickerCustom from "./DateRangePickerCustom"; //
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import IconButton from "@material-ui/core/IconButton";

export interface Props {
  setFrom: any;
  setTo: any;
}

const DateRangePickerModal: FC<Props> = ({
  setFrom = () => {},
  setTo = () => {},
  ...props
}) => {
  const [showModel, setShowModel] = useState(false);
  const [from1, setFrom1] = useState("");
  const [to1, setTo1] = useState("");
  return (
    <div>
      <IconButton color="inherit" onClick={() => setShowModel(true)}>
        <AccessTimeIcon />
      </IconButton>
      {showModel && (
        <Modal
          onSubmit={() => {
            setFrom(from1);
            setTo(to1);
            setShowModel(false);
          }}
          onClose={() => setShowModel(false)}
          children={<DateRangePickerCustom setFrom={setFrom1} setTo={setTo1} />}
          disabledSubmit={false}
        />
      )}
    </div>
  );
};
export default DateRangePickerModal;
