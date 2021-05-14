import React from "react";
import type { Props } from "./types";
import { Colors } from "shared/enums";
import { Container } from "./styles";

const Button = ({
  children = "Button",
  outlined = false,
  background = Colors.PRIMARY,
  borderColor = Colors.WHITE,
  textColor = Colors.WHITE,
  size = "default",
  clickAction
}: Props) => {
  return (
    <Container
      outlined={outlined}
      backgroundColor={background}
      borderColor={borderColor}
      color={textColor}
      onClick={clickAction}
      size={size}
    >
      {children}
    </Container>
  );
};

export default Button;