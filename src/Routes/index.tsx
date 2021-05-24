import { Switch, Route } from "react-router-dom";
// Pages
import { Home, Login } from "../pages";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
    </Switch>
  );
};

export default Routes;
