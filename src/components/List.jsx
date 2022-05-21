import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const List = () => {
  const params = useParams();
  const [surah, setSurah] = useState(undefined);
  const [imam, setImam] = useState(undefined);
  const [imamMenu, setImamMenu] = useState(false);
  const [audio, setAudio] = useState({
    data: new Audio(),
    currentTime: 0,
  });
  const [isPlaying, setIsPlaying] = useState(false);

  const getImam = () => {
    axios.get(`https://quran-endpoint.vercel.app/imam`).then((res) => {
      setImam(res.data.data);
    });
  };

  const getData = () => {
    axios
      .get(`https://quran-endpoint.vercel.app/quran/${params.surah}`)
      .then((res) => {
        setSurah(res.data.data);
      });
  };

  const playSound = (id) => {
    const url = surah.ayahs[id].audio.url;
    audio.data.src = url;
    audio.data.currentTime = audio.currentTime;
    audio.data.play();
    setIsPlaying(true);
    audio.data.onended = () => {
      setIsPlaying(false);
      audio.data.currentTime = 0;
    };
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

  useEffect(() => {
    getData();
    getImam();
  }, []);

  return (
    <>
      {imam !== undefined ? (
        <div
          className={`absolute bg-white border-2 border-secondary py-2 px-4 w-11/12 h-[95%] top-2/4 right-2/4 -translate-y-2/4 translate-x-2/4 overflow-y-auto rounded-2xl ${
            imamMenu ? "visible z-20" : "invisible z-0"
          }`}
        >
          <h1 className="text-center font-bold text-lg">Imam List</h1>
          <span
            className="absolute right-2 top-2"
            onClick={() => setImamMenu(false)}
          >
            &#10006;
          </span>
          {imam.map((item, index) => {
            return (
              <div className="my-2 py-1 px-2 flex">
                <p className="mr-4">{index + 1}.</p>
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <div></div>
        </div>
      )}
      <div className="">
        {surah !== undefined ? (
          <div className="flex justify-center flex-col z-10">
            <div className="my-2 text-xs text-white flex justify-end">
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
              <p className="font-bold">{surah.asma.en.short}</p>
              <p className="text-xs">{surah.asma.translation.en}</p>
              <span className="flex justify-center text-[10px] gap-2">
                <p>{surah.type.en}</p> &#9679; <p>{surah.ayahCount}</p>
              </span>
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
                      <p className="text-right text-lg">{item.text.ar}</p>
                      <p className="text-xs text-left mt-2 text-justify">
                        {item.translation.en}
                      </p>
                    </div>
                    <div className="text-xs text-right mt-3 flex justify-between items-center mx-4">
                      <div>
                        <audio src={item.audio.url}></audio>
                        {audio.data.paused ? (
                          <i
                            className="fa-solid fa-play"
                            onClick={() => playSound(index)}
                          ></i>
                        ) : (
                          <i
                            className="fa-solid fa-pause"
                            onClick={() => pauseSound()}
                          ></i>
                        )}
                      </div>
                      <div className="text-center">
                        <p className="text-[10px]">Volume</p>
                        <input type="range" onChange={(e) => changeVolume(e)} />
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
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};
