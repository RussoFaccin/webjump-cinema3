import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Meta, Story } from "@storybook/react";
import { Colors } from "shared/enums";
import Footer from "./";

export default {
  title: "Components/Footer",
  component: Footer,
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
    <Router>
      <Footer {...args} />
    </Router>
  );
};

export const Default = Template.bind({});