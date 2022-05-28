import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { MainContent } from "./MainContent";

export const Content = () => {
  const [recent, setRecent] = useState(null);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("quran"));
    setRecent(data);
  }, []);

  return (
    <div className="h-5/6 flex flex-col-reverse 2xl:flex-row">
      <MainContent />
      <div className="hidden 2xl:flex w-64 pr-12 py-16 justify-between flex-col">
        <div className="flex justify-between items-center">
          <div className="">
            <h3 className="">Salam,</h3>
            <h2 className="font-bold">Heri</h2>
          </div>
          <img src="./images/Img_Icon.png" alt="image-user" className="w-2/5" />
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
            Do not be friend someone who cannot restrain their anger or control
            their desire. Nor, someone who is a liar or who is greedy for this
            world
          </p>
        </div>
      </div>
    </div>
  );
};