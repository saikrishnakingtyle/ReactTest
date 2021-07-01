import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Heading from "./Header";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Heading />
    <App />
  </StrictMode>,
  rootElement
);
