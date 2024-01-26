import SubCategories from "../components/SubCategories";

// export function updateStateVariables(data) {
//   for (let i = 0; i < data?.data?.cards?.length; i++) {
//     if (
//       data?.data?.cards[i]?.card?.card["@type"] ===
//       "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
//     ) {
//       setMenuTitleInfo(data?.data?.cards[i]?.card?.card);
//     }
//     if (data?.data?.cards[i]?.groupedCard != null) {
//       setMenuList(data?.data?.cards[i]?.groupedCard.cardGroupMap.REGULAR.cards);
//     }
//   }
// }

export function checkSubCategories(category) {
  if (category.categories != undefined) {
    return category.categories.map((i) => checkSubCategories(i));
  } else if (category.categories === undefined) {
    return <SubCategories key={category?.title} category={category} />;
  }
}

export function ActualMenuArrayFromData(menuList) {
  let arr = [];
  for (let i = 0; i < menuList.length; i++) {
    if (
      menuList[i]?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
      menuList[i]?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    ) {
      arr.push(menuList[i]);
    }
  }
  return arr;
}
export function FindSlicingPoint(menuList) {
  for (let i = menuList.length - 1; i >= 0; i--) {
    if (menuList != null && menuList[i].card.card.type === "FSSAI") {
      slicingPoint = i;
      break;
    } else {
      continue;
    }
  }
}
