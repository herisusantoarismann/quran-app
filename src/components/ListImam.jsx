import React, { useEffect, useState } from "react";
import axios from "axios";
import { useOutletContext } from "react-router-dom";

export const ListImam = () => {
  const [imam, setImam] = useOutletContext();
  // type false if ascending and true if descending
  const [sort, setSort] = useState(false);

  const changeSort = () => {
    if (sort) {
      setImam(imam.sort((a, b) => a.name - b.name));
    } else {
      setImam(imam.sort((a, b) => b.name - a.name));
    }
  };

  const getImam = () => {
    axios.get(`https://quran-endpoint.vercel.app/imam`).then((res) => {
      const imam = res.data.data;
      setImam(imam);
    });
  };

  useEffect(() => {
    document.title = "Quran | Imam List";
    getImam();
  }, []);

  return (
    <>
      <div className="flex justify-end mt-2 mb-8 text-xs md:text-sm">
        <div className="hidden sm:flex gap-4">
          <div
            className="relative p-2 w-24 bg-white md:w-36 md:p-3 rounded-lg shadow-sm cursor-pointer"
            onClick={() => changeSort()}
          >
            <div className="leading-6">
              <p className="text-slate-400">Sort by</p>
              <p className="font-bold">Aplhabet</p>
            </div>
            <div className="absolute right-3 bottom-3">
              {sort ? (
                <i className="fa-solid fa-arrow-up"></i>
              ) : (
                <i className="fa-solid fa-arrow-down"></i>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-end sm:hidden">
          <div
            className="p-1 w-20 flex items-center gap-1 cursor-pointer"
            onClick={() => changeSort()}
          >
            <p>Alphabet</p>
            {sort ? (
              <i className="fa-solid fa-arrow-up"></i>
            ) : (
              <i className="fa-solid fa-arrow-down"></i>
            )}
          </div>
        </div>
      </div>
      <div className="my-2 lg:px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {imam.map((item, index) => {
          return (
            <div
              className="bg-white h-32 xl:h-40 p-2 md:p-4 rounded-md md:rounded-lg flex justify-between flex-col text-sm md:text-base shadow-sm cursor-pointer z-10 duration-300 hover:-translate-x-8 hover:translate-y-3"
              key={item.id}
            >
              <div className="flex justify-between items-center">
                <span>{index + 1}</span>
                <i className="fa-solid fa-star text-secondary"></i>
              </div>
              <p className="font-semibold text-xs leading-3 xl:font-bold tracking-wide">
                {item.name}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};
