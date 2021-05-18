import React from "react";
import { render } from "@testing-library/react";
import Input from "./";

describe("Input Component", () => {
  it("Should render the component", () => {
    render(<Input />);
  });

  it('Should have "E-mail" label and placeholder', () => {
    const labelText = "E-mail";

    const { getByLabelText, getByPlaceholderText } = render(
      <Input label={labelText} />
    );
    getByLabelText(labelText);
    getByPlaceholderText(labelText);
  });
});
