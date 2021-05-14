import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./";
import { Props } from "./types";
import { Colors } from "shared/enums";

describe("Button component", () => {
  it("Should render the component width default styles", () => {
    const { getByRole } = render(<Button clickAction={() => false} />);
    const element = getByRole(/button/i);

    // Default background
    expect(element).toHaveStyle(`background-color: ${Colors.PRIMARY}`);
    // Default border
    expect(element).toHaveStyle("border: none");
    // Default text color
    expect(element).toHaveStyle(`color: ${Colors.WHITE}`);
  });

  it("Should render the component with custom styles", () => {
    const args: Props = {
      children: "My Button",
      outlined: true,
      background: Colors.SECONDARY,
      borderColor: Colors.BLACK,
      textColor: Colors.BLACK,
      clickAction: () => false,
    };

    const { getByRole } = render(<Button {...args} />);

    const element = getByRole("button", {
      name: new RegExp(String(args.children), "i"),
    });

    expect(element).not.toHaveStyle("border: none");
    expect(element).toHaveStyle(`background-color: ${args.background}`);
    expect(element).toHaveStyle(`border-color: ${args.borderColor}`);
    expect(element).toHaveStyle(`color: ${args.textColor}`);
  });

  it("Should call action when clicked", () => {
    const action = jest.fn();

    const { getByRole } = render(<Button clickAction={action} />);

    const element = getByRole("button", { name: /button/i });
    fireEvent.click(element);
    expect(action).toBeCalled();
  });
});
