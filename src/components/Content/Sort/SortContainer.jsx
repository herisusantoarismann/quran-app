import React from "react";
import { SortItem } from "./SortItem";

export const SortContainer = ({ changeSort, sort, title }) => {
  return (
    <div className="flex gap-4">
      {title.map((item, index) => {
        return (
          <SortItem
            changeSort={changeSort}
            sort={sort}
            title={item}
            index={index + 1}
            key={index}
          />
        );
      })}
    </div>
  );
};
