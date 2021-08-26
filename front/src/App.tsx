import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
    </Switch>
  );
}

export default App;
