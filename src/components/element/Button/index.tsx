import React from "react";
import { Props } from "./types";
import { Colors } from "shared/enums";
import { Container } from "./styles";

const Button = ({
  children = "Button",
  outlined = false,
  background = Colors.PRIMARY,
  borderColor = Colors.WHITE,
  textColor = Colors.WHITE,
}: Props) => {
  return (
    <Container
      outlined={outlined}
      backgroundColor={background}
      borderColor={borderColor}
      color={textColor}
    >
      {children}
    </Container>
  );
};

export default Button;
