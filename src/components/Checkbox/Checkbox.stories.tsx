// @ts-ignore
import React, { useState } from "react";
import styled from "styled-components";
import CheckboxDiv from "./Checkbox";
import Checkbox from "./Checkbox";
import CheckboxLabled from "./CheckboxLabeled";

export const Basic = (args) => {
  const [checked, setChecked] = useState(false);
  const handleOnChange = (e) => {
    setChecked((prev) => !prev);
  };
  return (
    <CheckboxDiv {...args} checked={checked} onChange={handleOnChange}>
      {args.children}
    </CheckboxDiv>
  );
};

const SpecialLabel = styled.div`
  font-size: 33px;
`;
export default {
  title: "Inputs/Checkbox",
  component: CheckboxDiv,
  argTypes: {
    children: {
      control: { type: "text" },
    },
  },
};

Basic.args = {
  disabled: false,
  children: "Option A",
};

export const Advanced = (args) => {
  const [checked, setChecked] = useState(false);
  const handleOnChange = (e) => {
    setChecked((prev) => !prev);
  };

  return (
    <CheckboxDiv
      checked={checked}
      marginBetweenChildrenAndCheckbox={args.marginBetweenChildrenAndCheckbox}
      onChange={handleOnChange}
      debugId="story-checkbox-input-example"
      disabled={args.disabled}
    >
      <SpecialLabel>{args.children}</SpecialLabel>
    </CheckboxDiv>
  );
};

Advanced.args = {
  disabled: false,
  marginBetweenChildrenAndCheckbox: "7px",
  children: "Option A",
};

/* This example shows you can use a label with htmlFor to cocntrol the input */
export const SeparateLabel = (args) => {
  const [checked, setChecked] = useState(false);
  const handleOnChange = (e) => {
    setChecked((prev) => !prev);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <CheckboxDiv
        id="LabelSeparateFromCheckbox"
        checked={checked}
        marginBetweenChildrenAndCheckbox={args.marginBetweenChildrenAndCheckbox}
        onChange={handleOnChange}
        debugId="story-checkbox-input-example"
        disabled={args.disabled}
      />
      <label style={{ marginLeft: "7px" }} htmlFor="LabelSeparateFromCheckbox">
        Text
      </label>
    </div>
  );
};

SeparateLabel.argTypes = {
  disabled: false,
  marginBetweenChildrenAndCheckbox: { control: false },
  children: { control: false },
};

export const checkboxTest = () => {
  const [checked, setChecked] = useState(false);
  const handleOnChange = (e) => {
    setChecked((prev) => !prev);
  };
  return (
    <Checkbox checked={checked} onChange={handleOnChange}>
      Test
    </Checkbox>
  );
};

export const checkboxLabeled = () => {
  const [checked, setChecked] = useState(false);
  const handleOnChange = (e) => {
    setChecked((prev) => !prev);
  };
  return (
    <CheckboxLabled
      checked={checked}
      onChange={handleOnChange}
      label={"Label"}
    />
  );
};
