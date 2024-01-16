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
  const [highlight, setHighlight] = useState(false);
  const handleChange = (value: string) => {
    setValue(value);
    setHighlight(false);
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

  const handleBackspace = (e: any) => {
    if (e.key === "Backspace" || e.keyCode === 8) {
      if (value.length === 0) {
        setHighlight(true);
      }
      if (highlight) {
        const newData = chips.slice(0, -1);
        setChips(newData);
      }
    }
  };

  return (
    <div className="p-4">
      <div className="flex ">
        <div className="border-b-4  flex flex-wrap gap-2 h-max  border-solid border-blue-400">
          {chips.map((item, index) => {
            return (
              <Chip
                key={item.id}
                name={item.name}
                mail={item.mail}
                img={item.img}
                id={item.id}
                setChips={setChips}
                setOrignalData={setOrignalData}
                orignalData={orignalData}
                highlight={index === chips.length - 1 && highlight}
              />
            );
          })}
          <div className="flex relative  flex-col">
            <input
              type="text"
              className="pl-2 w-full sm:w-[429px]  py-2 border-solid border-blue-400 focus:ring-0  focus-visible:outline-none"
              value={value}
              onChange={(e) => handleChange(e.target.value)}
              onFocus={() => handleFocus()}
              placeholder="Search"
              onKeyDown={handleBackspace}
            />
            {showList && (
              <ListContainer
                setChips={setChips}
                setOrignalData={setOrignalData}
                data={matchingData}
                orignalData={orignalData}
                setHighlight={setHighlight}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
