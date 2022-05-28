import React from "react";

export const ContentUser = ({ name }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h3>Salam,</h3>
        <h2 className="font-bold">{name}</h2>
      </div>
      <img src="./images/Img_Icon.png" alt="image-user" className="w-2/5" />
    </div>
  );
};
