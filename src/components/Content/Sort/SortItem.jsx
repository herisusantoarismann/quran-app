import React from "react";

export const SortItem = ({ changeSort, sort, title, index = null }) => {
  return (
    <div
      className="relative p-2 w-24 sm:bg-white md:w-36 md:p-3 rounded-lg shadow-md cursor-pointer"
      onClick={() => changeSort(index, sort)}
    >
      <div className="leading-6">
        <p className="sm:text-slate-400">Sort by</p>
        <p className="font-bold hidden sm:block">{title}</p>
      </div>
      <div className="absolute right-3 bottom-3">
        {sort ? (
          <i className="fa-solid fa-arrow-up"></i>
        ) : (
          <i className="fa-solid fa-arrow-down"></i>
        )}
      </div>
    </div>
  );
};
