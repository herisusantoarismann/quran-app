import React from "react";

export const ContentItem = ({ title, data, icon, child }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="font-bold text-secondary uppercase tracking-widest">
          {title}
        </h1>
        {data !== null ? (
          <>
            <p className="mt-4 font-bold text-lg">{data.surah}</p>
            {child ? (
              <p className="text-slate-500">Ayah no : {data.ayat}</p>
            ) : (
              ""
            )}
          </>
        ) : (
          <p className="mt-4 font-bold text-lg">Not Read</p>
        )}
      </div>
      <i className={`${icon} text-5xl text-primary`}></i>
    </div>
  );
};
