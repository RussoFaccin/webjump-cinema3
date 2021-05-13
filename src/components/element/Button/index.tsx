import React from "react";
import { Props } from "./types";
import { Colors } from "shared/enums";
import { Container } from "./styles";

const Button = ({
  children = "Button",
  outlined = false,
  fill = Colors.PRIMARY.toString(),
  stroke = Colors.WHITE,
}: Props) => {
  return (
    <Container
      outlined={outlined}
      backgroundColor={fill}
      borderColor={stroke}
    >
      {children}
    </Container>
  );
};

export default Button;
