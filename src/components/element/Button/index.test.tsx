import React from "react";
import { render } from "@testing-library/react";
import Button from "./";
import { Colors } from "shared/enums";

describe("Button component", () => {
  it("Should render the component width default styles", () => {
    const { getByRole } = render(<Button />);
    const element = getByRole(/button/i);

    // Default background
    expect(element).toHaveStyle(`background-color: ${Colors.PRIMARY}`);
    // Default border
    expect(element).toHaveStyle("border: none");
    // Default text color
    expect(element).toHaveStyle(`color: ${Colors.WHITE}`);
  });

  it("Should render the component width custom styles", () => {

  });
});
