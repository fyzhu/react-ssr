import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import routes from "../routes";

const App = () => {
  return (
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  );
};

ReactDom.hydrateRoot(document.getElementById("root"), <App />);
