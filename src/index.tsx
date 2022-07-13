import React from "react";
import ReactDOM from "react-dom/client";

import { Root } from "./components/Root/Root";
import { ThemeContext } from "./contexts/ThemeContext";
import { ThemeProvider } from "./providers/ThemeProvider";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";
import "./global.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Root />
      <ThemeContext.Consumer>
        {({ theme }) => (
          <ToastContainer position="bottom-right" theme={theme} />
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  </React.StrictMode>
);
