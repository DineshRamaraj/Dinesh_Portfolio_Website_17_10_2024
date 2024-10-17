import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
      <Toaster
          position="bottom-center"
          toastOptions={{
            duration: 5000,
            style: {
              background: "#2E7D32",
              color: "#fff",
              fontFamily: "Roboto"
            },
          }}
        />

    </React.StrictMode>
  </BrowserRouter>
);
