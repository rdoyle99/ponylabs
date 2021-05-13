import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import history from "./history";
import Hello from "./components/Hello";
import NotFound from "./components/NotFound";

const Router = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/api/findLeads/:url" component={Hello} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
