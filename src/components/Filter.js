import React, { useState } from "react";
import restaurantList from "../utils/mockdata.js";

// code is not used in the main project

const Filter = () => {
  const [ResList, setResList] = useState(restaurantList);
  return (
    <div>
      <button
        onClick={() => {
          let filtered = ResList.filter((res) => res.data.avgRating > 4);

          filtered.sort(function (a, b) {
            return a.data.avgRating - b.data.avgRating;
          });
          console.log(filtered);
          setResList(filtered);
        }}
        className="filter"
      >
        Filter
      </button>
    </div>
  );
};

export default Filter;
