import MenucardList from "./MenuCardList";
import { useState } from "react";
const SubCategories = ({ category }) => {
  const [accordian, setAccordian] = useState(true);
  function handleClick() {
    setAccordian(!accordian);
  }
  return (
    <div>
      <div
        className="w-1/2 m-auto font-bold p-[10px] border-b-[solid_1px_#d3d3d3] cursor-pointer text-[20px] font-['Quicksand',_sans-serif] flex flex-row justify-between border"
        onClick={handleClick}
      >
        <h1>{category?.title}</h1>
        <div className="text-[14px] px-[7px] py-[5px] [transition:ease-in-out_0.1s]">
          ↓
        </div>
      </div>
      <div>{accordian && <MenucardList props={category?.itemCards} />}</div>
    </div>
  );
};

export default SubCategories;
