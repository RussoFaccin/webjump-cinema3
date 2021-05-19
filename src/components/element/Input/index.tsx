import React from "react";
import { Props } from "./types";
import { Container, Label, TextBox } from "./styles";

const Input = ({ icon: Icon, label = "", type="text", size = "default", pattern = '' }: Props) => {
  return (
    <>
      <Container size={size}>
        {Icon}
        <Label htmlFor={`fld_${label.toLowerCase()}`}>{label}</Label>
        <TextBox
          type={type}
          name={`fld_${label.toLowerCase()}`}
          id={`fld_${label.toLowerCase()}`}
          placeholder={label}
          pattern={pattern}
        />
      </Container>
    </>
  );
};

export default Input;
