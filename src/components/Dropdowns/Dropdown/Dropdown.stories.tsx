import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Dropdown from "./Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    onChange: { action: "changed" },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Select Payment Method",
  options: [
    { label: "Bank Transfer", value: "bank_transfer" },
    { label: "Cash", value: "cash" },
    { label: "Check", value: "check" },
    { label: "Credit Card", value: "credit_card" },
  ],
  placeholder: "Choose an option...",
  value: { label: "Cash", value: "cash" },
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const WithCustomComponent = Template.bind({});
WithCustomComponent.args = {
  ...Default.args,
  addComponent: (
    <span style={{ marginLeft: "10px", color: "red" }}>⚠️ Required</span>
  ),
};
