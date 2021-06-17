import React, { useCallback, useEffect, useState } from "react";
import { Props } from "./types";
import { Container, ErrorMessage, IconBox, Label, TextBox } from "./styles";
import ErrorTolltip from "components/element/ErrorTooltip";

const Input = ({
  className,
  icon: Icon,
  label = "",
  type = "text",
  pattern,
  value = "",
  required = false,
  validationMessage = "",
  actionInput = () => false,
}: Props) => {
  const [innerValue, setInnerValue] = useState(value);
  const [hasError, setError] = useState(false);

  const handleInput = useCallback(
    (evt) => {
      setError(false);
      setInnerValue(evt.target.value);
      actionInput({ label, value: evt.target.value });
    },
    [actionInput, label]
  );

  const handleInvalid = useCallback(() => {
    setError(true);
  }, []);

  useEffect(() => {
    setInnerValue(value);
  }, [value]);

  return (
    <>
      <Container className={className}>
        <IconBox>{Icon}</IconBox>
        <Label htmlFor={`fld_${label.toLowerCase()}`}>{label}</Label>
        <TextBox
          type={type}
          name={`fld_${label.toLowerCase()}`}
          id={`fld_${label.toLowerCase()}`}
          placeholder={label}
          pattern={pattern}
          onInput={handleInput}
          onInvalid={handleInvalid}
          value={innerValue}
          required={required}
          error={hasError}
        />
        <ErrorTolltip isVisible={hasError} message={validationMessage} />
        {hasError ? <ErrorMessage>{validationMessage}</ErrorMessage> : null}
      </Container>
    </>
  );
};

export default Input;
