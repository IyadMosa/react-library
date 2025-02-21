import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import AmountSelector from "./AmountSelector";

export default {
  title: "Components/AmountSelector",
  component: AmountSelector,
  argTypes: {
    title: { control: "text" },
    amount: { control: "number" },
    onChange: { action: "onChange" },
  },
} as Meta;

const Template: StoryFn<typeof AmountSelector> = (args) => {
  const [amount, setAmount] = useState(args.amount || 0);

  return <AmountSelector {...args} amount={amount} onChange={setAmount} />;
};

export const Default = Template.bind({});
Default.args = {
  title: "Amount",
  amount: 100,
};

export const ZeroAmount = Template.bind({});
ZeroAmount.args = {
  title: "Enter Amount",
  amount: 0,
};

export const LargeAmount = Template.bind({});
LargeAmount.args = {
  title: "Select Amount",
  amount: 5000,
};

export const Disabled = Template.bind({});
Disabled.args = {
  amount: 0,
  label: "Amount",
  fullWidth: false,
  disabled: true,
};

export const Required = Template.bind({});
Required.args = {
  amount: 0,
  label: "Amount",
  fullWidth: false,
  required: true,
  disabled: false,
};
