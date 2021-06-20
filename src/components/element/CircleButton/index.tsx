import React from "react";
import { Props } from "./types";
import { BaseButton } from "./styles";

const CircleButton = ({ children, text, onClick = () => false }: Props) => {
  return (
    <BaseButton onClick={onClick}>
      {children}
      <span className="srOnly">{text}</span>
    </BaseButton>
  );
};

export default CircleButton;
