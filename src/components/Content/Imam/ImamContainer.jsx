import React, { useEffect, useState } from "react";
import axios from "axios";
import { ImamItem } from "./ImamItem";

export const ImamContainer = () => {
  const [imam, setImam] = useState(undefined);
  // type false if ascending and true if descending
  const [sort, setSort] = useState(false);

  const changeSort = (sort) => {
    if (sort) {
      setImam(imam.sort((a, b) => a.name.localeCompare(b.name)));
      setSort(!sort);
    } else {
      setImam(imam.sort((a, b) => b.name.localeCompare(a.name)));
      setSort(!sort);
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
            onClick={() => changeSort(sort)}
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
            onClick={() => changeSort(sort)}
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
        {imam !== undefined ? (
          <>
            {imam.map((item, index) => {
              return <ImamItem data={item} index={index} />;
            })}
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
