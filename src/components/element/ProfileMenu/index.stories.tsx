import React from "react";
import { Meta, Story } from "@storybook/react";
import ProfileMenu from "./";
import { Props } from "./types";
import { BrowserRouter as Router, RouterProps } from "react-router-dom";
import { AuthProvider } from "contexts";

export default {
  title: "Components/ProfileMenu",
  component: ProfileMenu,
  argTypes: {
    userName: { control: "text" },
    isVisible: { control: "boolean" },
  },
} as Meta;

const Template: Story<Props & RouterProps> = (args) => (
  <AuthProvider>
    <Router>
      <ProfileMenu {...args} />
    </Router>
  </AuthProvider>
);

export const Default = Template.bind({});
Default.args = {
  userName: "Rodrigo Russo",
};
