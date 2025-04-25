import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "./features/store/store.ts";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
        <Provider store={store}>
      <BrowserRouter>
    <ThemeProvider>
          <App />
          <Toaster />
    </ThemeProvider>
      </BrowserRouter>
        </Provider>
  </React.StrictMode>
);
