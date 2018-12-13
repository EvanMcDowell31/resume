import React from "react";
import ReactDOM from "react-dom";
import { ConnectedRouter } from "connected-react-router/immutable";
import history from "utils/history";
import "sanitize.css/sanitize.css";

// Import root app
import App from "containers/App";

const MOUNT_NODE = document.getElementById("app");

const render = () => {
  ReactDOM.render(
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>,
    MOUNT_NODE
  );
};
