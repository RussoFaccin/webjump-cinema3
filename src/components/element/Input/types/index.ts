import React from "react";

export type Props = {
  icon: React.ReactNode;
  label: string;
  type: string;
  size: "default" | "small";
  pattern: string;
};

export type StyleProps = {
  size: "default" | "small";
};
