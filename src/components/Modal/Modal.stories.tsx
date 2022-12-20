// @ts-ignore
import React, { useState } from "react";
import Modal from "./Modal";

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
