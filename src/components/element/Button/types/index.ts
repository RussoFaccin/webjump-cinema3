import { Colors } from "shared/enums";
export type Props = {
  className?: string;
  children?: string | JSX.Element;
  outlined?: boolean;
  background?: Colors;
  borderColor?: Colors;
  textColor?: Colors;
  clickAction(): void;
};

export type ContainerProps = {
  backgroundColor: Colors;
  borderColor: Colors;
  outlined: boolean;
};
