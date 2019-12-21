import React from "react";
import lightTheme from "./theme/lightTheme";
import { Grommet } from "grommet";
import HomePage from "./pages/HomePage";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Grommet theme={lightTheme} full>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Grommet>
  );
}

export default App;
