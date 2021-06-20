import React from "react";
import { Props } from "./types";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useAuth } from "contexts";

const PrivateRoute = ({ children, ...rest }: Props) => {
  const location = useLocation();
  const { isLogged } = useAuth();

  return isLogged ? (
    <Route {...rest}>{children}</Route>
  ) : (
    <Redirect
      to={{
        pathname: "/",
        state: { from: location },
      }}
    />
  );
};

export default PrivateRoute;
