import React from "react";
import type { Props } from "./types";
import { Colors } from "shared/enums";
import { Container } from "./styles";

const Button = ({
  className,
  children = "Button",
  outlined = false,
  background = Colors.PRIMARY,
  borderColor = Colors.WHITE,
  textColor = Colors.WHITE,
  clickAction
}: Props) => {
  return (
    <Container
      outlined={outlined}
      backgroundColor={background}
      borderColor={borderColor}
      color={textColor}
      onClick={clickAction}
    >
      {children}
    </Container>
  );
};

export default Button;
