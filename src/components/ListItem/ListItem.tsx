import React from "react";
import { ListItemType } from "./type";

export const ListItem = ({ data }: ListItemType) => {
  return (
    <div className="flex gap-3 items-center py-1 px-2">
      <div className="w-12 h-12 rounded-full">
        <img src={data.img} alt="" className="rounded-full" />
      </div>
      <p>{data.name}</p>
      <p className="text-gray-400">{data.mail}</p>
    </div>
  );
};
