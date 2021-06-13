import React from "react";
import type { Props } from "./types";
import { Colors } from "shared/enums";
import { Container, Spinner } from "./styles";

const Button = ({
  className,
  children = "Button",
  outlined = false,
  background = Colors.PRIMARY,
  borderColor = Colors.WHITE,
  textColor = Colors.WHITE,
  isLoading = false,
  clickAction,
}: Props) => {
  return (
    <Container
      className={className}
      outlined={outlined}
      backgroundColor={background}
      borderColor={borderColor}
      color={textColor}
      onClick={clickAction}
    >
      {children}
      {isLoading ? <Spinner /> : null}
    </Container>
  );
};

export default Button;
