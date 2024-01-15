import React from "react";
import { ListItemType } from "../ListItem/type";
import { IoMdClose } from "react-icons/io";

interface ChipProps extends ListItemType {
  setChips: React.Dispatch<React.SetStateAction<ListItemType[]>>;
  setOrignalData: React.Dispatch<React.SetStateAction<ListItemType[]>>;
  orignalData: ListItemType[];
}

export const Chip = ({
  id,
  name,
  mail,
  img,
  setChips,
  setOrignalData,
  orignalData,
}: ChipProps) => {
  const removeChip = () => {
    setChips((prev) => {
      return prev.filter((item) => item.id !== id);
    });
    setOrignalData((prev) => [...prev, { id, name, mail, img }]);
  };
  return (
    <div className="flex h-max items-center gap-1 rounded-2xl bg-black/10 pr-1">
      <div className="w-8 h-8 rounded-full">
        <img src={img} alt="" className="rounded-full" />
      </div>
      <p className="text-black/60">{name}</p>
      <button
        onClick={removeChip}
        className="flex items-center justify-center text-xl mt-[3px]"
      >
        <IoMdClose />
      </button>
    </div>
  );
};
