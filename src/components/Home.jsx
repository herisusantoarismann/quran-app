import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "./Menu/Menu";
import { Sidebar } from "./Sidebar/Sidebar";

export const Home = () => {
  const [menu, setMenu] = useState(false);
  const [recent, setRecent] = useState(null);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("quran"));
    setRecent(data);
  }, []);

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Menu setMenu={setMenu} menu={menu} />
      <Sidebar />
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
      <div className="h-5/6 flex flex-col-reverse 2xl:flex-row">
        <div className="h-full w-11/12 lg:w-10/12 bg-primary my-6 mx-4 lg:ml-24 lg:mr-24 xl:mr-12 p-4 lg:p-6 rounded-lg lg:rounded-3xl overflow-y-auto">
          <Outlet />
        </div>
        <div className="hidden 2xl:flex w-64 pr-12 py-16 justify-between flex-col">
          <div className="flex justify-between items-center">
            <div className="">
              <h3 className="">Salam,</h3>
              <h2 className="font-bold">Heri</h2>
            </div>
            <img
              src="./images/Img_Icon.png"
              alt="image-user"
              className="w-2/5"
            />
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <div className="">
              <h1 className="font-bold text-secondary uppercase tracking-widest">
                Last Read
              </h1>
              {recent !== null ? (
                <>
                  <p className="mt-4 font-bold text-lg">{recent.surah}</p>
                </>
              ) : (
                <p className="mt-4 font-bold text-lg">Not Read</p>
              )}
            </div>
            <i className="fa-solid fa-book-open text-5xl text-primary"></i>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <div className="">
              <h1 className="font-bold text-secondary uppercase tracking-widest">
                Last Listened
              </h1>
              {recent !== null ? (
                <>
                  <p className="mt-4 font-bold text-lg">{recent.surah}</p>
                  <p className="text-slate-500">Ayah no : {recent.ayat}</p>
                </>
              ) : (
                <p className="mt-4 font-bold text-lg">Not Listened</p>
              )}
            </div>
            <i className="fa-solid fa-headphones text-5xl text-primary"></i>
          </div>
          <div className="bg-secondary px-6 py-4 text-white rounded-xl font-semibold">
            <h1 className="text-slate-200 opacity-70">Quote of the day</h1>
            <p className="pt-4 ">
              Do not be friend someone who cannot restrain their anger or
              control their desire. Nor, someone who is a liar or who is greedy
              for this world
            </p>
          </div>
        </div>
        <div className="px-6 pt-3 flex justify-around text-sm 2xl:hidden">
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
            <p className="">Al-Fatihah</p>
          </div>
          <div className="relative text-center flex justify-between flex-col">
            <i className="fa-solid fa-book-open absolute text-3xl top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 opacity-30"></i>
            <h1>Last Read</h1>
            <p className="">Al-Fatihah (1)</p>
          </div>
        </div>
      </div>
      <div className="text-center text-xs md:text-sm xl:text-base font-bold text-slate-400 fixed bottom-12 lg:bottom-4 xl:bottom-8 left-2/4 -translate-x-2/4">
        &copy; Copyright {new Date().getFullYear()}, All Right Reversed.
      </div>
    </div>
  );
};
