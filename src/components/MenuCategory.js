import { checkSubCategories } from "../utils/someFunctions";
import { useState } from "react";

const MenuCategory = (category) => {
  const [accordian, setAccordian] = useState(true);
  function handleClick() {
    setAccordian(!accordian);
  }
  return (
    <div>
      <div
        className="category-title font flex-row space-between"
        onClick={handleClick}
      >
        <h1>{category?.category?.card?.card?.title}</h1>
        {!category?.category?.card?.card?.categories && (
          <div className="category-arrow">↓</div>
        )}
      </div>
      <div>
        {accordian && checkSubCategories(category?.category?.card?.card)}
      </div>
    </div>
  );
};

export default MenuCategory;
