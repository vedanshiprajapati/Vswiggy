import { useEffect, useState } from "react";

const useRestoFetch = (resId) => {
  const [menuList, setMenuList] = useState(null);
  const [menuTitleInfo, setMenuTitleInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const p = await fetch(
      `https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D23.022505%26lng%3D72.5713621%26restaurantId%3D${resId}`
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
