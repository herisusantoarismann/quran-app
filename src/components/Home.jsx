import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export const Home = () => {
  const [menu, setMenu] = useState(false);
  const location = useLocation();

  return (
    <div className="w-screen h-screen overflow-x-hidden">
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
      <div className="h-full absolute hidden lg:flex p-7 bg-slate-50/50 flex-col rounded-r-xl text-center">
        <div className="bg-secondary rounded-full p-2">
          <img src="images/icon.png" alt="" className="w-6 cursor-pointer" />
        </div>
        <div className="mt-12">
          <Link to={"/"}>
            <i
              className={`fa-solid fa-book-open cursor-pointer duration-150 hover:text-secondary ${
                location.pathname !== "/imam" ? "text-secondary" : ""
              }`}
            ></i>
          </Link>
        </div>
        <div className="mt-12">
          <Link to={"/imam"}>
            <i
              className={`fa-solid fa-volume-high cursor-pointer duration-150 hover:text-secondary ${
                location.pathname === "/imam" ? "text-secondary" : ""
              }`}
            ></i>
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
      <div className="h-5/6 flex flex-col-reverse lg:flex-row">
        <div className="h-full w-11/12 bg-primary my-6 mx-4 lg:ml-24 lg:mr-12 p-4 lg:p-6 rounded-lg lg:rounded-3xl overflow-y-auto">
          <Outlet />
        </div>
        <div className="hidden lg:flex w-1/5 px-12 py-6 justify-around flex-col">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="">Salam,</h3>
              <h2>Heri</h2>
            </div>
            <img
              src="./images/Img_Icon.png"
              alt="image-user"
              className="w-4/5 h-4/5"
            />
          </div>
          <div>
            <i className="fa-solid fa-headphones text-3xl"></i>
            <h1>Last Read</h1>
            <p className="">Al-Fatihah (1)</p>
          </div>
          <div>
            <i className="fa-solid fa-book-open text-3xl"></i>
            <h1>Last Read</h1>
            <p className="">Al-Fatihah (1)</p>
          </div>
        </div>
        <div className="px-6 pt-3 flex justify-around text-sm lg:hidden">
          <div className="">
            <img
              src="./images/Img_Icon.png"
              alt="image-user"
              className="w-16 h-16"
            />
            <p className="text-xs">
              Salam, <b>Heri</b>{" "}
            </p>
          </div>
          <div className="relative text-center flex justify-between flex-col">
            <i className="fa-solid fa-headphones absolute text-3xl top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 opacity-30"></i>
            <h1>Last Read</h1>
            <p className="">Al-Fatihah (1)</p>
          </div>
          <div className="relative text-center flex justify-between flex-col">
            <i className="fa-solid fa-book-open absolute text-3xl top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 opacity-30"></i>
            <h1>Last Read</h1>
            <p className="">Al-Fatihah (1)</p>
          </div>
        </div>
      </div>
      <div className="text-center text-xs md:text-sm font-bold text-slate-400 fixed bottom-12 left-2/4 -translate-x-2/4">
        &copy; Copyright {new Date().getFullYear()}, All Right Reversed.
      </div>
    </div>
  );
};
