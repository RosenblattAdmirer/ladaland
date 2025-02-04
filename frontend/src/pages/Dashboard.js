import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Settings from "./Settings";
import DocumentTranslation from "./DocumentTranslation";

const Dashboard = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside style={{ width: "200px", background: "#f4f4f4", padding: "1rem" }}>
        <h3>Menu</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><Link to="settings">Settings</Link></li>
          <li><Link to="translate">Document Translation</Link></li>
        </ul>
      </aside>
      <main style={{ flex: 1, padding: "1rem" }}>
        <Routes>
          <Route path="settings" element={<Settings />} />
          <Route path="translate" element={<DocumentTranslation />} />
        </Routes>
      </main>
    </div>
  );
};

export default Dashboard;
