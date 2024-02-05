import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import {
  checkSubCategories,
  ActualMenuArrayFromData,
} from "../utils/someFunctions";
import useRestoFetch from "../utils/useRestoFetch";
import MenuCategory from "./MenuCategory";
import { useState } from "react";

const ResMenu = () => {
  const { resId } = useParams();
  const [menuList, menuTitleInfo] = useRestoFetch(resId);
  const [accordian, setAccordian] = useState(null);
  console.log(menuList, "menuu data");

  if (menuTitleInfo === null && menuList === null) {
    return (
      <div className="w-100vh flex-row menu-shimmer">
        <Shimmer />
      </div>
    );
  } else {
    let MenuListSliced = ActualMenuArrayFromData(menuList);
    return (
      <div className="w-100vh">
        <div className="menu-header">
          <div className="flex-row space-between">
            <div className="menu-title">
              <h2>{menuTitleInfo.info.name}</h2>
              <p className="fcolor">{menuTitleInfo.info.cuisines.join(", ")}</p>
            </div>
            <div className="menu-rating rating-color">
              ★ {menuTitleInfo.info.avgRating}
            </div>
          </div>
          <div className="fcolor">
            <p>{menuTitleInfo.info.areaName}▾</p>
          </div>
          <div className="menu-delivary">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1648635511/Delivery_fee_new_cjxumu" />
            <span className="bg-slate-700">
              {" "}
              1.7 kms | ₹35 Delivery fee will apply
            </span>
          </div>
        </div>
        <div className="menu">
          {/* {MenuListSliced.map((category) => (
              <div>
                <div className="category-title font flex-row space-between">
                  <h1>{category?.card?.card?.title}</h1>
                  <div className="category-arrow">↓</div>
                </div>
                {console.log(category?.card?.card)}
                <div>{checkSubCategories(category?.card?.card)}</div>
              </div>
            ))}
           */}
          {MenuListSliced.map((category, index) => (
            <MenuCategory
              key={category?.card?.card?.title}
              category={category}
              accordian={index === accordian ? true : false}
              setAccordian={() => {
                setAccordian(index);
              }}
              index={index}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default ResMenu;
