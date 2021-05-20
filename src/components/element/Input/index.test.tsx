import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Input from "./";
import { invalidStyle } from "./styles";

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

  it("Should have defined value", () => {
    const expectation = "New Text";
    const { getByRole } = render(<Input value={expectation} />);
    const element = getByRole("textbox") as HTMLInputElement;

    expect(element.value).toBe(expectation);
  });

  it("Should fire action on input", () => {
    const actionInput = jest.fn();
    const expectation = "New text";

    const { getByRole } = render(<Input actionInput={actionInput} />);
    const element = getByRole("textbox");
    fireEvent.input(element, { target: { value: expectation } });

    expect(actionInput).toBeCalled();
    expect(actionInput.mock.calls[0][0].value).toBe(expectation);
  });

  it("Shouldn't have validation message", () => {
    const message = "This field is required";
    const { queryByText } = render(
      <Input required={true} validationMessage={message} />
    );

    expect(queryByText(message)).not.toBeInTheDocument();
  });

  it("Should have invalid style", () => {
    const { getByRole } = render(<Input required={true} />);
    const element = getByRole("textbox");

    fireEvent.invalid(element);

    expect(element).toHaveStyle(invalidStyle);
  });

  it("Should have validation message when invalid", () => {
    const message = "This field is required";
    const { getByRole, getAllByText } = render(
      <Input required={true} validationMessage={message} />
    );
    const element = getByRole("textbox");

    fireEvent.invalid(element);

    getAllByText(new RegExp(message, "i"));
  });
});
