import { checkSubCategories } from "../utils/someFunctions";
import { useState } from "react";

const MenuCategory = ({ category, accordian, setAccordian }) => {
  const [closing, setClosing] = useState(false);

  function handleClick() {
    setAccordian();
    closing ? setClosing(false) : setClosing(true);
  }

  return (
    <div className="category-padding">
      <div
        className="category-title font flex-row space-between border"
        onClick={handleClick}
      >
        <h1>{category?.card?.card?.title}</h1>
        {/* {!category?.card?.card?.categories && (
          <div className="category-arrow">↓</div>
        )} */}
        <div className="category-arrow">↓</div>
      </div>
      <div>
        {closing && accordian && checkSubCategories(category?.card?.card)}
      </div>
    </div>
  );
};

export default MenuCategory;
