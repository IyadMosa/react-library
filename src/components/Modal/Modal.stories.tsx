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

      <Modal
        title="testing"
        onSubmit={() => {
          alert("Modal submit");
          setShowModel(false);
        }}
        onClose={() => setShowModel(false)}
        children={<div></div>}
        isOpen={showModel}
      />
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
  const [showModel, setShowModel] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModel(true)}>open modal</button>

      <Modal
        title="testing"
        onSubmit={() => {
          alert("Modal submit");
          setShowModel(false);
        }}
        onClose={() => setShowModel(false)}
        children={<TempForm />}
        isOpen={showModel}
      />
    </div>
  );
};
