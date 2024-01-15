import React from "react";
import { ListItemType } from "../ListItem/type";
import { ListItem } from "../ListItem/ListItem";

interface ListContainerProps {
  data: ListItemType[];
  setChips: React.Dispatch<React.SetStateAction<ListItemType[]>>;
  setOrignalData: React.Dispatch<React.SetStateAction<ListItemType[]>>;
}
export const ListContainer = ({
  data,
  setChips,
  setOrignalData,
}: ListContainerProps) => {
  return (
    <div className="bg-white shadow-2xl max-h-[580px] overflow-auto w-max">
      {data.map((item) => {
        return (
          <ListItem
            key={item.id}
            name={item.name}
            mail={item.mail}
            id={item.id}
            img={item.img}
            setChips={setChips}
            setOrignalData={setOrignalData}
          />
        );
      })}
    </div>
  );
};
