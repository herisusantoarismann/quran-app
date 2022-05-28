import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { SurahItem } from "./SurahItem";
import { SortContainer } from "../Sort/SortContainer";

export const SurahContainer = () => {
  const [data, setData] = useState();
  // type false if ascending and true if descending
  const [sort, setSort] = useState({ number: 1, type: false });

  const getData = () => {
    axios.get(`https://quran-endpoint.vercel.app/quran`).then((res) => {
      const quran = res.data.data;
      setData(quran);
    });
  };

  // array for sort type
  const sortTitle = ["Number", "Alphabet", "Total Ayah"];

  // function to sort data surah
  const changeSort = (number, { type }) => {
    if (number !== sort.number) {
      setSort({ number: number, type: false });
      type = false;
    } else {
      setSort({ number: number, type: !type });
      type = !type;
    }

    switch (true) {
      case number === 1 && !type:
        setData(data.sort((a, b) => a.number - b.number));
        break;
      case number === 1 && type:
        setData(data.sort((a, b) => b.number - a.number));
        break;
      case number === 2 && !type:
        setData(
          data.sort((a, b) => a.asma.id.short.localeCompare(b.asma.id.short))
        );
        break;
      case number === 2 && type:
        setData(
          data.sort((a, b) => b.asma.id.short.localeCompare(a.asma.id.short))
        );
        break;
      case number === 3 && !type:
        setData(data.sort((a, b) => a.ayahCount - b.ayahCount));
        break;
      case number === 3 && type:
        setData(data.sort((a, b) => b.ayahCount - a.ayahCount));
        break;
      default:
        alert("Error Sorting...");
        break;
    }
  };

  useEffect(() => {
    // assign title page
    document.title = "Quran | Surah List";
    getData();
  }, []);

  return (
    <>
      <div className="flex justify-end mt-2 mb-8 text-xs md:text-sm">
        <SortContainer changeSort={changeSort} sort={sort} title={sortTitle} />
      </div>
      <div className="my-2 lg:px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {data !== undefined ? (
          <>
            {data.map((item, index) => {
              return <SurahItem data={item} index={index} key={index} />;
            })}
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
