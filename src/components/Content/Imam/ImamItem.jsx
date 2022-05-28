import React from "react";

export const ImamItem = ({ data, index }) => {
  return (
    <div
      className="bg-white h-32 xl:h-40 p-2 md:p-4 rounded-md md:rounded-lg flex justify-between flex-col text-sm md:text-base shadow-sm cursor-pointer z-10 duration-300 hover:-translate-x-8 hover:translate-y-3"
      key={data.id}
    >
      <div className="flex justify-between items-center">
        <span>{index + 1}</span>
        <i className="fa-solid fa-star text-secondary"></i>
      </div>
      <p className="font-semibold text-xs leading-3 lg:text-sm xl:font-bold tracking-wide">
        {data.name}
      </p>
    </div>
  );
};
