import React from "react";
import { Meta, Story } from "@storybook/react";
import TotalPaid from "./TotalPaid";

export default {
  title: "Components/TotalPaid",
  component: TotalPaid,
  argTypes: {
    totalPaid: { control: { type: "number" } },
    totalRequested: { control: { type: "number" } },
    name: { control: { type: "text" } },
  },
} as Meta;

const Template: Story<typeof TotalPaid> = (args) => <TotalPaid {...args} />;

export const Default = Template.bind({});
Default.args = {
  totalPaid: 500,
  totalRequested: 1000,
  name: "John Doe",
};

export const FullyPaid = Template.bind({});
FullyPaid.args = {
  totalPaid: 1000,
  totalRequested: 1000,
  name: "Jane Smith",
};

export const HalfPaid = Template.bind({});
HalfPaid.args = {
  totalPaid: 500,
  totalRequested: 1000,
  name: "Alice Johnson",
};

export const NotPaid = Template.bind({});
NotPaid.args = {
  totalPaid: 0,
  totalRequested: 1000,
  name: "Bob Williams",
};

export const OverPaid = Template.bind({});
OverPaid.args = {
  totalPaid: 1200,
  totalRequested: 1000,
  name: "Charlie Brown",
};
