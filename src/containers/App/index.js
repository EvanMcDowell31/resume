/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../HomePage";

import GlobalStyle from "../../global-styles";
import Styles from "./app.css";

export default function App() {
  return (
    <div className={Styles.page}>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
