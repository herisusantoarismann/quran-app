import React from "react";
import { NavbarSearch } from "./NavbarSearch";
import { NavbarSupport } from "./NavbarSupport";
import { NavbarTitle } from "./NavbarTitle";

export const Navbar = ({ setMenu }) => {
  return (
    <div className="mt-4 mx-6 lg:px-6 flex justify-between items-center">
      <NavbarTitle />
      <div className="flex">
        <NavbarSearch />
        <div className="relative lg:hidden">
          <i
            className="fa-solid fa-bars absolute top-2/4 transform -translate-y-2/4"
            onClick={() => setMenu(true)}
          ></i>
        </div>
        <NavbarSupport />
      </div>
    </div>
  );
};
