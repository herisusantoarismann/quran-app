import React from "react";
import { ContentMain } from "./ContentMain";
import { ContentRight } from "./ContentRight";

export const Content = () => {
  return (
    <div className="h-5/6 flex flex-col-reverse 2xl:flex-row">
      <ContentMain />
      <ContentRight />
    </div>
  );
};
