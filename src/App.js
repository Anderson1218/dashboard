import React from "react";
import { useSelector } from "react-redux";
import lightTheme from "./theme/lightTheme";
import darkTheme from "./theme/darkTheme";
import { Grommet } from "grommet";
import HomePage from "./pages/HomePage";
import { Route, Switch } from "react-router-dom";
import { GlobalStyles } from "./globalStyles";

function App() {
  const currentTheme = useSelector(state => state.theme.currentTheme);
  return (
    <Grommet theme={currentTheme === "light" ? lightTheme : darkTheme} full>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Grommet>
  );
}

export default App;
