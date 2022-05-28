import React from "react";
import { ImamMenuItem } from "./ImamMenuItem";

export const ImamMenu = ({ data, imam, setImamMenu, imamMenu, changeImam }) => {
  return (
    <div
      className={`absolute bg-white border-2 border-secondary py-2 px-4 w-11/12 h-[95%] top-2/4 right-2/4 -translate-y-2/4 translate-x-2/4 overflow-y-auto rounded-2xl ${
        imamMenu ? "visible z-20" : "invisible z-0"
      }`}
    >
      <h1 className="text-center font-bold text-lg lg:text-2xl">Imam List</h1>
      <span
        className="absolute right-2 top-2 cursor-pointer"
        onClick={() => setImamMenu(false)}
      >
        &#10006;
      </span>
      {data.map((item, index) => {
        return (
          <ImamMenuItem
            data={item}
            index={index}
            imam={imam}
            changeImam={changeImam}
            key={index}
          />
        );
      })}
    </div>
  );
};
