import React from "./react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { HashRouter as Router } from "./react-router-dom";
import { createRoot } from "./react-dom";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Router>
    <App />
  </Router>
);
