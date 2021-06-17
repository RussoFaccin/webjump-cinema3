import React from "react";
import { fireEvent, render, RenderResult } from "@testing-library/react";
import Input from "./";
import { invalidStyle } from "./styles";

describe("Input Component", () => {
  let utils: RenderResult;

  beforeEach(() => {
    utils = render(<Input label="E-mail" />);
  });

  it("Should render the component", () => {
    expect(utils.container).toBeInTheDocument();
  });

  it('Should have "E-mail" label and placeholder', () => {
    const labelText = "E-mail";

    utils.rerender(<Input label="E-mail" />);

    utils.getByLabelText(labelText);
    utils.getByPlaceholderText(labelText);
  });

  it("Should have defined value", () => {
    const expectation = "New Text";

    utils.rerender(<Input value={expectation} />);

    const element = utils.getByRole("textbox") as HTMLInputElement;
    expect(element.value).toBe(expectation);
  });

  it("Should fire action on input", () => {
    const actionInput = jest.fn();
    const expectation = "New text";

    utils.rerender(<Input actionInput={actionInput} />);
    const element = utils.getByRole("textbox");
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
    const element = utils.getByRole("textbox");

    // fireEvent.invalid(element);

    // expect(element).toHaveStyle(invalidStyle);
  });

  it("Should have validation message when invalid", () => {
    const message = "This field is required";
    utils.rerender(<Input required={true} validationMessage={message} />);
    const element = utils.getByRole("textbox");

    fireEvent.invalid(element);

    utils.getAllByText(new RegExp(message, "i"));
  });
});
