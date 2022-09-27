import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Nav.scss";

const Nav = ({ navItems }) => {
  return (
    <div className="navBar justify-between p-1rem">
      <h3 className="navHead">Snake</h3>
      <div className="flex justify-end align-base">
        {navItems.map(({ title, icon, path }) => (
          <NavLink
            to={path}
            key={title}
            className={({ isActive }) => (isActive ? "activeNav" : "")}
          >
            <div className="navData">
              <h4 className="navText">{title}</h4>
              <span className="navIcon">{icon}</span>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Nav;
