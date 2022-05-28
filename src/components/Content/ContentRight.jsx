import React, { useEffect, useState } from "react";
import { ContentItem } from "./ContentItem";
import { ContentQuote } from "./ContentQuote";
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
      <ContentQuote
        quote={
          "Do not be friend someone who cannot restrain their anger or control their desire. Nor, someone who is a liar or who is greedy for this world"
        }
      />
    </div>
  );
};
