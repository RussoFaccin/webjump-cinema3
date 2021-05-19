import React from "react";
import { Meta, Story } from "@storybook/react";
import Input from "./";
import { Props } from "./types";
import { FiMail } from "react-icons/fi";
import { BsLock } from "react-icons/bs";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    label: { control: "text" },
  },
} as Meta;

const Template: Story<Props> = (args) => <Input {...args} />;

export const Email = Template.bind({});
Email.args = {
  icon: <FiMail />,
  label: "E-mail",
};

export const Senha = Template.bind({});
Senha.args = {
  icon: <BsLock />,
  label: "Senha",
  type: "password",
  pattern: "[0-9]+",
};
