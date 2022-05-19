import React, { useEffect, useState } from "react";
import axios from "axios";
import { useOutletContext, useParams } from "react-router-dom";

export const List = () => {
  const params = useParams();
  const [surah, setSurah] = useState(undefined);

  const getData = () => {
    axios
      .get(`https://quran-endpoint.vercel.app/quran/${params.surah}`)
      .then((res) => {
        setSurah(res.data.data);
      });
  };

  useEffect(() => {
    getData();
    console.log(surah.preBismillah.text.ar);
  }, []);

  return (
    <div>
      {surah != undefined ? (
        <div>
          <p>{surah.preBismillah.text.ar}</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
