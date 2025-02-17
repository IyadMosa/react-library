import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import Modal, { ModalProps } from "../Modal";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    onClose: { action: "closed" },
    onSubmit: { action: "submitted" },
  },
} as Meta;

const Template: Story<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);
  return <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />;
};

export const Default = Template.bind({});
Default.args = {
  title: "Default Modal",
  isOpen: true,
  children: <p>This is a default modal.</p>,
};

export const WithoutButtons = Template.bind({});
WithoutButtons.args = {
  title: "No Buttons Modal",
  isOpen: true,
  showButtons: false,
  children: <p>This modal has no buttons.</p>,
};

export const DisabledModal = Template.bind({});
DisabledModal.args = {
  title: "Disabled Modal",
  isOpen: true,
  disabled: true,
  children: <p>This modal is disabled.</p>,
};

export const WithDisabledSubmit = Template.bind({});
WithDisabledSubmit.args = {
  title: "Disabled Submit Button",
  isOpen: true,
  disableSubmit: true,
  children: <p>The submit button is disabled.</p>,
};

export const WithFormDisabled = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "" });

  return (
    <Modal
      title="Form Modal (Disabled)"
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onSubmit={() => alert("Form Submitted!")}
      disabled
    >
      <form>
        <label>
          Name:
          <input type="text" value={formData.name} disabled />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={formData.email} disabled />
        </label>
      </form>
    </Modal>
  );
};
