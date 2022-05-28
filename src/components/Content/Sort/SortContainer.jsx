import React from "react";
import { SortItem } from "./SortItem";

export const SortContainer = ({ changeSort, sort }) => {
  return (
    <div className="flex gap-4">
      <SortItem changeSort={changeSort} sort={sort} title={"Alphabet"} />
    </div>
  );
};
