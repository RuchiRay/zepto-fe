import React from "react";
import { ListItemType } from "./type";
import data from "../../data/data.json";
interface ListItemProps extends ListItemType {
  setChips: React.Dispatch<React.SetStateAction<ListItemType[]>>;
  setOrignalData: React.Dispatch<React.SetStateAction<ListItemType[]>>;
  orignalData: ListItemType[];
}
export const ListItem = ({
  id,
  name,
  mail,
  img,
  setChips,
  setOrignalData,
  orignalData,
}: ListItemProps) => {
  const handleClick = () => {
    setChips((prev) => [...prev, { id, name, mail, img }]);
    const newData = orignalData.filter((item) => item.id !== id);
    setOrignalData(newData);
  };
  return (
    <div
      onClick={handleClick}
      className="flex gap-3 items-center py-2 cursor-pointer hover:bg-black/5 px-3"
    >
      <div className="w-12 h-12 rounded-full">
        <img src={img} alt="" className="rounded-full" />
      </div>
      <p>{name}</p>
      <p className="text-gray-400">{mail}</p>
    </div>
  );
};
