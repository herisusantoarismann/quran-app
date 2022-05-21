import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListBox } from "./ListBox";
import { Link, Outlet } from "react-router-dom";

export const Home = () => {
  const [data, setData] = useState(undefined);
  const [menu, setMenu] = useState(false);

  const getData = () => {
    axios.get(`https://quran-endpoint.vercel.app/quran`).then((res) => {
      const quran = res.data.data;
      setData(quran);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      {data != undefined ? (
        <>
          <div
            className={`w-2/4 h-full fixed right-0 bg-secondary flex justify-center items-center flex-col z-10 ${
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
          <div className="h-full absolute hidden lg:flex p-7 bg-slate-50/50 flex-col rounded-r-xl text-center">
            <div className="bg-secondary rounded-full p-2">
              <img
                src="images/icon.png"
                alt=""
                className="w-6 cursor-pointer"
              />
            </div>
            <div className="mt-12">
              <i className="fa-solid fa-book-open text-secondary cursor-pointer duration-150 hover:text-secondary"></i>
            </div>
            <div className="mt-12">
              <Link to={"/imam"}>
                <i className="fa-solid fa-volume-high cursor-pointer duration-150 hover:text-secondary"></i>
              </Link>
            </div>
          </div>
          <div className="mt-4 mx-6 lg:px-6 flex justify-between items-center">
            <div className="lg:ml-20">
              <h1 className="font-bold text-secondary text-2xl tracking-wide">
                Quran
              </h1>
            </div>
            <div className="flex">
              <div className="mr-4 border-2 border-gray-400 rounded-lg md:rounded-full">
                <input
                  className="w-24 lg:w-48 px-2 sm:px-3 sm:py-1 md:p-4 md:py-2 text-sm outline-none rounded-lg md:rounded-full"
                  type="text"
                  placeholder="Search"
                />
                <i className="fa-solid fa-magnifying-glass mr-2"></i>
              </div>
              <div className="relative lg:hidden">
                <i
                  className="fa-solid fa-bars absolute top-2/4 transform -translate-y-2/4"
                  onClick={() => setMenu(true)}
                ></i>
              </div>
              <div className="hidden lg:flex items-center">
                <button className="bg-secondary py-2 px-5 text-white rounded-full">
                  Support
                </button>
              </div>
            </div>
          </div>
          <div className="h-5/6 bg-primary my-6 mx-4 lg:ml-24 lg:mr-12 p-4 lg:p-6 rounded-lg lg:rounded-3xl overflow-y-auto">
            <Outlet context={[data, setData]} />
          </div>
          <div className="text-center text-sm font-bold text-slate-400">
            &copy; Copyright {new Date().getFullYear()}, All Right Reversed.
          </div>
        </>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};
