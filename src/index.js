import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles/App.scss";
import App from "./components/App.jsx";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);


// import test from "./components/test";
// test();
// ReactDOM.render(<test />, document.getElementById("root"));