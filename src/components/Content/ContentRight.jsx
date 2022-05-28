import React, { useEffect, useState } from "react";
import axios from "axios";
import { ContentItem } from "./ContentItem";
import { ContentQuote } from "./ContentQuote";
import { ContentUser } from "./ContentUser";

export const ContentRight = () => {
  const [recent, setRecent] = useState(null);
  const [quote, setQuote] = useState("");

  const getQuote = () => {
    axios.get("https://api.quotable.io/random").then((res) => {
      setQuote(res.data);
    });
  };

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("quran"));
    setRecent(data);
    getQuote();
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
      <ContentQuote quote={quote.content} author={quote.author} />
    </div>
  );
};
