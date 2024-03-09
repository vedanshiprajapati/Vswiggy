import { checkSubCategories } from "../utils/someFunctions";
import { useState } from "react";

const MenuCategory = ({ category, accordian, setAccordian }) => {
  const [closing, setClosing] = useState(false);

  function handleClick() {
    setAccordian();
    closing ? setClosing(false) : setClosing(true);
  }

  return (
    <div className="p-[10px]">
      <div
        className="w-1/2 m-auto font-bold p-[10px] border-b-[solid_1px_#d3d3d3] cursor-pointer text-[20px] font-['Quicksand',_sans-serif] flex flex-row justify-between border"
        onClick={handleClick}
      >
        <h1>{category?.card?.card?.title}</h1>
        {/* {!category?.card?.card?.categories && (
          <div className="category-arrow">↓</div>
        )} */}
        <div className="text-[14px] px-[7px] py-[5px] [transition:ease-in-out_0.1s]">
          ↓
        </div>
      </div>
      <div>
        {closing && accordian && checkSubCategories(category?.card?.card)}
      </div>
    </div>
  );
};

export default MenuCategory;
