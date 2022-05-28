import React from "react";
import { Link } from "react-router-dom";

export const SurahItem = ({ data, index }) => {
  return (
    <Link to={`/${data.number}`} key={data.number}>
      <div
        className="bg-white h-32 xl:h-40 p-2 md:p-4 rounded-md md:rounded-lg flex justify-between flex-col text-sm md:text-base shadow-sm cursor-pointer z-10 duration-300 hover:-translate-x-8 hover:translate-y-3"
        key={data.number}
      >
        <div className="flex justify-between items-center">
          <span>{index + 1}</span>
          <i className="fa-solid fa-star text-secondary"></i>
        </div>
        <div className="">
          <p className="font-semibold xl:font-bold tracking-wide">
            {data.asma.en.short}
          </p>
          <p className="text-gray-400">{data.asma.translation.id}</p>
        </div>
      </div>
    </Link>
  );
};
