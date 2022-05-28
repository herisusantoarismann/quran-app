import React from "react";

export const AyahItem = ({
  data,
  index,
  playSound,
  pauseSound,
  stopSound,
  isPlaying,
  changeVolume,
}) => {
  return (
    <div className="bg-white my-2 py-2 px-3 rounded-lg">
      <div className="bg-secondary w-fit text-white text-center rounded-full px-[7px] py-[0.5px]">
        <p className="text-[10px]">{index + 1}</p>
      </div>
      <div className="mt-2">
        <p className="text-right text-lg sm:text-xl xl:text-2xl">
          {data.text.ar}
        </p>
        <p className="text-xs text-left mt-2 text-justify sm:text-sm xl:text-base">
          {data.translation.en}
        </p>
      </div>
      <div className="md:w-2/4 md:mx-auto lg:w-4/12 xl:w-2/12 text-xs text-right mt-3 flex justify-between items-center mx-4">
        <div>
          <i
            className="fa-solid fa-play"
            onClick={() => (isPlaying ? pauseSound() : playSound(index))}
            data-boolean="false"
          ></i>
        </div>
        <div className="text-center sm:w-3/4">
          <p className="text-[10px] sm:text-xs">Volume</p>
          <input
            type="range"
            className="sm:w-full"
            onChange={(e) => changeVolume(e)}
            defaultValue={50}
          />
        </div>
        <i className="fa-solid fa-stop" onClick={() => stopSound()}></i>
      </div>
    </div>
  );
};
