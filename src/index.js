import React from "react";
import ReactDOM from "react-dom";
import Layout from "./containers/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import 'normalize.css';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>,
  document.getElementById("root")
);
