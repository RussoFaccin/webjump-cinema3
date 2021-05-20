import React from "react";

export type Props = {
  icon?: React.ReactNode;
  label?: string;
  type?: string;
  pattern?: string;
  value?: string;
  required?: boolean;
  validationMessage?: string;
  actionInput?: Function;
};
