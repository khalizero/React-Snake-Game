import React from "react";
import { Outlet } from "react-router-dom";

import Nav from "../components/nav/Nav";
import navItems from "../components/nav/_navItems";

const MainLayout = () => {
  return (
    <div>
      <Nav navItems={navItems} />
      <div className="p-1rem mainWrapper">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
