import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import AppRoutes from "./Root/src/components/environment/AppRoutes";
import AppComponents from "./Root/src/components/environment/AppComponents";

//import * as serviceWorker from './serviceWorker';

type Props = { store: any };
type State = {};

export class Routing extends React.Component<Props, State> {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path={AppRoutes.rootPath}
            component={AppComponents.root}
          />
          <Route
            path={AppRoutes.dashboardPath}
            component={AppComponents.dashboard}
          />
          <Route
            path={AppRoutes.examplePath}
            component={AppComponents.example}
          />
          <Route
            path={AppRoutes.testPagePath}
            component={AppComponents.testPage}
          />
          <Route component={AppComponents.pageNotFound} />
        </Switch>
      </Router>
    );
  }
}

export default Routing;
