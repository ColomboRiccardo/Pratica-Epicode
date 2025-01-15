import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { ClerkProvider } from "@clerk/clerk-react";

import "./index.css";
import App from "./App";

const VITE_CLERK_PUBLISHABLE_KEY =
  "pk_test_cGVhY2VmdWwtY2F0LTIxLmNsZXJrLmFjY291bnRzLmRldiQ";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
    <ClerkProvider
      publishableKey={VITE_CLERK_PUBLISHABLE_KEY}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);
