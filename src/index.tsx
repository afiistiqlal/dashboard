import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import Main from "./views/Main";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import Dashboard from "./views/admin/Dashboard";
import Settings from "./views/admin/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/settings" element={<Settings />} />
        </Route>
        <Route path="auth/login" element={<Login />} />
        <Route path="auth/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
