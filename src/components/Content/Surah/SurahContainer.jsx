import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const SurahContainer = () => {
  const [data, setData] = useState();
  // type false if ascending and true if descending
  const [sort, setSort] = useState({ number: 1, type: false });

  const getData = () => {
    axios.get(`https://quran-endpoint.vercel.app/quran`).then((res) => {
      const quran = res.data.data;
      setData(quran);
    });
  };

  const changeSort = (number, type) => {
    if (number != sort.number) {
      setSort({ number: number, type: false });
      type = false;
    } else {
      setSort({ number: number, type: type });
    }

    switch (true) {
      case number === 1 && !type:
        setData(data.sort((a, b) => a.number - b.number));
        break;
      case number === 1 && type:
        setData(data.sort((a, b) => b.number - a.number));
        break;
      case number === 2 && !type:
        setData(
          data.sort((a, b) => a.asma.id.short.localeCompare(b.asma.id.short))
        );
        break;
      case number === 2 && type:
        setData(
          data.sort((a, b) => b.asma.id.short.localeCompare(a.asma.id.short))
        );
        break;
      case number === 3 && !type:
        setData(data.sort((a, b) => a.ayahCount - b.ayahCount));
        break;
      case number === 3 && type:
        setData(data.sort((a, b) => b.ayahCount - a.ayahCount));
        break;
      default:
        alert("Error Sorting...");
        break;
    }
  };

  useEffect(() => {
    document.title = "Quran | Surah List";
    getData();
  }, []);

  return (
    <>
      <div className="flex justify-end mt-2 mb-8 text-xs md:text-sm">
        <div className="hidden sm:flex gap-4">
          <div
            className={`relative p-2 w-24 md:w-36 md:p-3 rounded-lg shadow-sm cursor-pointer ${
              sort.number == 1 ? "bg-white" : "blur-[0.6px]"
            }`}
            onClick={() => changeSort(1, !sort.type)}
          >
            <div className="leading-6">
              <p className="text-slate-400">Sort by</p>
              <p className="font-bold">Number</p>
            </div>
            <div className="absolute right-3 bottom-3">
              {sort.type && sort.number == 1 ? (
                <i className="fa-solid fa-arrow-up"></i>
              ) : (
                <i className="fa-solid fa-arrow-down"></i>
              )}
            </div>
          </div>
          <div
            className={`relative p-2 w-24 md:w-36 md:p-3 rounded-lg shadow-sm cursor-pointer  ${
              sort.number == 2 ? "bg-white" : "blur-[0.6px]"
            }`}
            onClick={() => changeSort(2, !sort.type)}
          >
            <div className="leading-6">
              <p className="text-slate-400">Sort by</p>
              <p className="font-bold">Alphabet</p>
            </div>
            <div className="absolute right-3 bottom-3">
              {sort.type && sort.number == 1 ? (
                <i className="fa-solid fa-arrow-up"></i>
              ) : (
                <i className="fa-solid fa-arrow-down"></i>
              )}
            </div>
          </div>
          <div
            className={`relative p-2 w-24 md:w-36 md:p-3 rounded-lg shadow-sm cursor-pointer  ${
              sort.number == 3 ? "bg-white" : "blur-[0.6px]"
            }`}
            onClick={() => changeSort(3, !sort.type)}
          >
            <div className="leading-6">
              <p className="text-slate-400">Sort by</p>
              <p className="font-bold">Total Ayah</p>
            </div>
            <div className="absolute right-3 bottom-3">
              {sort.type && sort.number == 1 ? (
                <i className="fa-solid fa-arrow-up"></i>
              ) : (
                <i className="fa-solid fa-arrow-down"></i>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-end sm:hidden">
          <div
            className={`p-1 w-20 flex items-center gap-1 cursor-pointer ${
              sort.number == 1 ? "text-black" : "text-slate-400"
            }`}
            onClick={() => changeSort(1, !sort.type)}
          >
            <p>Number</p>
            {sort.type && sort.number == 1 ? (
              <i className="fa-solid fa-arrow-up"></i>
            ) : (
              <i className="fa-solid fa-arrow-down"></i>
            )}
          </div>
          <div
            className={`p-1 w-20 flex items-center gap-1 cursor-pointer ${
              sort.number == 2 ? "text-black" : "text-slate-400"
            }`}
            onClick={() => changeSort(2, !sort.type)}
          >
            <p>Alphabet</p>
            {sort.type && sort.number == 2 ? (
              <i className="fa-solid fa-arrow-up"></i>
            ) : (
              <i className="fa-solid fa-arrow-down"></i>
            )}
          </div>
          <div
            className={`p-1 w-20 flex items-center gap-1 cursor-pointer ${
              sort.number == 3 ? "text-black" : "text-slate-400"
            }`}
            onClick={() => changeSort(3, !sort.type)}
          >
            <p>Total Ayat</p>
            {sort.type && sort.number == 3 ? (
              <i className="fa-solid fa-arrow-up"></i>
            ) : (
              <i className="fa-solid fa-arrow-down"></i>
            )}
          </div>
        </div>
      </div>
      <div className="my-2 lg:px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {data !== undefined ? (
          <>
            {data.map((item, index) => {
              return (
                <Link to={`/${item.number}`} key={item.number}>
                  <div
                    className="bg-white h-32 xl:h-40 p-2 md:p-4 rounded-md md:rounded-lg flex justify-between flex-col text-sm md:text-base shadow-sm cursor-pointer z-10 duration-300 hover:-translate-x-8 hover:translate-y-3"
                    key={item.number}
                  >
                    <div className="flex justify-between items-center">
                      <span>{index + 1}</span>
                      <i className="fa-solid fa-star text-secondary"></i>
                    </div>
                    <div className="">
                      <p className="font-semibold xl:font-bold tracking-wide">
                        {item.asma.en.short}
                      </p>
                      <p className="text-gray-400">
                        {item.asma.translation.id}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
