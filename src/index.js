import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import UserInfoProvider from "./components/providers/UserInfoProvider";
import { AuthContextProvider } from "./state/AuthContext";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <UserInfoProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </UserInfoProvider>
);
