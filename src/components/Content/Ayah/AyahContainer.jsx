import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const AyahContainer = () => {
  const params = useParams();
  const [surah, setSurah] = useState(undefined);
  const [imam, setImam] = useState(1);
  const [imamList, setImamList] = useState(undefined);
  const [imamMenu, setImamMenu] = useState(false);
  const [audio, setAudio] = useState({
    data: new Audio(),
    currentTime: 0,
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();

  const getImam = () => {
    axios.get(`https://quran-endpoint.vercel.app/imam`).then((res) => {
      setImamList(res.data.data);
    });
  };

  const getData = () => {
    axios
      .get(
        `https://quran-endpoint.vercel.app/quran/${params.surah}?imamId=${imam}`
      )
      .then((res) => {
        setSurah(res.data.data);
        document.title = "Quran | " + res.data.data.asma.en.short;
      });
  };

  const playSound = (id) => {
    const url = surah.ayahs[id].audio.url;
    audio.data.src = url;
    audio.data.currentTime = audio.currentTime;
    audio.data.volume = 0.5;
    audio.data.play();
    setIsPlaying(true);
    audio.data.onended = () => {
      setIsPlaying(false);
      audio.data.currentTime = 0;
    };
    localStorage.setItem(
      "quran",
      JSON.stringify({ ayat: id + 1, surah: surah.asma.en.short })
    );
  };

  const pauseSound = () => {
    audio.data.pause();
    setIsPlaying(false);
    audio.currentTime = audio.data.currentTime;
  };

  const stopSound = () => {
    audio.data.pause();
    audio.currentTime = 0;
  };

  const changeVolume = (e) => {
    audio.data.volume = e.target.value / 100;
  };

  const changeImam = (id) => {
    setImam(id);
    stopSound();
  };

  useEffect(() => {
    getData();
    getImam();
  }, []);

  useEffect(() => {
    getData();
  }, [imam]);

  return (
    <>
      {imamList !== undefined ? (
        <div
          className={`absolute bg-white border-2 border-secondary py-2 px-4 w-11/12 h-[95%] top-2/4 right-2/4 -translate-y-2/4 translate-x-2/4 overflow-y-auto rounded-2xl ${
            imamMenu ? "visible z-20" : "invisible z-0"
          }`}
        >
          <h1 className="text-center font-bold text-lg lg:text-2xl">
            Imam List
          </h1>
          <span
            className="absolute right-2 top-2 cursor-pointer"
            onClick={() => setImamMenu(false)}
          >
            &#10006;
          </span>
          {imamList.map((item, index) => {
            return (
              <div
                className={`my-2 py-1 px-2 flex font-semibold ${
                  imam === index + 1 ? "text-secondary" : ""
                }`}
              >
                <p className="mr-4">
                  {index + 1} {item.number}.
                </p>
                <p
                  className="mr-2 underline cursor-pointer hover:text-secondary"
                  onClick={() => changeImam(item.id)}
                >
                  {item.name}
                </p>
                {imam === index + 1 ? (
                  <p className="text-black">(Now use this voice)</p>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <div></div>
        </div>
      )}
      <div className="flex">
        {surah !== undefined ? (
          <>
            <div className="w-full flex justify-center flex-col z-10">
              <div className="my-2 text-xs sm:text-sm text-white flex justify-end">
                <button
                  className="py-1 px-2 bg-secondary rounded-md"
                  onClick={() => setImamMenu(!imamMenu)}
                >
                  Change Imam
                </button>
              </div>
              <div className="bg-secondary w-full py-3 px-4 text-white text-center text-lg rounded-lg">
                <p className="w-fit mx-auto py-0.5 px-2.5 bg-white text-black rounded-full">
                  {surah.number}
                </p>
                <p className="font-bold sm:text-xl xl:text-2xl sm:tracking-widest">
                  {surah.asma.en.short}
                </p>
                <p className="text-xs sm:text-base">
                  {surah.asma.translation.en}
                </p>
                <span className="flex justify-center text-[10px] sm:text-sm gap-2">
                  <p>{surah.type.en}</p> &#9679; <p>{surah.ayahCount}</p>
                </span>
                <p className="text-right text-xs sm:text-sm lg:text-base">
                  Voice by {imamList[imam - 1].name}
                </p>
              </div>
              <div className="text-sm mt-4">
                {surah.ayahs.map((item, index) => {
                  return (
                    <div
                      className="bg-white my-2 py-2 px-3 rounded-lg"
                      key={index}
                    >
                      <div className="bg-secondary w-fit text-white text-center rounded-full px-[7px] py-[0.5px]">
                        <p className="text-[10px]">{index + 1}</p>
                      </div>
                      <div className="mt-2">
                        <p className="text-right text-lg sm:text-xl xl:text-2xl">
                          {item.text.ar}
                        </p>
                        <p className="text-xs text-left mt-2 text-justify sm:text-sm xl:text-base">
                          {item.translation.en}
                        </p>
                      </div>
                      <div className="md:w-2/4 md:mx-auto lg:w-4/12 xl:w-2/12 text-xs text-right mt-3 flex justify-between items-center mx-4">
                        <div>
                          <i
                            ref={audioRef}
                            className="fa-solid fa-play"
                            onClick={() =>
                              isPlaying ? pauseSound() : playSound(index)
                            }
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
                        <i
                          className="fa-solid fa-stop"
                          onClick={() => stopSound()}
                        ></i>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};
