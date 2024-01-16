import React from "react";
import { ListItemType, StateDispatch } from "./type";
interface ListItemProps extends ListItemType {
  setChips: StateDispatch;
  setOrignalData: StateDispatch;
  orignalData: ListItemType[];
  setHighlight: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ListItem = ({
  id,
  name,
  mail,
  img,
  setChips,
  setOrignalData,
  orignalData,
  setHighlight,
}: ListItemProps) => {
  const handleClick = () => {
    setChips((prev) => [...prev, { id, name, mail, img }]);
    const newData = orignalData.filter((item) => item.id !== id);
    setOrignalData(newData);
    setHighlight(false);
  };
  return (
    <div
      onClick={handleClick}
      className="flex gap-3 flex-wrap items-center py-2 cursor-pointer hover:bg-black/5 px-3"
    >
      <div className="w-12 h-12 rounded-full">
        <img src={img} alt="" className="rounded-full" />
      </div>
      <p>{name}</p>
      <p className="text-gray-400">{mail}</p>
    </div>
  );
};
