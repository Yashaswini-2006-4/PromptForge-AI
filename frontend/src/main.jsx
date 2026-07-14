import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";

import "./index.css";
import App from "./App";
import AuthProvider from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster
  position="top-right"
  toastOptions={{
    duration: 3000,
    style: {
      background: "#18181b",
      color: "#ffffff",
      border: "1px solid #3f3f46",
      borderRadius: "12px",
    },
    success: {
      iconTheme: {
        primary: "#22c55e",
        secondary: "#ffffff",
      },
    },
    error: {
      iconTheme: {
        primary: "#ef4444",
        secondary: "#ffffff",
      },
    },
  }}
/>
      <App />
    </AuthProvider>
  </React.StrictMode>
);