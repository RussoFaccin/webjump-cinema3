import { Switch, Route } from "react-router-dom";
import PrivateRoute from "components/PrivateRoute";
// Pages
import { Home, Login, Profile, Signup } from "../pages";

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
      <PrivateRoute exact path="/profile">
        <Profile />
      </PrivateRoute>
    </Switch>
  );
};

export default Routes;
