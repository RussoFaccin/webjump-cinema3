import { Switch, Route } from "react-router-dom";
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
      <Route exact path="/profile">
        <Profile />
      </Route>
    </Switch>
  );
};

export default Routes;
