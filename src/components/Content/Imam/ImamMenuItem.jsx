import React from "react";

export const ImamMenuItem = ({ data, index, imam, changeImam }) => {
  return (
    <div
      className={`my-2 py-1 px-2 flex font-semibold ${
        imam === index + 1 ? "text-secondary" : ""
      }`}
    >
      <p className="mr-4">
        {index + 1} {data.number}.
      </p>
      <p
        className="mr-2 underline cursor-pointer hover:text-secondary"
        onClick={() => changeImam(data.id)}
      >
        {data.name}
      </p>
      {imam === index + 1 ? (
        <p className="text-black">(Now use this voice)</p>
      ) : (
        ""
      )}
    </div>
  );
};
