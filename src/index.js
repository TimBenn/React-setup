import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>,
  document.getElementById("root")
);
