export type StyleProps = {
    outlined: boolean;
    backgroundColor: string;
    borderColor: string;
    color: string;
    size: "default" | "small";
}

export type Props = {
    children?: string | JSX.Element;
    outlined: boolean;
    background?: string;
    borderColor?: string;
    textColor?: string;
    size: "default" | "small";
    clickAction(): void;
  }