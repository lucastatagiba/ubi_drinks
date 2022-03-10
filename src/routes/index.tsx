import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";
import RecipePage from "../pages/RecipePage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/recipe/:name"} component={RecipePage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
