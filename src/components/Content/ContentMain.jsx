import React from "react";
import { Outlet } from "react-router-dom";

export const ContentMain = () => {
  return (
    <div className="h-full w-11/12 lg:w-10/12 bg-primary my-6 mx-4 lg:ml-24 lg:mr-24 xl:mr-12 p-4 lg:p-6 rounded-lg lg:rounded-3xl overflow-y-auto">
      <Outlet />
    </div>
  );
};
