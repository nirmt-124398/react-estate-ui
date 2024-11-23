import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import "./layout.scss";
const layout = () => {
  return (
    <div className="layout">
      <div className="nav">
        <Navbar />
      </div>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default layout;
