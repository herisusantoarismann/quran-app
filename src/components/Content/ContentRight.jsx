import React, { useEffect, useState } from "react";
import { ContentItem } from "./ContentItem";
import { ContentUser } from "./ContentUser";

export const ContentRight = () => {
  const [recent, setRecent] = useState(null);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("quran"));
    setRecent(data);
  }, []);
  return (
    <div className="hidden 2xl:flex w-64 pr-12 py-16 justify-between flex-col">
      <ContentUser name={"Heri"} />
      <hr />
      <ContentItem
        title={"Last Read"}
        data={recent}
        icon={"fa-solid fa-book-open"}
        child={false}
      />
      <hr />
      <ContentItem
        title={"Last Listened"}
        data={recent}
        icon={"fa-solid fa-headphones"}
        child={true}
      />
      <div className="bg-secondary px-6 py-4 text-white rounded-xl font-semibold">
        <h1 className="text-slate-200 opacity-70">Quote of the day</h1>
        <p className="pt-4 ">
          Do not be friend someone who cannot restrain their anger or control
          their desire. Nor, someone who is a liar or who is greedy for this
          world
        </p>
      </div>
    </div>
  );
};
