import React from "react";
import { Meta, Story } from "@storybook/react";
import ProfileMenu from "./";
import { Props } from "./types";
import { BrowserRouter as Router, RouterProps } from "react-router-dom";

export default {
  title: "Components/ProfileMenu",
  component: ProfileMenu,
  argTypes: {
    userName: { control: "text" },
    isVisible: { control: "boolean" },
  },
} as Meta;

const Template: Story<Props & RouterProps> = (args) => (
  <Router>
    <ProfileMenu {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  userName: "Rodrigo Russo",
};
