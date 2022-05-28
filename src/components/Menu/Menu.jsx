import React, { useState } from "react";
import { MenuItem } from "./MenuItem";

export const Menu = ({ setMenu, menu }) => {
  return (
    <div
      className={`w-2/4 h-full fixed right-0 bg-secondary flex justify-center items-center flex-col z-30 ${
        menu ? "" : "transform translate-x-full"
      } duration-500`}
    >
      <i
        className="fa-solid fa-arrow-right absolute top-4 left-4 text-white text-lg font-bold"
        onClick={() => setMenu(false)}
      ></i>
      <MenuItem name="Home" />
      <MenuItem name="About" />
      <MenuItem name="Contact" />
    </div>
  );
};
