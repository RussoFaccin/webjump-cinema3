import React from "react";
import {Meta, Story} from "@storybook/react";
import Button from "./";
import { Props } from "./types";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: Story<Props> = (args: Props) => <Button {...args}>{args.children}</Button>;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
};
