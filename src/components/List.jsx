import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const List = () => {
  const params = useParams();
  const [surah, setSurah] = useState(undefined);
  const [audio, setAudio] = useState({ data: new Audio(), status: false });

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
    audio.data.play();
  };

  const pauseSound = () => {
    audio.data.pause();
  };

  const stopSound = () => {
    audio.data.pause();
    audio.data.currentTime = 0;
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="">
      {surah != undefined ? (
        <div className="flex justify-center flex-col">
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
                <div className="bg-white my-2 py-2 px-3 rounded-lg" key={index}>
                  <div className="bg-secondary w-fit text-white text-center rounded-full px-[7px] py-[0.5px]">
                    <p className="text-[10px]">{index + 1}</p>
                  </div>
                  <div className="mt-2">
                    <p className="text-right text-lg">{item.text.ar}</p>
                    <p className="text-xs text-left mt-2 text-justify">
                      {item.translation.en}
                    </p>
                  </div>
                  <div className="text-xs text-right mt-3">
                    <audio src={item.audio.url} controls></audio>
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
  );
};
