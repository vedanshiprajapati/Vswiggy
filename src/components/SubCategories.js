import CategoryList from "./CategoryList";
import { useState } from "react";
const SubCategories = ({ category }) => {
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
        <h1>{category?.title}</h1>
        <div className="category-arrow">↓</div>
      </div>
      <div>{accordian && <CategoryList props={category?.itemCards} />}</div>
    </div>
  );
};

export default SubCategories;
