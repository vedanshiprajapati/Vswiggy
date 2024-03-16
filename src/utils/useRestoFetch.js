import { useEffect, useState } from "react";

const useRestoFetch = (resId) => {
  const [menuList, setMenuList] = useState(null);
  const [menuTitleInfo, setMenuTitleInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const p = await fetch(
      `https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=${resId}`
    );
    const data = await p.json();
    updateStateVariables(data);
  }
  function updateStateVariables(data) {
    for (let i = 0; i < data?.data?.cards?.length; i++) {
      if (
        data?.data?.cards[i]?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      ) {
        setMenuTitleInfo(data?.data?.cards[i]?.card?.card);
      }
      if (data?.data?.cards[i]?.groupedCard != null) {
        setMenuList(
          data?.data?.cards[i]?.groupedCard.cardGroupMap.REGULAR.cards
        );
      }
    }
  }
  return [menuList, menuTitleInfo];
};

export default useRestoFetch;
