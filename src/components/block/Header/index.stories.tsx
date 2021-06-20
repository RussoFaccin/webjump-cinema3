import React from "react";
import { Meta, Story } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Colors } from "shared/enums";
import { AuthProvider } from "contexts";
import Header from "./";

export default {
  title: "Components/Header",
  component: Header,
  parameters: {
    backgrounds: {
      default: "primary",
      values: [
        { name: "primary", value: Colors.PRIMARY },
        { name: "secondary", value: Colors.SECONDARY },
      ],
    },
  },
} as Meta;

const Template: Story = (args) => {
  return (
    <AuthProvider>
      <Router>
        <Header {...args} />
      </Router>
    </AuthProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  background: Colors.PRIMARY,
  textColor: Colors.WHITE,
};
