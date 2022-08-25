import React from "react";
import Dashboard from "../views/admin/Dashboard";
import Settings from "../views/admin/Settings";
import { Routes, Route } from "react-router-dom";

function Admin() {
  return (
    <div>
      <Routes>
        <Route path="admin/dashboard" element={<Dashboard />} />
        <Route path="admin/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default Admin;
