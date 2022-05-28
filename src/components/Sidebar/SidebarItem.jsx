import React from "react";
import { Link, useLocation } from "react-router-dom";

export const SidebarItem = ({ icon, path }) => {
  const location = useLocation();

  return (
    <div className="mt-12">
      <Link to={path}>
        <i
          className={`${icon} cursor-pointer duration-150 hover:text-secondary ${
            location.pathname === path ? "text-secondary" : ""
          }`}
        ></i>
      </Link>
    </div>
  );
};
