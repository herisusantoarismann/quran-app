import React from "react";
import { SidebarIcon } from "./SidebarIcon";
import { SidebarItem } from "./SidebarItem";

export const Sidebar = () => {
  return (
    <div className="h-full absolute hidden lg:flex p-7 bg-slate-50/50 flex-col rounded-r-xl text-center">
      <SidebarIcon />
      <SidebarItem icon={"fa-solid fa-book-open"} path="/" />
      <SidebarItem icon={"fa-solid fa-volume-high"} path="/imam" />
    </div>
  );
};
