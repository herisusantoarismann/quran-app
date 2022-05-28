import React from "react";
import { Link, useLocation } from "react-router-dom";
import { SidebarIcon } from "./SidebarIcon";

export const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="h-full absolute hidden lg:flex p-7 bg-slate-50/50 flex-col rounded-r-xl text-center">
      <SidebarIcon />
      <div className="mt-12">
        <Link to={"/"}>
          <i
            className={`fa-solid fa-book-open cursor-pointer duration-150 hover:text-secondary ${
              location.pathname !== "/imam" ? "text-secondary" : ""
            }`}
          ></i>
        </Link>
      </div>
      <div className="mt-12">
        <Link to={"/imam"}>
          <i
            className={`fa-solid fa-volume-high cursor-pointer duration-150 hover:text-secondary ${
              location.pathname === "/imam" ? "text-secondary" : ""
            }`}
          ></i>
        </Link>
      </div>
    </div>
  );
};
