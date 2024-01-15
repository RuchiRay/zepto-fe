import React, { useState, useEffect } from "react";
import { ListContainer } from "../ListContainer/ListContainer";
import data from "../../data/data.json";
import { ListItemType } from "../ListItem/type";
import { Chip } from "../Chip/Chip";
export const Input = () => {
  const [value, setValue] = useState("");
  const [showList, setshowList] = useState(false);
  const [orignalData, setOrignalData] = useState(data);
  const [matchingData, setMatchingData] = useState(data);
  const [chips, setChips] = useState<ListItemType[]>([]);
  const handleChange = (value: string) => {
    setValue(value);
  };
  useEffect(() => {
    const newData = orignalData.filter((item) => {
      if (item.mail.includes(value) || item.name.includes(value)) return true;
      else return false;
    });
    setMatchingData(newData);
  }, [orignalData, value]);
  const handleFocus = () => {
    setshowList(true);
  };
  console.log(chips);

  return (
    <div className="p-4">
      <div className="flex ">
        <div className="border-b-4 flex gap-1 h-max py-1 border-solid border-blue-400">
          {chips.map((item) => {
            return (
              <Chip
                key={item.id}
                name={item.name}
                mail={item.mail}
                img={item.img}
                id={item.id}
                setChips={setChips}
                setOrignalData={setOrignalData}
              />
            );
          })}
        </div>

        <div className="flex  flex-col">
          <input
            type="text"
            className="w-full border-b-4 py-2 border-solid border-blue-400 focus:ring-0  focus-visible:outline-none"
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            onFocus={() => handleFocus()}
          />
          {showList && (
            <ListContainer
              setChips={setChips}
              setOrignalData={setOrignalData}
              data={matchingData}
            />
          )}
        </div>
      </div>
    </div>
  );
};
