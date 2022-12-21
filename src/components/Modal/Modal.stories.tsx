// @ts-ignore
import React, { useState } from "react";
import Modal from "./Modal";
import TextField from "../TextFields/TextField";

export default {
  title: "Modal",
};

export const modal = () => {
  const [showModel, setShowModel] = useState(false);
  return (
    <div>
      <button onClick={() => setShowModel(true)}>open modal</button>
      {showModel && (
        <Modal
          title="testing"
          onSubmit={() => {
            alert("Modal submit");
            setShowModel(false);
          }}
          onClose={() => setShowModel(false)}
        />
      )}
    </div>
  );
};

const TempForm = () => {
  return (
    <div>
      <TextField title={"text"} />
      <TextField title={"text"} />
      <TextField title={"text"} />
      <TextField title={"text"} />
      <TextField title={"text"} />
      <TextField title={"text"} />
      <TextField title={"text"} />
      <TextField title={"text"} />
      <TextField title={"text"} />
      <TextField title={"text"} />
      <TextField title={"text"} />
      <TextField title={"text"} />
      <TextField title={"text"} />
    </div>
  );
};

export const modalWithForm = () => {
  return (
    <div>
      <Modal
        title="testing"
        onSubmit={() => {
          alert("Modal submit2");
        }}
        children={<TempForm />}
      />
    </div>
  );
};
