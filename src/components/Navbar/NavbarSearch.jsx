import React from "react";

export const NavbarSearch = () => {
  return (
    <div className="mr-4 border-2 border-gray-400 rounded-lg md:rounded-full">
      <input
        className="w-24 lg:w-48 px-2 sm:px-3 sm:py-1 md:p-4 md:py-2 text-sm outline-none rounded-lg md:rounded-full"
        type="text"
        placeholder="Search"
      />
      <i className="fa-solid fa-magnifying-glass mr-2"></i>
    </div>
  );
};
