import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AppProvider } from "./contexts/context";
import "./index.css";
import { UserContextProvider } from "./contexts/userContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
