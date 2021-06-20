import React from "react";
import { Meta, Story } from "@storybook/react";
import Input from "./";
import { Props } from "./types";
import { FiLock, FiMail, FiUser } from "react-icons/fi";

export default {
  title: "Components/Input",
  component: Input,
  args: {
    required: true,
    validationMessage: 'This field is required.'
  },
  argTypes: {
    label: { control: "text" },
    type: { control: "text" },
    pattern: { control: "text" },
    value: { control: "text" },
    validationMessage: { control: "text" },
    required: { control: "boolean" },
    actionInput: { action: "input" },
    icon: { control: false },
  },
} as Meta;

const Template: Story<Props> = (args) => <Input {...args} />;

export const Nome = Template.bind({});
Nome.args = {
  icon: <FiUser />,
  label: "Nome",
};

export const Email = Template.bind({});
Email.args = {
  icon: <FiMail />,
  label: "E-mail",
};

export const Senha = Template.bind({});
Senha.args = {
  icon: <FiLock />,
  label: "Senha",
  type: "password",
};
