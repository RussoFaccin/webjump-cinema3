import React from "react";
import { Props } from "./types";
import { Container, GlobalStyle, Label, TextBox } from "./styles";

const Input = ({ icon = <span>i</span>, label = "" }: Props) => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Label htmlFor={`fld_${label.toLowerCase()}`}>{label}</Label>
        <TextBox
          name={`fld_${label.toLowerCase()}`}
          id={`fld_${label.toLowerCase()}`}
          placeholder={label}
        />
      </Container>
    </>
  );
};

export default Input;
