import { RouteProps } from "react-router-dom";

export interface Props extends RouteProps {
  children: JSX.Element;
}
