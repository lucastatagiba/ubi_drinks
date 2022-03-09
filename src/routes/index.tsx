import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
