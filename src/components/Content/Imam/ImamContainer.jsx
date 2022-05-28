import React, { useEffect, useState } from "react";
import axios from "axios";
import { ImamItem } from "./ImamItem";
import { SortContainer } from "../Sort/SortContainer";

export const ImamContainer = () => {
  const [imam, setImam] = useState(undefined);
  // type false if ascending and true if descending
  const [sort, setSort] = useState({ type: false });

  const sortTitle = ["Aplhabet"];

  const changeSort = (number, { type }) => {
    if (type) {
      setImam(imam.sort((a, b) => a.name.localeCompare(b.name)));
      setSort({ type: !type });
    } else {
      setImam(imam.sort((a, b) => b.name.localeCompare(a.name)));
      setSort({ type: !type });
    }
  };

  const getImam = () => {
    axios.get(`https://quran-endpoint.vercel.app/imam`).then((res) => {
      const imam = res.data.data;
      setImam(imam);
    });
  };

  useEffect(() => {
    document.title = "Quran | Imam List";
    getImam();
  }, []);

  return (
    <>
      <div className="flex justify-end mt-2 mb-8 text-xs md:text-sm">
        <SortContainer changeSort={changeSort} sort={sort} title={sortTitle} />
      </div>
      <div className="my-2 lg:px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {imam !== undefined ? (
          <>
            {imam.map((item, index) => {
              return <ImamItem data={item} index={index} />;
            })}
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
