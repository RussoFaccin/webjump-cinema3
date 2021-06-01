import { Switch, Route } from "react-router-dom";
// Pages
import { Home, Login, Signup } from "../pages";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
    </Switch>
  );
};

export default Routes;
