import React from "react";
import { Meta, Story } from "@storybook/react";
import Input from "./";
import { Props } from "./types";
import { FiMail } from 'react-icons/fi';

export default {
  title: "Components/Input",
  component: Input,
} as Meta;

const Template: Story<Props> = (args) => <Input {...args} />;

export const Default = Template.bind({});

export const Email = Template.bind({});
Email.args = {
  icon: FiMail,
  label: 'E-mail'
}