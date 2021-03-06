import React from "react";
import { useSelector } from "react-redux";
import lightTheme from "./theme/lightTheme";
import darkTheme from "./theme/darkTheme";
import { Grommet } from "grommet";
import { Route, Switch } from "react-router-dom";
import { GlobalStyles } from "./globalStyles";
import Layout from "./components/layout/Layout";
import { IntlProvider } from "react-intl";
// import en from "./i18n/en.js";
// import zh from "./i18n/zh.js";

import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import DashBoard from "./pages/DashBoard";

function App() {
  const currentTheme = useSelector(state => state.theme.currentTheme);

  return (
    <Grommet theme={currentTheme === "light" ? lightTheme : darkTheme} full>
      <GlobalStyles />
      <IntlProvider
        locale={navigator.language}
        key={navigator.language}
        defaultLocale="en"
      >
        <Layout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/dashboard" component={DashBoard} />
            <Route exact path="/chat" component={ChatPage} />
          </Switch>
        </Layout>
      </IntlProvider>
    </Grommet>
  );
}

export default App;
