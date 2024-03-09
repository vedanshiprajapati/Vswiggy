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
      <div className="w-full flex flex-row mt-[100px] mx-auto mb-[20px] justify-center">
        <Shimmer />
      </div>
    );
  } else {
    let MenuListSliced = ActualMenuArrayFromData(menuList);
    return (
      <div className="w-full">
        <div className="h-auto w-1/2 mt-[100px] mx-[auto] mb-[20px]">
          <div className="flex flex-row justify-between font-['Quicksand',_sans-serif] text-[14px]">
            <div className="menu-title">
              <h2 className="font-bold pb-[10px]">{menuTitleInfo.info.name}</h2>
              <p className="text-[#7E808C]">
                {menuTitleInfo.info.cuisines.join(", ")}
              </p>
            </div>
            <div className="h-fit p-[10px] font-bold text-[#3E9B6D]">
              ★ {menuTitleInfo.info.avgRating}
            </div>
          </div>
          <div className="text-[#7E808C] font-['Quicksand',_sans-serif] text-[14px]">
            <p>{menuTitleInfo.info.areaName}▾</p>
          </div>
          <div className="flex items-center px-[0] py-[15px] text-[#7E808C] border-b-[dashed_1px_#D3D3D3] gap-[5px] font-['Quicksand',_sans-serif] text-[14px]">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1648635511/Delivery_fee_new_cjxumu" />
            <span> 1.7 kms | ₹35 Delivery fee will apply</span>
          </div>
        </div>
        <div>
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
