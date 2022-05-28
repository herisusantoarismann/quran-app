import React from "react";

export const ContentQuote = ({ quote }) => {
  return (
    <div className="bg-secondary px-6 py-4 text-white rounded-xl font-semibold">
      <h1 className="text-slate-200 opacity-70">Quote of the day</h1>
      <p className="pt-4 ">{quote}</p>
    </div>
  );
};
