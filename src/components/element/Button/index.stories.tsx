import React from "react";
import { Meta, Story } from "@storybook/react";
import Button from "./";
import { Props } from "./types";
import { Colors } from "shared/enums";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    isLoading: {
      control: { type: "boolean" },
    },
    clickAction: { action: "click" },
  },
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
  outlined: false,
  background: Colors.PRIMARY,
  borderColor: Colors.WHITE,
  textColor: Colors.WHITE,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  isLoading: true,
};
