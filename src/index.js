import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Heading from "./Header";
import Footer from "./Footer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Heading />
    <App />
    <Footer />
  </StrictMode>,
  rootElement
);
