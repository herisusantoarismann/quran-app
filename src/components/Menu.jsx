import React, { useState } from "react";

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
      <span className="text-lg font-bold text-center text-white tracking-widest my-4">
        Home
      </span>
      <span className="text-lg font-bold text-center text-white tracking-widest my-4">
        About
      </span>
      <span className="text-lg font-bold text-center text-white tracking-widest my-4">
        Contact
      </span>
    </div>
  );
};
